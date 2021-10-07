export const getStore = storeName => {
    try {
        const value = localStorage.getItem(storeName);

        return value ? JSON.parse(value) : null;
    } catch (err) {
        return null;
    }
};

export const removeStore = storeName => {
    try {
        return localStorage.removeItem(storeName);
    } catch (err) {
        return null;
    }
};

export const setStore = (storeName, obj) => {
    try {
        return localStorage.setItem(storeName, JSON.stringify(obj));
    } catch (err) {
        return null;
    }
};
