import type { Theme } from '@mui/material';
import {
  createTheme as createMuiTheme,
  responsiveFontSizes,
  ThemeOptions
} from '@mui/material/styles';

import { accordionStyleOverides } from '../components/Accordion/Accordion.overrides';
import { alertStyleOverrides } from '../components/Alert/Alert.overrides';
import { buttonStyleOverrides } from '../components/Button/Button.overrides';
import { checkboxStyleOverrides } from '../components/Checkbox/Checkbox.overrides';
import { chipStyleOverrides } from '../components/Chip/Chip.overrides';
import { listStyleOverrides } from '../components/List/List.overrides';
import { menuStyleOverrides } from '../components/Menu/Menu.overrides';
import { paperStyleOverrides } from '../components/Paper/Paper.overrides';
import { progressStyleOverrides } from '../components/ProgressBar/Progress.overrides';
import { radioStyleOverrides } from '../components/Radio/Radio.overrides';
import { selectStyleOverrides } from '../components/Select/Select.overrides';
import { sliderStyleOverrides } from '../components/Slider/Slider.overrides';
import { switchStyleOverrides } from '../components/Switch/Switch.overrides';
import { tableStyleOverrides } from '../components/Table/Table.overrides';
import { textFieldStyleOverrides } from '../components/TextField/TextField.overrides';
import { baseThemeOptions } from './base-theme-options';
import { darkThemeOptions } from './dark-theme-options';
import { lightThemeOptions } from './light-theme-options';

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

const colorThemes = {
  dark: darkThemeOptions,
  light: lightThemeOptions,
};

interface ThemeConfig {
  responsiveFontSizes?: boolean;
  mode: 'light' | 'dark';
  theme?: ThemeOptions;
}

export const createTheme = (config: ThemeConfig): Theme => {
  let theme = createMuiTheme(
    baseThemeOptions,
    accordionStyleOverides,
    alertStyleOverrides,
    buttonStyleOverrides,
    checkboxStyleOverrides,
    chipStyleOverrides,
    listStyleOverrides,
    menuStyleOverrides,
    paperStyleOverrides,
    progressStyleOverrides,
    radioStyleOverrides,
    selectStyleOverrides,
    sliderStyleOverrides,
    switchStyleOverrides,
    tableStyleOverrides,
    textFieldStyleOverrides,
    colorThemes[config.mode] || darkThemeOptions,
  );

  if (config.responsiveFontSizes) {
    theme = responsiveFontSizes(theme);
  }

  return theme;
};
