import React from 'react';
import { UserEvents } from "./AdminInterface";

export interface AdminHomeProps {
    token: string;
  }
  
  export interface AdminHomeState {
    eventData: any | undefined;
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

getInfo = () => {

  fetch(`http://localhost:3001/admin/eventinfo`, {
    method: "GET",
    headers: new Headers({
      "Content-Type": "application/json",
      Authorization: this.props.token,
    }),
  })
    .then((res) => res.json())
    .then((json: AdminResponseObject) => {
      this.setState({ eventData: json });
      console.log(json);

    })
}
  
componentDidMount = () => {
  this.getInfo()
}

render() {
    return (
<div>
<h1>You have successfully logged in to the Admin portal!</h1>


{this.state.eventData.map((events: AdminResponseObject) => {
  return (
    <p>{events.artist}</p>
  )
} )}

</div>

    )
}

    }

    export default AdminHome;

    export interface AdminResponseObject {
      id: number;
      date: Date;
      artist: string;
      location: string;
      time: string;
      link: string;
      hasAttended: boolean;
      owner: number;
      createdAt: Date;
      updatedAt: Date;
      email: string;
      password: string;
  }
