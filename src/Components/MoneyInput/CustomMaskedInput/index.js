/* eslint-disable react/default-props-match-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import createTextMaskInputElement from './createTextMaskInputElement';
import { isNil } from './utilities';

export default class MaskedInput extends React.PureComponent {
    constructor(...args) {
        super(...args);

        this.setRef = this.setRef.bind(this);
        this.onBlur = this.onBlur.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    componentDidMount() {
        this.initTextMask();
    }

    componentDidUpdate(prevProps) {
        // Getting props affecting value
        const { value, pipe, mask, guide, placeholderChar, showMask } = this.props;

        // Calculate that settings was changed:
        // - `pipe` converting to string, to compare function content
        // - `mask` converting to string, to compare values or function content
        // - `keepCharPositions` excludes, because it affect only cursor position
        const settings = { guide, placeholderChar, showMask };
        const isPipeChanged =
            typeof pipe === 'function' && typeof prevProps.pipe === 'function'
                ? pipe.toString() !== prevProps.pipe.toString()
                : (isNil(pipe) && !isNil(prevProps.pipe)) || (!isNil(pipe) && isNil(prevProps.pipe));
        const isMaskChanged = mask.toString() !== prevProps.mask.toString();
        const isSettingChanged =
            Object.keys(settings).some(prop => settings[prop] !== prevProps[prop]) || isMaskChanged || isPipeChanged;

        // Calculate that value was changed
        const isValueChanged = value !== this.inputElement.value;

        // Check value and settings to prevent duplicating update() call
        if (isValueChanged || isSettingChanged) {
            this.initTextMask();
        }
    }

    onChange(event) {
        this.textMaskInputElement.update();
        const { onChange } = this.props;
        if (typeof onChange === 'function') {
            onChange(event);
        }
    }

    onBlur(event) {
        const { onBlur } = this.props;
        if (typeof onBlur === 'function') {
            onBlur(event);
        }
    }

    setRef(inputElement) {
        this.inputElement = inputElement;
    }

    initTextMask() {
        const {
            props,
            props: { value },
        } = this;

        this.textMaskInputElement = createTextMaskInputElement({
            inputElement: this.inputElement,
            ...props,
        });
        this.textMaskInputElement.update(value);
    }

    render() {
        const { render, value, ...props } = this.props;

        delete props.mask;
        delete props.guide;
        delete props.pipe;
        delete props.placeholderChar;
        delete props.keepCharPositions;
        delete props.value;
        delete props.onBlur;
        delete props.onChange;
        delete props.showMask;

        return render(this.setRef, {
            onBlur: this.onBlur,
            onChange: this.onChange,
            defaultValue: value,
            ...props,
        });
    }
}

MaskedInput.propTypes = {
    mask: PropTypes.oneOfType([
        PropTypes.array,
        PropTypes.func,
        PropTypes.bool,
        PropTypes.shape({
            mask: PropTypes.oneOfType([PropTypes.array, PropTypes.func]),
            pipe: PropTypes.func,
        }),
    ]).isRequired,
    guide: PropTypes.bool,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    pipe: PropTypes.func,
    placeholderChar: PropTypes.string,
    keepCharPositions: PropTypes.bool,
    showMask: PropTypes.bool,
};

MaskedInput.defaultProps = {
    render: (ref, props) => <input ref={ref} {...props} />,
};

export { default as conformToMask } from './conformToMask';
