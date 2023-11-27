import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';

const columns = [
    { id: 'productionOrder', label: 'Production Order ', minWidth: 170, },
    { id: 'productCode', label: 'Product Code	', minWidth: 100 },
    { id: 'product', label: 'Product	', minWidth: 100 },
    { id: 'qtyPD', label: 'Qty PD.	', minWidth: 100 },
    { id: 'qtyReceive', label: 'Qty  Receive', minWidth: 100 },

    // {
    //     id: 'Product Code',
    //     label: 'Product Code',
    //     minWidth: 170,
    //     align: 'right',
    //     format: (value) => value.toLocaleString('en-US'),
    // },
    // {
    //     id: 'Product',
    //     // label: 'Product\u00a0(km\u00b2)',
    //     label: 'Product',
    //     minWidth: 170,
    //     align: 'right',
    //     format: (value) => value.toLocaleString('en-US'),
    // },
    // {
    //     id: 'Qty PD. ',
    //     label: 'Qty PD. ',
    //     minWidth: 170,
    //     align: 'right',
    //     format: (value) => value.toFixed(2),
    // },
];
function createData(productionOrder, productCode, product, qtyPD, qtyReceive) {
    return { productionOrder, productCode, product, qtyPD, qtyReceive };
}

const rows = [
    createData('PD23110002', 'PR023', 'PRISMA Coconut Hi-Calcium  1 Lite', "1,000", 128),
    createData('PD23110003', 'PR024', 'PRISMA Orange Hi-Calcium  1 Lite', '2,000', 300),
    createData('PD23110004', 'PR025', 'PRISMA Apple Hi-Calcium  1 Lite', '1,500', 470),
    // เพิ่มแถวต่อไปตามต้องการ
];



export default function StickyHeadTable() {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        <Paper sx={{ width: '100%', overflow: 'hidden' }} elevation={12}>
            <TableContainer sx={{ maxHeight: 350, height: 350 }}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            {columns.map((column) => (
                                <TableCell
                                    key={column.id}
                                    align={column.align}
                                    style={{ minWidth: column.minWidth }}
                                >
                                    {column.label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((row) => {
                                return (
                                    <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                                        {columns.map((column) => {
                                            const value = row[column.id];
                                            return (
                                                <TableCell key={column.id} align={column.align}>
                                                    {column.format && typeof value === 'number'
                                                        ? column.format(value)
                                                        : value}
                                                </TableCell>
                                            );
                                        })}
                                    </TableRow>
                                );
                            })}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Paper>
    );
}