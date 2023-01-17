import React from 'react';
import { InputBaseComponentsPropsOverrides, InputBaseProps } from '@mui/material';
export interface ITextField extends InputBaseProps {
    inputProps: React.InputHTMLAttributes<HTMLInputElement> & InputBaseComponentsPropsOverrides;
    label: string;
    info: string;
    placeholder: string;
}
