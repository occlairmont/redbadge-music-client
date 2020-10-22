import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { TrackList, TrackResponse } from './MusicInterface';
// import { withStyles } from '@material-ui/styles';
import {Grid} from '@material-ui/core';
// import {cardspacing} from '@material-ui/core';

export interface MusicDisplayProps {
    message : TrackResponse
  
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

 function MusicDisplay(props: MusicDisplayProps) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
      <div>
          <Grid container>
          {props.message.message.body.track_list.map((trackList: TrackList, index: number) => (
          <Grid item xs={6} sm={6} className={classes.cardspacing} key={index}>
            <Card className={classes.root}>
              <CardContent>
                <Typography
                  className={classes.title}
                  color="textSecondary"
                  gutterBottom
                >
                  {trackList.track.artist_name}
                </Typography>
                <Typography variant="h5" component="h2">
                  be{bull}nev{bull}o{bull}lent
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
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </Grid>
            ))}:(<></>)
    </Grid>
    </div>
  );
}
export default MusicDisplay;