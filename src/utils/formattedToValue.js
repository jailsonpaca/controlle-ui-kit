const formattedToValue = text => {
    if (text && text !== '' && text.length > 0 && text !== 0) {
        return text.match(/\d+/g) ? +text.match(/\d+/g).join('') : 0;
    }
    return 0;
};

export default formattedToValue;
