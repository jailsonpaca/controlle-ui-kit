/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { Menu } from 'antd';
import styles from './styles';
import SubMenuTitle from './Title/index';

const { SubMenu } = Menu;

const SubMenuOptions = ({
    id,
    title,
    size,
    href,
    icon = true,
    bold = true,
    children,
    isSubMenuTransactions,
    isSubMenuContacts,
    isSubMenuMore,
    isSubMenuNotifications,
    isSubMenuConfig,
    isSubMenuReport,
    marginLeft,
    ...otherProps
}) => {
    const [hover, setHover] = useState(false);
    function handleHover(state) {
        setHover(state);
    }
    delete otherProps.eventKey;
    delete otherProps.warnKey;
    return (
        <SubMenu
            {...otherProps}
            key={id || 'any'}
            eventKey={id || 'any'}
            style={{
                ...styles.subMenuAll,
                ...(isSubMenuTransactions && styles.isSubMenuTransactions),
                ...(isSubMenuConfig && styles.isSubMenuConfig),
                ...(isSubMenuNotifications && styles.isSubMenuNotifications),
            }}
            popupOffset={[0, 0]}
            onTitleMouseEnter={() => handleHover(true)}
            onTitleMouseLeave={() => handleHover(false)}
            title={
                <SubMenuTitle
                    href={href}
                    bold={bold}
                    size={size}
                    title={title}
                    icon={icon}
                    hover={hover}
                    isSubMenuTransactions={isSubMenuTransactions}
                    isSubMenuContacts={isSubMenuContacts}
                    isSubMenuMore={isSubMenuMore}
                    isSubMenuNotifications={isSubMenuNotifications}
                    isSubMenuConfig={isSubMenuConfig}
                    isSubMenuReport={isSubMenuReport}
                    marginLeft={marginLeft}
                />
            }
        >
            {children}
        </SubMenu>
    );
};

export default SubMenuOptions;
