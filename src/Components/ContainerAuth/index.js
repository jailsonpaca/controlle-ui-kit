import React from 'react';
import PropTypes from 'prop-types';
import { Layout as LayoutANT } from 'antd';
import styles from './styles';

const { Content } = LayoutANT;

const ContainerAuthComponent = ({ children }) => <Content style={styles.container}>{children}</Content>;

ContainerAuthComponent.propTypes = {
    children: PropTypes.node,
};

export default ContainerAuthComponent;
