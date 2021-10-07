export const getFormattedValue = (value, focused = false) => {
    let newValue = value;
    if (!newValue) {
        return '0,00';
    }
    if (!focused && !newValue.includes(',')) {
        if (newValue.length === 0) {
            newValue = newValue.concat('0');
        }
        newValue = newValue.concat(',00');
    }
    return newValue;
};

export const insertNewValue = (oldValue = '', newChar) => {
    let newValue = '';
    if (oldValue.replace(/0/g, '').length >= 3) {
        return oldValue.concat(newChar);
    }
    if (oldValue.charAt(0) !== '0') {
        return oldValue.concat(newChar);
    }
    for (let i = 1; i < oldValue.length; i += 1) {
        newValue = newValue.concat(oldValue.charAt(i));
    }
    return newValue.concat(newChar);
};
