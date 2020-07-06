import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Profile from './profile'
import Team from './team'
import Map from './map'
import Register from './register'
import Login from './login'

const Routes =()=>{
    return(
        <Router>
            <Switch>
                <Route path ="/" exact component={Login}/>
                <Route path ="/register" component={Register}/>
                <Route path ="/profile" component={Profile}/>
                <Route path ="/team" component={Team}/>
                <Route path ="/map" component={Map}/>
            </Switch>
        </Router>
    )
}

export default Routes