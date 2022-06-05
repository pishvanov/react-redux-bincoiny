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
    MuiDrawer: {
      styleOverrides: {
        root: {
          height: '100%',
        },
      },
    },
    MuiAlert: {
      styleOverrides: {
        root: {
          marginTop: '300px',
        },
      },
    },
    MuiToolbar: {
      styleOverrides: {
        root: {
          '@media (min-width: 599px)': {
            paddingLeft: '9px',
            paddingRight: '9px',
          },
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
    MuiToggleButton: {
      styleOverrides: {
        root: {
          '&.Mui-selected': {
            backgroundColor: 'rgb(54 67 120)',
            color: 'lightgrey',
          },
          '&:hover': {
            backgroundColor: 'rgb(247 148 19)',
          },
          '&.Mui-selected:hover': {
            backgroundColor: '#364151',
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          color: 'lightgrey',
          '&.Mui-active': {
            backgroundColor: 'white',
            fontweight: '500',
          },
          '&:hover': {
            backgroundColor: '#364151',
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          position: 'relative',
        },
      },
    },
  },
  MuiButtonBase: {
    styleOverrides: {
      root: {
        padding: 0,
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
