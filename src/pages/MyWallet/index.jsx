import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';

import {
  deposit, withdraw, setError, resetError,
} from '../../redux/actions';
import local from '../../constants/local';
import '../pages.css';

function MyWallet() {
  const dispatch = useDispatch();

  const {
    walletReducer: { coins, money },
    errorReducer: { isError },
  } = useSelector((state) => state);

  const depositHandle = () => {
    dispatch(deposit(local.balanceValue));
  };

  const withdrawHandle = () => {
    if (money) {
      dispatch(withdraw(local.balanceValue));
    } else {
      dispatch(setError());
    }
  };

  if (isError) {
    setTimeout(() => {
      dispatch(resetError());
    }, 1000);
    return (
      <div className="wrap">
        <Alert severity="error">{local.noMoney}</Alert>
      </div>
    );
  }
  return (
    <div className="wrap">
      <Typography sx={{ margin: '10px' }} className="header">Your Bitcoin wallet</Typography>
      <Typography sx={{ margin: '10px' }} className="descriprion">
        You now own
        {' '}
        {coins}
        {' '}
        Bitcoins
      </Typography>
      <Button sx={{ margin: '10px' }} onClick={depositHandle} className="deposit" variant="contained">
        Deposit
        {' '}
        {local.balanceValue}
        $
      </Button>
      <Button sx={{ margin: '10px' }} onClick={withdrawHandle} className="withdraw" variant="contained">
        Widthdraw
        {' '}
        {local.balanceValue}
        $
      </Button>
    </div>
  );
}

export default MyWallet;
