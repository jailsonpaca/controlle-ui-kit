import React from 'react';
import PropTypes from 'prop-types';
import { Button, Text } from 'Components';
import { COLORS } from 'styles';
import styles from '../styles';

const getButtonByType = type => {
    switch (type) {
        case 'add':
            return Button.Primary;
        case 'delete':
            return Button.Red;
        case 'info':
            return Button.DarkBlueGrey;
        case 'gain':
            return Button.Green;
        default:
            return Button;
    }
};

const ButtonSave = ({
    onSave,
    styleButtonSave: style,
    typeButtonSave: type = 'add',
    titleButtonSave: title,
    ...otherProps
}) => {
    const ButtonComponent = getButtonByType(type);

    return (
        <ButtonComponent
            style={{
                ...styles.saveButton,
                ...style,
                ...(otherProps.disabled && styles.saveDisabled),
            }}
            onClick={onSave}
            {...otherProps}
        >
            <Text.Bold size={14} color={COLORS.white}>
                {title}
            </Text.Bold>
        </ButtonComponent>
    );
};

const ButtonCancel = ({
    onCancel,
    typeButtonCancel: type = 'info',
    titleButtonCancel: title,
    styleButtonCancel: style,
}) => {
    const ButtonComponent = getButtonByType(type);

    const textColor = type === 'link' ? COLORS.darkBlueGrey : COLORS.white;

    const buttonStyle = {
        ...styles.cancelButton,
        ...(type === 'link' && { paddingRight: 0 }),
        ...style,
    };

    return (
        <ButtonComponent {...(type === 'link' && { type: 'link' })} style={buttonStyle} onClick={onCancel}>
            <Text.Regular size={14} color={textColor}>
                {title}
            </Text.Regular>
        </ButtonComponent>
    );
};

const ButtonPropTypes = {
    visible: PropTypes.bool,
    children: PropTypes.node,
    onCancel: PropTypes.func,
};

ButtonSave.propTypes = {
    ...ButtonPropTypes,
    typeButtonSave: PropTypes.string,
    titleButtonSave: PropTypes.string,
    styleButtonSave: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),
};
ButtonCancel.propTypes = {
    ...ButtonPropTypes,
    typeButtonCancel: PropTypes.string,
    titleButtonCancel: PropTypes.string,
    styleButtonCancel: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),
};

export { ButtonCancel, ButtonSave };
