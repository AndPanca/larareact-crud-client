import React from 'react'
import { Identitas } from './Identitas';
import { withStyles } from '@material-ui/core/styles';
import { Container, Table, TableCell, TableContainer, TableHead, TableRow, Paper } from '@material-ui/core';

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow);

const IdentitasList = () => {
    return (
        <div>
            <Container>
                <TableContainer component={Paper}>
                    <Table aria-label="customized table">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell>Id</StyledTableCell>
                                <StyledTableCell>Nama</StyledTableCell>
                                <StyledTableCell align="right">Birth Year</StyledTableCell>
                                <StyledTableCell>Gender</StyledTableCell>
                                <StyledTableCell>Email</StyledTableCell>
                                <StyledTableCell align="right">Phone</StyledTableCell>
                                <StyledTableCell>Address</StyledTableCell>
                                <StyledTableCell>Action</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <Identitas />
                    </Table>
                </TableContainer>
            </Container>
        </div>
    )
}

export default IdentitasList
