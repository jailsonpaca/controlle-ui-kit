import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'antd';
import styles from './styles';

const CardComponent = ({ children, noPadding = false, bodyStyle = {}, style }) => (
    <Card style={{ ...styles.card, ...style }} bodyStyle={{ ...(noPadding && { padding: 0 }), ...bodyStyle }}>
        {children}
    </Card>
);

CardComponent.propTypes = {
    children: PropTypes.node,
    noPadding: PropTypes.bool,
    bodyStyle: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),
    style: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),
};

CardComponent.defaultProps = {
    bodyStyle: {},
    style: {},
};

export default CardComponent;
