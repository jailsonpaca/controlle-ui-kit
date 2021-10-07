/* eslint-disable react/prop-types */
import React from 'react';
import { Menu } from 'antd';
import Item from 'Components/Header/Menu/Item';
import styles from './styles';

const MyAccountMenu = ({ onShowDrawer, ...othersProps }) => {
    return (
        <>
            <Menu.Divider style={styles.divider} />
            <Item {...othersProps} id="minha-conta" title="Meus dados" itemMyAccount />
            <Item
                {...othersProps}
                id="empresas-que-participo"
                title="Empresas que participo"
                onClick={onShowDrawer}
                itemMyAccount
            />
            <Item {...othersProps} id="sair" title="Sair" logoutItem />
        </>
    );
};

export default MyAccountMenu;
