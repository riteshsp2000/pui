import { ThemeOptions } from '@mui/material';

export const buttonStyleOverrides: ThemeOptions = {
  components: {
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: 7,
        },
        containedPrimary: ({ theme }) => ({
          '&:hover': {
            color: theme.palette.primary.light,
          },
        }),
        containedSecondary: ({ theme }) => ({
          '&:hover': {
            color: theme.palette.secondary.main,
          },
        }),
        containedInfo: ({ theme }) => ({
          '&:hover': {
            color: theme.palette.info.light,
          },
        }),
        containedError: ({ theme }) => ({
          '&:hover': {
            color: theme.palette.error.light,
          },
        }),
        containedWarning: ({ theme }) => ({
          '&:hover': {
            color: theme.palette.warning.light,
          },
        }),
        containedSuccess: ({ theme }) => ({
          '&:hover': {
            color: theme.palette.success.light,
          },
        }),
        sizeSmall: {
          padding: '6px 16px',
        },
        sizeMedium: {
          padding: '8px 20px',
        },
        sizeLarge: {
          padding: '11px 24px',
        },
        textSizeSmall: {
          padding: '7px 12px',
        },
        textSizeMedium: {
          padding: '9px 16px',
        },
        textSizeLarge: {
          padding: '12px 16px',
        },
      },
    },
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
  },
};
