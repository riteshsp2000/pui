import { ThemeOptions } from '@mui/material';
import { chipClasses } from '@mui/material/Chip';

export const chipStyleOverrides: ThemeOptions = {
  components: {
    MuiChip: {
      styleOverrides: {
        root: () => ({
          fontWeight: 400,
          borderRadius: '7px',
          '&:hover': {
            cursor: 'pointer',
          },
        }),
        outlined: ({ theme }) => ({
          background: 'transparent',
          color: theme.palette.text.secondary,
          border: `1px solid ${theme.palette.border?.dark}`,
          '&:hover': {
            background: theme.palette.border?.dark,
          },
        }),
        outlinedPrimary: ({ theme }) => ({
          background: 'transparent',
          color: theme.palette.primary.main,
          border: `1px solid ${theme.palette.primary.main}`,
          '&:hover': {
            background: theme.palette.primary.main,
            color: theme.palette.primary.contrastText,
            border: '0px',
            [`& .${chipClasses.deleteIconOutlinedColorPrimary}`]: {
              color: `${theme.palette.primary.dark} !important`,
            },
          },
        }),
        outlinedSecondary: ({ theme }) => ({
          background: 'transparent',
          color: theme.palette.secondary.main,
          border: `1px solid ${theme.palette.secondary.main}`,
          '&:hover': {
            background: theme.palette.secondary.main,
            color: theme.palette.secondary.contrastText,
            border: '0px',

            [`& .${chipClasses.deleteIconOutlinedColorSecondary}`]: {
              color: `${theme.palette.secondary.dark} !important`,
            },
          },
        }),
        filled: ({ theme }) => ({
          background: theme.palette.background.secondary,
          color: theme.palette.text.secondary,
          border: '0px',
          '&:hover': {
            background: theme.palette.background.tertiary,
          },
        }),
        filledPrimary: ({ theme }) => ({
          background: theme.palette.primary.main,
          color: theme.palette.primary.contrastText,
          border: '0px',
          '&:hover': {
            background: theme.palette.primary.light,
          },
        }),
        filledSecondary: ({ theme }) => ({
          background: theme.palette.secondary.main,
          color: theme.palette.secondary.contrastText,
          border: '0px',
          '&:hover': {
            background: theme.palette.secondary.light,
          },
        }),
      },
    },
  },
};
