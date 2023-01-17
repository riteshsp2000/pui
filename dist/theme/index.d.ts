import type { Theme } from '@mui/material';
import { ThemeOptions } from '@mui/material/styles';
interface Neutral {
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
    900: string;
}
interface Border {
    light: string;
    dark: string;
    separator: string;
}
declare module '@mui/material/styles' {
    interface TypeText {
        primary: string;
        secondary: string;
        tertiary: string;
        button: string;
        disabled: string;
    }
    interface TypeBackground {
        primary?: string;
        secondary?: string;
        tertiary?: string;
    }
    interface Palette {
        neutral?: Neutral;
        border?: Border;
    }
    interface PaletteOptions {
        neutral?: Neutral;
        border?: Border;
    }
}
interface ThemeConfig {
    responsiveFontSizes?: boolean;
    mode: 'light' | 'dark';
    theme?: ThemeOptions;
}
export declare const createTheme: (config: ThemeConfig) => Theme;
export {};
