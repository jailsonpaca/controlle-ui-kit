/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/prop-types */
import React from 'react';
import { Typography } from 'antd';
import PropTypes from 'prop-types';
import COLORS from 'styles/colors';
import { REGULAR, BLACK, SEMI_BOLD, BOLD, EXTRA_BOLD, LIGHT } from './fonts';

const { Text } = Typography;

const getDefaultStyle = ({ size = 15, color = COLORS.text }) => ({
    fontSize: size,
    color,
});

const TextComponent = ({ children, style = {}, ...othersProps }) => (
    <Text
        style={{
            ...getDefaultStyle(othersProps || {}),
            ...style,
        }}
        {...othersProps}
    >
        {children}
    </Text>
);

const Regular = ({ children, style = {}, ...othersProps }) => (
    <TextComponent
        style={{
            ...getDefaultStyle(othersProps || {}),
            ...style,
            fontFamily: REGULAR,
        }}
        {...othersProps}
    >
        {children}
    </TextComponent>
);

const Light = ({ children, style = {}, ...othersProps }) => (
    <TextComponent
        style={{
            ...getDefaultStyle(othersProps || {}),
            ...style,
            fontFamily: LIGHT,
        }}
        {...othersProps}
    >
        {children}
    </TextComponent>
);

const SemiBold = ({ children, style = {}, ...othersProps }) => (
    <TextComponent
        style={{
            ...getDefaultStyle(othersProps || {}),
            ...style,
            fontFamily: SEMI_BOLD,
        }}
        {...othersProps}
    >
        {children}
    </TextComponent>
);

const Bold = ({ children, style = {}, ...othersProps }) => (
    <TextComponent
        style={{
            ...getDefaultStyle(othersProps || {}),
            ...style,
            fontFamily: BOLD,
        }}
        {...othersProps}
    >
        {children}
    </TextComponent>
);

const Black = ({ children, style = {}, ...othersProps }) => (
    <TextComponent
        style={{
            ...getDefaultStyle(othersProps || {}),
            ...style,
            fontFamily: BLACK,
        }}
        {...othersProps}
    >
        {children}
    </TextComponent>
);

const ExtraBold = ({ children, style, ...othersProps }) => (
    <TextComponent
        style={{
            ...getDefaultStyle(othersProps || {}),
            ...style,
            fontFamily: EXTRA_BOLD,
        }}
        {...othersProps}
    >
        {children}
    </TextComponent>
);

TextComponent.Regular = Regular;
TextComponent.Light = Light;
TextComponent.SemiBold = SemiBold;
TextComponent.Bold = Bold;
TextComponent.Black = Black;
TextComponent.ExtraBold = ExtraBold;

TextComponent.propTypes = {
    children: PropTypes.node,
    size: PropTypes.number,
    color: PropTypes.string,
    style: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),
};

TextComponent.defaultProps = {
    size: 14,
    color: COLORS.text,
    style: {},
};

export default TextComponent;
