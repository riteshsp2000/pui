import { ThemeOptions } from '@mui/material';
import { accordionSummaryClasses } from '@mui/material/AccordionSummary';
import { svgIconClasses } from '@mui/material/SvgIcon';

export const accordionStyleOverides: ThemeOptions = {
  components: {
    MuiAccordion: {
      styleOverrides: {
        root: {
          border: 'none',
          borderRadius: '7px !important',

          '&:before': {
            display: 'none',
          },

          [`&.${accordionSummaryClasses.expanded}`]: {
            marginBottom: 0,
            marginTop: 0,
          },
        },
      },
    },
    MuiAccordionSummary: {
      styleOverrides: {
        root: ({ theme }) => ({
          background: theme.palette.background.primary,
          borderRadius: '7px',

          flexDirection: 'row-reverse',

          [`&.${accordionSummaryClasses.expanded}`]: {
            background: theme.palette.background.tertiary,
            minHeight: 0,
            borderBottomLeftRadius: 0,
            borderBottomRightRadius: 0,
          },

          [`& .${accordionSummaryClasses.expandIconWrapper}`]: {
            [`&.${accordionSummaryClasses.expanded}`]: {
              transform: 'rotate(90deg)',
            },

            [`& .${svgIconClasses.root}`]: {
              fontSize: '0.7rem !important',
            },
          },

          [`& .${accordionSummaryClasses.content}`]: {
            margin: '17px 0px',
            marginLeft: '0.8rem',
          },

          [`& .${accordionSummaryClasses.content}.${accordionSummaryClasses.expanded}`]: {
            margin: '17px 0px',
            marginLeft: '0.8rem',
          },
        }),
      },
    },
    MuiAccordionDetails: {
      styleOverrides: {
        root: ({ theme }) => ({
          display: 'flex',
          alignItems: 'center',
          width: 'fit-content',
          borderRadius: '7px !important',

          '& hr': {
            marginRight: '22px',
            marginLeft: '5.6px',
            borderRightWidth: '1px',
            borderRightColor: theme.palette.neutral?.[600],
          },
        }),
      },
    },
  },
};
