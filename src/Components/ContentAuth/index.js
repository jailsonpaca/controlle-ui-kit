import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles';

const ContentAuthComponent = ({ children, style = {} }) => (
    <div style={{ ...styles.content, ...style }}>{children}</div>
);

ContentAuthComponent.propTypes = {
    style: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),
    children: PropTypes.node,
};

export default ContentAuthComponent;
