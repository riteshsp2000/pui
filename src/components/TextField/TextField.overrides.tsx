import { ThemeOptions } from '@mui/material';

export const textFieldStyleOverrides: ThemeOptions = {
  components: {
    MuiTextField: {
      styleOverrides: {},
    },
    MuiInputBase: {
      styleOverrides: {
        root: ({ theme }) => ({
          background: theme.palette.background.secondary,
          border: `1px solid ${theme.palette.border?.separator}`,

          '.MuiInputBase-input': {
            margin: '12px',
          },
          '&:hover': {
            border: `1px solid ${theme.palette.primary.main}`,
          },
          '&:focus-within': {
            border: `1px solid ${theme.palette.primary.main}`,
          },
          '&.Mui-disabled': {
            border: `1px solid ${theme.palette.border?.dark}`,
          },
          '&.Mui-disabled:focus-within': {
            border: `1px solid ${theme.palette.border?.dark}`,
          },
          '&.Mui-disabled:hover': {
            border: `1px solid ${theme.palette.border?.dark}`,
          },
          '&.Mui-error': {
            border: `1px solid ${theme.palette.error.main}`,
          },
          '&.MuiInputBase-adornedEnd': {
            // paddingRight: '12px',
          },

          '& .MuiInputAdornment-root': {
            marginLeft: 0,

            '& .MuiIconButton-root': {
              background: theme.palette.primary.main,
              marginRight: 0,
              width: '56px',
              height: '56px',
            },
          },
        }),
      },
    },
    MuiInput: {
      styleOverrides: {},
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: ({ theme }) => ({
          borderRadius: 7,
          border: `1px solid ${theme.palette.secondary}`,
          background: theme.palette.background.secondary,
        }),
      },
    },
    MuiFilledInput: {
      styleOverrides: {
        root: ({ theme }) => ({
          borderRadius: 7,
          background: theme.palette.background.secondary,

          '&:before': {
            border: '0px',

            '&:hover': {
              border: '0px',
            },
            '&:focus': {
              border: '0px',
            },
          },
          '&:after': {
            border: '0px',

            '&:hover': {
              border: '0px',
            },
            '&:focus': {
              border: '0px',
            },
          },

          '& .MuiInputBase-input': {
            '&:hover': {
              background: theme.palette.background.secondary,
              border: `1px solid ${theme.palette.primary.main}`,
            },
          },
        }),
      },
    },
  },
};
