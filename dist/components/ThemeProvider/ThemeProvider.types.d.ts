import { PropsWithChildren } from 'react';
import { ThemeOptions } from '@mui/material';
export interface PuiThemeProviderProps extends PropsWithChildren {
    responsiveFontSizes?: boolean;
    mode?: 'dark' | 'light';
    theme?: ThemeOptions;
}
