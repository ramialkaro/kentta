import React from 'react'
import {Container} from '@material-ui/core'
import SimpleCard from './SimpleCard'
import { makeStyles } from '@material-ui/core/styles'
import {color} from "./colors"
import {GetGame} from '../../data/fetchData'
import {uid} from 'react-uid'

const useStyles = makeStyles((theme) => ({
    root: {        
        paddingTop:'8vh',
        minHeight: '93vh',
        paddingBottom: '9vh'
    },
}))
const Game = ()=> {
    const classes = useStyles()
    var gameData = GetGame()
    let totalColor = color.length
    let colorIndex = Math.floor(Math.random() * totalColor)

    
    return (
        <Container className={classes.root}>
            {gameData.map(game=>{
                let colorIndex = Math.floor(Math.random() * totalColor)
                return(
                
                <SimpleCard key={uid(game)} color={color[colorIndex]} data={game}/>
                
                )})}

        </Container>
    )
}

export default Game        

/*
            <SimpleCard color={r}/>
            <SimpleCard color={b}/>
            <SimpleCard color={y}/>
            <SimpleCard color={r}/>
            <SimpleCard color={gr}/>
            <SimpleCard color={y}/>
            <SimpleCard color={b}/>

*/