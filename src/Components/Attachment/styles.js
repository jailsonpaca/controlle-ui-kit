import { Divider as AntdDivider } from 'antd';
import styled from 'styled-components';
import FeatherIcon from 'feather-icons-react';

export const ClipIcon = styled(FeatherIcon)`
    width: 15px;
    height: 15px;
    transform: rotate(315deg) translateY(5px);
`;

export const Divider = styled(AntdDivider)`
    height: 100%;
`;

export const Container = styled.div`
    height: 68px;
    display: flex;
    align-items: center;
`;
