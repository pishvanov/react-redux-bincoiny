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
    MuiListItemButton: {
      styleOverrides: {
        root: {
          color: 'lightgrey',
          '&.Mui-selected': {
            color: 'white',
            fontweight: '500',
          },
          '&:hover': {
            backgroundColor: '#364151',
          },
        },
      },
    },
  },
  palette: {
    primary: {
      main: '#364378',
      dark: '#364151',
    },
    secondary: {
      main: '#f79413',
      lightGrey: 'rgb(196, 195, 195)',
    },
  },
});

export default theme;
