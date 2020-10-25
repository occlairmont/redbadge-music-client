import React from 'react';
import { UserEvents } from './EventInterface';
// import UserEvents from './EventInterface'

export interface EventDateSearchProps {
    token: string | null;
    eventData: UserEvents[];
}
 
export interface EventDateSearchState {
    // startDate: string;
    // endDate: string;
    date: string;
}
 
class EventDateSearch extends React.Component<EventDateSearchProps, EventDateSearchState> {
    constructor(props: EventDateSearchProps) {
        super(props);
        this.state = {  
            // startDate: "",
            // endDate: "",
            date: ""
         };
    }

    onSubmit(){
        fetch("http://localhost:3001/events/search-dates", {
            method: "POST",
            body: JSON.stringify({
                startDate: this.state.date,
                endDate: this.state.date,
            }),
            headers: new Headers ({
                "Content-Type": "application/json",
                "Authorization" : this.props.token !== null ? this.props.token : ""
            })
        })
        .then((res) => res.json())
        .then((eventData) => {
            console.log(eventData);
            this.props.eventData;
        })
    }

    render() { 
        return ( 
            <div>
                
            </div>
         );
    }
}
 
export default EventDateSearch;

// import 'date-fns';
// import React from 'react';
// import Grid from '@material-ui/core/Grid';
// import DateFnsUtils from '@date-io/date-fns';
// import {
//   MuiPickersUtilsProvider,
//   KeyboardTimePicker,
//   KeyboardDatePicker,
// } from '@material-ui/pickers';

// export default function MaterialUIPickers() {
//   // The first commit of Material-UI
//   const [selectedDate, setSelectedDate] = React.useState<Date | null>(
//     new Date('2014-08-18T21:11:54'),
//   );

//   const handleDateChange = (date: Date | null) => {
//     setSelectedDate(date);
//   };

//   return (
//     <MuiPickersUtilsProvider utils={DateFnsUtils}>
//       <Grid container justify="space-around">
//         <KeyboardDatePicker
//           disableToolbar
//           variant="inline"
//           format="MM/dd/yyyy"
//           margin="normal"
//           id="date-picker-inline"
//           label="Date picker inline"
//           value={selectedDate}
//           onChange={handleDateChange}
//           KeyboardButtonProps={{
//             'aria-label': 'change date',
//           }}
//         />
//         <KeyboardDatePicker
//           margin="normal"
//           id="date-picker-dialog"
//           label="Date picker dialog"
//           format="MM/dd/yyyy"
//           value={selectedDate}
//           onChange={handleDateChange}
//           KeyboardButtonProps={{
//             'aria-label': 'change date',
//           }}
//         />
//         <KeyboardTimePicker
//           margin="normal"
//           id="time-picker"
//           label="Time picker"
//           value={selectedDate}
//           onChange={handleDateChange}
//           KeyboardButtonProps={{
//             'aria-label': 'change time',
//           }}
//         />
//       </Grid>
//     </MuiPickersUtilsProvider>
//   );
// }
