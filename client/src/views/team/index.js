import React from 'react'
import { Container } from '@material-ui/core'
import SimpleCard from './SimpleCard'
import { makeStyles } from '@material-ui/core/styles'
import TopBar from '../../components/TopBar'
import { GetPlayer } from '../../data/fetchData'

const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: '88vh',
        paddingTop: theme.spacing(9),
        paddingBottom: theme.spacing(9)
    },
}))

// TODO get player with same game id 
const Team = () => {
    const classes = useStyles()
    const playerData  = GetPlayer()


    return (
        <>
            <TopBar />
            <Container className={classes.root}>

               {
                   playerData.map(player=>{
                       
                    return(
                        <SimpleCard key={player.id}  data={player}/>
                    )})
               }

            </Container>
        </>
    )
}

export default Team