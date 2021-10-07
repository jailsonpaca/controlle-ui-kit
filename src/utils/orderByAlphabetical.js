const orderByAlphabetical = (values, key) =>
    [...values].sort((a, b) => {
        const nameA = a[key].toLowerCase();
        const nameB = b[key].toLowerCase();

        if (nameA < nameB) return -1;
        if (nameA > nameB) return 1;

        return 1;
    });

export default orderByAlphabetical;
