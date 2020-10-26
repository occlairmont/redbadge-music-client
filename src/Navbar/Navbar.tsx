import React from 'react';
import { Link } from "react-router-dom";
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
// import Search from './Search';
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginLeft: theme.spacing(2),
      color: 'white'
    },
    title: {
      flexGrow: 1,
    },
  }),
);
export default function ButtonAppBar(props: any) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static" color="secondary">
        <Toolbar>
          {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton> */}
          <Typography variant="h6" className={classes.title} component={Link} to="/" style={{textDecoration: 'none', color: 'white'}}>
            Red Badge
          </Typography>
         {/* {props.showSearch && props.token ? <Search  /> : <></>} */}
          <Button className={classes.menuButton} component={Link} to="/music">Music</Button>
          <Button className={classes.menuButton} component={Link} to="/events">Events</Button>
          <Button className={classes.menuButton} component={Link} to="/tables">MusicReviews</Button>
         {props.token && <Button color="default" style={{marginLeft: '1em'}} 
          onClick={props.clickLogout}>Logout</Button>}
        </Toolbar>
      </AppBar>
    </div>
  );
}