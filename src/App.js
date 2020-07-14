import React, { Component } from "react";
import Home from "./components";
import CssBaseline from '@material-ui/core/CssBaseline';

class App extends Component{
    render() {
        return (
            <>
            {/* Ini untuk posisi component paling atas */}
            <CssBaseline />
                {/* Buka Component Home dari Index.jd di Folder Component */}
                <Home />
            </>    
        );
    }
}

export default App;