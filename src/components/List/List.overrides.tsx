import { ThemeOptions } from '@mui/material';
import { listItemClasses } from '@mui/material/ListItem';
import { listItemButtonClasses } from '@mui/material/ListItemButton';
import { listItemIconClasses } from '@mui/material/ListItemIcon';

export const listStyleOverrides: ThemeOptions = {
  components: {
    MuiList: {
      styleOverrides: {
        root: ({ theme }) => ({
          padding: 0,
          color: `${theme.palette.text.secondary}`,

          '&:last-child': {
            marginBottom: '0px',
          },

          [`& .${listItemClasses.root}`]: {
            padding: '14px',
            color: `${theme.palette.text.secondary}`,

            '&:hover': {
              background: `${theme.palette.background.secondary}`,
            },
          },
          [`& .${listItemButtonClasses.root}`]: {
            padding: '14px',
            color: `${theme.palette.text.secondary}`,

            '&:hover': {
              background: `${theme.palette.background.secondary}`,
            },
          },

          '&& .Mui-selected, && .Mui-selected:hover': {
            bgcolor: `${theme.palette.primary.dark}`,
            color: `${theme.palette.common.white}`,

            [`&, & .${listItemIconClasses.root}`]: {
              color: `${theme.palette.common.white}`,
            },
          },
        }),
      },
    },
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          marginRight: '16px',
          [`&.${listItemIconClasses.root}`]: {
            minWidth: 'unset',
          },
        },
      },
    },
    MuiListSubheader: {
      styleOverrides: {
        root: ({ theme }) => ({
          background: theme.palette.background.secondary,
          color: theme.palette.text.secondary,
        }),
      },
    },
  },
};
