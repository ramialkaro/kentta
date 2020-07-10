import React from 'react'
import { Card, CardContent, Typography, Container } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { SportsSoccer } from "@material-ui/icons"

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: '45vw',
        float: 'left',
    },
    card: {
        marginTop: theme.spacing(1),
        boxShadow: '0 20px 30px -5px rgba(0, 0, 0, 0.15)',
        minHeight: '23vh',
        marginBottom: '10vh',
    },
    label: {
        fontSize: '21px',
        fontWeight: 'bold',
        textTransform: 'uppercase',
    },
    txt: {
        fontFamily: 'Anton',
        fontSize: '14px',
        position: 'relative',
        color: '#222',
        fontWeight: '900',
    },
    txtSubtitle: {
        backgroundColor: '#222',
        display: 'inline-box',
        color: '#fff',
        fontSize: '17px',
        paddingLeft: theme.spacing(1),
        paddingRight: theme.spacing(1)
    }
}))

const SimpleCard = ({ color, data }) => {
    const classes = useStyles()
    let results = data.results.split(',')
    
    return (
        <Container className={classes.root}>
            <Card className={classes.card} style={{ backgroundColor: color, opacity:'0.84' }}>
                <CardContent >
                    <Typography className={classes.txt, classes.label}>{<SportsSoccer fontSize="small" />} g. {data.gameId}</Typography>
                    <br /> <br />
                    <Typography className={classes.txt, classes.txtSubtitle}>{results[0]} x {results[1]}</Typography>
                    <br /><br />
                    <Typography className={classes.txt}>place, area, city</Typography>

                </CardContent>
            </Card>
        </Container>
    )
}

export default SimpleCard