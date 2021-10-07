import { COLORS } from 'styles';
import styled from 'styled-components';

export default {
    collapse: {
        position: 'relative',
        borderRadius: 4,
        paddingTop: '2px',
        paddingRight: '4px',
        paddingLeft: '1px',
    },
    panel: {
        border: 'none',
    },
    iconExpanded: {
        color: COLORS.primary,
        fontSize: 10,
        width: 18,
        height: 15,
        marginRight: 0,
        paddingTop: 4,
        padding: 0,
        position: 'absolute',
        left: -4,
        bottom: 18,
    },
};

export const MinusIcon = styled.div``;
