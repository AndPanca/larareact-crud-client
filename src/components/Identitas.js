import React, {Component} from 'react';
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

class Identitas extends Component {
    onEdit = () => {
        this.props.onEdit(this.props.identitas);
    };

    // Fungsi yang dipanggil oleh button Delete, kemudian dikirim ke PROPS IdentitasList berdasarkan ID identitas
    onDelete = () => {
        this.props.onDelete(this.props.identitas.id);
    };

    render() {
        // Menerima/Menangkap mapping data PROPS dari IdentitasList.js untuk ditampilkan
        const { id, name, birthday, gender, email, phone, address } = this.props.identitas;
        return (
            <tbody>
                <StyledTableRow key={id}>
                    <StyledTableCell scope="row">
                        {id}
                    </StyledTableCell>
                    <StyledTableCell>{name}</StyledTableCell>
                    <StyledTableCell>{birthday}</StyledTableCell>
                    <StyledTableCell>{gender}</StyledTableCell>
                    <StyledTableCell>{email}</StyledTableCell>
                    <StyledTableCell>{phone}</StyledTableCell>
                    <StyledTableCell>{address}</StyledTableCell>
                    <StyledTableCell>
                        <IconButton aria-label="edit" onClick={this.onEdit}> <EditIcon /> </IconButton>
                        {/* onDelete adalah eventHandler untuk delete by ID  dengan memanggil props onDelete*/}
                        <IconButton aria-label="delete" onClick={this.onDelete}> <DeleteIcon /> </IconButton> 
                    </StyledTableCell>
                </StyledTableRow>
            </tbody>
        );
    }
}

export default Identitas