import React from 'react';

export interface AdminHomeProps {
    token: string | null;
  }
  
  export interface AdminHomeState {
    
  }

class AdminHome extends React.Component<AdminHomeProps, AdminHomeState> {
    constructor(props: AdminHomeProps) {
      super(props);
      this.state = {  };
    }
  
//     onSubmit(e: any) {
//       e.preventDefault();
  
//       const endpointURL = `http://localhost:3001/admin/eventinfo`;
//       const body: RequestBodyLogin = {
//         admin: {
//           email: this.state.email,
//           password: this.state.password,
//         },
//       };
//       let eventInfoHeaders = new Headers();
//       eventInfoHeaders.append("Content-Type", "application/json");
  
//       const requestOptions = {
//         method: "GET",
//         headers: eventInfoHeaders,
//         body: JSON.stringify(body),
//       };
//       fetch(endpointURL, requestOptions)
//         .then((res: any) => res.json())
//         .then((json: ResponseLogin) => {
//           this.props.setToken(json.sessionToken);
//           console.log(json);
//         });

render() {
    return (
<div>
<h1>You have successfully logged in to the Admin portal!</h1>
</div>
    )
}

    }

    export default AdminHome;