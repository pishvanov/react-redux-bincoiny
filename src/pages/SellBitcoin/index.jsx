import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';

import { sell, setError, resetError } from '../../redux/actions';
import local from '../../constants/local';
import '../pages.css';

function SellBitcoin() {
  const dispatch = useDispatch();

  const {
    walletReducer: { coins, price },
    errorReducer: { isError },
  } = useSelector((state) => state);

  const sellHandle = () => {
    if (coins > 0) {
      dispatch(sell(price));
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
        <Alert severity="error">{local.noCoins}</Alert>
      </div>
    );
  }
  return (
    <div className="wrap">
      <Typography sx={{ margin: '10px' }} className="header">
        Bitcoin price is
        {' '}
        {price}
        $
      </Typography>
      <Typography sx={{ margin: '10px' }} className="descriprion">{price < local.bitcoinHighPrice ? local.sellByLowPrice : local.sellByHighPrice}</Typography>
      <Button sx={{ margin: '10px' }} onClick={sellHandle} className="deposit" variant="contained">Sell 1 Bitcoin</Button>
    </div>
  );
}

export default SellBitcoin;
