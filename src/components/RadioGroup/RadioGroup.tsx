import React from 'react';

import MuiFormControl from '@mui/material/FormControl';
import MuiFormControlLabel from '@mui/material/FormControlLabel';
import MuiFormLabel from '@mui/material/FormLabel';
import MuiRadio from '@mui/material/Radio';
import MuiRadioGroup from '@mui/material/RadioGroup';

import {
  PuiRadioGroupProps,
  PuiRadioListProps
} from './RadioGroup.types';

const PuiRadioGroup = <T extends PuiRadioListProps>({
  selectedItem,
  setSelectedItem,
  id,
  list,
  radioGroupProps,
  radioProps,
  label,
}: PuiRadioGroupProps<T>) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedItem(
      list.filter(({ value }) => value === (event.target as HTMLInputElement).value)[0],
    );
  };

  return (
    <MuiFormControl>
      {label && <MuiFormLabel id={id}>{label}</MuiFormLabel>}
      <MuiRadioGroup
        aria-labelledby={id}
        name={id}
        value={selectedItem.value}
        onChange={handleChange}
        {...radioGroupProps}
      >
        {list.map((item) => (
          <MuiFormControlLabel
            key={item.label}
            label={item.label}
            value={item.value}
            control={<MuiRadio {...radioProps} />}
          />
        ))}
      </MuiRadioGroup>
    </MuiFormControl>
  );
};

export default PuiRadioGroup;
