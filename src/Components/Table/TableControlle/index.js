import React from 'react';
import { TableBase } from './styles';

const TableControlle = ({ hasBackgroundColumns = false, ...props }) => {
    return <TableBase hasBackgroundColumns={hasBackgroundColumns} {...props} />;
};

export default TableControlle;
