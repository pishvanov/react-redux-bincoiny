import { createTheme } from '@mui/material';

const theme = createTheme({
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          display: 'flex',
        },
      },
    },
  },
});

export default theme;
