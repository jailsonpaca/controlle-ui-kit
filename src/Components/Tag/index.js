import React from 'react';
import PropTypes from 'prop-types';
import { Tag as TagANT } from 'antd';
import { Text } from 'Components';
import { COLORS } from 'styles';
import styles from './styles';

const getDefaultStyle = color => ({
    borderColor: color,
});

const TagComponent = ({ children, color, style, ...othersProps }) => (
    <TagANT
        style={{
            ...styles.tag,
            ...getDefaultStyle(color),
            ...style,
        }}
        {...othersProps}
    >
        {typeof children === 'string' ? (
            <Text.SemiBold color={color} size={14}>
                {children}
            </Text.SemiBold>
        ) : (
            children
        )}
    </TagANT>
);

TagComponent.propTypes = {
    color: PropTypes.string,
    style: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),
    children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
};

TagComponent.defaultProps = {
    color: COLORS.darkBlueGrey,
    style: {},
};

export default TagComponent;
