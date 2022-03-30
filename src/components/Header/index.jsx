import * as React from 'react';
import { useSelector } from 'react-redux';

import Typography from '@mui/material/Typography';
import Icon from '@mui/material/Icon';
import Toolbar from '@mui/material/Toolbar';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';

import logo from '../../assets/img/logo-small.png';

function Header() {
  const data = useSelector((state) => state.walletReducer);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar elevation={0}>
        <Toolbar>
          <Icon
            sx={{ width: '36px', height: '36px', marginRight: '12px' }}
          >
            <img src={logo} alt="logo" className="logo-img" />
          </Icon>
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
