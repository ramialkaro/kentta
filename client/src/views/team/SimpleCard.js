import React from 'react'
import {  Typography,  Grid, Paper } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import {GetTeam } from '../../data/fetchData'

const useStyles = makeStyles((theme) => ({
    root:{
        padding:'7px', 
        margin: '5pt 0 12pt 0', 
        borderLeft:'2pt solid #44ee22'
    },
    center:{
        textAlign:'center'
    },
    midPart:{
        padding:'4pt 0 4pt 0'
    }

}))

const SimpleCard = ({ data, playerTeam }) => {
    const classes = useStyles()
   
    return (
        <Paper className={classes.root}>
            
            <Grid container spacing={2}>
                <Grid item xs={9}>
                    <Typography variant="h5">{data.name}</Typography>
                </Grid>
                <Grid item xs={3}>
                    <Typography variant="h6"  className={classes.center}>{data.team_ID}</Typography>
                </Grid>
            </Grid>

            <Grid container justify="flex-start" >
                <Typography variant="subtitle2" className={classes.midPart}>{data.phone}</Typography>
            </Grid>

            <Grid container spacing={2}>
                <Grid item xs={4}>
                    <Typography variant="subtitle2" className={classes.center}>G: 3</Typography>
                </Grid>
                
                <Grid item xs={4}>
                    <Typography variant="subtitle2" className={classes.center}>W: 3</Typography>
                </Grid>

                <Grid item xs={4} >
                    <Typography  variant="subtitle2" className={classes.center}>L: 3</Typography>
                </Grid>
            </Grid>
        </Paper>

    )
}

export default SimpleCard
