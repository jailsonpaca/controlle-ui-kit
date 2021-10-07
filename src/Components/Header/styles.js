import styled from 'styled-components';
import COLORS from 'styles/colors';

export const Nav = styled.div.withConfig({
    shouldForwardProp: prop => !['isPlanValid'].includes(prop),
})`
    overflow: hidden;
    background-color: ${COLORS.primary};
    height: 56px;
    color: ${COLORS.white};
    display: flex;
    flex: 1 1 0%;
    align-items: center;
    ${props => !props.isPlanValid && 'justify-content: space-between;'}
`;
