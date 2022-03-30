import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import { useSelector } from 'react-redux';

import Box from '@mui/material/Box';

function History() {
  const { history } = useSelector((state) => state.historyReducer);
  return (
    <Box
      className="history"
      sx={{
        position: 'relative',
        marginLeft: '85%',
        marginTop: '64px',
        width: '15%',
        minHeight: '93vh',
        backgroundColor: 'secondary.lightGrey',
      }}
    >
      <div>
        {history.map((item) => (
          <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'secondary.lightGrey' }}>
            <ListItem alignItems="flex-start" key={history.index}>
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
            <hr />
          </List>
        ))}
      </div>
    </Box>
  );
}

export default History;
