import { unstable_createMuiStrictModeTheme as createTheme } from '@material-ui/core';

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
  palette: {
    background: {
      default: 'white',
    },
    primary: { 
      main: '#ffc600',
      light: '#cacac9',
      dark: '#333',
    },
    secondary: {
      main: '#ffdbad',
      dark: '#e0bd8c',
    },
  },
  overrides: {
    MuiLink: {
      root: {
        color: '#333',
      },
      underlineAlways: {
        textDecorationColor: '#ffc600',
        textDecorationThickness: 4,
      }
    },
    MuiTooltip: {
      tooltip: {
        backgroundColor: '#333',
        letterSpacing: 2,
        textTransform: 'uppercase',
      },
      arrow: {
        "&::before": {
          backgroundColor: '#333',
        }
      }
    },
  },
  typography: {
    fontFamily: '"Mukta", sans-serif',
    h1: {
      color: 'black',
      fontFamily: '"Mukta", sans-serif',
      fontSize: '4rem',
      fontWeight: 700,
      marginTop: 0,
      marginBottom: 12,
    },
    h2: {
      color: 'black',
      fontFamily: '"Mukta", sans-serif',
      fontSize: '1.875rem',
      fontWeight: 600,
      letterSpacing: 2,
      marginBottom: 20,
      textTransform: 'uppercase',
    },
    h3: {
      color: 'black',
      fontFamily: '"Mukta", sans-serif',
      fontSize: '1.25rem',
      fontWeight: 600,
      marginTop: 12,
      marginBottom: 16,
    },
    body1: {
      color: '#333',
      fontSize: '0.875rem'
    },
  },
})

export default theme;
