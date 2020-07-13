import React from 'react'
import {Container} from '@material-ui/core'
import SimpleCard from './SimpleCard'
import { makeStyles } from '@material-ui/core/styles'
import {color} from "./colors"
import {GetGame} from '../../data/fetchData'
import {uid, useUID} from 'react-uid'
import shortid from 'shortid'
import TopBar from '../../components/TopBar'

const useStyles = makeStyles((theme) => ({
    root: {        
        minHeight: '93vh',
        paddingTop:theme.spacing(9),
        paddingBottom:theme.spacing(9)
    },
}))
const Game = ()=> {
    const classes = useStyles()
    var gameData = GetGame()
    let totalColor = color.length
    console.log(shortid.generate())
    
    return (
        <Container className={classes.root}>
            <TopBar create={true}/>
            {gameData.map(game=>{
                let colorIndex = Math.floor(Math.random() * totalColor)
                
                return(
                
                <SimpleCard key={uid(game)} color={color[colorIndex]} data={game}/>
                
                )})}

        </Container>
    )
}

export default Game        
