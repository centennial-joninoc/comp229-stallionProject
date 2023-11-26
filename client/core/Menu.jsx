import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import HomeIcon from '@material-ui/icons/Home'
import PersonAddIcon from '@material-ui/icons/PersonAdd'
import BorderColorIcon from '@material-ui/icons/BorderColor';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import WebIcon from '@material-ui/icons/Web';
import PersonIcon from '@material-ui/icons/Person';
import InputIcon from '@material-ui/icons/Input'
import Button from '@material-ui/core/Button'
import auth from '../lib/auth-helper'
import Grid from '@material-ui/core/Grid'
import { Link, useNavigate, useLocation } from 'react-router-dom';


const isActive = (location, path) => {
  return location.pathname === path ? { color: '#ff4081' } : { color: '#ffffff' };
};
export default function Menu(){ 
  const navigate = useNavigate();
  const location = useLocation();

  return (
  <AppBar position="static">
    <Toolbar>
      <Typography variant="h6" color="inherit">
        CarBNB
      </Typography>
      <Link to="/">
        <IconButton aria-label="Home" style={isActive(location, "/")}>
          <HomeIcon/>
        </IconButton>
      </Link>
      {/* <Link to="/users">
        <Button style={isActive(location, "/users")}>Users</Button>
      </Link> */}
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
          <Link to="/addCar">
            <Button style={isActive(location, "/addCar")}><BorderColorIcon/>Car Register</Button>
          </Link>
          <Link to="/listCar">
            <Button style={isActive(location, "/listCar")}><WebIcon/>Browse</Button>
          </Link>
          <Link to={"/user/" + auth.isAuthenticated().user._id}>
            <Button style={isActive(location, "/user/" + auth.isAuthenticated().user._id)}><PersonIcon/>My Profile</Button>
          </Link>
          <Button color="inherit" onClick={() => {
               auth.clearJWT(() => 
               {
                navigate('/');
                window.location.reload();
               });

            }}><ExitToAppIcon/>Sign out</Button>
        </span>)
      }
    </Toolbar>
  </AppBar>
);
};


