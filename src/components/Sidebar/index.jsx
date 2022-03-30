import React from 'react';

import Box from '@mui/material/Box';

import Menu from './Menu';

function Sidebar() {
  return (
    <Box
      sx={{
        height: '100vh',
        marginTop: '56px',
        position: 'fixed',
        width: '15%',
        backgroundColor: 'primary.main',
      }}
    >
      <Menu />
    </Box>
  );
}

export default Sidebar;
