import { ThemeOptions } from '@mui/material';

export const radioStyleOverrides: ThemeOptions = {
  components: {
    MuiRadio: {
      defaultProps: {
        color: 'primary',
      },
    },
  },
};
