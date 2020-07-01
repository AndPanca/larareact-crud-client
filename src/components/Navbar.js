import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    AppBar,
    Toolbar,
    ListItem,
    IconButton,
    ListItemText,
    Avatar,
    Divider,
    List,
    Typography,
    Box
} from "@material-ui/core";

import {
    ArrowBack,
    Assignment,
    Home,
    Apps,
    ContactMail
} from "@material-ui/icons"
import avatar from "../avatar.png"

const Navbar = () => {
    return (
        <div>
            <Box component="nav">
                <AppBar position="static" style={{ background: "#171717" }}>
                    <Toolbar>
                        <IconButton>
                            <ArrowBack style={{ color: "tomato" }} />
                        </IconButton>
                        <Typography variant="h6">
                            CRUD APP
                        </Typography>
                    </Toolbar>
                </AppBar>
            </Box>
        </div>
    )
}

export default Navbar
