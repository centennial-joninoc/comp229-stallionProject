import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import HomeIcon from '@material-ui/icons/Home'
import PersonAddIcon from '@material-ui/icons/PersonAdd'
import InputIcon from '@material-ui/icons/Input'
import Button from '@material-ui/core/Button'
import auth from '../lib/auth-helper'
import Grid from '@material-ui/core/Grid'
import { Link, useNavigate, useLocation } from 'react-router-dom';


const isActive = (location, path) => {
  return location.pathname === path ? { color: '#5b9279' } : { color: '#12130f' };
};
export default function Menu(){ 
  const navigate = useNavigate();
  const location = useLocation();

  return (
  <AppBar position="static">
    <Toolbar>
    <Grid container>
      <Grid item xs={2}>
        <Typography variant="h3" color="12130f" fontFamily="Merriweather">
          CarBNB
        </Typography>
      </Grid>
      <Grid item xs={10} container direction="row" justifyContent="flex-end" alignItems="center">
        <Link to="/">
          <IconButton aria-label="Home" style={isActive(location, "/")}>
            <HomeIcon/>
          </IconButton>
        </Link>
        <Link to="/users">
          <Button style={isActive(location, "/users")}>Users</Button>
        </Link>
        <Link to="/addCar">
          <Button style={isActive(location, "/addCar")}>Car Register</Button>
        </Link>
        {
          !auth.isAuthenticated() && (<span>
            <Link to="/signin">
              <Button style={isActive(location, "/signin")}><InputIcon/> Sign In
              </Button>
            </Link>
            <Link to="/signup">
              <Button style={isActive(location, "/signup")}><PersonAddIcon/> Sign up
              </Button>
            </Link>

          </span>)
        }
        {
          auth.isAuthenticated() && (<span>
            <Link to={"/user/" + auth.isAuthenticated().user._id}>
              <Button style={isActive(location, "/user/" + auth.isAuthenticated().user._id)}>My Profile</Button>
            </Link>
            <Button color="inherit" onClick={() => {
                auth.clearJWT(() => navigate('/'));
              }}>Sign out</Button>
          </span>)
        }
      </Grid>
    </Grid>

 
    </Toolbar>
  </AppBar>
);
};


