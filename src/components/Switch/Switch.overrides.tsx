import { ThemeOptions } from '@mui/material';
import { switchClasses } from '@mui/material/Switch';

export const switchStyleOverrides: ThemeOptions = {
  components: {
    MuiSwitch: {
      defaultProps: {
        color: 'primary',
      },
      styleOverrides: {
        root: ({ theme }) => ({
          [`& .${switchClasses.switchBase}`]: {
            [`&.${switchClasses.checked}`]: {
              [`& + .${switchClasses.track}`]: {
                backgroundColor: theme.palette.primary.main,
                opacity: 1,
              },
              [`& .${switchClasses.thumb}`]: {
                background: '#ffffff',
                border: `1px solid ${theme.palette.primary.main}`,
                opacity: 1,
              },
            },
          },
          [`& .${switchClasses.track}`]: {
            background: theme.palette.background.tertiary,
            opacity: 1,
            borderRadius: 0,
          },
          [`& .${switchClasses.thumb}`]: {
            background: theme.palette.background.secondary,
            borderRadius: 0,
            boxShadow: 'none',
          },
        }),
      },
    },
  },
};
