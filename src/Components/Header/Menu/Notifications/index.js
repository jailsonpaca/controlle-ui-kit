/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import FeatherIcon from 'feather-icons-react';
import SubMenuOptions from '../SubMenu';
import OverlayNotifications from './Overlay';

const Notifications = ({ onNavigate, ...otherProps }) => {
    const [notificationData, setNotificationData] = useState([
        {
            title: 'Título de teste',
            description: 'Notificação de teste',
            type: 'default',
        },
    ]);

    const onClearNotifications = () => {
        setNotificationData([]);
    };
    delete otherProps.eventKey;
    delete otherProps.warnKey;
    return (
        <SubMenuOptions
            {...otherProps}
            id="notificacoes"
            bold={false}
            title={<FeatherIcon icon="bell" size={20} />}
            icon={false}
            popupOffset={[0, 0]}
            size={0}
            isSubMenuNotifications
        >
            <OverlayNotifications
                notificationData={notificationData}
                onClearNotifications={onClearNotifications}
                onNavigate={onNavigate}
            />
        </SubMenuOptions>
    );
};

export default Notifications;
