import React from "react";
import { Button, FormGroup, Input } from "@material-ui/core/";
import { UserEvents } from "./EventInterface";

export interface EventCreateProps {
  token: string | null;
  userEvent: UserEvents[];
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
    fetch("http://localhost:3001/events/create", {
      method: "POST",
      body: JSON.stringify({
        date: "",
        artist: "",
        location: "",
        time: "",
        link: "",
      }),
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: this.props.token !== null ? this.props.token : "",
      }),
    })
      .then((res) => res.json())
      .then((postData) => {
        console.log(postData);
        this.setState({
          date: "",
          artist: "",
          location: "",
          time: "",
          link: "",
        });
      });
  }

  handleSubmit(){
    this.onSubmit();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h4>
          test create form
        </h4>
        <FormGroup>
          <Input
            onChange={(e) => this.setState({date: e.target.value})}
            placeholder="Date"
          />
        </FormGroup>
        <FormGroup>
          <Input
            onChange={(e) => this.setState({artist: e.target.value})}
            placeholder="Artist"
          />
        </FormGroup>
        <Button type="submit" variant="outlined">
          Save
        </Button>
      </form>
    );
  }
}

export default EventCreate;

