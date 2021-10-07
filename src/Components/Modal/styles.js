import { COLORS } from 'styles';

export default {
    footer: {
        display: 'flex',
        justifyContent: 'space-between',
        paddingBottom: 40,
    },
    saveButton: {
        color: COLORS.white,
        minWidth: 80,
        minHeight: 36,
    },
    saveDisabled: {
        opacity: 0.5,
        pointer: 'none',
    },
    cancelButton: {
        minWidth: 80,
        height: 36,
    },
    content: {
        paddingTop: 2,
        paddingLeft: 23,
        paddingRight: 23,
        paddingBottom: 20,
    },
    disabled: {
        opacity: 0.5,
        pointer: 'cursor',
    },
};
