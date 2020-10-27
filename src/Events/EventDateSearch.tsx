import React from 'react';
import DateFnsUtils from '@date-io/date-fns';
import { Button, FormControlLabel, Grid, Switch, Typography } from '@material-ui/core';
import { KeyboardDatePicker,MuiPickersUtilsProvider } from '@material-ui/pickers';
import { UserEvents } from './EventInterface';
import APIURL from '../helpers/environment';

export interface EventDateSearchProps {
    token: string | null;
    eventData: (event: UserEvents[]) => void;
    // filterOff(): void;
}
 
export interface EventDateSearchState {
    startDate: string | null | undefined;
    endDate: string | null | undefined;
    date: string;
    // hasAttended: boolean;
}
 
class EventDateSearch extends React.Component<EventDateSearchProps, EventDateSearchState> {
    constructor(props: EventDateSearchProps) {
        super(props);
        this.state = {  
            startDate: "",
            endDate: "",
            date: "",
            // hasAttended: false,
         };
    }

    formatDate = (date:string) => {
        let convertedDate = new Date(date).toISOString().split("T")[0];
        return convertedDate;
    }

    onSubmit = () =>{
        const start = typeof this.state.startDate == "string" && this.formatDate(this.state.startDate)
        const end = typeof this.state.endDate == "string" && this.formatDate(this.state.endDate)
        fetch(`${APIURL}/events/search-dates`, {
            method: "POST",
            body: JSON.stringify({
                startDate: start,
                endDate: end,
            }),
            headers: new Headers ({
                "Content-Type": "application/json",
                "Authorization" : this.props.token !== null ? this.props.token : ""
            })
        })
        .then((res) => res.json())
        .then((eventData) => {
            console.log(eventData);
            this.props.eventData(eventData);
        })
    }

    render() { 
        return ( 
            <div style={{padding: 15}}>
                <MuiPickersUtilsProvider utils={DateFnsUtils} >
                    <Grid container justify="center" style={{backgroundColor: 'lightgrey'}}>
                        <Typography>Start</Typography>
                        <KeyboardDatePicker
                            variant="inline"
                            format="MM/dd/yyyy"
                            margin="normal"
                            // label="Start"
                            value={this.state.startDate}
                            onChange={(date: any, value) =>{this.setState({startDate: value})}}
                            KeyboardButtonProps={{
                            'aria-label': 'change date',
                            }}
                         />
                    </Grid>
                    <Grid container justify="center" style={{backgroundColor: 'lightgrey'}}>
                        <Typography>End</Typography>
                        <KeyboardDatePicker
                            variant="inline"
                            format="MM/dd/yyyy"
                            margin="normal"
                            // label="End"
                            value={this.state.endDate}
                            onChange={(date: any, value) => {this.setState({endDate: value})}}
                            KeyboardButtonProps={{
                            'aria-label': 'change date',
                            }}
                         />
                    </Grid>
                </MuiPickersUtilsProvider>
                <Button style={{backgroundColor: 'lightgrey', justifyContent: "center"}} onClick={this.onSubmit} >Search</Button>
            </div>
         );
    }
}
 
export default EventDateSearch;
