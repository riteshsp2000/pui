import { RadioGroupProps, RadioProps } from '@mui/material';

export interface PuiRadioListProps {
  value: string | number | boolean;
  label: string;
}

export interface PuiRadioGroupProps<T extends PuiRadioListProps> {
  selectedItem: T;
  setSelectedItem: (param: T) => void;
  list: Array<T>;
  id: string;
  radioGroupProps?: RadioGroupProps;
  radioProps?: RadioProps;
  label?: string;
}
