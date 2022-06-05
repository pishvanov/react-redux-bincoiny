import React from 'react';

import { Alert } from '@mui/material';

import local from '../../constants/local';

function Error() {
  return (
    <div className="wrap">
      <Alert sx={{ marginTop: '45vh' }} severity="error">{local.error}</Alert>
    </div>
  );
}

export default Error;
