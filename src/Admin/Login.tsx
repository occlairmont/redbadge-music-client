import React from "react";

export interface AdminProps {
  setToken: any;
  updateToken: (token: string) => void;
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

  onSubmit() {
    const endpointURL = `http://localhost:3001/admin/register`;
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

