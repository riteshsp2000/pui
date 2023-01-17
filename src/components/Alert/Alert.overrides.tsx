import { ThemeOptions } from '@mui/material';

export const alertStyleOverrides: ThemeOptions = {
  components: {
    MuiAlert: {
      styleOverrides: {
        root: {
          borderRadius: '7px',
        },
        standardError: ({ theme }) => ({
          backgroundColor: theme.palette.error.light,
          color: theme.palette.error.dark,
        }),
        standardWarning: ({ theme }) => ({
          backgroundColor: theme.palette.warning.light,
          color: theme.palette.warning.dark,
        }),
        standardInfo: ({ theme }) => ({
          backgroundColor: theme.palette.info.light,
          color: theme.palette.info.dark,
        }),
        standardSuccess: ({ theme }) => ({
          backgroundColor: theme.palette.success.light,
          color: theme.palette.success.dark,
        }),
        outlinedError: ({ theme }) => ({
          border: `1px solid ${theme.palette.error.main}`,
          color: theme.palette.error.main,
        }),
        outlinedWarning: ({ theme }) => ({
          border: `1px solid ${theme.palette.warning.main}`,
          color: theme.palette.warning.main,
        }),
        outlinedInfo: ({ theme }) => ({
          border: `1px solid ${theme.palette.info.main}`,
          color: theme.palette.info.main,
        }),
        outlinedSuccess: ({ theme }) => ({
          border: `1px solid ${theme.palette.success.main}`,
          color: theme.palette.success.main,
        }),
        filledError: ({ theme }) => ({
          background: theme.palette.error.main,
          color: theme.palette.error.light,
        }),
        filledWarning: ({ theme }) => ({
          background: theme.palette.warning.main,
          color: theme.palette.warning.light,
        }),
        filledInfo: ({ theme }) => ({
          background: theme.palette.info.main,
          color: theme.palette.info.light,
        }),
        filledSuccess: ({ theme }) => ({
          background: theme.palette.success.main,
          color: theme.palette.success.light,
        }),
      },
    },
  },
};
