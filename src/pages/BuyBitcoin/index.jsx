import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';

import { buy, setError, resetError } from '../../redux/actions';
import local from '../../constants/local';
import './BuyBitcoin.css';

function BuyBitcoin() {
  const dispatch = useDispatch();

  const {
    walletReducer: { price, money },
    errorReducer: { isError },
  } = useSelector((state) => state);

  const buyHandle = () => {
    if (money > price) {
      dispatch(buy(price));
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
      <Typography className="descriprion">{price < local.bitcoinHighPrice ? local.buyByLowPrice : local.buyByHighPrice}</Typography>
      <Button onClick={buyHandle} className="deposit" variant="contained">Buy 1 Bitcoin</Button>
    </div>
  );
}

export default BuyBitcoin;
