import * as React from 'react';
import { Link } from 'react-router-dom';

import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/Inbox';
import List from '@mui/material/List';
import Box from '@mui/material/Box';

export default function SelectedListItem() {
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  return (
    <Box sx={{ marginTop: '46px', width: '100%', bgcolor: 'background.paper' }}>
      <List component="nav" aria-label="main mailbox folders">
        <Link className="link" style={{ textDecoration: 'none' }} to="/wallet">
          <ListItemButton
            selected={selectedIndex === 1}
            onClick={(event) => handleListItemClick(event, 1)}
          >
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="My Wallet" />
          </ListItemButton>
        </Link>
        <Link className="link" style={{ textDecoration: 'none' }} to="/buy">
          <ListItemButton
            selected={selectedIndex === 2}
            onClick={(event) => handleListItemClick(event, 2)}
          >
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="Buy Bitcoin" />
          </ListItemButton>
        </Link>
        <Link className="link" style={{ textDecoration: 'none' }} to="/sell">
          <ListItemButton
            selected={selectedIndex === 3}
            onClick={(event) => handleListItemClick(event, 3)}
          >
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="Sell Bitcoin" />
          </ListItemButton>
        </Link>
        <Link className="link" style={{ textDecoration: 'none' }} to="/bitcoin">
          <ListItemButton
            selected={selectedIndex === 4}
            onClick={(event) => handleListItemClick(event, 4)}
          >
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="Bitcoin Price" />
          </ListItemButton>
        </Link>
      </List>
    </Box>
  );
}
