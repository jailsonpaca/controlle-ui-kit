import styled from 'styled-components';
import { Avatar as AvatarAnt } from 'antd';

export const UserContainer = styled.div`
    padding-left: 24px;
    padding-top: 19px;
    padding-bottom: 19px;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    span:last-child {
        margin-top: 15px !important;
    }
`;
export const Avatar = styled(AvatarAnt)`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 40px;
    width: 40px;
    svg {
        width: 100%;
        height: 100%;
    }
`;
