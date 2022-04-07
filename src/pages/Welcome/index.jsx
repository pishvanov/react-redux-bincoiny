import React from 'react';
import { Container } from '@mui/material';
import Button from '@material-ui/core/Button';
import { Box } from '@material-ui/core';
import { Link } from 'react-router-dom';
import background from '../../assets/img/background.png';

function Welcome() {
  return (
    <div>
      <Container className="wrap" maxWidth={false} disableGutters style={{ backgroundImage: `url(${background})`, backgroundSize: 'initial' }}>
        <Box sx={{
          background: 'white', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', borderRadius: '5px', padding: '5px',
        }}
        >
          <Link style={{ textDecoration: 'none', color: 'white' }} to="/signin">
            <Button type="submit" variant="contained" color="primary">
              Sign In
            </Button>
          </Link>
          <Link style={{ textDecoration: 'none', color: 'white' }} to="/signup">
            <Button type="submit" variant="contained" color="primary">
              Sign Up
            </Button>
          </Link>
        </Box>
      </Container>
    </div>
  );
}
export default Welcome;
