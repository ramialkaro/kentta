import React from 'react'
import { AppBar, Toolbar, InputBase, Button } from '@material-ui/core'
import { makeStyles, fade } from '@material-ui/core/styles'
import SearchIcon from '@material-ui/icons/Search'
import { Link } from 'react-router-dom'
const useStyles = makeStyles((theme) => ({
  appBar: {
    top: 0,
    bottom: 'auto'
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}))
const TopBar = ({ data, setData }) => {

  const classes = useStyles();


  const handleSearch = (event) => {
    let currentRow = [];
    let newRow = [];

    if (event.target.value !== "") {
      currentRow = data.map(item => item);
      newRow = currentRow.filter(item => {
        let lc = item.gameType.toLowerCase() + item.gameShortID.toLowerCase()
        let filter = event.target.value.toLowerCase();
        return lc.includes(filter);
      });
    } else {
      newRow = [...data]
    }
    setData(newRow)

  };

  return (
    <AppBar position="fixed" color="inherit" className={classes.appBar}>
      <Toolbar>
        <div className={classes.search}>
          <div className={classes.searchIcon}>
            <SearchIcon color="primary" />
          </div>
          <InputBase
            placeholder="Search…"
            onChange={handleSearch}
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
            inputProps={{ 'aria-label': 'search' }}
          />
        </div>

        <Button component={Link} to="/newgame" color="primary" size="small">
          new
        </Button>


      </Toolbar>
    </AppBar>
  )
}

export default TopBar