import styled from 'styled-components';
import COLORS from 'styles/colors';

export default {
    left: {
        flex: 1,
    },
    menu: {
        height: 56,
        borderBottom: 'none',
        display: 'flex',
        flex: 1,
        alignItems: 'center',
        borderRadius: 0,
        backgroundColor: COLORS.primary,
    },
    userMenu: {
        height: 56,
        borderBottom: 'none',
        alignItems: 'center',
        borderRadius: 0,
        backgroundColor: COLORS.primary,
    },
    buttonOverView: {
        height: 56,
        padding: 0,
        paddingRight: 9.5,
        paddingLeft: 9.5,
        borderRadius: 0,
        display: 'flex',
        alignItems: 'center',
    },
    button: {
        height: 56,
        padding: 0,
        paddingRight: 9.5,
        paddingLeft: 9.5,
        borderRadius: 0,
        display: 'flex',
        alignItems: 'center',
    },
    menuItem: {},
    divider: {
        marginTop: 12,
        marginBottom: 12,
    },
};

export const Main = styled.div.withConfig({
    shouldForwardProp: prop => !['isPlanValid'].includes(prop),
})`
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    ${props => !props.isPlanValid && 'width: auto;'}
`;

export const Right = styled.div.withConfig({
    shouldForwardProp: prop => !['isPlanValid'].includes(prop),
})`
    width: ${props => (props.isPlanValid ? '148px' : '50px')};
`;

export const ContainerFlex = styled.div`
    display: flex;
`;

export const SugestionReport = styled.div`
    height: 48px;
    padding-left: 24px;
    border-top: 1px solid #eef0f8;
    display: flex;
    align-items: center;
`;
