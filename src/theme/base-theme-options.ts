import '@fontsource/ibm-plex-sans/300.css';
import '@fontsource/ibm-plex-sans/400.css';
import '@fontsource/ibm-plex-sans/500.css';
import '@fontsource/ibm-plex-sans/700.css';
import '@fontsource/ibm-plex-serif/300.css';
import '@fontsource/ibm-plex-serif/400.css';
import '@fontsource/ibm-plex-serif/500.css';
import '@fontsource/ibm-plex-serif/700.css';

import { ThemeOptions } from '@mui/material';

export const baseThemeOptions: ThemeOptions = {
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 1000,
      lg: 1200,
      xl: 1920,
    },
  },
  typography: {
    fontFamily:
      '"IBM Plex Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"',
    body1: {
      fontSize: '1rem',
      fontWeight: 400,
      lineHeight: 1.375,
      fontFamily:
        '"IBM Plex Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"',
    },
    body2: {
      fontSize: '0.875rem',
      fontWeight: 400,
      lineHeight: 1.45,
      fontFamily:
        '"IBM Plex Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"',
    },
    subtitle1: {
      fontSize: '1rem',
      fontWeight: 500,
      lineHeight: 1.75,
      fontFamily:
        '"IBM Plex Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"',
    },
    subtitle2: {
      fontSize: '0.875rem',
      fontWeight: 500,
      lineHeight: 1.57,
      fontFamily:
        '"IBM Plex Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"',
    },
    overline: {
      fontSize: '0.75rem',
      fontWeight: 600,
      letterSpacing: '0.5px',
      lineHeight: 2.5,
      textTransform: 'uppercase',
      fontFamily:
        '"IBM Plex Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"',
    },
    caption: {
      fontSize: '0.75rem',
      fontWeight: 400,
      lineHeight: 1.66,
      color: 'text.primary',
      fontFamily:
        '"IBM Plex Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"',
    },
    h1: {
      fontWeight: 400,
      fontSize: '3.5rem',
      lineHeight: 1.125,
      letterSpacing: '-0.03rem',
      fontFamily: 'IBM Plex Serif',
    },
    h2: {
      fontWeight: 400,
      fontSize: '2.375rem',
      lineHeight: 1.375,
      fontFamily:
        '"IBM Plex Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"',
    },
    h3: {
      fontWeight: 400,
      fontSize: '1.5rem',
      lineHeight: 1.375,
      fontFamily:
        '"IBM Plex Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"',
    },
    h4: {
      fontWeight: 400,
      fontSize: '1.25rem',
      lineHeight: 1.4,
      fontFamily:
        '"IBM Plex Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"',
    },
    h5: {
      fontWeight: 400,
      fontSize: '1.125rem',
      lineHeight: 1.375,
      fontFamily:
        '"IBM Plex Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"',
    },
    h6: {
      fontWeight: 400,
      fontSize: '1.125rem',
      lineHeight: 1.375,
      fontFamily:
        '"IBM Plex Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        '*:after': { boxSizing: 'border-box', WebkitFontSmoothing: 'antialiased' },
        '*:before': { boxSizing: 'border-box', WebkitFontSmoothing: 'antialiased' },
        '*': {
          boxSizing: 'border-box',
          WebkitFontSmoothing: 'antialiased',
          margin: 0,
          padding: 0,
          border: 0,
          fontSize: '100%',
          verticalAlign: 'baseline',
        },
        html: {
          MozOsxFontSmoothing: 'grayscale',
          WebkitFontSmoothing: 'antialiased',
          minHeight: '100%',
          width: '100%',
          fontFamily: 'graphik',
        },
        body: {
          minHeight: '100%',
          width: '100%',
          fontFamily: 'graphik',
        },
      },
    },
    MuiFormControlLabel: {
      styleOverrides: {
        root: ({ theme }) => ({
          color: theme.palette.secondary.main,
        }),
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          borderRadius: 7,
          padding: 8,
        },
      },
    },
    MuiLink: {
      defaultProps: {
        underline: 'hover',
      },
    },
    MuiPopover: {
      defaultProps: {
        elevation: 16,
      },
      styleOverrides: {
        root: {
          borderRadius: 7,
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          fontSize: 14,
          fontWeight: 500,
          lineHeight: 1.71,
          minWidth: 'auto',
          paddingLeft: 0,
          paddingRight: 0,
          textTransform: 'none',
          '& + &': {
            marginLeft: 24,
          },
        },
      },
    },
  },
  shape: {
    borderRadius: 7,
  },
};
