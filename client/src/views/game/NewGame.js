import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Container, TextField, Grid, Typography, Button, Snackbar, FormControl, InputLabel, Select } from '@material-ui/core'
import { DateTimePicker, MuiPickersUtilsProvider } from '@material-ui/pickers'
import DateFnsUtils from '@date-io/date-fns'
import CancelIcon from '@material-ui/icons/Cancel'
import { Link, Redirect } from 'react-router-dom'
import shortid from 'shortid'
import { PostGame } from '../../data/fetchData'
import { Formik, Form } from 'formik'
import MuiAlert from '@material-ui/lab/Alert'
import moment from 'moment'

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}


const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(2),
        paddingTop: theme.spacing(7)
    },
    space: {
        marginTop: theme.spacing(4)
    }
}))

const NewGame = () => {
    const classes = useStyles()
    const [open, setOpen] = React.useState(false)
    const [created, setCreated] = React.useState(false)

    const gameList = ['Tennis', 'Basketball', 'Baseball', 'Football', 'Cricket', 'Golf', 'Mma', 'Kabaddi', 'Hocky', 'Other', 'Vollyball', 'Rowing', 'Rugby']

    const handleClose = () => {
        setOpen(false)
        setCreated(true)
    }
    const handleNewGame = (values, actions) => {
        setOpen(true)
        values.startTime = moment(values.startTime).utc().format().replace('T', ' ').replace('Z', '')
        values.endTime = moment(values.endTime).utc().format().replace('T', ' ').replace('Z', '')

        PostGame(values)
        setTimeout(() => handleClose(), 500)
        actions.setSubmitting(false)
    }
    if(created){
        return <Redirect to="/game" />
    }
    return (

        <Container className={classes.root}>
            <Grid container justify="space-around">
                <Grid item xs={9}>
                    <Typography> NEW GAME</Typography>
                </Grid>
                <Grid item xs={2} container justify="flex-end">
                    <Link to="/game">
                        <CancelIcon color="primary" />
                    </Link>
                </Grid>
            </Grid>
            <Formik
                onSubmit={handleNewGame}
                initialValues={{
                    gameShortID: shortid.generate(),
                    startTime: new Date(Date.now()),
                    endTime: new Date(Date.now()),
                    gameType: 'Tennis',
                    results: '0,0',
                    location: 2,

                }}>
                {({ handleSubmit, handleChange, setFieldValue, values }) => (

                    <Form onSubmit={handleSubmit}>
                        <TextField
                            variant="standard"
                            label="Game ID"
                            name="gameShortID"
                            value={values.gameShortID}
                            readOnly
                            fullWidth
                            className={classes.space}
                        />
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <Grid container justify="space-around">
                                <DateTimePicker
                                    variant="inline"
                                    label="Start Time"
                                    name="startTime"
                                    ampm={false}
                                    value={values.startTime}
                                    fullWidth
                                    className={classes.space}
                                    onChange={date => setFieldValue('startTime', date)}
                                />
                            </Grid>

                            <Grid container justify="space-around">
                                <DateTimePicker
                                    variant="inline"
                                    label="End Time"
                                    name="endTime"
                                    ampm={false}
                                    minDate={values.startTime}
                                    value={values.endTime}
                                    fullWidth
                                    className={classes.space}
                                    onChange={date => setFieldValue('endTime', date)}
                                />
                            </Grid>
                        </MuiPickersUtilsProvider>
                        <FormControl variant="filled" fullWidth>
                            <InputLabel htmlFor="gameType-selector">Game Type</InputLabel>
                            <Select
                                native
                                value={values.gameType}
                                onChange={e=> setFieldValue('gameType',e.target.value)}
                                inputProps={{
                                    name: 'gameType',
                                    id: 'gameType-selector',
                                    margin: "normal",
                                }}
                                fullWidth

                            >
                                {
                                    gameList.map(game=> <option key={game} value={game}>{game}</option>)
                                }
                            </Select>
                        </FormControl>
                        <TextField
                            variant="standard"
                            label="Location"
                            name="location"
                            defaultValue={values.location}
                            onChange={handleChange}
                            fullWidth
                            className={classes.space}
                        />
                        <Button type="submit" className={classes.space} fullWidth color="primary">CREATE</Button>
                    </Form>
                )}
            </Formik>

            <Snackbar
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                open={open}
                autoHideDuration={6000}
            >
                <Alert onClose={handleClose} severity="success">
                    Game has created
                </Alert>
            </Snackbar>
        </Container>
    )

}

export default NewGame