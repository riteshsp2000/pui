import { ThemeOptions } from '@mui/material';

export const paperStyleOverrides: ThemeOptions = {
  components: {
    MuiPaper: {
      defaultProps: {
        elevation: 0,
        square: true,
      },
      styleOverrides: {
        root: {
          backgroundImage: 'none',
        },
      },
    },
    MuiCard: {
      defaultProps: {
        elevation: 0,
        raised: false,
        square: true,
      },
      styleOverrides: {
        root: ({ theme }) => ({
          background: theme.palette.background.secondary,
        }),
      },
    },
    MuiCardHeader: {
      defaultProps: {
        titleTypographyProps: {
          variant: 'h4',
        },
        subheaderTypographyProps: {
          variant: 'body2',
        },
      },
      styleOverrides: {
        root: {
          padding: '32px 24px',
        },
      },
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          padding: '32px 24px',
          '&:last-child': {
            paddingBottom: '32px',
          },
        },
      },
    },
    MuiCardActions: {
      styleOverrides: {
        root: {
          padding: '16px 24px',
        },
      },
    },
  },
};
