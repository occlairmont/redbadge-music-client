import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { EventResponse, UserEvents } from "./EventInterface";

export interface EventDisplayProps {
//   eventsURL: string;
    userEvent: UserEvents;
}

export interface EventDisplayState {
}

class EventDisplay extends React.Component<EventDisplayProps,EventDisplayState> {
  constructor(props: EventDisplayProps) {
    super(props);
    this.state = {
      eventData: {},
    };
  }

//   componentDidMount(){
//       fetch("http://localhost:3001/events/delete" , {

//       })
//   }


  render() {
    return (
      <div>
          <p>{this.props.userEvent.artist}</p>
      </div>
    );
  }
}

export default EventDisplay;
