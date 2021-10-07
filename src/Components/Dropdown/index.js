import React from 'react';
import PropTypes from 'prop-types';
import { Dropdown as DropdownANT } from 'antd';
import { Text, Button } from 'Components';
import { COLORS } from 'styles';
import { ArrowDown } from 'assets/CustomIcons';
import FeatherIcon from 'feather-icons-react';
import styles from './styles';

const getDefaultStyle = color => ({
    borderColor: color,
});

const DropdownComponent = ({
    nameIcon,
    children,
    menu,
    type,
    color,
    style,
    buttonStyle,
    iconStyle,
    ...othersProps
}) => (
    <>
        {type === 'text' || type === 'icon' ? (
            <DropdownANT
                overlay={menu}
                placement="bottomRight"
                style={{
                    ...styles.dropdown,
                    ...getDefaultStyle(color),
                    ...style,
                }}
                {...othersProps}
                arrow
            >
                <div style={styles.content}>
                    {type === 'text' && (
                        <Text.Regular color={color} size={14} style={styles.text}>
                            {children}
                        </Text.Regular>
                    )}
                    {nameIcon ? <FeatherIcon icon={nameIcon} size={15} /> : <ArrowDown style={styles.icon} />}
                </div>
            </DropdownANT>
        ) : (
            <DropdownANT
                overlay={menu}
                placement="bottomRight"
                style={{
                    ...styles.dropdown,
                    ...getDefaultStyle(color),
                    ...style,
                }}
                {...othersProps}
                arrow
            >
                <div style={styles.content}>
                    {Button[color]({
                        children: (
                            <>
                                {children}
                                <ArrowDown style={{ ...styles.icon, ...iconStyle }} />
                            </>
                        ),
                        style: buttonStyle,
                    })}
                </div>
            </DropdownANT>
        )}
    </>
);

DropdownComponent.propTypes = {
    children: PropTypes.node,
    menu: PropTypes.oneOfType([PropTypes.func, PropTypes.node]),
    type: PropTypes.string,
    buttonStyle: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),
    iconStyle: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),
    color: PropTypes.string,
    style: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),
};

DropdownComponent.defaultProps = {
    children: '',
    type: 'text',
    color: COLORS.text,
    style: {},
    buttonStyle: {},
    iconStyle: {},
};

export default DropdownComponent;
