import React from "react";
// import Link from '@material-ui/core/Link';
// import { makeStyles } from '@material-ui/core/styles';
// import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
// import "../App.css"


export default function Footer() {
    // const classes = useStyles();
    return (
      <Typography variant="body2" color="textSecondary" align="center" style={{color: 'grey'}}>
        {'Copyright © '}
          Red Badge Music
        2020
        {' '}
      </Typography>
    );
  }
