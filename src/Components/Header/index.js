/* eslint-disable react/prop-types */
import React, { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { changeIdEntity } from 'store/modules/entities/actions';
import { Nav } from './styles';
import Menu from './Menu';
import Drawer from './Drawer';

const MenuComponent = () => {
    const [visibleDrawer, setVisibleDrawer] = useState(false);
    const dispatch = useDispatch();
    const { currentPlan } = useSelector(state => state.plans);
    const isPlanValid = !!currentPlan && currentPlan.plan;

    const onShowDrawer = () => setVisibleDrawer(true);
    const onCloseDrawer = () => setVisibleDrawer(false);

    function handlePressEntity(item) {
        dispatch(changeIdEntity(item));
    }

    return (
        <Nav isPlanValid={isPlanValid}>
            <Drawer
                visibleDrawer={visibleDrawer}
                onShowDrawer={onShowDrawer}
                onCloseDrawer={onCloseDrawer}
                onPressEntity={handlePressEntity}
            />
            <Menu
                currentMenu={['transactions']}
                user="Usuário de teste"
                onLogout={() => null}
                onShowDrawer={onShowDrawer}
            />
        </Nav>
    );
};

export default MenuComponent;
