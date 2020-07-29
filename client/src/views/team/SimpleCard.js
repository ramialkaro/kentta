import React from 'react'
import { Typography, Grid, Paper } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    root: {
        padding: '7px',
        margin: '5pt 0 12pt 0',
        borderLeft: '3pt solid #00ff00',
        "&:nth-child(2n)": {
            borderLeft: '3pt solid #f987c5',
        }
    },
    center: {
        textAlign: 'center'
    },
    midPart: {
        padding: '4pt 0 4pt 0'
    }

}))

const SimpleCard = ({ data }) => {
    const classes = useStyles()

    return (
        <Paper className={classes.root}>

            <Grid container spacing={2}>
                <Grid item xs={9}>
                    <Typography variant="h5">{data.firstname} {data.lastname}</Typography>
                </Grid>
                <Grid item xs={3}>
                    <Typography variant="h6" className={classes.center}>{data.game_id}</Typography>
                </Grid>
            </Grid>

            <Grid container >
                <Typography variant="subtitle2" className={classes.midPart}>{data.phone}</Typography>
            </Grid>

            <Grid container >
                <Typography variant="subtitle2" className={classes.midPart}>{data.email}</Typography>
            </Grid>

        </Paper>

    )
}

export default SimpleCard
