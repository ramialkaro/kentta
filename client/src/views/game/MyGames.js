import React from 'react'
import { Link } from 'react-router-dom'
import { Grid, Container, Paper, IconButton, Typography, Button, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos'
import { GetMyListGames } from '../../data/fetchData'
import DurationCalculator from '../../calculations/DurationCalculator'
import FingerprintIcon from '@material-ui/icons/Fingerprint'
import HourglassEmptyIcon from '@material-ui/icons/HourglassEmpty'
import Icon from './Icons'

const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: '93vh',
        paddingTop: theme.spacing(9),
        paddingBottom: theme.spacing(9),
        backgroundColor: 'rgba(220, 220, 220 , 0.5)',
    },
    paper: {
        padding: '2vw',
        margin: '2pt 2pt 12pt 2pt',
        fontFamily: 'Anton',
        borderRadius: theme.spacing(2),
    }
}))
const MyGames = ({ match }) => {
    const classes = useStyles()
    const { data, error } = GetMyListGames()
    const [myGames, setMyGames] = React.useState([])

    React.useEffect(() => {
        setMyGames(data)
    }, [data])

    if (error.length !== 0) {
        return (
            <Grid item xs={12} className={classes.root} direction="column" container justify="center" alignItems="center">
                <Typography variant="h6" className={classes.paper}>{error}</Typography>
                <Button component={Link} to="/game" color="primary">Join game</Button>
            </Grid>
        )
    }
    return (

        <Container className={classes.root} >
            {
                myGames.map(game => {

                    return (

                        <Paper key={game.id} className={classes.paper} >
                            <Grid container spacing={1}>
                                <Grid item xs={10} container spacing={1}>
                                    <List>
                                        <ListItem>
                                            <ListItemIcon> <FingerprintIcon /></ListItemIcon>
                                            <ListItemText primary={game.gameShortID} />
                                        </ListItem>
                                        <ListItem>
                                            <ListItemIcon> <Icon type={game.gameType} /></ListItemIcon>
                                            <ListItemText primary={game.gameType} />
                                        </ListItem>
                                        <ListItem>
                                            <ListItemIcon> <HourglassEmptyIcon fontSize="small" /></ListItemIcon>
                                            <ListItemText secondary={
                                                Date.parse(game.startTime) > Date.parse(new Date(Date.now())) ?
                                                    DurationCalculator(game.startTime, new Date(Date.now())) : "game end"} />

                                        </ListItem>
                                    </List>
                                </Grid>
                                <Grid item xs={2} container justify="center" alignItems="center">
                                    <IconButton component={Link} to={`${match.path}/${game.id}`}>
                                        <ArrowForwardIosIcon color="primary" />
                                    </IconButton>
                                </Grid>
                            </Grid>
                        </Paper>
                    )
                })
            }
        </Container>

    )
}

export default MyGames



