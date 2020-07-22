import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Container, CssBaseline, Avatar, TextField, Typography, Grid, FormControlLabel, Checkbox, Button } from '@material-ui/core'
import { Link, Redirect } from 'react-router-dom'
import LockOutlinedIcon from "@material-ui/icons/LockOutlined"
import apiFetch from '../../lib/apiFetch'
import { useAuth } from '../../context/auth'

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avater: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.primary.main
    },
    form: {
        width: '100%',
        marginTop: theme.spacing(3)
    },
    submit: {
        margin: theme.spacing(3, 0, 2)
    }
}))

const Register = () => {
    const classes = useStyles()
    const [firstName, setFirstName] = React.useState('')
    const [lastName, setLastName] = React.useState('')
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const { setAuthTokens } = useAuth()
    const [isLoggedIn, setLoggedIn] = React.useState(false)
    const [isError, setError] = React.useState(false)
    const hamdleRegister = () => {
        let values ={
            name: firstName+lastName,
            email,
            password
        }
        console.log(values)

        apiFetch.post('/signup',values)
        .then(result => {
            if(result.status === 200){
                setAuthTokens(result.data)
                console.log(result.data)
                setLoggedIn(true)
            } else{
                setError(true)
            }
        }).catch(e =>{
            setError(true)
        })
    }
    if(isLoggedIn){
        return <Redirect to="/game"/>
    }
    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avater}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">Sign Up</Typography>

                <form className={classes.form} noValidate>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                name="firstname"
                                autoComplete="fname"
                                id="firstName"
                                label="First Name"
                                onChange={e=>setFirstName(e.target.value)}
                                autoFocus
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                name="lastname"
                                autoComplete="lname"
                                id="lastName"
                                label="Last Name"
                                onChange={e=>setLastName(e.target.value)}
                                autoFocus
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                name="email"
                                autoComplete="email"
                                id="email"
                                label="Email address"
                                onChange={e=>setEmail(e.target.value)}
                                autoFocus
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                type="password"
                                name="password"
                                autoComplete="current-password"
                                id="password"
                                label="Password"
                                onChange={e=>setPassword(e.target.value)}
                                autoFocus
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <FormControlLabel
                                control={<Checkbox value="allowExtraEmails" color="primary" />}
                                label="I want to receive inspiration, marketing promotions and updates via email."
                            />
                        </Grid>
                    </Grid>
                    <Button
                        onClick={hamdleRegister}
                        fullWidth
                        color="primary"
                        className={classes.submit}
                    >
                        Sign Up
                    </Button>
                    <Grid container justify="flex-end">
                        <Grid item>
                            <Link to="/" variant="body2">
                                Already have an account? Login
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
        </Container>
    )
}

export default Register