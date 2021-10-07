import { Input } from 'antd';
import styled from 'styled-components';

export default {
    input: { borderRadius: 4 },
};

export const InputANT = styled(Input)`
    -webkit-appearance: none;
    &::-webkit-inner-spin-button,
    &::-webkit-calendar-picker-indicator {
        display: none;
        -webkit-appearance: none;
    }
`;
