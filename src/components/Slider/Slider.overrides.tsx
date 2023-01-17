import { ThemeOptions } from '@mui/material';

export const sliderStyleOverrides: ThemeOptions = {
  components: {
    MuiSlider: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          height: 8,
        },
      },
    },
  },
};
