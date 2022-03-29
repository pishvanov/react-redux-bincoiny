import React from 'react';

import Box from '@mui/material/Box';

import Menu from './Menu';

function Sidebar() {
  return (
    <Box
      className="sidebar"
      sx={{
        width: '15%',
        backgroundColor: 'background.paper',
      }}
    >
      <Menu />
    </Box>
  );
}

export default Sidebar;
