import { ThemeOptions } from '@mui/material';

export const progressStyleOverrides: ThemeOptions = {
  components: {
    MuiLinearProgress: {
      styleOverrides: {
        root: {
          borderRadius: 3,
          overflow: 'hidden',
        },
      },
    },
  },
};
