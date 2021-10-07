import COLORS from 'styles/colors';
import styled from 'styled-components';
import { Button as ButtonAnt } from 'antd';

export const Container = styled.div`
    padding: 10px;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    span {
        color: ${props => props.select && COLORS.green} !important;
    }
    &:hover {
        > span {
            color: ${props => !props.select && COLORS.blueLink} !important;
        }
    }
`;
export const Button = styled(ButtonAnt)`
    background: ${COLORS.blueLink};
    color: ${COLORS.white};
`;
export const ButtonSelect = styled.div`
    background: ${COLORS.white};
    border: 1px solid ${COLORS.green};
    padding: 8px 15px;
    border-radius: 6px;
    color: ${COLORS.green};
    display: flex;
    justify-content: center;
    line-height: 1;
    align-items: center;
    width: 80px;
`;
