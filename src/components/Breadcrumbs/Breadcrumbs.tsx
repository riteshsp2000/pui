import React, { useState } from 'react';

import { Typography } from '@mui/material';
import MuiBreadcrumbs from '@mui/material/Breadcrumbs';

import { ChevronRight } from '../../assets/icons/ChevronRight';
import { PuiBreadcrumbsProps } from './Breadcrumbs.types';

const PuiBreadcrumbs: React.FC<PuiBreadcrumbsProps> = ({ list }) => {
  const [active, setActive] = useState<number | null>(null);

  return (
    <MuiBreadcrumbs
      sx={{ alignItems: 'center' }}
      separator={
        <ChevronRight
          sx={{ fontSize: '0.6rem !important', color: 'text.tertiary', marginTop: '2px' }}
        />
      }
    >
      {list.map((listItem, index) => (
        <Typography
          key={`breadcrumb-item-${index}`}
          variant="caption"
          color={active === index ? 'text.primary' : 'text.tertiary'}
          sx={{ '&:hover': { cursor: 'pointer' } }}
          onClick={() => {
            listItem.onClick();
            setActive(index);
          }}
        >
          {listItem.text}
        </Typography>
      ))}
    </MuiBreadcrumbs>
  );
};

export default PuiBreadcrumbs;
