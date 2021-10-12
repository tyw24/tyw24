import { createTheme }  from '@material-ui/core/styles';

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
      light: '#e1e1e0',
      dark: '#333',
    },
    secondary: {
      main: '#ffdbad',
      dark: '#e0bd8c',
    },
  },
  overrides: {
    MuiTooltip: {
      tooltip: {
        backgroundColor: '#333',
        letterSpacing: 2,
        textTransform: 'uppercase',
      },
    },
  },
  typography: {
    fontFamily: '"Open Sans", sans-serif',
    h1: {
      color: 'black',
      fontFamily: '"Playfair Display", serif',
      fontSize: '4rem',
      fontWeight: 700,
      marginTop: 0,
      marginBottom: 20,
    },
    h2: {
      color: 'black',
      fontFamily: '"Roboto", sans-serif',
      fontSize: '1.875rem',
      fontWeight: 600,
      letterSpacing: 2,
      marginBottom: 20,
      textTransform: 'uppercase',
    },
    body1: {
      color: '#333',
      fontSize: '0.875rem'
    },
  },
})

export default theme;
