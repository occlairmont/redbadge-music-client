import React from 'react';
import DateFnsUtils from '@date-io/date-fns';
import { Button, Grid, Typography } from '@material-ui/core';
import { KeyboardDatePicker,MuiPickersUtilsProvider } from '@material-ui/pickers';
import { UserEvents } from './EventInterface';
import APIURL from '../helpers/environment';

export interface EventDateSearchProps {
    token: string | null;
    eventData: (event: UserEvents[]) => void;
}
 
export interface EventDateSearchState {
    startDate: string | null | undefined;
    endDate: string | null | undefined;
    date: string;
}
 
class EventDateSearch extends React.Component<EventDateSearchProps, EventDateSearchState> {
    constructor(props: EventDateSearchProps) {
        super(props);
        this.state = {  
            startDate: "",
            endDate: "",
            date: ""
         };
    }

    formatDate = (date:string) => {
        let convertedDate = new Date(date).toISOString().split("T")[0];
        return convertedDate;
    }

    onSubmit = () =>{
        const start = typeof this.state.startDate == "string" && this.formatDate(this.state.startDate)
        const end = typeof this.state.endDate == "string" && this.formatDate(this.state.endDate)
        fetch("${APIURL}/events/search-dates", {
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
            <div>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <Grid container justify="space-around">
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
                    <Grid container justify="space-around">
                        <KeyboardDatePicker
                            variant="inline"
                            format="MM/dd/yyyy"
                            margin="normal"
                            label="End"
                            value={this.state.endDate}
                            onChange={(date: any, value) => {this.setState({endDate: value})}}
                            KeyboardButtonProps={{
                            'aria-label': 'change date',
                            }}
                         />
                    </Grid>
                </MuiPickersUtilsProvider>
                <Button onClick={this.onSubmit}>Search</Button>
            </div>
         );
    }
}
 
export default EventDateSearch;
