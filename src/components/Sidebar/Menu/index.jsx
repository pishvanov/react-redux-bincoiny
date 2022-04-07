import * as React from 'react';
import { Link } from 'react-router-dom';

import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import PriceChangeIcon from '@mui/icons-material/PriceChange';
import SellIcon from '@mui/icons-material/Sell';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
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
        <Link style={{ textDecoration: 'none' }} to="/dasboard/wallet">
          <ListItemButton
            selected={selectedIndex === 1}
            onClick={(event) => handleListItemClick(event, 1)}
          >
            <ListItemIcon>
              <AccountBalanceWalletIcon style={{ color: 'lightgrey' }} />
            </ListItemIcon>
            <ListItemText primary="MY WALLET" />
          </ListItemButton>
        </Link>
        <Link style={{ textDecoration: 'none' }} to="/dasboard/buy">
          <ListItemButton
            selected={selectedIndex === 2}
            onClick={(event) => handleListItemClick(event, 2)}
          >
            <ListItemIcon>
              <ShoppingCartIcon style={{ color: 'lightgrey' }} />
            </ListItemIcon>
            <ListItemText primary="BUY BITCOIN" />
          </ListItemButton>
        </Link>
        <Link style={{ textDecoration: 'none' }} to="/dasboard/sell">
          <ListItemButton
            selected={selectedIndex === 3}
            onClick={(event) => handleListItemClick(event, 3)}
          >
            <ListItemIcon>
              <SellIcon style={{ color: 'lightgrey' }} />
            </ListItemIcon>
            <ListItemText primary="SELL BITCOIN" />
          </ListItemButton>
        </Link>
        <Link style={{ textDecoration: 'none' }} to="/dasboard/bitcoin">
          <ListItemButton
            selected={selectedIndex === 4}
            onClick={(event) => handleListItemClick(event, 4)}
          >
            <ListItemIcon>
              <PriceChangeIcon style={{ color: 'lightgrey' }} />
            </ListItemIcon>
            <ListItemText primary="BITCOIN PRICE" />
          </ListItemButton>
        </Link>
      </List>
    </Box>
  );
}
