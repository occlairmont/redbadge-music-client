import React from "react";
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import APIURL from '../helpers/environment';
import Disc from '../assets/disc.png';

export interface AdminProps {
  setToken: any;
//   updateToken: (token: string) => void;
}

export interface AdminState {
  email: string;
  password: string;
  
}

class AdminLogin extends React.Component<AdminProps, AdminState> {
  constructor(props: AdminProps) {
    super(props);
    this.state = { email: "", password: "" };
  }

  onSubmit(e: any) {
    e.preventDefault();

    if (this.state.password.length < 5){
        alert("Password must be at least 5 characters!")
        return 
      }
  
      if (!this.state.email.includes('@')){
        alert("You must enter a valid email address!")
        return 
      }

    const endpointURL = `${APIURL}/admin/login`;
    const body: RequestBodyLogin = {
      admin: {
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
          Admins Only
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
            {/* <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="/signup" variant="body2">
                {"Don't have an account? Create one."}
              </Link>
            </Grid> */}
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        
      </Box>
      <img style={{
        width: '100%',
      height: 'auto',
      margin: '0 auto'}} src={Disc} />
    </Container>
    {/* <Footer/> */}
    </>
    );
  }
}


export default AdminLogin;

export interface Admin {
  email: string;
  password: string;
}

export interface RequestBodyLogin {
  admin: Admin;
}

export interface ResponseLogin {
  admin: Admin;
  message: string;
  sessionToken: string;
}
