import React from 'react';
import { CardMedia, Grid } from '@material-ui/core';
import Login from './Login';
// import {GuitarGuy} from '../assets/GuitarGuy'

export interface AuthProps {
    
}
 
export interface AuthState {
    
}
 
class Auth extends React.Component<AuthProps, AuthState> {
    constructor(props: AuthProps) {
        super(props);
        // this.state = { :  };
    }
    render() { 
        return ( 
            <div>
                <Grid>
                    {/* <CardMedia src={GuitarGuy}/> */}
                </Grid>
                <Grid>
                    <Login/>
                </Grid>
            </div>
         );
    }
}
 
export default Auth;