import React from 'react'
import {Container, Typography} from '@material-ui/core'

const GameDetails = ({match})=>{

    return(
        <Container>
            <Typography>Game Details Page will over here {match.params.id}</Typography>
        </Container>
    )
}

export default GameDetails