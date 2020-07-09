import React from 'react';
import './App.css';
import Routes from './views/routes'
import BottomBar from './components/BottomBar'
import { ThemeProvider } from '@material-ui/core'
import theme from './theme'
import axios from './axios'

function App() {

  React.useEffect(()=>{
    axios.get(`/player`)
    .then(res=>{
      console.log(res.data)
    })
    .catch(err=>{
      console.log(err)
    })
  }, [])
  return (
    <ThemeProvider theme={theme}>
      <Routes />
      <BottomBar />
    </ThemeProvider>
  )
}

export default App
