import React from "react";
import { useHistory } from "react-router-dom";
// import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
// import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
// import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
// import Footer from "../Navbar/Footer";

export interface LoginProps {
  setToken: any;
  // updateToken: (token: string) => void;
}

export interface LoginState {
  email: string;
  password: string;
}


class Login extends React.Component<LoginProps, LoginState> {
  
  constructor(props: LoginProps) {
    super(props);
    this.state = { email: "", password: "" };
  }

  onSubmit(e:any) {
    e.preventDefault();
    const endpointURL = `http://localhost:3001/users/login`;
    const body: RequestBodyLogin = {
      users: {
        email: this.state.email,
        password: this.state.password,
      },
    };
    let loginHeaders = new Headers();
    loginHeaders.append("Content-Type", "application/json");

    const requestOptions = {
      method: "POST",
      headers: loginHeaders,
      body: JSON.stringify(body),
    };
    fetch(endpointURL, requestOptions)
      .then((res: any) => res.json())
      .then((json: ResponseLogin) => {
        this.props.setToken(json.sessionToken);
        console.log(json.sessionToken);
        
      });
  }


  
  render() {
    return (
      <>
      <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div style={{marginTop: '3em',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',}}>
        <Typography component="h1" variant="h5">
          Sign In
        </Typography>
        <form style={{width: '100%', // Fix IE 11 issue.
    marginTop: '1em',}}>
          <TextField
          variant="outlined"
          margin="normal"
          // required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoComplete="off"
          autoFocus
          type="email"
          // required
          onChange={(e) => this.setState({ email: e.target.value })}
        />

<TextField
           variant="outlined"
           margin="normal"
          //  required
           fullWidth
           name="password"
          //  minLength="5"
           label="Password"
          type="password"
          id="password"
            autoComplete="current-password"
          onChange={(e) => this.setState({ password: e.target.value })}
        />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
         <Button
            type="submit"
            fullWidth
            variant="contained"
            color="secondary"
            style={{marginBottom: '0.8em'}}
            onClick={(e) => this.onSubmit(e)}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="/signup" variant="body2">
                {"Don't have an account? Create one."}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        
      </Box>
     
    </Container>
    {/* <Footer/> */}
    </>
    );
  }
}



export default Login;

export interface Users {
  email: string;
  password: string;
}

export interface RequestBodyLogin {
  users: Users;
}

export interface ResponseLogin {
  users: Users;
  message: string;
  sessionToken: string;
}
