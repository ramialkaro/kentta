import React from 'react'
import { Container } from '@material-ui/core'
import SimpleCard from './SimpleCard'
import { makeStyles } from '@material-ui/core/styles'
import { color } from "./colors"
import { GetGames } from '../../data/fetchData'
import { uid } from 'react-uid'
import TopBar from '../../components/TopBar'

const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: '93vh',
        paddingTop: theme.spacing(9),
        paddingBottom: theme.spacing(9)
    },
    inMiddle:{
        textAlign:'center',
        marginTop:theme.spacing(8)
    }
}))
const Game = () => {
    const classes = useStyles()
    var data = GetGames()
    const [games, setGames] = React.useState([])
    let totalColor = color.length

    window.onload = function () { setGames(data) }

    React.useEffect(() => {
        setGames(data)
    }, [data])


    const handleSearch = game => {
        setGames(game)
    }
    return (
        <Container className={classes.root}>
            <TopBar data={data} setData={handleSearch} />
            {games.length !== 0 ? games.map(game => {
                let colorIndex = Math.floor(Math.random() * totalColor)

                return (

                    Date.parse(game.startTime) > Date.parse(new Date(Date.now())) ?
                        <SimpleCard key={uid(game)} color={color[colorIndex]} data={game} /> : null

                )
            }) : <h3 className={classes.inMiddle}>Not found</h3>}

        </Container>
    )
}

export default Game        
