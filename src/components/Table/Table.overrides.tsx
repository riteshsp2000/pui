import { ThemeOptions } from '@mui/material';
import { tableCellClasses } from '@mui/material/TableCell';
import { tableRowClasses } from '@mui/material/TableRow';

export const tableStyleOverrides: ThemeOptions = {
  components: {
    MuiTableCell: {
      styleOverrides: {
        root: ({ theme }) => ({
          padding: '16px',

          [`&.${tableCellClasses.stickyHeader}`]: {
            background: `${theme.palette.background.secondary} !important`,
          },
        }),
      },
    },
    MuiTableHead: {
      styleOverrides: {
        root: ({ theme }) => ({
          borderBottom: 'none',
          [`& .${tableRowClasses.root}`]: {
            background: `${theme.palette.background.secondary} !important`,
          },
          [`& .${tableCellClasses.root}`]: {
            borderBottom: 'none',
            fontSize: '12px',
            fontWeight: 600,
            lineHeight: 1,
            letterSpacing: 0.5,
            textTransform: 'uppercase',
          },
          [`& .${tableCellClasses.paddingCheckbox}`]: {
            paddingTop: 4,
            paddingBottom: 4,
          },
        }),
      },
    },
    MuiTableRow: {
      styleOverrides: {
        root: ({ theme }) => ({
          '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.background.primary,
          },
          '&:nth-of-type(even)': {
            backgroundColor: theme.palette.background.tertiary,
          },
        }),
      },
    },
    MuiTablePagination: {
      styleOverrides: {
        menuItem: {
          padding: '7px 12px',
        },
      },
    },
  },
};
