import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
// import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { TrackList, TrackResponse } from './MusicInterface';
import {Grid} from '@material-ui/core';

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
//   const bull = <span className={classes.bullet}>•</span>;

  return (
      <div>
          <Grid container>
          {props.message.message.body.track_list.map((trackList: TrackList, index: number) => (
          <Grid item xs={6} sm={6} className={classes.cardspacing} key={index}>
            <Card className={classes.root}>
              <CardContent>
                <Typography
                 variant="h5" component="h2"
                >
                  {trackList.track.track_name}
                </Typography>
                <Typography color='textSecondary'>
                 {trackList.track.album_name}
                </Typography>
                <Typography className={classes.pos}>
                 {trackList.track.artist_name}
                </Typography>
                <Typography variant="body2" component="p">
                <a href ={trackList.track.track_edit_url}>Click here for Lyrics</a>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
    </Grid>
    </div>
  );
}
export default MusicDisplay;