export const convertToCents = value => {
    const newValue = value || '0,00';
    if (Number.isInteger(newValue)) {
        return newValue * 100;
    }
    const formattedValue = Number(newValue.replace(',', '').replace('.', ''));
    return formattedValue;
};
