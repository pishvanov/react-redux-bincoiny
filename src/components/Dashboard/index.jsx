import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Container from '@mui/material/Container';

import Sidebar from '../Sidebar';
import Header from '../Header';
import Error from '../Error';
import FindTransactions from '../../pages/FindTransactions';
import Transactions from '../../pages/Transactions';

function Dashboard() {
  return (
    <div>
      <Header />
      <Container maxWidth={false} disableGutters>
        <Router>
          <Sidebar />
          <Routes>
            <Route path="/" element={<FindTransactions />} />
            <Route path="/result" element={<Transactions />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </Router>
      </Container>
    </div>
  );
}

export default Dashboard;
