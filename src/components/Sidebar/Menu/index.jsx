import * as React from 'react';
import { Link } from 'react-router-dom';

import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import PriceChangeIcon from '@mui/icons-material/PriceChange';
import List from '@mui/material/List';
import Box from '@mui/material/Box';

export default function SelectedListItem() {
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  return (
    <Box sx={{}}>
      <List component="nav" aria-label="main mailbox folders">
        <Link style={{ textDecoration: 'none' }} to="/">
          <ListItemButton
            selected={selectedIndex === 1}
            onClick={(event) => handleListItemClick(event, 1)}
          >
            <ListItemIcon>
              <AccountBalanceWalletIcon style={{ color: 'lightgrey' }} />
            </ListItemIcon>
            <ListItemText primary="FIND TRANSACTIONS" />
          </ListItemButton>
        </Link>
        <Link style={{ textDecoration: 'none' }} to="/soon">
          <ListItemButton
            selected={selectedIndex === 2}
            onClick={(event) => handleListItemClick(event, 4)}
          >
            <ListItemIcon>
              <PriceChangeIcon style={{ color: 'lightgrey' }} />
            </ListItemIcon>
            <ListItemText primary="COMING SOON" />
          </ListItemButton>
        </Link>
      </List>
    </Box>
  );
}
