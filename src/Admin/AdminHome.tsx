import React from 'react';
import { UserEvents } from "./AdminInterface";

export interface AdminHomeProps {
    token: string;
  }
  
  export interface AdminHomeState {
    eventData: UserEvents[] | undefined;
    eventUpdate: UserEvents | undefined;
    updateActive: boolean;
  }

class AdminHome extends React.Component<AdminHomeProps, AdminHomeState> {
    constructor(props: AdminHomeProps) {
      super(props);
      this.state = { eventData: [],
        eventUpdate: undefined,
        updateActive: false,  };
    }
  
//     onSubmit(e: any) {
//       e.preventDefault();

componentDidMount = () => {
  this.getInfo()
}

getInfo = () => {

  fetch(`http://localhost:3001/admin/eventinfo`, {
    method: "GET",
    headers: new Headers({
      "Content-Type": "application/json",
      Authorization: this.props.token,
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      this.setState({ eventData: data });
      console.log(data);

    })
}
  


render() {
    return (
<div>
<h1>You have successfully logged in to the Admin portal!</h1>

</div>
    )
}

    }

    export default AdminHome;



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