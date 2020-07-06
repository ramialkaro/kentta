import React from 'react'
import {AppBar, Toolbar, IconButton} from '@material-ui/core'
import { SportsFootball as FootBallIcon, Person as PersonIcon, Place as PlaceIcon } from '@material-ui/icons'
import Link from 'react-router-dom'







const BottomBar =()=>{
    return(
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
    )
}

export default BottomBar