import React from 'react'
import { Card, CardContent, Typography, Container, Grid, Paper } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({

    card: {
        boxShadow: '0 20px 30px -5px rgba(0, 0, 0, 0.15)',
        minHeight: '13vh',
        margin:'4pt 0 9pt 0'
        
    },
    label: {
        fontSize: '21px',
        fontWeight: 'bold',
        textTransform: 'uppercase'
    },
    txt: {
        fontFamily: 'Anton',
        fontSize: '16px',
        position: 'relative',
        color: '#222',
        fontWeight: '900'
    }
}))

const SimpleCard = ({ color }) => {
    const classes = useStyles()

    return (
        <Paper style={{padding:'7px', margin: '5pt 0 12pt 0', borderLeft:'2pt solid #44ee22'}}>
            <Grid container direction="row" spacing={2}>
                <Grid item xs={9}>
                    <Typography variant="h5">Player name</Typography>
                </Grid>
                <Grid item xs={3}>
                    <Typography variant="h6" component="h3" style={{textAlign:'center'}}>A</Typography>
                </Grid>
            </Grid>

            <Grid container style={{padding:'4pt 0 4pt 0'}}>
                <Typography variant="subtitle2">Phone: 040 121 1111</Typography>
            </Grid>

            <Grid container spacing={2}>
                <Grid item xs={4}>
                    <Typography variant="subtitle2" style={{textAlign:'center'}}>G: 3</Typography>
                </Grid>
                
                <Grid item xs={4}>
                    <Typography variant="subtitle2" style={{textAlign:'center'}}>W: 3</Typography>
                </Grid>

                <Grid item xs={4} >
                    <Typography  variant="subtitle2" style={{textAlign:'center'}}>L: 3</Typography>
                </Grid>
            </Grid>
        </Paper>

    )
}

export default SimpleCard


/* 


            <Card className={classes.card} style={{ backgroundColor: color, borderLeft: '3pt solid #32cb2b' }}>
                <CardContent >
                    <Typography className={classes.txt}>Player name | <span className= {classes.label}> A </span></Typography>
                    <Typography className={classes.txt}> online</Typography>
                    <Typography > wins: 3    lose: 4    games: 8</Typography>

                </CardContent>
            </Card>



 */