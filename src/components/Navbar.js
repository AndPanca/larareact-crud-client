import React from 'react';
import {
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    Box
} from "@material-ui/core";

import {
    ArrowBack,
} from "@material-ui/icons"

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
