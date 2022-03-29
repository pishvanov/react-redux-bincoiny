import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';

import {
  decrease, increase, setError, resetError,
} from '../../redux/actions';
import local from '../../constants/local';
import './BitcoinPrice.css';

function BitcoinPrice() {
  const dispatch = useDispatch();

  const {
    walletReducer: { price },
    errorReducer: { isError },
  } = useSelector((state) => state);

  const increaseHandle = () => {
    dispatch(increase(local.bitcoinValue));
  };

  const decreaseHandle = () => {
    if (price > local.bitcoinValue) {
      dispatch(decrease(local.bitcoinValue));
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
        <Alert severity="error">{local.bitcoinPriceBelow}</Alert>
      </div>
    );
  }
  return (
    <div className="wrap">
      <Typography className="header">
        Bitcoin price is
        {' '}
        {price}
        $
      </Typography>
      <Button onClick={increaseHandle} className="increase" variant="contained">
        Increase Bitcoin Price (+
        {local.bitcoinValue}
        )
      </Button>
      <Button onClick={decreaseHandle} className="decrease" variant="contained">
        Decrease Bitcoin Price (-
        {local.bitcoinValue}
        $)
      </Button>
    </div>
  );
}

export default BitcoinPrice;
