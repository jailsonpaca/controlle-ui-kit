import * as Banks from 'assets/banks';

const removeExtension = icon => icon.split('.')[0];

const getImage = icon => {
    if (icon) {
        const name = removeExtension(icon);

        return Banks[name] || Banks.defaultBank;
    }

    return Banks.defaultBank;
};

export default getImage;
