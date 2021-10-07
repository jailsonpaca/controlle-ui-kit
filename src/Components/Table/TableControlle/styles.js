import styled from 'styled-components';
import { COLORS } from 'styles';
import { Table } from 'antd';

export const TableBase = styled(Table)`
    .ant-table-thead > tr > th {
        background-color: ${COLORS.white};
        padding-top: 10px;
        padding-bottom: 11px;
    }

    .ant-table-tbody > tr > td {
        padding-top: 10px;
        padding-bottom: 13px;
    }

    .ant-checkbox .ant-checkbox-inner {
        border-radius: 3px;
        border: 2px solid #d0d0db;
    }

    .ant-checkbox-checked .ant-checkbox-inner {
        border-radius: 3px;
        border: 2px solid ${COLORS.green};
    }
    tr:last-of-type td:first-of-type {
        border-bottom-left-radius: 6px;
    }
    tr:last-of-type td:last-of-type {
        border-bottom-right-radius: 6px;
    }
`;
