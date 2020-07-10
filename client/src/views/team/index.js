import React from 'react'
import {Container} from '@material-ui/core'
import SimpleCard from './SimpleCard'
import { makeStyles } from '@material-ui/core/styles'
import TopBar from '../../components/TopBar'

const useStyles = makeStyles((theme) => ({
    root: {        
        minHeight: '88vh',
        paddingTop:theme.spacing(9),
        paddingBottom:theme.spacing(9)
    },
}))

const Team = ()=> {
    const classes = useStyles()

    return (
        <>
         <TopBar />
        <Container className={classes.root}>
           
            <SimpleCard color="#fff"/>
            <SimpleCard color="#fff"/>
            <SimpleCard color="#fff"/>
            <SimpleCard color="#fff"/>
            <SimpleCard color="#fff"/>
            <SimpleCard color="#fff"/>
            <SimpleCard color="#fff"/>
            <SimpleCard color="#fff"/>
            <SimpleCard color="#fff"/>
            <SimpleCard color="#fff"/>
            <SimpleCard color="#fff"/>
            
        </Container>
        </>
    )
}

export default Team