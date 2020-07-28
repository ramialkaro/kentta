import React from 'react'
import { Container, Grid, List, ListItem, ListItemIcon, ListItemText, Button} from '@material-ui/core'
import SimpleCard from './SimpleCard'
import { makeStyles } from '@material-ui/core/styles'
import { GetTeam } from '../../data/fetchData'
import FingerprintIcon from '@material-ui/icons/Fingerprint'
import ScheduleIcon from '@material-ui/icons/Schedule'
import Moment from 'react-moment'

const useStyles = makeStyles((theme) => ({
    top: {
        top: 0,
        bottom: 'auto',
        padding: theme.spacing(3),
        backgroundColor: 'rgba(220, 220, 220 , 0.5)',
        minHeight: '15vh',
        height: '25vh'

    },
    root: {
        minHeight: '88vh',
        marginTop: theme.spacing(4),
        paddingBottom: theme.spacing(9)
    },

}))

// TODO get player with same game id 
const Team = () => {
    const classes = useStyles()
    const teamData = GetTeam()


    
    return (
        <>
            <Grid container className={classes.top}>

                <List style={{ letterSpacing: '1.3px', fontSize:'15rem' ,fontWeight:'900' }}>
                    <ListItem >
                        <ListItemIcon>
                            <FingerprintIcon />
                        </ListItemIcon>
                        <ListItemText primary={teamData.gameShortID} />
                    </ListItem>

                    <ListItem >
                        <ListItemIcon>
                            <ScheduleIcon />
                        </ListItemIcon>
                        <ListItemText primary={<Moment date={teamData.startTime} format="DD-MM-YYYY HH:mm" />} />
                    </ListItem>
                </List>
                <Button type="button" fullWidth color="primary">Leave</Button>
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