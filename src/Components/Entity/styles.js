import { COLORS } from 'styles';

export default {
    div: {
        paddingTop: 15,
        paddingBottom: 15,
        paddingLeft: 10,
        paddingRight: 10,
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'row',
        flex: 1,
        height: '100%',
    },
    textName: {
        flex: 1,
    },
    button: {
        minWidth: 80,
    },
    buttonNew: {
        minWidth: 80,
        paddingLeft: 0,
    },
    buttonCurrent: {
        borderColor: COLORS.green,
    },
};
