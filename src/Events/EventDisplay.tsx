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
  userEvent: UserEvents[];
  key: number;
  fetchEvents(): void;
  token: string | null;
  updateEvent: (event: UserEvents) => void;
  updateOn(): void;
}

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

  const deleteEvent = (event: UserEvents) =>{
    fetch(`http://localhost:3001/events/delete/${event.id}`,{
    method: "DELETE",
    headers: new Headers({
        "Content-Type": "application/json",
        "Authorization" : props.token !== null ? props.token : "",
      }),
    })
    .then(()=> props.fetchEvents())
  };

  function formatDate(dateTime: any) {
    let date = new Date(dateTime)
    return date.toLocaleString().split(",")[0]
  }

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
                <Typography variant="body2" component="p">
                  {formatDate(userEvent.date)}
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                  {userEvent.time}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Buy Tickets</Button>
              </CardActions>
              <hr/>
                <Button onClick={()=>{props.updateEvent(userEvent); props.updateOn()}}>Update</Button>
                <Button onClick={()=>{deleteEvent(userEvent)}}>Delete</Button>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

