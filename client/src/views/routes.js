import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Profile from './profile'
import Team from './team'
import Map from './map'
import Register from './register'
import Login from './login'
import Game from './game'
import NewGame from './game/NewGame'
import GameDetails from './game/GameDetails'
import BottomBar from '../components/BottomBar'

const Routes =()=>{
    return(
        <Router>
            <Switch>
                <Route path ="/" exact component={Login}/>
                <Route path ="/register" component={Register}/>
                <Route path ="/profile" component={Profile}/>
                <Route path ="/team" component={Team}/>
                <Route path ="/game" exact component={Game}/>
                <Route path ="/game/:id" component={GameDetails}/>
                <Route path ="/map" component={Map}/>
                <Route path ="/newgame" component={NewGame} />
            </Switch>
            
      <BottomBar />
        </Router>
    )
}

export default Routes