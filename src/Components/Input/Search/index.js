import React, { useState } from 'react';
import PropTypes from 'prop-types';
import FeatherIcon from 'feather-icons-react';
import { COLORS } from 'styles';
import styles, { Input } from './styles';
import './styles.less';

const Prefix = () => (
    <FeatherIcon
        icon="search"
        style={{
            marginLeft: 3,
            marginRight: 3,
            color: COLORS.blueGreyTwo,
            width: 18,
        }}
    />
);

const SearchComponent = ({ value, transparent, bordered, onChange, placeholder, style, ...othersProps }) => {
    const [isFocus, setIsFocus] = useState(false);

    function setFocus() {
        setIsFocus(true);
    }

    return (
        <Input
            onFocus={setFocus}
            isFocus={isFocus}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            style={{ ...styles.input, ...style, ...(isFocus && styles.border) }}
            bordered={bordered}
            prefix={<Prefix />}
            {...othersProps}
            className={`fieldSearch ${transparent && 'transparent'}`}
        />
    );
};

SearchComponent.propTypes = {
    onChange: PropTypes.func,
    placeholder: PropTypes.string,
    transparent: PropTypes.bool,
    bordered: PropTypes.bool,
    style: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),
};

SearchComponent.defaultProps = {
    placeholder: '',
    transparent: false,
    bordered: false,
    onChange: () => null,
    style: {},
};

export default SearchComponent;
