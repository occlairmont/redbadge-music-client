import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
// import CardHeader from '@material-ui/core/CardHeader';
// import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
// import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
<<<<<<< HEAD
import { TrackList, TrackResponse } from './MusicInterface';
// import { withStyles } from '@material-ui/styles';
import {Grid} from '@material-ui/core';
// import {cardspacing} from '@material-ui/core';
=======
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// import MoreVertIcon from '@material-ui/icons/MoreVert';
import { TrackList, TrackResponse } from './MusicInterface';
import { Grid } from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';




export interface MusicDisplayProps {
  message : TrackResponse
}

>>>>>>> 67ceeff5f642a8f17e754e0efb23a95a3dac27fc

export interface MusicDisplayProps {
  message : TrackResponse
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    avatar: {
      backgroundColor: red[500],
    },
    cardspacing: {
      padding: "1%"
  }
  }),
);

function MusicDisplay(props: MusicDisplayProps) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };


function MusicDisplay(props: MusicDisplayProps) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
<<<<<<< HEAD
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
=======
    <div style={{backgroundColor: 'ThreeDDarkShadow'}}>
      <Grid container>
          {props.message.message.body.track_list.map((trackList: TrackList, index: number) => (
          <Grid item xs={4} sm={4} className={classes.cardspacing} key={index}>
    <Card className={classes.root} style={{backgroundColor: 'darksalmon'}}>
      <CardContent>
        <Typography variant="body2" color='textPrimary' component="p">
        {trackList.track.artist_name}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
        {trackList.track.album_name}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
        {trackList.track.track_name}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
        <a href ={trackList.track.track_edit_url} target='blank'>Click here for Lyrics</a>
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography>Ratings/Review:</Typography>

         <Rating name="size-large" defaultValue={2} size="large" />

        </CardContent>
      </Collapse>
    </Card>
>>>>>>> 67ceeff5f642a8f17e754e0efb23a95a3dac27fc
    </Grid>
          ))}
          </Grid>
    </div>
  );
}

export default MusicDisplay;