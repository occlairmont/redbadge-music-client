import React from "react";
import EventCreate from "./EventCreate";
import EventDisplay from "./EventDisplay";
import { Grid, Paper } from "@material-ui/core";
import { UserEvents } from "./EventInterface";

export interface EventMainProps {
  // eventsURL: string;
  token: string | null;
}

export interface EventMainState {
  eventData: UserEvents[] | undefined;
  eventUpdate: UserEvents | undefined;
  updateActive: boolean;
}

class EventMain extends React.Component<EventMainProps, EventMainState> {
  constructor(props: EventMainProps) {
    super(props);
    this.state = {
      eventData: [],
      eventUpdate: undefined,
      updateActive: false, 
    };
  }

  fetchEvents = () => {
      const token = !this.props.token ? localStorage.getItem("token") : this.props.token
    fetch("http://localhost:3001/events/all", {
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: token !== null ? token : "",
      }),
    })
      .then((res) => res.json())
      .then((json: UserEvents[]) => {
        console.log(json);
        this.setState({
          eventData: json,
        });
      });
  }

  updateEvent = (event: UserEvents) => {
    this.setState({eventUpdate: event})
  }

  updateOn = () => {
      this.setState({updateActive: true})
  }

  updateOff = () => {
    this.setState({updateActive: false})
  }


  componentDidMount() {
    this.fetchEvents();
  }

  render() {
    return (
      <div>
        <Grid>
          <Grid container >
            <Grid xs={12} sm={5}>
              <Paper >
                <EventCreate token={this.props.token} fetchEvents={this.fetchEvents} />
              </Paper>
            </Grid>
            <Grid xs={12} sm={7}>
                {this.state.eventData !== undefined ? (<EventDisplay token={this.props.token} fetchEvents={this.fetchEvents} userEvent={this.state.eventData} key={2} />) : (<></>)}  
            </Grid>
          </Grid>
        </Grid>
    </div>
    );
  }
}

export default EventMain;
