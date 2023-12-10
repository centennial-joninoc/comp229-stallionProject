import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import auth from '../lib/auth-helper'
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import teamLogoImg from './../assets/images/CarBnb.jpg';
import Grid from '@material-ui/core/Grid'
   
const useStyles = makeStyles(theme => ({
  card: {
    width: '90%',
    margin: 'auto',
    backgroundColor: '#eae6e5',
    marginTop: theme.spacing(5),
  },
  title: {
    padding: theme.spacing(3, 2.5, 2),
    color: theme.palette.openTitle,
  },
  media: {
    minHeight: 700,
    backgroundSize: 'cover'
  },
  content: {
    textAlign: 'center',
  },
  regBtn: {
    height: 50,
    width: 300,
    margin: 10,
    backgroundColor: '#5b9279',
    color: '#fff'
  },
  browseBtn: {
    height: 50,
    width: 300,
    margin: 10
  }
}));


export default function Home(){ 
const classes = useStyles()
return (
  <Grid container spacing={2}>
  <Grid item xs={12}>
    <Card className={classes.card}>
    <CardMedia className={classes.media} image={teamLogoImg} title="Team Logo"/>
  </Card>
  </Grid>
  <Grid item xs={12} container direction="row" justifyContent="center" alignItems="center">
    { 
      auth.isAuthenticated() && <Button
      className={classes.regBtn}
      variant="contained"
      href="/addCar">
        Register your car
    </Button>
    }
    { 
      !auth.isAuthenticated() && <Button
      className={classes.regBtn}
      variant="contained"
      href="/signup">
        Sign Up
    </Button>
    }
    <Button className={classes.browseBtn} variant="outlined" size="large" href="/listCar">Browse cars</Button> 
  </Grid>
</Grid>

)
}
