import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Grid, Avatar,  TextField, Switch, FormControlLabel, InputLabel, Select,  Button, Container, Paper } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const useStyles = makeStyles((theme) => ({
    root:{
        backgroundColor: theme.palette.secondary.light,
        minHeight:'93vh'
    },
    title:{
        padding:theme.spacing(3),
        marginBottom: theme.spacing(4)
    },
    avatar: {
        textAlign: 'center'
    },
    userImg: {
        width: theme.spacing(9),
        height: theme.spacing(9),
        display: 'inline-block'
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
       <Container className={classes.root}>

            <Grid container spacing={3} className={classes.title}>
                <Grid item xs={12} className={classes.avatar}>
                    <Avatar alt="player" src="player.png" className={classes.userImg}/>
                </Grid>
                <Grid item container xs={12} direction="column" alignItems="center">
                    <Typography variant="h4" component="h2">Player name</Typography>
                    <Typography variant="subtitle1" component="p">Player Bio </Typography>
                </Grid>
    
            </Grid>

            <Paper>
                <Container>
                    <Grid container direction="column" justify="center" spacing={2}>
                    <TextField
                            label="Phone"
                            readOnly={state.readOnly}
                            value="040 120 1212"
                            name="phone"
                            fullWidth
                            margin="normal"
                            variant="outlined"
                        />
                        <TextField
                            label="Email"
                            readOnly={state.readOnly}
                            value="info@test.fi"
                            name="email"
                            fullWidth
                            margin="normal"
                            variant="outlined"
                        />
                        <FormControlLabel
                            control={<Switch checked={state.online} onChange={handleChange} color="primary" name="online" />}
                            label="Online"
                            
                        />
                        <InputLabel htmlFor="status-selector">Status</InputLabel>
                        <Select
                            native
                            value={state.playerStatus}
                            onChange={handleStatus}
                            inputProps={{
                                name: 'playerStatus',
                                id: 'status-selector0',
                                margin:"normal",
                            }}
                            fullWidth
                            
                        >
                            <option value="going">Going</option>
                            <option value="notInterested">Not interested</option>
                            <option value="maybe">Maybe</option>
                        </Select>
                        <Grid item container xs={12}  direction="row" justify="space-between" alignItems="center" >
                            
                                <Button color="secondary" startIcon={<FontAwesomeIcon icon="edit" />}>Edit</Button>
                            
                                <Button color="primary" startIcon={<FontAwesomeIcon icon="lock" />}>Log out</Button>
                            
                        </Grid>
                    </Grid>
                   
                </Container>
            </Paper>
       </Container>
    );
}
export default Profile