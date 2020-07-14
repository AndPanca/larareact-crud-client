import React, { Component } from "react";
import CircularProgress from '@material-ui/core/CircularProgress';

class Loader extends Component {
    render (){        
        return (
            <div>
                <div style={{display: 'flex', justifyContent: 'center'}}>
                    <CircularProgress color="secondary" />
                </div>
            </div>
        );
    }
}

export default Loader;