import React from 'react';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import Typography from '@mui/material/Typography';
import ListItemText from '@mui/material/ListItemText';

import { useSelector } from 'react-redux';

import Box from '@mui/material/Box';

function History() {
  const { history } = useSelector((state) => state.historyReducer);
  return (
    <Box
      sx={{
        width: '25vh',
        backgroundColor: 'secondary.lightGrey',
        justifyContent: 'flex-end',
        overflowY: 'scroll',
      }}
    >
      <div>
        {history.map((item) => (
          <List sx={{ bgcolor: 'secondary.lightGrey' }}>
            <ListItem key={history.index}>
              <ListItemText
                secondary={(
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    {item.date}
                  </Typography>
        )}
                primary={item.message}
              />
            </ListItem>
            <Divider variant="fullWidth" component="li" />
          </List>
        ))}
      </div>
    </Box>
  );
}

export default History;
