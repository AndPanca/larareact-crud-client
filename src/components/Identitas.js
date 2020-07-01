import React from 'react';
import { IconButton } from "@material-ui/core";
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { TableCell, TableRow, withStyles } from '@material-ui/core';

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

function createData(id, name, year, gender, email, phone, address) {
    return { id, name, year, gender, email, phone, address };
}

const rows = [
    createData(16523166,'Andri Panca', 1998, 'Male', 'andpanca@gmail.com', '+6281818937222', 'Jogja' ),
    createData(16523166,'Andri Panca', 1998, 'Male', 'andpanca@gmail.com', '+6281818937222', 'Jogja' ),
];

export const Identitas = () => {
    return (
        <>
        {rows.map((row) => (
            <StyledTableRow key={row.id}>
                <StyledTableCell scope="row">
                    {row.id}
                </StyledTableCell>
                <StyledTableCell>{row.name}</StyledTableCell>
                <StyledTableCell align="right">{row.year}</StyledTableCell>
                <StyledTableCell>{row.gender}</StyledTableCell>
                <StyledTableCell>{row.email}</StyledTableCell>
                <StyledTableCell align="right">{row.phone}</StyledTableCell>
                <StyledTableCell>{row.address}</StyledTableCell>
                <StyledTableCell>
                    <IconButton aria-label="edit"> <EditIcon /> </IconButton>
                    <IconButton aria-label="delete"> <DeleteIcon /> </IconButton>
                </StyledTableCell>
            </StyledTableRow>
        ))}
        </>
    )
}
