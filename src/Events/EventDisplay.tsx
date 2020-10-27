import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import {UserEvents} from "./EventInterface";
import { Accordion, AccordionDetails, AccordionSummary, Grid } from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import APIURL from '../helpers/environment';

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
  button: {
    width: "100%",
    justifyContent: "flex-end",
    paddingTop: 0,
    paddingRight: 0,
    paddingLeft: 0,
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
    fetch(`${APIURL}/events/delete/${event.id}`,{
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
            <Card className={classes.root} style={{backgroundColor: 'lightsalmon'}}>
              <CardContent> 
                <Typography variant="h4" component="h2" gutterBottom>
                  {userEvent.artist}                  
                </Typography>
                <hr/>
                <Typography
                  variant="body1" component="p">
                   Where: {userEvent.location}
                </Typography>
                <Typography variant="body1" component="p">
                  Date: {formatDate(userEvent.date)}
                </Typography>
                <Typography variant="body1" component="p">
                  Time: {userEvent.time}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" href={userEvent.link}>Buy Tickets</Button>
              </CardActions>
              <Accordion style={{backgroundColor: 'lightsalmon'}}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header">
                </AccordionSummary>
                <AccordionDetails>
                  <Button className={classes.button} onClick={()=>{props.updateEvent(userEvent); props.updateOn()}}>Update</Button>
                  <Button className={classes.button} onClick={()=>{deleteEvent(userEvent)}}>Delete</Button>
                </AccordionDetails>
                </Accordion>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
