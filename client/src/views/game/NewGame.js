import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import {Container, TextField, Grid,  InputLabel, Select, FormControl, Typography, Button} from '@material-ui/core'
import {DateTimePicker,  MuiPickersUtilsProvider} from '@material-ui/pickers'
import DateFnsUtils from '@date-io/date-fns'
import CancelIcon from '@material-ui/icons/Cancel'
import {Link} from 'react-router-dom'
import shortid from 'shortid'
import {PostGame} from '../../data/fetchData'

const useStyles = makeStyles((theme)=>({
    root:{
        padding: theme.spacing(2),
        paddingTop: theme.spacing(7)
    },
    space:{
        marginTop: theme.spacing(4)
    }
}))

const NewGame =()=>{
    const classes = useStyles()
    
    const [state, setState] = React.useState({
        startTime: new Date(Date.now()),
        endTime: '',
        results:'',
        gameShortID: shortid.generate(),
        location:1,
    })

    const handleState = (e) => {
        const name = e.target.name
        setState({ ...state, [name]: e.target.value })
        console.log(state)
    }
    const handleStartTime = (date) => {
        console.log(date)
        
    }

    const handleNewGame = e =>{
        console.log(state)
        e.preventDefault()
    }
    return(
        
       <Container className={classes.root}>
           <Grid container justify="space-around">
                <Grid item xs={9}>
                <Typography> NEW GAME</Typography>
                </Grid>
               <Grid  item xs={2} container justify="flex-end">
               <Link to="/game">
                   <CancelIcon color="primary"/>
               </Link>
               </Grid>
           </Grid>
           <form onSubmit={handleNewGame}>
         <TextField
            variant="standard"
            label="Game ID"
            value={state.gameShortID}
            readOnly
            fullWidth
            className={classes.space}
         />
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
         <DateTimePicker
            variant="inline"
            label="Start Time"
            name="startTime"
            margin="normal"
            ampm={false}
            value={state.startTime}
            onChange={handleStartTime}
            format="dd-mm-yyyy HH:mm"
            fullWidth
            className={classes.space}
         />
         </MuiPickersUtilsProvider>

         <FormControl variant="filled" fullWidth className={classes.space}>
            <InputLabel htmlFor="location-selector">Location</InputLabel>
            <Select
                native
                value={state.location}
                onChange={handleState}
                inputProps={{
                    name: 'location',
                    id: 'location-selector',
                    margin:"normal",
                }}
                fullWidth
                
                
            >
                <option value={1}>Karakallio </option>
                <option value={2}>Viherlaakso</option>
                <option value={3}>Kilo</option>
            </Select>
        </FormControl>
        <Button type="submit" className={classes.space} fullWidth color="primary">CREATE</Button>
        </form>
</Container>
    )

}

export default NewGame