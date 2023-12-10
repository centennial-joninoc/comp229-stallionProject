/*import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import unicornbikeImg from './../assets/images/unicornbike.jpg'

const useStyles = makeStyles(theme => ({ 
card: {
maxWidth: 600, 
margin: 'auto',
marginTop: theme.spacing(5) 
},
title: {
padding:`${theme.spacing(3)}px ${theme.spacing(2.5)}px 
${theme.spacing(2)}px`,
color: theme.palette.openTitle 
},
media: { 
minHeight: 400
} 
}))*/

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import unicornbikeImg from './../assets/images/unicornbikeImg.jpg';
import teamLogoImg from './../assets/images/CarBnb.jpg';
import { Link } from 'react-router-dom';
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
    minHeight: 900,
    backgroundSize: 'cover'
  },
  content: {
    textAlign: 'center',
  },
  regBtn: {
    height: 70,
    width: 300,
    margin: 10,
    backgroundColor: '#5b9279',
    color: '#fff'
  },
  browseBtn: {
    height: 70,
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
    <Button className={classes.regBtn} variant="contained" href="/addCar">Register your car</Button>
    <Button className={classes.browseBtn} variant="outlined" size="large" href="/listCar">Browse cars</Button> 
  </Grid>
</Grid>

)
}

/*const MyComponent = () => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography variant="h6" className={classes.title}>
          Card Title
        </Typography>
        <CardMedia
          className={classes.media}
          image={unicornbikeImg}
          title="Unicorn Bike"
        />
        <Typography variant="body2" component="p">
          Card content goes here.
        </Typography>
      </CardContent>
    </Card>
  );
};

export default MyComponent;*/

