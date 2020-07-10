import React from 'react'
import {Container} from '@material-ui/core'
import SimpleCard from './SimpleCard'
import { makeStyles } from '@material-ui/core/styles'
import { b, r, y, gr} from "./colors"
const useStyles = makeStyles((theme) => ({
    root: {        
        paddingTop:'8vh',
        backgroundColor: theme.palette.secondary.light,
        minHeight: '93vh'
    },
}))
const Game = ()=> {
    const classes = useStyles()

    return (
        <Container className={classes.root}>
            <SimpleCard color={gr}/>
            <SimpleCard color={r}/>
            <SimpleCard color={b}/>
            <SimpleCard color={y}/>
            <SimpleCard color={r}/>
            <SimpleCard color={gr}/>
            <SimpleCard color={y}/>
            <SimpleCard color={b}/>
        </Container>
    )
}

export default Game