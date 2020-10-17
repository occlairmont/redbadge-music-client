import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import {UserEvents} from "./EventInterface";
import { Grid } from "@material-ui/core";

export interface EventDisplayProps {
  //   eventsURL: string;
  userEvent: UserEvents[];
  key: number;
}
// export interface EventDisplayState {
// }
// class EventDisplay extends React.Component<EventDisplayProps,EventDisplayState> {
//   constructor(props: EventDisplayProps) {
//     super(props);
//     this.state = {
//     };
//   }
// //   componentDidMount(){
// //       fetch("http://localhost:3001/events/delete" , {
// //       })
// //   }
//   render() {
//     return (
//        <div>
//           <Card>
//               <CardContent>{this.props.userEvent.artist}</CardContent>
//           </Card>
//       </div>
//     );
//   }
// }
// export default EventDisplay;
// import React from 'react';
const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  cardspacing: {
      padding: "1%"
  }
});
export default function EventDisplay(props: EventDisplayProps) {
  const classes = useStyles();
  return (
    <div>
      <Grid container>
        {props.userEvent.map((userEvent: UserEvents, index: number) => (
          <Grid item xs={6} sm={6} className={classes.cardspacing} key={index}>
            <Card className={classes.root}>
              <CardContent>
                <Typography
                  className={classes.title}
                  color="textSecondary"
                  gutterBottom>
                </Typography>
                <Typography variant="h5" component="h2">
                  {userEvent.artist}                  
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                  adjective
                </Typography>
                <Typography variant="body2" component="p">
                  well meaning and kindly.
                  <br />
                  {'"a benevolent smile"'}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Buy Tickets</Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}