import { ThemeOptions } from '@mui/material';

export const menuStyleOverrides: ThemeOptions = {
  components: {
    MuiCheckbox: {
      defaultProps: {
        color: 'primary',
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: ({ theme }) => ({
          padding: '0rem',
          color: theme.palette.text.secondary,
          fontWeight: '400',

          '&:hover': {
            background: theme.palette.primary.dark,
            color: theme.palette.text.primary,
            fontWeight: '600',
          },
        }),
        selected: ({ theme }) => ({
          background: theme.palette.primary.dark,
          color: theme.palette.text.primary,
          fontWeight: '600',
        }),
      },
    },
    MuiMenu: {
      styleOverrides: {
        root: {
          padding: 0,
        },
      },
    },
  },
};
