import React from 'react';
import { Route, Routes } from 'react-router-dom';

import MyWallet from '../../pages/MyWallet';
import BuyBitcoin from '../../pages/BuyBitcoin';
import SellBitcoin from '../../pages/SellBitcoin';
import BitcoinPrice from '../../pages/BitcoinPrice';
import Error from '../Error';

function Main() {
  return (
    <div>
      <Routes>
        <Route path="/wallet" exect element={<MyWallet />} />
        <Route path="/buy" element={<BuyBitcoin />} />
        <Route path="/sell" element={<SellBitcoin />} />
        <Route path="/bitcoin" element={<BitcoinPrice />} />
        <Route path="/error" exect element={<Error />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default Main;
