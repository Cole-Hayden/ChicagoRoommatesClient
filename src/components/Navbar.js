import React, { Component } from 'react';
import Link from 'react-router-dom/Link';
//MUI stuff
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

class Navbar extends Component {
    render() {
        return (
            <AppBar>
                <Toolbar>
                    <Button color="inherit" component={Link}>Login</Button>
                    <Button color="inherit" component={Link}>Home</Button>
                    <Button color="inherit" component={Link}>Signup</Button>

                </Toolbar>
            </AppBar>
        );
    }
}

export default Navbar
