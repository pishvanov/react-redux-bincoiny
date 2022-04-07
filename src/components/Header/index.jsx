import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core';
import LogoutIcon from '@mui/icons-material/Logout';
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';

import logo from '../../assets/img/logo-small.png';
import { signOut } from '../../redux/actions';

function Header() {
  const data = useSelector((state) => state.walletReducer);

  const dispatch = useDispatch();

  const { isAuth } = useSelector((state) => state.authReducer);

  const doSignOut = () => {
    dispatch(signOut(false));
  };

  const useStyles = makeStyles({
    logo: {
      width: 36,
      height: 36,
      marginRight: 12,
    },
  });

  const classes = useStyles();

  function guestHeader() {
    return null;
  }

  function userHeader() {
    return (
      <Box sx={{ display: 'flex' }}>
        <Typography align="center" variant="body1" component="div">
          <div>{data.money}$</div>
          <div>{data.coins} BITCOINS</div>
        </Typography>
        <Link style={{ textDecoration: 'none', color: 'white' }} to="/signin">
          <Button onClick={doSignOut} color="inherit">
            <LogoutIcon />
          </Button>
        </Link>
      </Box>
    );
  }

  return (
    <AppBar sx={{ display: 'flex' }}>
      <Toolbar disableGutters sx={{ height: '5vh', padding: '0 12px', justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <img src={logo} alt="logo" className={classes.logo} />
          <Typography variant="body1" sx={{ }}>BITCOIN FRENZY</Typography>
        </Box>
        <Typography variant="body1" sx={{ justifyContent: 'center' }}>1 BITCOIN = {data.price}$</Typography>
        {isAuth ? userHeader() : guestHeader()}
      </Toolbar>
    </AppBar>
  );
}

export default Header;
