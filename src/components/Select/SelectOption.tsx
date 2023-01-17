import React from 'react';

import { Box, Typography } from '@mui/material';

import { PuiSelectRequiredItems } from './Select.types';

const PuiSelectOption = <T extends PuiSelectRequiredItems>({ item }: { item: T }) => {
  return (
    <Box sx={{ padding: '1rem' }}>
      <Typography variant="body1">{item.label}</Typography>
    </Box>
  );
};

export default PuiSelectOption;
