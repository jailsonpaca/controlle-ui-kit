import React from 'react';
import { Select, Form } from 'antd';
import { Tag } from 'Components';
import { COLORS } from 'styles';
import PropTypes from 'prop-types';
import styles from './styles';

const SelectTag = ({
    defaultValue,
    currentValue,
    onChange,
    inputLabel,
    style,
    autoFocus,
    onMouseLeave,
    onSearch,
    selectProps,
    ...othersProps
}) => {
    const tagRender = props => {
        const { label, closable, onClose } = props;

        return (
            <>
                {/\S/.test(label) && (
                    <Tag closable={closable} onClose={onClose} style={styles.tag} color={COLORS.blueGrey}>
                        {label}
                    </Tag>
                )}
            </>
        );
    };

    const removeOnKeyDownTab = e => {
        if (e.key === 'Tab') e.preventDefault();
    };
    delete othersProps.closable;
    delete othersProps.defaultValue;
    delete othersProps.othersProps;
    return (
        <Form.Item
            style={{
                ...style,
            }}
            labelCol={{ span: 24 }}
            colon={false}
            label={inputLabel}
            {...othersProps}
        >
            <Select
                mode="tags"
                style={styles.select}
                tokenSeparators={[',']}
                {...(selectProps &&
                    !selectProps.showSearch && { dropdownRender: () => null, dropdownStyle: styles.dropDownStyle })}
                defaultValue={defaultValue}
                value={currentValue}
                onChange={onChange}
                tagRender={tagRender}
                autoFocus={autoFocus}
                onInputKeyDown={removeOnKeyDownTab}
                onMouseLeave={onMouseLeave}
                onSearch={onSearch}
                {...selectProps}
            />
        </Form.Item>
    );
};

SelectTag.propTypes = {
    label: PropTypes.string,
    style: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),
    defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
    currentValue: PropTypes.oneOfType([PropTypes.string, PropTypes.array]).isRequired,
    onChange: PropTypes.func,
    inputLabel: PropTypes.string,
    // eslint-disable-next-line react/forbid-prop-types
    othersProps: PropTypes.any,
    autoFocus: PropTypes.bool,
    onMouseLeave: PropTypes.func,
    onSearch: PropTypes.func,
    closable: PropTypes.func,
    onClose: PropTypes.func,
};

SelectTag.defaultProps = {
    style: {},
    defaultValue: '',
    onChange: () => null,
    onMouseLeave: () => null,
    onSearch: () => null,
    closable: () => null,
    onClose: () => null,
    label: '',
    othersProps: {},
    autoFocus: true,
};

export default SelectTag;
