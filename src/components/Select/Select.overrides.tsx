import { ThemeOptions } from '@mui/material';

export const selectStyleOverrides: ThemeOptions = {
  components: {
    MuiSelect: {
      styleOverrides: {
        select: () => ({
          margin: 0,
          minWidth: '200px',
        }),
      },
    },
    MuiAutocomplete: {
      styleOverrides: {
        input: {
          margin: '0px !important',
        },
        option: ({ theme }) => ({
          '&.Mui-focused ': {
            backgroundColor: `${theme.palette.background.secondary} !important`,
            fontWeight: '400',
          },
          '&.Mui-selected': {
            backgroundColor: `${theme.palette.primary.dark} !important`,
          },
          '&:hover': {
            backgroundColor: `${theme.palette.background.secondary} !important`,
          },
        }),
      },
    },
  },
};
