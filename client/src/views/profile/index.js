import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Grid, Avatar, Card, CardContent, CardActions, TextField, Switch, FormControlLabel, InputLabel, Select, Container, Button } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const useStyles = makeStyles((theme) => ({

    bg: {
        backgroundColor: theme.palette.secondary.light,
        flexGrow: 1,
        minHeight: '97vh',
        padding: theme.spacing(3),
    },
    upperSection: {
        columnCount: '2'
    },
    avatar: {
        textAlign: 'center'
    },
    name: {
        textAlign: 'center',
        paddingTop: theme.spacing(1)
    },
    stdInput: {
        marginBottom: theme.spacing(3),
        minWidth: '100%'
    },
    stdButton: {
        marginBottom: theme.spacing(3),
        minWidth: '49%'
    },
    userImg: {
        width: theme.spacing(9),
        height: theme.spacing(9),
        display: 'inline-block'
    },
    card: {
        marginTop: theme.spacing(7),
        paddingTop: theme.spacing(2),
        minHeight: '50vh',
    },
}));


const Profile = () => {
    const classes = useStyles();
    const [state, setState] = React.useState({
        online: true,
        playerStatus: 'going',
        readOnly:true
    })
    const handleChange = (e) => {
        const name = e.target.name
        setState({ ...state, [name]: e.target.checked })
    }

    const handleStatus = (e) => {
        const name = e.target.name
        setState({ ...state, [name]: e.target.value })
        console.log(state.playerStatus)
    }
    return (
        <Grid container>
            <Grid item xs={12} className={classes.bg}>

                <Grid className={classes.avatar}>
                    <Avatar alt="player" src="player.png" className={classes.userImg} />
                </Grid>
                <Grid className={classes.name}>
                    <Typography variant="h4" component="h2">Player name</Typography>
                    <Typography variant="subtitle1" component="p">Player Bio </Typography>
                </Grid>

                <Card className={classes.card}>
                    <CardContent>
                        <TextField
                            label="Phone"
                            readOnly={state.readOnly}
                            value="040 120 1212"
                            name="phone"
                            className={classes.stdInput}
                        />
                        <TextField
                            label="Email"
                            readOnly={state.readOnly}
                            value="info@test.fi"
                            name="email"
                            className={classes.stdInput}
                        />
                        <FormControlLabel
                            control={<Switch checked={state.online} onChange={handleChange} color="primary" name="online" />}
                            label="Online"
                            className={classes.stdInput}
                        />
                        <InputLabel htmlFor="status-selector">Status</InputLabel>
                        <Select
                            native
                            value={state.playerStatus}
                            onChange={handleStatus}
                            inputProps={{
                                name: 'playerStatus',
                                id: 'status-selector'
                            }}
                            className={classes.stdInput}
                        >
                            <option value="going">Going</option>
                            <option value="notInterested">Not interested</option>
                            <option value="maybe">Maybe</option>
                        </Select>
                    </CardContent>
                    <CardActions>
                        <Button color="secondary" className={classes.stdButton} startIcon={<FontAwesomeIcon icon="edit" />}>Edit</Button>
                        <Button color="primary" className={classes.stdButton} startIcon={<FontAwesomeIcon icon="lock" />}>Log out</Button>
                    </CardActions>
                </Card>

            </Grid>
        </Grid>
    );
}
export default Profile