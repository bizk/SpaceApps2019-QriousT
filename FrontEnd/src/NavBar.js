import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import {red} from '@material-ui/core/colors';

const primary = red[500];

const useStyles = makeStyles(theme => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'block',
    width:'inherit',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  toolbar: {
    backgroundColor: "#d32f2f",
  },
  icon:{
    marginRight: "2vh",
  }
}));

export default function NavBar() {
  const classes = useStyles();

  return (
    <div className={classes.grow}>
      <AppBar position="static">
        <Toolbar className={classes.toolbar}>
          <img className={classes.icon} src={require("./resources/support_white_64.png")}/>
          <Typography className={classes.title} variant="h6">
            PVDS - Population Vulnerability Diagnosis System
          </Typography>
          <div className={classes.grow} />
          <Button variant="contained" color="primary">Generate Diagnosis</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
