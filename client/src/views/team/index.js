import React from 'react'
import {Container} from '@material-ui/core'
import SimpleCard from './SimpleCard'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    root: {        
        paddingTop:'8vh',
        backgroundColor: theme.palette.secondary.light,
        height: '100vh'
    },
}))
const Team = ()=> {
    const classes = useStyles()

    return (
        <Container className={classes.root}>
            <SimpleCard/>
            <SimpleCard/>
            <SimpleCard/>
            <SimpleCard/>
            <SimpleCard/>
        </Container>
    )
}

export default Team