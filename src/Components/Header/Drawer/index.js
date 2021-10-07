/* eslint-disable react/prop-types */
import React from 'react';
import { Drawer, Button } from 'antd';
import COLORS from 'styles/colors';
import Text from 'Components/Text';
import FeatherIcon from 'feather-icons-react';

import { useSelector } from 'react-redux';
import EntityItem from './EntityItem';
import styles from './styles';

const DrawerComponent = ({ visibleDrawer, onShowDrawer, onCloseDrawer, onPressEntity }) => {
    const { name } = useSelector(state => state.entities.currentEntity);
    return (
        <div>
            <Button
                type="primary"
                icon={
                    <FeatherIcon
                        icon="menu"
                        style={{
                            marginLeft: 2,
                        }}
                    />
                }
                style={styles.button}
                onClick={onShowDrawer}
            >
                <Text.Bold size={17} color={COLORS.white} style={styles.entityName}>
                    {name}
                </Text.Bold>
            </Button>
            <Drawer
                title={
                    <Text.Bold size={17} color={COLORS.black}>
                        Selecione sua empresa
                    </Text.Bold>
                }
                placement="left"
                closable
                onClose={onCloseDrawer}
                visible={visibleDrawer}
                width={426}
                drawerStyle={styles.drawer}
            >
                <div style={styles.divList}>
                    <EntityItem key="empresas" onPress={item => onPressEntity(item)} />
                </div>
            </Drawer>
        </div>
    );
};

export default DrawerComponent;
