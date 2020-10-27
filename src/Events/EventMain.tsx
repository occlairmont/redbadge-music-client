import React from "react";
import EventCreate from "./EventCreate";
import EventDisplay from "./EventDisplay";
import { Grid, Paper, Theme } from "@material-ui/core";
import { UserEvents } from "./EventInterface";
import EventEdit from "./EventEdit";
import {withStyles} from "@material-ui/styles"
import EventDateSearch from "./EventDateSearch";
import APIURL from '../helpers/environment';

const useStyles = (theme: Theme) => ({
  button: {
    width: "100%",
    justifyContent: "flex-end",
    paddingTop: 0,
    paddingRight: 0,
    paddingLeft: 0,
  },
})

export interface EventMainProps {
  token: string | null;
}

export interface EventMainState {
  eventData: UserEvents[] | undefined;
  eventUpdate: UserEvents;
  updateActive: boolean;
  filterActive: boolean;
}

class EventMain extends React.Component<EventMainProps, EventMainState> {
  constructor(props: EventMainProps) {
    super(props);
    this.state = {
      eventData: [], 
      eventUpdate: {},
      updateActive: false, 
      filterActive: true,
    };
  }

  fetchEvents = () => {
      const token = !this.props.token ? localStorage.getItem("token") : this.props.token
    fetch("${APIURL}/events/all", {
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

  updateEventView = (events: UserEvents[]) => {
    this.setState({eventData: events})
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

  changeFilter = () => {
    this.setState({filterActive: !this.state.filterActive})
  }

  // updateOff = () => {
  // this.setState({filterActive: false})
  // }


  componentDidMount() {
    this.fetchEvents();
  }

  render() {
    return (
      <div>
        <Grid >
          <Grid container item spacing={3}>
            <Grid item xs={12} sm={4}>
              <Paper >
                <EventCreate token={this.props.token} fetchEvents={this.fetchEvents} />
                <EventDateSearch token={this.props.token} eventData={this.updateEventView}/>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={8}>
                {this.state.eventData !== undefined ? (<EventDisplay token={this.props.token} fetchEvents={this.fetchEvents} updateEvent={this.updateEvent} updateOn={this.updateOn} userEvent={this.state.filterActive ? this.state.eventData.filter(row => row.hasAttended == true) : this.state.eventData} key={2} />) : (<></>)}  
                {this.state.updateActive ? <EventEdit token={this.props.token} updateEvent={this.state.eventUpdate} fetchEvent={this.fetchEvents} updateOff={this.updateOff} updateActive={this.state.updateActive}/> : <></>} 
            </Grid>
          </Grid>
        </Grid>
    </div>
    );
  }
}

export default withStyles(useStyles)(EventMain);
