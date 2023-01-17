import React from 'react';

import { Box, Chip, Typography } from '@mui/material';

import { PuiSelectRequiredItems } from './Select.types';

const PuiSelectInput = <T extends PuiSelectRequiredItems>({
  selectedItems,
  chip,
}: {
  selectedItems: Array<T>;
  chip?: boolean;
}) => {
  return (
    <Box display="flex" flexWrap="wrap" sx={{ gap: 0.5 }}>
      {selectedItems.map((item, index) =>
        chip ? (
          <Chip variant="outlined" color="primary" key={item.value} label={item.label} />
        ) : (
          <Typography component="span" key={item.value}>
            {index !== 0 && ', '}
            {item.label}
          </Typography>
        ),
      )}
    </Box>
  );
};

export default PuiSelectInput;
