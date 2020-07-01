import React from "react";
import Home from "./components";
import CssBaseline from '@material-ui/core/CssBaseline';

function App() {
    return (
        <>
        {/* Ini untuk posisi component paling atas */}
        <CssBaseline />
            <Home />
        </>    
    );
}

export default App;