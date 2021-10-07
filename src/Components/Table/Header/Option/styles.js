import styled from 'styled-components';
import { Button } from 'Components';

export const BtnAction = styled(Button).withConfig({
    shouldForwardProp: prop => !['isShowColumns'].includes(prop),
})`
    padding: 0;
    margin-right: ${props => (props.isShowColumns ? '7px' : '28px')};
`;
