import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import {Container, TextField, Grid,  InputLabel, Select, FormControl, Typography, Button} from '@material-ui/core'
import {DateTimePicker, KeyboardDateTimePicker, MuiPickersUtilsProvider} from '@material-ui/pickers'
import DateFnsUtils from '@date-io/date-fns'
import CancelIcon from '@material-ui/icons/Cancel'
import {Link} from 'react-router-dom'

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
    const classes = useStyles();
    const [startDate, setStartDate] = React.useState(new Date(Date.now()))
    const [state, setState] = React.useState({
        location:1,
    })

    const handleStatus = (e) => {
        const name = e.target.name
        setState({ ...state, [name]: e.target.value })
        console.log(state)
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
         <TextField
            variant="outlined"
            label="game"
            fullWidth
            className={classes.space}
         />
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
         <KeyboardDateTimePicker
            variant="inline"
            label="Start Time"
            ampm={false}
            value={startDate}
            onChange={setStartDate}
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
                onChange={handleStatus}
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
        <Button component={Link} to="/game" className={classes.space} fullWidth color="primary">CREATE</Button>
</Container>
    )

}

export default NewGame