const isArrayValid = (child = [], isOrderedMap = false) => {
    if (isOrderedMap) {
        return !!(child && child.size > 0);
    }

    return !!(child && child.length > 0);
};

export default isArrayValid;
