import styled from 'styled-components';
import COLORS from '../../../styles/colors';

export const Container = styled.div`
    background-color: #ffffff;
    box-shadow: 0 2px 3px 0 rgba(129, 126, 150, 0.32);
    padding-right: 24px;
    padding-left: 24px;
    margin-top: 30px;
    height: 62px;
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid ${COLORS.background};
`;

export const Records = styled.div`
    display: flex;
    align-items: center;
`;

export const SearchContainer = styled.div`
    display: flex;
    align-items: center;
    margin-right: auto;
    margin-left: 24px;
`;

export const SearchField = styled.div`
    display: flex;
    align-items: center;
`;

export const OptionsHeader = styled.div`
    display: flex;
    align-items: center;
`;

export const TableContainer = styled.div`
    background-color: #ffffff;
    box-shadow: 0 2px 3px 0 rgba(129, 126, 150, 0.32);
    border-bottom-left-radius: 6px;
    border-bottom-right-radius: 6px;
`;
