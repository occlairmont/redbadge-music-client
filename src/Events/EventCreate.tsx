import React from "react";
import { Button, Checkbox, FormControlLabel, FormGroup, Input, Accordion, AccordionSummary, AccordionDetails, Typography } from "@material-ui/core/";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import APIURL from '../helpers/environment';

export interface EventCreateProps {
  token: string | null;
  fetchEvents(): void;
}

export interface EventCreateState {
  date: string;
  artist: string;
  location: string;
  time: string;
  link: string;
  hasAttended: boolean;
}

class EventCreate extends React.Component<EventCreateProps, EventCreateState> {
  constructor(props: EventCreateProps) {
    super(props);
    this.state = {
      date: "",
      artist: "",
      location: "",
      time: "",
      link: "",
      hasAttended: true,
    };
  }

  onSubmit() {
    const token = !this.props.token ? localStorage.getItem("token") : this.props.token
    fetch("$(APIURL}/events/create", {
      method: "POST",
      body: JSON.stringify({
        date: this.state.date,
        artist: this.state.artist,
        location: this.state.location,
        time: this.state.time,
        link: this.state.link,
        hasAttended: this.state.hasAttended,
      }),
      headers: new Headers({
        "Content-Type": "application/json",
        "Authorization": token !== null ? token : "",
      }),
    })
      .then((res) => res.json())
      .then((postData) => {
        console.log(postData);
        this.setState({
          date: this.state.date,
          artist: this.state.artist,
          location: this.state.location,
          time: this.state.time,
          link: this.state.link,
          hasAttended: this.state.hasAttended,
        });
        this.props.fetchEvents();
      });
  }

  formatDate = (dateTime: any) => {
    let date = new Date(dateTime)
    return date.toLocaleString().split(",")[0]
  }

  // handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
  //   this.setState({this.state.hasAttended, [e.target.value]: e.target.checked})
  // }

  render() {
    return (
      <div>
        <Accordion style={{backgroundColor: 'lightgrey'}}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header">
            <Typography variant="h5" component="h2">Create Event</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <form>
              <span>
                Log your next event here. Enter as much information as you need.
              </span>
              <br/>
              <FormGroup>
                <Input
                  type="text"
                  onChange={(e) => this.setState({date: e.target.value})}
                  placeholder="MM/DD/YYYY"
                  value={this.state.date}
                />
              </FormGroup>
              <FormGroup>
                <Input
                  type="text"
                  onChange={(e) => this.setState({time: e.target.value})}
                  placeholder="Time"
                  value={this.state.time}
                />
              </FormGroup>
              <FormGroup>
                <Input
                  type="text"
                  onChange={(e) => this.setState({artist: e.target.value})}
                  placeholder="Artist"
                  value={this.state.artist}
                />
              </FormGroup>
              <FormGroup>
                <Input
                  type="text"
                  onChange={(e) => this.setState({location: e.target.value})}
                  placeholder="Location"
                  value={this.state.location}
                />
              </FormGroup>
              <FormGroup>
                <Input
                  onChange={(e) => this.setState({link: e.target.value})}
                  placeholder="Link for Tickets"
                  value={this.state.link}
                />
              </FormGroup>
              {/* <FormControlLabel
              control={<Checkbox checked={this.state.hasAttended} onChange={() =>{this.setState({hasAttended: !this.state.hasAttended})}} name="Attended" />}
              label="Attended?"
              /> */}
              <br/>
              <Button onClick={() => this.onSubmit()} variant="outlined">
                Save
              </Button>
            </form>
          </AccordionDetails>
        </Accordion>
      </div>
    );
  }
}

export default EventCreate;