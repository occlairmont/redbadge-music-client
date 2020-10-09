import React from 'react';
import { Card } from '@material-ui/core';
import { PostAdd } from '@material-ui/icons';

export interface LoginProps {
    
}
 
export interface LoginState {
    email: string;
    password: string;
}
 
class Login extends React.Component<LoginProps, LoginState> {
    constructor(props: LoginProps) {
        super(props);
        this.state = { 
            email: "",
            password: "",
        };
    }

    onSubmit(){
        fetch('http://localhost:3001/users/login', {
            method: 'POST',
            body: JSON.stringify({user: {email: this.state.email, password: this.state.password}}),
            headers: new Headers({
                "Content-type": "application/json",
            }),
        })
        .then((res) => (res.json()))
        .then((data) => {
          console.log(data)
        });
    }

    render() { 
        return ( 
            <div>
                <Card>
                    
                </Card>
            </div>
         );
    }
}
 
export default Login;