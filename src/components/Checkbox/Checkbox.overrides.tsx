import { ThemeOptions } from '@mui/material';

export const checkboxStyleOverrides: ThemeOptions = {
  components: {
    MuiCheckbox: {
      defaultProps: {
        color: 'primary',
      },
    },
  },
};
