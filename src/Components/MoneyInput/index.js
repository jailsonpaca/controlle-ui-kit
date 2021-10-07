import React, { useEffect, useState } from 'react';
import { Input } from 'antd';
import { getFormattedValue as getFormattedValueUtil } from 'utils';
import CustomMaskedInput from './CustomMaskedInput';
import createNumberMask from './createNumberMask';
import { getFormattedValue, insertNewValue } from './rules';

const defaultMaskOptions = {
    prefix: '',
    suffix: '',
    includeThousandsSeparator: true,
    thousandsSeparatorSymbol: '.',
    allowDecimal: true,
    decimalSymbol: ',',
    decimalLimit: 2,
    integerLimit: 11,
    allowNegative: false,
    allowLeadingZeroes: true,
};
const currencyMask = createNumberMask(defaultMaskOptions);

const MoneyInput = ({ value: comingValue, initialValue = '', callback = null, ...inputProps }) => {
    const [value, setValue] = useState(comingValue);
    const [selectedKeys, setSelectedKeys] = useState([initialValue]);
    const [focused, setFocused] = useState(false);

    useEffect(() => {
        if (initialValue !== '') {
            setSelectedKeys([initialValue]);
            setValue(initialValue);
        }
    }, [initialValue]);

    useEffect(() => {
        if (comingValue) {
            setValue(comingValue);
        }
    }, [comingValue]);

    const formattedProps = { ...inputProps, value: getFormattedValue(value, focused) };

    return (
        <CustomMaskedInput
            mask={currencyMask}
            render={(ref, props) => (
                <Input
                    placeholder="Valor inicial"
                    ref={input => ref(input && input.input)}
                    {...props}
                    value={selectedKeys[0]}
                    onChange={event => {
                        props.onChange(event);
                        const betweenInitial = [...selectedKeys];

                        betweenInitial[0] = event.target.value;

                        if (betweenInitial[0].includes(',') && event.nativeEvent.data) {
                            const splitted = betweenInitial[0].split(',')[1];
                            if (splitted !== '' && splitted.length <= 1) {
                                betweenInitial[0] = betweenInitial[0].concat('0');
                            }
                        }
                        if (betweenInitial[0] && betweenInitial[0].length === event.target.selectionEnd) {
                            betweenInitial[0] = getFormattedValueUtil(
                                insertNewValue(betweenInitial[0].replace(',', ''), event.nativeEvent.data),
                                '',
                            );
                        }
                        setSelectedKeys(betweenInitial);
                        if (callback) {
                            callback(betweenInitial[0]);
                        }
                    }}
                    onFocus={() => setFocused(true)}
                    onBlur={event => {
                        props.onBlur(event);
                        const betweenInitial = [...selectedKeys];
                        betweenInitial[0] = event.target.value;
                        if (betweenInitial[0].includes(',')) {
                            const splitted = betweenInitial[0].split(',')[1];
                            if (splitted !== '' && splitted.length <= 1) {
                                betweenInitial[0] = betweenInitial[0].concat('0');
                            }
                        } else {
                            if (betweenInitial[0].length === 0) {
                                betweenInitial[0] = betweenInitial[0].concat('0');
                            }
                            betweenInitial[0] = betweenInitial[0].concat(',00');
                        }
                        if (betweenInitial[0].replace(/^0+/, '').charAt(0) !== ',') {
                            if (betweenInitial[0].replace(/^0+/, '').charAt(0) === '.') {
                                betweenInitial[0] = betweenInitial[0]
                                    .replace(/^0+/, '')
                                    .replace('.', '')
                                    .replace(/^0+/, '');
                            } else {
                                betweenInitial[0] = betweenInitial[0].replace(/^0+/, '');
                            }
                        }
                        inputProps.onChange(betweenInitial[0]);
                        setSelectedKeys(betweenInitial);
                        setFocused(false);
                    }}
                />
            )}
            {...formattedProps}
        />
    );
};

export default MoneyInput;
