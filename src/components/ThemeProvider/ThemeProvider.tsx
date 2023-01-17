import React from 'react';

import { ThemeProvider as MuiThemeProvider } from '@mui/system';

import { createTheme } from '../../theme/index';
import { PuiThemeProviderProps } from './ThemeProvider.types';

const PuiThemeProvider: React.FC<PuiThemeProviderProps> = ({
  responsiveFontSizes = false,
  mode = 'light',
  children,
}) => (
  <MuiThemeProvider theme={createTheme({ responsiveFontSizes, mode })}>{children}</MuiThemeProvider>
);

export * from '../../theme/index';

export default PuiThemeProvider;
