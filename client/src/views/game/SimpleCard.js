import React from 'react'
import { Typography, Paper, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { SportsSoccer } from "@material-ui/icons"
import Moment from 'react-moment'
import ScheduleIcon from '@material-ui/icons/Schedule';

const useStyles = makeStyles((theme) => ({
    root: {
        padding:'7px',
        margin: '2pt 0 12pt 0',
        fontFamily: 'Anton'        
    },
    center:{
        textAlign: 'center'
    },

    time:{
        marginLeft: theme.spacing(2)
    }, 
    clock:{
        fontSize:'14pt',
        fontWeight:'900'
    },
    txt: {
       
        fontSize: '14px',
        position: 'relative',
        color: '#222',
        fontWeight: '900',
    },
    result: {
        backgroundColor: '#222',
        display: 'inline-box',
        color: '#fff',
        fontSize: '17px',
        padding: `2pt`,
        textAlign:'center',
        borderRadius:'2px'
    }
}))

const SimpleCard = ({ color, data }) => {
    const classes = useStyles()
    let results = data.results.split(',')
    
    return (
        <Paper className={classes.root} style={{backgroundColor: color}}>
            <Grid container spacing={1}>
                <Grid item container xs={12} justify="space-between" alignItems="center" direction="row">
                    <SportsSoccer/>
                    <Typography variant="subtitle2">{data.gameShortID}</Typography>
                    
                        <div className={classes.result}>{results[0]} x {results[1]}</div>
                    
                </Grid>
                
                <Grid item container xs={12} className={classes.time}>
                   <Grid item xs={7}>
                        <Typography variant="body2" >
                            {data.startTime !== undefined ? <Moment format="DD-MM-YYYY" date={data.startTime}/> : null}
                        </Typography>
                   </Grid>
                   <Grid item xs={5} container direction="row" alignItems="center">
                   <ScheduleIcon fontSize="small"/>
                        <Typography variant="body2" className={classes.clock}>
                        
                        {data.startTime !== undefined ? <Moment format="HH:mm" date={data.startTime}/> : null}
                        </Typography>
                   </Grid>
                </Grid>
                <Grid item container xs={12} >
                    <Grid item xs={4} className={classes.center}>
                        <Typography variant="subtitle2">p.02 </Typography>
                    </Grid>
                    
                    <Grid item xs={4} className={classes.center}>
                        <Typography variant="subtitle2">Viherlaakso</Typography>
                    </Grid>

                    <Grid item xs={4} className={classes.center}>
                        <Typography variant="subtitle2">Espoo</Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Paper>
        
    )
}

export default SimpleCard