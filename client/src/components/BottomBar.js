import React from 'react'
import { AppBar, Toolbar, IconButton, Grid } from '@material-ui/core'
import { SportsFootball as FootBallIcon, Person as PersonIcon, Place as PlaceIcon, People as PeopleIcon } from '@material-ui/icons'
import {Link} from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'



const useStyles = makeStyles((theme) => ({
  appBar: {
    top: 'auto',
    bottom: 0,
  },
}))

const BottomBar = () => {
  const classes = useStyles()
  return (
    <AppBar position="fixed" color="inherit" className={classes.appBar}>
      <Toolbar >
  
        <Grid item container justify="space-between" xs={12}>
      
          <IconButton edge="start" component={Link} to="/game" color="primary" aria-label="add">
            <FootBallIcon />
          </IconButton>
      

          <IconButton edge="start" component={Link} to="/mygames" color="primary" aria-label="add">
            <PeopleIcon />
          </IconButton>
            
       
          <IconButton color="primary" component={Link} to="/map" aria-label="add">
            <PlaceIcon />
          </IconButton>
       
        
          <IconButton edge="end" component={Link} to="/profile" color="primary" aria-label="person">
            <PersonIcon />
          </IconButton>

          </Grid>


      </Toolbar>
    </AppBar>
  )
}

export default BottomBar