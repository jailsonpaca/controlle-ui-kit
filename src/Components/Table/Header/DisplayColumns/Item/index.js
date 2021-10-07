import React from 'react';
import PropTypes from 'prop-types';
import { Switch } from 'antd';
import { Text } from 'Components';
import { COLORS } from 'styles';
import styles from './styles';

const Item = ({ title, defaultValue, checkedValue, setValue }) => (
    <div style={styles.item}>
        <Switch defaultChecked={defaultValue} checked={checkedValue} onChange={checked => setValue(checked)} />
        <Text.Regular color={COLORS.blueGrey} style={{ marginLeft: 12 }}>
            {title}
        </Text.Regular>
    </div>
);

Item.propTypes = {
    title: PropTypes.string,
    defaultValue: PropTypes.oneOfType([PropTypes.bool]),
    checkedValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    setValue: PropTypes.func,
};

export default Item;
