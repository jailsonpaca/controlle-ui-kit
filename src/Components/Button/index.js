import React from 'react';
import { Button } from 'antd';
import PropTypes from 'prop-types';
import styles from './styles';
import './styles.less';

const ButtonComponent = ({ children, type, style = {}, ...othersProps }) => (
    <Button
        className={`btnComponent ${(type === 'link' || type === 'text') && 'btnText'}`}
        style={{
            ...((type === 'link' || type === 'text') && styles.transparent),
            ...style,
        }}
        {...othersProps}
    >
        {children}
    </Button>
);

const Primary = ({ children, type, style = {}, ...othersProps }) => (
    <ButtonComponent
        style={{
            ...(type !== 'link' && type !== 'text' && styles.primaryBg),
            ...((type === 'link' || type === 'text') && styles.noBorder),
            ...style,
        }}
        {...othersProps}
    >
        {children}
    </ButtonComponent>
);

const Red = ({ children, type, style = {}, ...othersProps }) => (
    <ButtonComponent
        style={{
            ...(type !== 'link' && type !== 'text' && styles.redBg),
            ...((type === 'link' || type === 'text') && styles.noBorder),
            ...style,
        }}
        {...othersProps}
    >
        {children}
    </ButtonComponent>
);

const Green = ({ children, type, style = {}, ...othersProps }) => (
    <ButtonComponent
        style={{
            ...(type !== 'link' && type !== 'text' && styles.greenBg),
            ...((type === 'link' || type === 'text') && styles.noBorder),
            ...style,
        }}
        {...othersProps}
    >
        {children}
    </ButtonComponent>
);

const DarkBlueGrey = ({ children, type, style = {}, ...othersProps }) => (
    <ButtonComponent
        style={{
            ...(type !== 'link' && type !== 'text' && styles.darkBlueGreyBg),
            ...((type === 'link' || type === 'text') && styles.noBorder),
            ...style,
        }}
        {...othersProps}
    >
        {children}
    </ButtonComponent>
);

const BlueGrey = ({ children, type, style = {}, ...othersProps }) => (
    <ButtonComponent
        style={{
            ...(type !== 'link' && type !== 'text' && styles.blueGreyBg),
            ...((type === 'link' || type === 'text') && styles.noBorder),
            ...style,
        }}
        {...othersProps}
    >
        {children}
    </ButtonComponent>
);

const Add = ({ children, type, style = {}, ...othersProps }) => (
    <ButtonComponent
        style={{
            ...(type !== 'link' && type !== 'text' && styles.greenAddBg),
            ...((type === 'link' || type === 'text') && styles.noBorder),
            ...style,
        }}
        {...othersProps}
    >
        {children}
    </ButtonComponent>
);

const Dark = ({ children, type, style = {}, ...othersProps }) => (
    <ButtonComponent
        style={{
            ...(type !== 'link' && type !== 'text' && styles.darkGreyBatchBg),
            ...styles.whiteBorder,
            ...((type === 'link' || type === 'text') && styles.noBorder),
            ...style,
        }}
        {...othersProps}
    >
        {children}
    </ButtonComponent>
);

ButtonComponent.Primary = Primary;
ButtonComponent.Red = Red;
ButtonComponent.Green = Green;
ButtonComponent.Add = Add;
ButtonComponent.DarkBlueGrey = DarkBlueGrey;
ButtonComponent.BlueGrey = BlueGrey;
ButtonComponent.Dark = Dark;

const ButtonProps = {
    children: PropTypes.node.isRequired,
    style: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),
    type: PropTypes.string,
};

ButtonComponent.defaultProps = {
    style: {},
};

ButtonComponent.propTypes = ButtonProps;
Primary.propTypes = ButtonProps;
Red.propTypes = ButtonProps;
Green.propTypes = ButtonProps;
Add.propTypes = ButtonProps;
DarkBlueGrey.propTypes = ButtonProps;
BlueGrey.propTypes = ButtonProps;
Dark.propTypes = ButtonProps;

export default ButtonComponent;
