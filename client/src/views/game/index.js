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
}))
const Game = () => {
    const classes = useStyles()
    var gameData = GetGames()
    const [data, setData] = React.useState([])
    let totalColor = color.length

    window.onload = function () { setData(gameData) }

    React.useEffect(() => {
        setData(gameData)
    }, [gameData])


    const handleSearch = game => {
        setData(game)
    }
    return (
        <Container className={classes.root}>
            <TopBar data={gameData} setData={handleSearch} />
            {data.length !== 0 ? data.map(game => {
                let colorIndex = Math.floor(Math.random() * totalColor)

                return (

                    Date.parse(game.startTime) > Date.parse(new Date(Date.now())) ?
                        <SimpleCard key={uid(game)} color={color[colorIndex]} data={game} /> : null

                )
            }) : <h3>not found</h3>}

        </Container>
    )
}

export default Game        
