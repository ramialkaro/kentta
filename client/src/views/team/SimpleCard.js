import React from 'react'
import { Card, CardContent, Typography, Container } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { SportsSoccer } from "@material-ui/icons";
const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: '45vw',
        float: 'left',
    },
    card: {
        marginTop: theme.spacing(1),
        backgroundColor: '#32cbfb',
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
        fontWeight: '900'
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

const SimpleCard = ({ color }) => {
    const classes = useStyles()

    return (
        <Container className={classes.root}>
            <Card className={classes.card} style={{ backgroundColor: color }}>
                <CardContent >
                    <Typography className={classes.txt, classes.label}>{<SportsSoccer fontSize="small" />} gm: 01</Typography>
                    <br /> <br />
                    <Typography className={classes.txt, classes.txtSubtitle}> 01 x 02</Typography>
                    <br /><br />
                    <Typography className={classes.txt}>place, area, city</Typography>

                </CardContent>
            </Card>
        </Container>
    )
}

export default SimpleCard