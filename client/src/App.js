import React from 'react';
import './App.css';
import Routes from './views/routes'
import { ThemeProvider } from '@material-ui/core'
import theme from './theme'
import { AuthContext } from './context/auth'

function App() {


  const existingTokens = JSON.parse(localStorage.getItem("token"))
  const [authTokens, setAuthTokens] = React.useState(existingTokens)

  const setTokens = (data) => {
    localStorage.setItem("token", JSON.stringify(data))
    setAuthTokens(data)
  }
  
  window.onbeforeunload= ()=>{
    localStorage.removeItem("token")
  }

  return (
    <ThemeProvider theme={theme}>
      <AuthContext.Provider value={{ authTokens, setAuthTokens: setTokens }} >
        <Routes />
      </AuthContext.Provider>
    </ThemeProvider >
  )
}

export default App
