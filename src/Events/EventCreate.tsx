import React from "react";
import { Button, FormGroup, Input } from "@material-ui/core/";

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
    };
  }

  onSubmit() {
    const token = !this.props.token ? localStorage.getItem("token") : this.props.token
    fetch("http://localhost:3001/events/create", {
      method: "POST",
      body: JSON.stringify({
        date: this.state.date,
        artist: this.state.artist,
        location: this.state.location,
        time: this.state.time,
        link: this.state.link,
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
        });
        this.props.fetchEvents();
      });
  }

  formatDate = (dateTime: any) => {
    let date = new Date(dateTime)
    return date.toLocaleString().split(",")[0]
  }

  render() {
    return (
      <form>
        <h3>
          Log the next concert.
        </h3>
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
        
        <Button onClick={() => this.onSubmit()} variant="outlined">
          Save
        </Button>
      </form>
    );
  }
}

export default EventCreate;

