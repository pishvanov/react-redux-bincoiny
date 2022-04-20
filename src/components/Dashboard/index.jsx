import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Container from '@mui/material/Container';

import BitcoinPrice from '../../pages/BitcoinPrice';
import SellBitcoin from '../../pages/SellBitcoin';
import BuyBitcoin from '../../pages/BuyBitcoin';
import MyWallet from '../../pages/MyWallet';
import History from '../History';
import Sidebar from '../Sidebar';
import Header from '../Header';
import Error from '../Error';
import WalletInfo from '../../pages/WalletInfo';

function Dashboard() {
  return (
    <div>
      <Header />
      <Container maxWidth={false} disableGutters>
        <Router>
          <Sidebar />
          <Routes>
            <Route path="/wallet1" element={<WalletInfo />} />
            <Route path="/wallet" element={<MyWallet />} />
            <Route path="/buy" element={<BuyBitcoin />} />
            <Route path="/sell" element={<SellBitcoin />} />
            <Route path="/bitcoin" element={<BitcoinPrice />} />
            <Route path="/error" exect element={<Error />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </Router>
        <History />
      </Container>
    </div>
  );
}

export default Dashboard;
