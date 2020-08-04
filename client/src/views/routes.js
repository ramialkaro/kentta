import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import Profile from './profile'
import Team from './team'
import Map from './map'
import Register from './register'
import Login from './login'
import Game from './game'
import NewGame from './game/NewGame'
import GameDetails from './game/GameDetails'
import BottomBar from '../components/BottomBar'
import { useAuth } from '../context/auth'
import MyGames from './game/MyGames'

const SecureRoute = ({ component: Component, ...rest }) => {
    const {authTokens} = useAuth()
    return (
        <Route
            {...rest}
            render={props =>
                authTokens ?
                    (
                        <Component {...props} />
                    ) : (
                        <Redirect
                            to="/"
                        />
                    )} />
    )
}

const Routes = () => {
    
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Login} />
                <Route path="/register" component={Register} />
                <SecureRoute path="/profile" component={Profile} />
                <SecureRoute path="/mygames" exact component={MyGames} />
                <SecureRoute path="/mygames/:id" component={Team} />
                <SecureRoute path="/game" exact component={Game} />
                <SecureRoute path="/game/:id" component={GameDetails} />
                <SecureRoute path="/map" component={Map} />
                <SecureRoute path="/newgame" component={NewGame} />
            </Switch>

            <BottomBar />
        </Router>
    )
}

export default Routes