import React from 'react';

import { createSvgIcon } from '@mui/material/utils';

export const ArrowEnter = createSvgIcon(
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M13 11L18 16L13 21"
      stroke="#CED4DA"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M7 3V16H18"
      stroke="#CED4DA"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>,
  'ArrowEnter',
);
