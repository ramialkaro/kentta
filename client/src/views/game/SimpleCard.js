import React from 'react'
import { Typography, Paper, Grid, IconButton } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Moment from 'react-moment'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos'
import { Link } from 'react-router-dom'

import Icon from './Icons'


const useStyles = makeStyles((theme) => ({
    root: {
        padding: '12pt',
        margin: '2pt 0 12pt 0',
        fontFamily: 'Anton',
        borderRadius: theme.spacing(5)
    },
    center: {
        textAlign: 'center'
    },

    time: {
        marginLeft: theme.spacing(2)
    },
    clock: {
        fontSize: '14pt',
        fontWeight: '900',
        marginLeft: theme.spacing(2)
    },
    txt: {

        fontSize: '14px',
        position: 'relative',
        color: '#222',
        fontWeight: '900',
    },
    result: {
        backgroundColor: '#222',
        minWidth: '80%',
        minHeight: '12pt',
        color: '#fff',
        fontSize: '17px',
        padding: '3pt',
        textAlign: 'center',
        borderRadius: '5px'
    }
}))

const SimpleCard = ({ color, data }) => {
    const classes = useStyles()

    return (
        <Paper className={classes.root} style={{ border: `1.5px solid ${color}` }}>
            <Grid container spacing={1}>
                <Grid item xs={3} container alignItems="center" justify="center">
                    <Icon type={data.gameType} color="inherit" fontSize="large" />
                </Grid>
                <Grid item container xs={7} direction="column">

                    <Typography variant="h6" component="h1">{data.gameShortID}</Typography>
                    <Typography variant="body2" >
                        {data.startTime !== undefined ? <Moment format="DD-MM-YYYY HH:mm" date={data.startTime} /> : null}
                    </Typography>
                </Grid>
                <Grid item container xs={2} alignItems="center" justify="center">
                    <IconButton component={Link} to={`/game/${data.id}`}>
                        <ArrowForwardIosIcon />
                    </IconButton>

                </Grid>
            </Grid>
        </Paper>

    )
}

export default SimpleCard