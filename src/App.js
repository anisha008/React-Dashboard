import React, { useState } from 'react'
import './App.css'
import Sidebar from './components/Sidebar/Sidebar'
import Navbar from './components/Navbar/Navbar'
import Main from './components/Main/Main'
import { makeStyles, createMuiTheme, ThemeProvider } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  }
}))

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#7e57c2',
      light: '#af8ee8',
      dark: '#402473'
    },
    secondary: {
      main: '#545354'
    }
  },
  status: {
    blue: {
      main: '#54d5ff',
      light: '#a3e8ff',
      dark: '#28687d'
    },
  }
});

const App = () => {
  const classes = useStyles()

  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <Navbar drawerOpen={open} handleDrawerClose={handleDrawerClose} handleDrawerOpen={handleDrawerOpen} />
        <Sidebar open={open} />
        <Main />
      </div>
    </ThemeProvider>
  );
}

export default App;
