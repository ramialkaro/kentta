import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Typography, Grid, Avatar, TextField, Switch, FormControlLabel, InputLabel, Select, FormControl, Container } from '@material-ui/core'
import { Link, Redirect } from 'react-router-dom'
import Lock from '@material-ui/icons/Lock'
import { useAuth } from '../../context/auth'

const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: '93vh'
    },
    title: {
        padding: theme.spacing(3),
        marginBottom: theme.spacing(4)
    },
    avatar: {
        textAlign: 'center'
    },
    userImg: {
        width: theme.spacing(9),
        height: theme.spacing(9),
        display: 'inline-block',
        marginLeft: '45%'

    },
    fab: {
        borderRadius: '50vw',
        paddingRight: theme.spacing(1)
    }
}));


const Profile = () => {
    const classes = useStyles();
    const [state, setState] = React.useState({
        online: true,
        playerStatus: 'going',
        myTeam: 1,
        readOnly: true
    })
    const { authTokens, setAuthTokens } = useAuth()

    const handleChange = (e) => {
        const name = e.target.name
        setState({ ...state, [name]: e.target.checked })
    }

    const handleStatus = (e) => {
        const name = e.target.name
        setState({ ...state, [name]: e.target.value })
        console.log(state)
    }
    const logOut = () => {
        setAuthTokens()
        setTimeout(() => {
            return <Redirect to="/" />
        }, 200)
        localStorage.removeItem("tokens")
    }
    return (
        <Container className={classes.root}>

            <Grid container spacing={3} className={classes.title}>

                <Grid item xs={12} container alignItems="center" direction="row" justify="space-between" className={classes.avatar}>
                    <Avatar alt="player" src="player.png" className={classes.userImg} />

                    <Link to="/" onClick={logOut} className={classes.fab}>
                        <Lock color="primary" />
                    </Link>

                </Grid>
                <Grid item container xs={12} direction="column" alignItems="center">
                    <Typography variant="h4" component="h2">{authTokens.name}</Typography>
                    <Typography variant="subtitle1" component="p">Player Bio </Typography>
                </Grid>

            </Grid>

            <Container>
                <TextField
                    label="Phone"
                    readOnly={state.readOnly}
                    value={authTokens.phone}
                    name="phone"
                    fullWidth
                    margin="normal"
                    variant="outlined"
                />
                <TextField
                    label="Email"
                    readOnly={state.readOnly}
                    value={authTokens.email}
                    name="email"
                    fullWidth
                    margin="normal"
                    variant="outlined"
                />

                <FormControl variant="filled" fullWidth>
                    <InputLabel htmlFor="myTeam-selector">My Team</InputLabel>
                    <Select
                        native
                        value={state.myTeam}
                        onChange={handleStatus}
                        inputProps={{
                            name: 'myTeam',
                            id: 'myTeam-selector',
                            margin: "normal",
                        }}
                        fullWidth

                    >
                        <option value={1}>Team AA</option>
                        <option value={2}>Team BB</option>
                        <option value={3}>Team CC</option>
                    </Select>
                </FormControl>

                <FormControlLabel
                    control={<Switch checked={state.online} onChange={handleChange} color="primary" name="online" />}
                    label="Online"
                />

                <FormControl variant="filled" fullWidth>
                    <InputLabel htmlFor="status-selector">Status</InputLabel>
                    <Select
                        native
                        value={state.playerStatus}
                        onChange={handleStatus}
                        inputProps={{
                            name: 'playerStatus',
                            id: 'status-selector',
                            margin: "normal",
                        }}


                    >
                        <option value="going">Going</option>
                        <option value="notInterested">Not interested</option>
                        <option value="maybe">Maybe</option>
                    </Select>
                </FormControl>
            </Container>

        </Container>
    );
}
export default Profile                    