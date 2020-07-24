import React from 'react';
import './App.css';
import Routes from './views/routes'
import { ThemeProvider } from '@material-ui/core'
import theme from './theme'
import { AuthContext } from './context/auth'
import { ProfileContext } from './context/profile'


// [x] TODO don't remove token when reload or refresh 

function App() {


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
