import React from 'react';
import { useSelector } from 'react-redux';

import Box from '@mui/material/Box';

function History() {
  const { history } = useSelector((state) => state.historyReducer);
  return (
    <Box
      className="history"
      sx={{
        marginTop: '56px',
        width: '15%',
        backgroundColor: 'background.paper',
      }}
    >
      <div>
        {history.map((item) => (
          <div key={history.index}>
            <div>{item.date}</div>
            <br />
            <div>{item.message}</div>
            <hr />
            <br />
          </div>
        ))}
      </div>
    </Box>
  );
}

export default History;
