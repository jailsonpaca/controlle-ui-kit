/* eslint-disable react/prop-types */
import React from 'react';
import { Button, Avatar } from 'antd';
import COLORS from 'styles/colors';
import Text from 'Components/Text';
import styles from './styles';
// eslint-disable-next-line react/prop-types
const ItemNotification = ({ item, onClearNotifications }) => (
    <Button
        type="link"
        onClick={e => {
            e.stopPropagation();
            onClearNotifications();
        }}
        style={styles.button}
    >
        <Avatar style={styles.avatar} />
        <div style={styles.content}>
            <Text.SemiBold color={COLORS.text} size={14}>
                {item.title}
            </Text.SemiBold>
            <Text.SemiBold size={14} color={COLORS.blueGreyTwo}>
                {item.data}
            </Text.SemiBold>
        </div>
    </Button>
);

export default ItemNotification;
