import React from 'react';

import {
  InputBaseComponentsPropsOverrides,
  InputBaseProps
} from '@mui/material';

// TODO: change the required conditions here and update the naming convention
export interface ITextField extends InputBaseProps {
  inputProps: React.InputHTMLAttributes<HTMLInputElement> & InputBaseComponentsPropsOverrides;
  label: string;
  info: string;
  placeholder: string;
}
