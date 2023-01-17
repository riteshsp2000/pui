import { ThemeOptions } from '@mui/material';

const neutral = {
  100: '#FFFFFF',
  200: '#F3F3F4',
  300: '#E7E8E9',
  400: '#CFD1D4',
  500: '#9FA3A9',
  600: '#6F757E',
  700: '#3F4753',
  800: '#27303E',
  900: '#0F1928',
};

const background = {
  default: '#ffffff',
  paper: '#eeeeee',
  primary: '#ffffff',
  secondary: '#eeeeee',
  tertiary: '#e6e6e6',
};

const border = {
  light: '#BBBBBB',
  dark: '#5B5B5B',
  separator: '#333333',
};

const divider = neutral[300];

const primary = {
  main: '#1976D2',
  light: '#90CAF9',
  dark: '#1565C0',
  contrastText: '#111827',
};

const secondary = {
  main: '#e63946',
  light: '#ee747e',
  dark: '#a12831',
  contrastText: '#2e0b0e',
};

const success = {
  main: '#4CAF50',
  light: '#cde9ce',
  dark: '#388E3C',
  contrastText: '#111827',
};

const info = {
  main: '#2196F3',
  light: '#cee9ff',
  dark: '#0063B7',
  contrastText: '#111827',
};

const warning = {
  main: '#FB8C00',
  light: '#ffeeb9',
  dark: '#FFA000',
  contrastText: '#111827',
};

const error = {
  main: '#FF5252',
  light: '#fad7da',
  dark: '#E64A19',
  contrastText: '#111827',
};

const text = {
  primary: 'rgba(0, 0, 0, 0.87)',
  secondary: 'rgba(0, 0, 0, 0.6)',
  tertiary: 'rgba(0, 0, 0, 0.38)',
  disabled: 'rgba(0, 0, 0, 0.38)',
};

export const lightThemeOptions: ThemeOptions = {
  palette: {
    action: {
      active: neutral[300],
      hover: neutral[300],
      selected: neutral[300],
      disabledBackground: neutral[300],
      disabled: neutral[300],
    },
    background,
    divider,
    error,
    info,
    mode: 'dark',
    neutral,
    primary,
    secondary,
    success,
    text,
    warning,
    border,
  },
  shadows: [
    'none',
    '0px 1px 2px rgba(0, 0, 0, 0.24)',
    '0px 1px 2px rgba(0, 0, 0, 0.24)',
    '0px 1px 4px rgba(0, 0, 0, 0.24)',
    '0px 1px 5px rgba(0, 0, 0, 0.24)',
    '0px 1px 6px rgba(0, 0, 0, 0.24)',
    '0px 2px 6px rgba(0, 0, 0, 0.24)',
    '0px 3px 6px rgba(0, 0, 0, 0.24)',
    '0px 4px 6px rgba(0, 0, 0, 0.24)',
    '0px 5px 12px rgba(0, 0, 0, 0.24)',
    '0px 5px 14px rgba(0, 0, 0, 0.24)',
    '0px 5px 15px rgba(0, 0, 0, 0.24)',
    '0px 6px 15px rgba(0, 0, 0, 0.24)',
    '0px 7px 15px rgba(0, 0, 0, 0.24)',
    '0px 8px 15px rgba(0, 0, 0, 0.24)',
    '0px 9px 15px rgba(0, 0, 0, 0.24)',
    '0px 10px 15px rgba(0, 0, 0, 0.24)',
    '0px 12px 22px -8px rgba(0, 0, 0, 0.24)',
    '0px 13px 22px -8px rgba(0, 0, 0, 0.24)',
    '0px 14px 24px -8px rgba(0, 0, 0, 0.24)',
    '0px 20px 25px rgba(0, 0, 0, 0.24)',
    '0px 25px 50px rgba(0, 0, 0, 0.24)',
    '0px 25px 50px rgba(0, 0, 0, 0.24)',
    '0px 25px 50px rgba(0, 0, 0, 0.24)',
    '0px 25px 50px rgba(0, 0, 0, 0.24)',
  ],
};
