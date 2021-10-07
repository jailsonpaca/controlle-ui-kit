const getStringFromNumber = number => {
    const res = String(number).replace(/[,.]/g, m => (m === ',' ? '.' : ','));
    if (res.includes(',')) {
        const splitted = res.split(',')[1];
        if (splitted.length > 1) {
            return res;
        }
        return res.concat('0');
    }
    return res.concat(',00');
};

export default getStringFromNumber;
