import React from 'react'
import { AppBar, Toolbar, IconButton } from '@material-ui/core'
import { SportsFootball as FootBallIcon, Person as PersonIcon, Place as PlaceIcon } from '@material-ui/icons'
import Link from '@material-ui/core/Link'
import { makeStyles } from '@material-ui/core/styles'



const useStyles = makeStyles((theme) => ({
  appBar: {
    top: 'auto',
    bottom: 0,
  },
  grow: {
    flexGrow: 0.5,
  }
}))

const BottomBar = () => {
  const classes = useStyles()
  return (
    <AppBar position="fixed" color="inherit" className={classes.appBar}>
      <Toolbar >

        <Link href="/team">
          <IconButton edge="start" color="inherit" aria-label="add">
            <FootBallIcon />
          </IconButton>
        </Link>

        <div className={classes.grow} />

        <Link href="/map">
          <IconButton color="inherit" aria-label="add">
            <PlaceIcon />
          </IconButton>
        </Link>
        <div className={classes.grow} />

        <Link href="/profile">
          <IconButton edge="end" color="inherit" aria-label="person">
            <PersonIcon />
          </IconButton>
        </Link>

      </Toolbar>
    </AppBar>
  )
}

export default BottomBar