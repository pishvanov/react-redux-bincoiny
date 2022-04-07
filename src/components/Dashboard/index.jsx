import React from 'react';
import Container from '@mui/material/Container';

import Main from '../Main';
import History from '../History';
import Sidebar from '../Sidebar';

function Dashboard() {
  return (
    <div>
      <Container maxWidth={false} disableGutters sx={{ width: '100%', justifyContent: 'space-between', height: '95vh' }}>
        <Sidebar />
        <Main />
        <History />
      </Container>
    </div>
  );
}

export default Dashboard;
