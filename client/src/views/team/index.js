import React from 'react'
import { Container, Grid, List, ListItem, ListItemIcon, ListItemText, Button } from '@material-ui/core'
import SimpleCard from './SimpleCard'
import { makeStyles } from '@material-ui/core/styles'
import { GetTeam } from '../../data/fetchData'
import FingerprintIcon from '@material-ui/icons/Fingerprint'
import ScheduleIcon from '@material-ui/icons/Schedule'
import Moment from 'react-moment'
import CancelIcon from '@material-ui/icons/Cancel'
import EventIcon from '@material-ui/icons/Event'
import { Link } from 'react-router-dom'
const useStyles = makeStyles((theme) => ({
    top: {
        top: 0,
        bottom: 'auto',
        padding: theme.spacing(3),
        minHeight: '15vh',
        height: '25vh'

    },
    root: {
        minHeight: '88vh',
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(9),
        backgroundColor: 'rgba(220, 220, 220 , 0.5)',

    },

}))

// TODO get player with same game id 
const Team = ({ match }) => {
    const classes = useStyles()
    let game_id = match.params.id
    const teamData = GetTeam(game_id)
    const [state, setState] = React.useState({
        gameShortID: '',
        startTime: new Date(Date.now())
    })
    React.useEffect(() => {
        setState({
            gameShortID: teamData.map(item => item.gameShortID)[0],
            startTime: teamData.map(item => item.startTime)[0]
        })
    }, [teamData])



    return (
        <>
            <Grid container className={classes.top}>
                <Grid item xs={10}>
                    <List style={{ letterSpacing: '1.3px', fontSize: '15rem', fontWeight: '900' }}>
                        <ListItem >
                            <ListItemIcon>
                                <FingerprintIcon />
                            </ListItemIcon>
                            <ListItemText primary={state.gameShortID} />
                        </ListItem>

                        <ListItem >
                            <ListItemIcon>
                                <ScheduleIcon />
                            </ListItemIcon>
                            <ListItemText primary={<Moment date={state.startTime} format="DD-MM-YYYY HH:mm" />} />
                        </ListItem>
                    </List>
                </Grid>
                <Grid item xs={2} container justify="flex-end">
                    <Link to="/mygames">
                        <CancelIcon color="primary" />
                    </Link>
                </Grid>
                {
                    Date.parse(state.startTime) > Date.parse(new Date(Date.now())) ?
                        <ListItem>
                            <ListItemIcon>
                                <EventIcon />
                            </ListItemIcon>
                            <ListItemText primary="game end" />
                        </ListItem>
                        :
                        <Button type="button" fullWidth color="primary">Leave</Button>

                }
            </Grid>
            <Container className={classes.root}>

                {
                    teamData.map(team => {
                        return (
                            <SimpleCard key={team.id} data={team} />
                        )
                    })
                }

            </Container>
        </>
    )
}

export default Team