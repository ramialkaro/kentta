import React from 'react';
import './App.css';
import Routes from './views/routes'
/* 
import Profile from './profile';
import Team from './team';
import Map from './map';
import { makeStyles } from '@material-ui/core/styles';
import { BrowserRouter as Router, Switch, Route, Link, useRouteMatch } from 'react-router-dom';
import { AppBar, Toolbar, IconButton } from '@material-ui/core'
import { SportsFootball as FootBallIcon, Person as PersonIcon, Place as PlaceIcon } from '@material-ui/icons'
 */
/* const useStyles = makeStyles((theme) => ({
  paper: {
    paddingBottom: 50,
  },
  appBar: {
    top: 'auto',
    bottom: 0,
  },
  link: {
    color: theme.palette.primary
  },
  grow: {
    flexGrow: 0.5,
  }
})); */


function App() {
  /*  const classes = useStyles(); */
  return (

    <Routes/>
    /*   <Router>
  
  
        <AppBar position="fixed" color="inherit" className={classes.appBar}>
          <Toolbar >
  
            <Link to="/team">
              <IconButton edge="start" color="inherit" aria-label="add">
                <FootBallIcon />
              </IconButton>
            </Link>
  
            <div className={classes.grow} />
  
            <Link to="/">
              <IconButton color="inherit" aria-label="add">
                <PlaceIcon />
              </IconButton>
            </Link>
            <div className={classes.grow} />
  
            <Link to="/profile">
              <IconButton edge="end" color="inherit" aria-label="person">
                <PersonIcon />
              </IconButton>
            </Link>
  
          </Toolbar>
        </AppBar>
  
        <Switch>
          <Route exact path="/" component={Map} />
          <Route path="/profile" component={Profile} />
          <Route path="/team" component={Team} />
        </Switch>
      </Router> */
  );
}

export default App;
