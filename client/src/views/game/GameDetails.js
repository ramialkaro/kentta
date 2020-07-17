import React from 'react'
import { Typography, Grid, IconButton } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { Link } from 'react-router-dom'


const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(2),
    },
    control: {
        paddingLeft: theme.spacing(2),
        marginTop: theme.spacing(6),
        marginBottom: theme.spacing(6)

    },
    txt: {
        paddingLeft: theme.spacing(7),
        marginTop: theme.spacing(4),
        fontFamily: 'Courier',
    }
}))


const GameDetails = ({ match }) => {
    const classes = useStyles()
    return (
        <Grid container className={classes.root}>
            <Grid item container xs={12} className={classes.control} justify="flex-start" alignItems="center">
                <IconButton component={Link} to="/game">
                    <ArrowBackIosIcon />
                    <Typography>GAME</Typography>
                </IconButton>
            </Grid>
            <Grid item container xs={12} direction="column">
                <Typography className={classes.txt}>test</Typography>
                <Typography className={classes.txt}>TEST</Typography>
                <Typography className={classes.txt}>TEST</Typography>
                <Typography className={classes.txt}>TEST</Typography>
                <Typography className={classes.txt}>TEST</Typography>
                <Typography className={classes.txt}>TEST</Typography>
            </Grid>
        </Grid>
    )
}

export default GameDetails