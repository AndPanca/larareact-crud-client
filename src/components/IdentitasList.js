import React, { Component } from 'react';
import Identitas from './Identitas';
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

class IdentitasList extends Component {
    onEdit = (data) => {
        this.props.onEdit(data);
        // console.log("identitas list", data);
    };

    // Menangkap PROPS ID yang akan di DELETE
    onDelete = (id) => {
        this.props.onDelete(id);
        // console.log("delete id", id);
    };

    render() {
        // Menangkap data state dari index.js dengan PROPS dan disimpan di const identitas.
        const identitas = this.props.identitas;
        return (
            <div>
                <Container>
                    <TableContainer component={Paper}>
                        <Table aria-label="customized table">
                            <TableHead>
                                <TableRow>
                                    <StyledTableCell>Id</StyledTableCell>
                                    <StyledTableCell>Nama</StyledTableCell>
                                    <StyledTableCell>Birth Year</StyledTableCell>
                                    <StyledTableCell>Gender</StyledTableCell>
                                    <StyledTableCell>Email</StyledTableCell>
                                    <StyledTableCell>Phone</StyledTableCell>
                                    <StyledTableCell>Address</StyledTableCell>
                                    <StyledTableCell>Action</StyledTableCell>
                                </TableRow>
                            </TableHead>
                            {/* Melempar lago data identitas ke Identitas.js, dengan maping */}
                            {
                                identitas.map(identitas =>{
                                    return (
                                        <Identitas 
                                            identitas={identitas}
                                            key={identitas.id}
                                            // Melempar ID yang akan di DELETE ke Index.js 
                                            onDelete={this.onDelete}
                                            onEdit={this.onEdit}
                                        />
                                    );
                                })
                            }
                        </Table>
                    </TableContainer>
                </Container>
            </div>
        );
    }
}

export default IdentitasList
