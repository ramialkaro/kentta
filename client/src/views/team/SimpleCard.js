import React from 'react'
import { Card, CardContent, Typography, Container } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: '45vw',
        float:'left'
    },
    card: {        
        marginBottom: theme.spacing(1),
        marginTop: theme.spacing(1),

    }
}))

const SimpleCard = () => {
    const classes = useStyles()

    return (
        <Container className={classes.root}>
            <Card className={classes.card}>
                <CardContent >
                    <Typography>testing Card</Typography>
                </CardContent>
            </Card>
        </Container>
    )
}

export default SimpleCard