import React from 'react';
import './App.css';
import Routes from './views/routes'
import BottomBar from './components/BottomBar'
import { ThemeProvider } from '@material-ui/core'
import theme from './theme'

function App() {


  return (
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  )
}

export default App
