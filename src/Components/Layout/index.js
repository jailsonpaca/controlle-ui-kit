import React from 'react';
import PropTypes from 'prop-types';
import { Layout } from 'antd';
import styles from './styles';

const LayoutFull = ({ children }) => <Layout style={styles.layout}>{children}</Layout>;

LayoutFull.propTypes = {
    children: PropTypes.node,
};

export default LayoutFull;
