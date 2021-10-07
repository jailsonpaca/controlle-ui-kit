import InputMask from 'inputmask-core';

const removeMask = (value = '', pattern) => {
    if (!value) {
        return value;
    }
    const mask = new InputMask({ pattern, value });

    return mask.getRawValue();
};

export default removeMask;
