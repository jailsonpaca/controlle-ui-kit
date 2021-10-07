import { COLORS } from 'styles';

export const getColor = (current, hovered) => {
    if (current) {
        return COLORS.green;
    }

    return hovered ? COLORS.primary : COLORS.text;
};
