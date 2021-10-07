import { Input } from 'antd';
import styled from 'styled-components';

export default {
    input: { borderRadius: 4 },
};

export const TextArea = styled(Input.TextArea)`
    ::-webkit-resizer {
        display: none;
    }
`;
