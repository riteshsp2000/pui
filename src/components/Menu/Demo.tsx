import React from 'react';

import { Box, Button, Typography } from '@mui/material';

import { ChevronRight } from '../../assets/icons/ChevronRight';
import PuiMenu from './Menu';

const LIST_DATA = [
  {
    title: 'Integration Select',
    href: '/integrations/select',
  },
  {
    title: 'Integration Details',
    href: '/integrations/details',
  },
  {
    title: 'Integration Access',
    href: '/integrations/access',
    subList: [
      {
        title: 'Primary',
        href: '/integrations/access/primary',
      },
      {
        title: 'Secondary',
        href: '/integrations/access/secondary',
      },
    ],
  },
  {
    title: 'Integration Summary',
    href: '/integrations/summary',
  },
];

const Demo = () => {
  return (
    <PuiMenu
      list={LIST_DATA}
      dense
      menu
      closeOnItemClick
      renderMenuComponent={({ handleMenuOpen }) => (
        <Button onClick={handleMenuOpen} variant="outlined">
          Custom Menu Component
        </Button>
      )}
      renderListItemComponent={({ title, href, subList }) => (
        <Box
          sx={{ padding: '1rem' }}
          display="flex"
          justifyContent="flex-start"
          alignItems="center"
          onClick={() => {
            if (!subList) console.log(href);
          }}
        >
          <ChevronRight sx={{ marginRight: '1rem', fontSize: '1rem' }} />

          <Typography variant="body1">{title}</Typography>
        </Box>
      )}
    />
  );
};

export default Demo;
