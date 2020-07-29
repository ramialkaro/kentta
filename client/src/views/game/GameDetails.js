import React from 'react'
import { Typography, Grid, IconButton, Button, ListItem, List, ListItemIcon, ListItemText } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { Link, Redirect } from 'react-router-dom'
import { GetGame } from '../../data/fetchData'
import Moment from 'react-moment'
import FingerprintIcon from '@material-ui/icons/Fingerprint'
import PeopleIcon from '@material-ui/icons/People'
import HourglassEmptyIcon from '@material-ui/icons/HourglassEmpty'
import Icon from './Icons'
import DurationCalculator from '../../calculations/DurationCalculator'
import { JoinGame } from '../../data/fetchData'
import { useProfile } from '../../context/profile'
import SlowMotionVideoTwoToneIcon from '@material-ui/icons/SlowMotionVideoTwoTone'
import StopTwoToneIcon from '@material-ui/icons/StopTwoTone'

const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(2),
    },
    control: {
        paddingLeft: theme.spacing(2),
        marginTop: theme.spacing(6),
        marginBottom: theme.spacing(6),
    },
    txt: {
        paddingLeft: theme.spacing(7),
        marginTop: theme.spacing(4),
        fontFamily: 'Courier',
    },
    btn: {

    }
}))

// [x] TODO join to game  
// [x] TODO leave a game
// TODO update my game list when i join to new one... it need to reload/refresh the page 

const GameDetails = ({ match }) => {
    const classes = useStyles()
    const data = GetGame(match.params.id)
    const { profileData } = useProfile()
    const [joined, setJoined] = React.useState(false)
    const handleJoin = (e) => {
        JoinGame(match.params.id, profileData.id)
        setJoined(true)
        e.preventDefault()
    }
    if (joined) return <Redirect to="/mygames" />
    return (
        <Grid container className={classes.root} >
            <Grid item container xs={12} className={classes.control} justify="flex-start" alignItems="center">
                <IconButton component={Link} to="/game">
                    <ArrowBackIosIcon />
                    <Typography>GAME</Typography>
                </IconButton>
            </Grid>
            <Grid item xs={12}>
                <List style={{ letterSpacing: '1.3px' }}>
                    <ListItem >
                        <ListItemIcon>
                            <FingerprintIcon />
                        </ListItemIcon>
                        <ListItemText primary={data.gameShortID} />
                    </ListItem>

                    <ListItem >
                        <ListItemIcon>
                            <SlowMotionVideoTwoToneIcon />
                        </ListItemIcon>
                        <ListItemText primary={<Moment date={data.startTime} format="DD-MM-YYYY HH:mm" />} />
                    </ListItem>
                    <ListItem >
                        <ListItemIcon>
                            <StopTwoToneIcon />
                        </ListItemIcon>
                        <ListItemText primary={<Moment date={data.endTime} format="DD-MM-YYYY HH:mm" />} />
                    </ListItem>
                    <ListItem >
                        <ListItemIcon>
                            <HourglassEmptyIcon />
                        </ListItemIcon>
                        <ListItemText primary={DurationCalculator(data.endTime, data.startTime)} />
                    </ListItem>

                    <ListItem >
                        <ListItemIcon>
                            <PeopleIcon />
                        </ListItemIcon>
                        <ListItemText primary="34 players" />
                    </ListItem>

                    <ListItem >
                        <ListItemIcon>
                            <Icon type={data.gameType} />
                        </ListItemIcon>
                        <ListItemText primary={data.gameType} />
                    </ListItem>


                </List>
                <Button type="button" onClick={handleJoin} fullWidth color="primary">JOIN</Button>
            </Grid>


        </Grid>
    )
}

export default GameDetails
             /*
<Typography className={classes.txt}>
{data.gameShortID}
</Typography>

<Typography className={classes.txt}>
{<Moment date={data.startTime} format="DD-MM-YYYY HH:mm"/>}
</Typography>

<Typography className={classes.txt}>
35 players
</Typography>

<Typography className={classes.txt}>
TEST
</Typography>

<Typography className={classes.txt}>
TEST
</Typography>

<Typography className={classes.txt}>
TEST
</Typography>
*/