import React from 'react';
import PropTypes from 'prop-types';
import { Layout as LayoutANT } from 'antd';
import styles from './styles';

const { Content } = LayoutANT;

const ContainerComponent = ({ children, isMenuSettings }) => (
    <Content
        style={{
            ...styles.container,
            ...(isMenuSettings && styles.background),
        }}
    >
        {' '}
        {children}
    </Content>
);

ContainerComponent.propTypes = {
    children: PropTypes.node,
};

export default ContainerComponent;
