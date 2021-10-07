import React from 'react';
import { Input } from 'antd';
import PropTypes from 'prop-types';
import { getValueFromFormatted } from 'utils';

const NumericInput = ({ onChange, value, formatter, parser, ref, ...otherProps }) => {
    const handleOnChange = e => {
        const { value: valueTarget } = e.target;
        const cleanValue = getValueFromFormatted(valueTarget);

        const reg = /^-?\d*?$/;

        if ((!Number.isNaN(cleanValue) && reg.test(cleanValue)) || cleanValue === '' || cleanValue === '-') {
            return onChange(formatter(cleanValue));
        }

        return null;
    };

    return (
        <Input
            value={parser(value, 'R$')}
            onChange={handleOnChange}
            placeholder="Input a number"
            maxLength={25}
            ref={ref}
            {...otherProps}
        />
    );
};

NumericInput.propTypes = {
    formatter: PropTypes.func,
    parser: PropTypes.func,
    onChange: PropTypes.func,
    value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

NumericInput.defaultProps = {
    value: '',
    onChange: () => null,
    formatter: value => value,
    parser: value => value,
};

export default NumericInput;
