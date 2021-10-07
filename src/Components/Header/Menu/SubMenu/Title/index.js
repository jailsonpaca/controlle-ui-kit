/* eslint-disable react/prop-types */
import React from 'react';
import { Button } from 'antd';
import FeatherIcon from 'feather-icons-react';
import Text from 'Components/Text';
import COLORS from 'styles/colors';
import styles from './styles';

const SubMenuTitle = ({
    bold,
    size,
    title,
    icon,
    hover,
    isSubMenuTransactions,
    isSubMenuContacts,
    isSubMenuMore,
    isSubMenuNotifications,
    isSubMenuConfig,
    isSubMenuReport,
    ...othersProps
}) => {
    return (
        <Button
            {...othersProps}
            type="primary"
            style={{
                ...styles.button,
                ...(isSubMenuTransactions && styles.isSubMenuTransactions),
                ...(isSubMenuContacts && styles.isSubMenuContacts),
                ...(isSubMenuMore && styles.isSubMenuMore),
                ...(isSubMenuNotifications && styles.isSubMenuNotifications),
                ...(isSubMenuConfig && styles.isSubMenuConfig),
                ...(isSubMenuReport && styles.isSubMenuReport),
            }}
        >
            {bold ? (
                <Text.Bold size={size} color={COLORS.white}>
                    {title}
                </Text.Bold>
            ) : (
                <Text.Regular size={size} color={COLORS.white}>
                    {title}
                </Text.Regular>
            )}
            {icon && (
                <>
                    {hover ? (
                        <FeatherIcon icon="chevron-up" style={styles.icon} size={16} />
                    ) : (
                        <FeatherIcon icon="chevron-down" style={styles.icon} size={16} />
                    )}
                </>
            )}
        </Button>
    );
};

export default SubMenuTitle;
