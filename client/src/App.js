import React from 'react';
import './App.css';
import Routes from './views/routes'
import { ThemeProvider } from '@material-ui/core'
import theme from './theme'
import { AuthContext } from './context/auth'
import { ProfileContext } from './context/profile'
import { useIdleTimer } from 'react-idle-timer'

// [x] TODO don't remove token when reload or refresh 

function App() {


  const handleOnIdle = event => {
   
    const diff = Date.parse(new Date(Date.now())) - Date.parse(new Date(getLastActiveTime()))
    console.log(diff)
    console.log('last active', new Date(getLastActiveTime()))
  }
 
  const handleOnActive = event => {
    console.log('user is active', event)
    console.log('time remaining', getRemainingTime())
  }
 
  const handleOnAction = (e) => {
    console.log('user did something', e)
  }
 
  const { getRemainingTime, getLastActiveTime } = useIdleTimer({
    timeout: 1000 *4,
    onIdle: handleOnIdle,
    onActive: handleOnActive,
    onAction: handleOnAction,
    debounce: 500
  })

  const existingTokens = JSON.parse(localStorage.getItem("token"))
  const existingPlayer = JSON.parse(localStorage.getItem("player"))
  const [authTokens, setAuthTokens] = React.useState(existingTokens)
  const [profileData, setProfileData] = React.useState(existingPlayer)

  const setTokens = (data) => {
    localStorage.setItem("token", JSON.stringify(data))
    setAuthTokens(data)
  }
  const setPlayer = (data) => {
    localStorage.setItem("player", JSON.stringify(data))
    setProfileData(data)
  }

  

  return (
    <ThemeProvider theme={theme}>
      <AuthContext.Provider value={{ authTokens, setAuthTokens: setTokens }} >
        <ProfileContext.Provider value={{ profileData, setProfileData: setPlayer }}>
          <Routes />
        </ProfileContext.Provider>
      </AuthContext.Provider>
    </ThemeProvider >
  )
}

export default App
