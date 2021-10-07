import { COLORS } from 'styles';

export default {
    button: {
        borderRadius: '4px',
        height: 77,
        paddingLeft: 24,
        paddingRight: 24,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: COLORS.backgroundHover,
    },
    content: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
    },
    hover: {
        backgroundColor: COLORS.darkBlueGrey,
        border: 'none',
    },
    description: {
        whiteSpace: 'pre-wrap',
        textAlign: 'left',
        lineHeight: 1.2,
    },
    image: {
        height: 40,
        marginRight: 14,
    },
};
