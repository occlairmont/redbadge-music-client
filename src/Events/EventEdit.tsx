import React from "react";
import { UserEvents } from "./EventInterface";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
// import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
// import userEvent from "@testing-library/user-event";
import Typography from "@material-ui/core/Typography";
// import { Checkbox, FormControlLabel } from "@material-ui/core";


export interface EventEditProps {
    token: string | null;
    fetchEvent(): void;
    updateEvent: UserEvents;
    updateOff(): void;
    updateActive: boolean;
}
 
export interface EventEditState {
    date: string | undefined;
    artist: string | undefined;
    location: string | undefined;
    time: string | undefined;
    link: string | undefined;
    hasAttended: boolean | undefined;
}
 
class EventEdit extends React.Component<EventEditProps, EventEditState> {
    constructor(props: EventEditProps) {
        super(props); 
        this.state = { 
            date: this.props.updateEvent.date,
            artist: this.props.updateEvent.artist,
            location: this.props.updateEvent.location,
            time: this.props.updateEvent.time,
            link: this.props.updateEvent.link,
            hasAttended: this.props.updateEvent.hasAttended,
        };
    }

    onSubmit(){
        fetch(`http://localhost:3001/events/update/${this.props.updateEvent.id}`, {
        method: "PUT",
        body: JSON.stringify ({
            date: this.state.date,
            artist: this.state.artist,
            location: this.state.location,
            time: this.state.time,
            link: this.state.link,
            hasAttended: this.state.hasAttended
        }),
        headers: new Headers({
            "Content-Type": "application/json",
            "Authorization" : this.props.token !== null ? this.props.token : "",
          }),
        })
        .then((res)=> {
            this.props.fetchEvent();
            this.handleClose();
        })
    }

    handleClose = () => {
        this.props.updateOff();
    };

    formatDate = (dateTime: any) => {
        let date = new Date(dateTime)
        return date.toLocaleString().split(",")[0]
    }

    render() { 
        return ( 
        <div>
          <Dialog open={this.props.updateActive} onClose={this.handleClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">Update Event</DialogTitle>
            <DialogContent>
              <Typography>
                    Artist
              </Typography>
              <TextField
                autoFocus
                margin="dense"
                id="name"
                type="text"
                onChange={(e) => this.setState({artist: e.target.value})}
                placeholder="Artist"
                value={this.state.artist}
                fullWidth
              />
              <TextField
                autoFocus
                margin="dense"
                id="name"
                type="text"
                onChange={(e) => this.setState({date: e.target.value})}
                placeholder="date"
                value={this.formatDate(this.state.date)}
                fullWidth
              />
                <TextField
                autoFocus
                margin="dense"
                id="name"
                type="text"
                onChange={(e) => this.setState({time: e.target.value})}
                placeholder="Artist"
                value={this.state.time}
                fullWidth
              />
              <TextField
                autoFocus
                margin="dense"
                id="name"
                type="text"
                onChange={(e) => this.setState({location: e.target.value})}
                placeholder="Artist"
                value={this.state.location}
                fullWidth
              />
              <TextField
                autoFocus
                margin="dense"
                id="name"
                type="text"
                onChange={(e) => this.setState({link: e.target.value})}
                placeholder="Artist"
                value={this.state.link}
                fullWidth
              />
                {/* <FormControlLabel
                control={<Checkbox checked={this.state.hasAttended} onChange={() =>{this.setState({hasAttended: !this.state.hasAttended})}} name="Attended" />}
                label="Attended?"
                /> */}
            </DialogContent>
            <DialogActions>
              <Button onClick={this.handleClose} color="primary">
                Cancel
              </Button>
              <Button onClick={() => this.onSubmit()} color="primary">
                Save
              </Button>
            </DialogActions>
          </Dialog>
       </div> );
    }
}
 
export default EventEdit;
