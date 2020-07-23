import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Container, CssBaseline, Avatar, Typography, TextField, FormControlLabel, Checkbox, Button, Grid } from '@material-ui/core'
import { Link, Redirect } from 'react-router-dom'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import { useAuth } from '../../context/auth'
import apiFetch from '../../lib/apiFetch'

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.primary.main
    },
    form: {
        width: '100%',
        marginTop: theme.spacing(1)
    },
    submit: {
        margin: theme.spacing(3, 0, 2)
    }
}))

const Login = (props) => {

    const classes = useStyles()


    const [isLoggedIn, setLoggedIn] = React.useState(false)
    const [isError, setError] = React.useState(false)
    const { setAuthTokens } = useAuth()
    const [email, setEmail] = React.useState("")
    const [password, setPassword] = React.useState("")
    function postLogin() {
        apiFetch.post("/login", {
            email,
            password
        }).then(result => {
            if (result.status === 200) {
                setAuthTokens(result.data.token)
                console.log(result.data)
                setLoggedIn(true)
            } else {
                setError(true)
            }
        }).catch(e => {
            setError(true)
        })
    }

    if (isError) {
        return <h3>Error...</h3>
    }
    if (isLoggedIn) {
        return <Redirect to="/game" />
    }

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">Log in</Typography>

                <form className={classes.form} >
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email address"
                        name="email"
                        autoComplete="email"
                        onChange={e => setEmail(e.target.value)}
                        autoFocus
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="password"
                        label="Password"
                        name="password"
                        type="password"
                        onChange={e => setPassword(e.target.value)}
                        autoComplete="current-password"
                    />
                    <FormControlLabel
                        control={<Checkbox value="remember" color="primary" />}
                        label="Remember me"
                    />
                    <Button
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        onClick={postLogin}
                    >
                        Log in
                    </Button>

                    <Grid container>
                        <Grid item xs>
                            <Link to="/register" variant="body2">Forgot password?</Link>
                        </Grid>
                        <Grid item>
                            <Link to="/register" variant="body2">{"Don't have an account? Sign up"}</Link>
                        </Grid>
                    </Grid>

                </form>

            </div>
        </Container>
    )
}

export default Login