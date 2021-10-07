import { COLORS } from 'styles';
import { Input as AntdInput } from 'antd';
import styled from 'styled-components';

export default {
    input: {
        borderRadius: 4,
        backgroundColor: COLORS.background,
        width: 266,
        height: 34,
    },
};

export const Input = styled(AntdInput).withConfig({
    shouldForwardProp: prop => !['isFocus'].includes(prop),
})`
    border-color: ${COLORS.border};
    border-width: 1px;
    ${props => !props.bordered && `border: none;`}

    &:focus-within {
        border: 1px solid ${COLORS.greyLight};
    }
    &:not(.ant-input-affix-wrapper-disabled):hover {
        border-color: ${COLORS.border};
    }
`;
