import * as React from 'react';
import { useSelector } from 'react-redux';

import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';

import logo from '../../assets/img/logo.png';
import './Header.css';

function Header() {
  const data = useSelector((state) => state.walletReducer);

  return (
    <Box className="header" sx={{ flexGrow: 1 }}>
      <AppBar>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{}}
          >
            <img src={logo} alt="logo" className="logo-img" />
          </IconButton>
          <Typography variant="body1" component="div" sx={{ flexGrow: 1 }}>
            BITCOIN FRENZY
          </Typography>
          <Typography variant="body1" component="div" sx={{ flexGrow: 1 }}>
            1 BITCOIN =
            {' '}
            {data.price}
            $
          </Typography>
          <Typography variant="body1" component="div" sx={{ flexGrow: 0 }}>
            <div className="wallet">
              {data.money}
              $
            </div>
            <div className="coins">
              {data.coins}
              {' '}
              BITCOINS
            </div>
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;
