import React from "react";

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
    const endpointURL = `http://localhost:3001/admin/signup`;
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
