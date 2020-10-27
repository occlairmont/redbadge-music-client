import React from "react";
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import APIURL from '../helpers/environment';

export interface SignupProps {
  setToken: any;
  updateToken: (token: string) => void;
}

export interface SignupState {
  email: string;
  password: string;
}

class AdminSignup extends React.Component<SignupProps, SignupState> {
  constructor(props: SignupProps) {
    super(props);
    this.state = { email: "", password: "" };
  }

  onSubmit() {
    const endpointURL = `${APIURL}/admin/signup`;
    const body: RequestBodySignup = {
      admin: {
        email: this.state.email,
        password: this.state.password,
      },
    };
    let signupHeaders = new Headers();
    signupHeaders.append("Content-Type", "application/json");

    const requestOptions = {
      method: "POST",
      headers: signupHeaders,
      body: JSON.stringify(body),
    };
    fetch(endpointURL, requestOptions)
      .then((res: any) => res.json())
      .then((json: ResponseSignup) => {
        this.props.setToken(json.sessionToken);
        console.log(json);
      });
  }

  render() {
    return (
      <div>
        <input
          type="text"
          onChange={(e) => this.setState({ email: e.target.value })}
        />

        <input
          type="password"
          onChange={(e) => this.setState({ password: e.target.value })}
        />
        <button onClick={() => this.onSubmit()}>Click</button>
      </div>
    );
  }
}

export default AdminSignup;

export interface Admin {
  email: string;
  password: string;
}

export interface RequestBodySignup {
  admin: Admin;
}

export interface ResponseSignup {
  admin: Admin;
  message: string;
  sessionToken: string;
}

