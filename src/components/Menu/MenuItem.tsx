import React from 'react';

import MuiMenuItem from '@mui/material/MenuItem';

import { PuiMenuItemProps } from './Menu.types';

const PuiMenuItem: React.FC<PuiMenuItemProps> = ({
  selected,
  index,
  closeOnItemClick,
  handleMenuSelect,
  handleMenuClose,
  dense,
  children,
}) => {
  const handleMenuItemClick = () => {
    handleMenuSelect(index);
    if (closeOnItemClick) handleMenuClose();
  };

  return (
    <MuiMenuItem
      selected={selected === index}
      onClick={handleMenuItemClick}
      sx={{ marginBottom: dense ? '0px' : '0.75rem' }}
    >
      {children}
    </MuiMenuItem>
  );
};

export default PuiMenuItem;
