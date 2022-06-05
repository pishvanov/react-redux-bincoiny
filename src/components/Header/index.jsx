import * as React from 'react';
import Icon from '@mui/material/Icon';
import Toolbar from '@mui/material/Toolbar';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import { makeStyles } from '@material-ui/core';

import logo from '../../assets/img/logo-small.png';

const useStyles = makeStyles({
  logo: {
    width: 36,
    height: 36,
  },
});

function Header() {
  const classes = useStyles();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar elevation={0}>
        <Toolbar>
          <Icon
            sx={{ width: '36px', height: '36px', marginRight: '12px' }}
          >
            <img src={logo} alt="logo" className={classes.logo} />
          </Icon>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;
