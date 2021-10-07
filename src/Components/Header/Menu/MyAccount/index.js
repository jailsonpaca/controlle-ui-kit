import React, { useState } from 'react';
import { Button, Avatar, Menu } from 'antd';
import FeatherIcon from 'feather-icons-react';
import styles from './styles';
import MyAccountOverlay from './Overlay';

const { SubMenu } = Menu;

// eslint-disable-next-line react/prop-types
const MyAccount = ({ onShowDrawer, ...otherProps }) => {
    const [hover, setHover] = useState(false);

    delete otherProps.eventKey;
    delete otherProps.warnKey;
    return (
        <SubMenu
            key="myAccount"
            icon={false}
            popupOffset={[15, 12]}
            style={styles.subMenu}
            onTitleMouseEnter={() => setHover(true)}
            onTitleMouseLeave={() => setHover(false)}
            title={
                <Button
                    type="primary"
                    style={{
                        ...styles.button,
                        ...(hover && { ...styles.buttonHover }),
                    }}
                >
                    <Avatar icon={<FeatherIcon icon="aperture" />} size={24} />
                </Button>
            }
            {...otherProps}
        >
            <MyAccountOverlay onShowDrawer={onShowDrawer} />
        </SubMenu>
    );
};

export default MyAccount;
