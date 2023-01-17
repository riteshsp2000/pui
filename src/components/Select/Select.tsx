import React from 'react';

import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import InputLabel from '@mui/material/InputLabel';
import MuiMenuItem from '@mui/material/MenuItem';
import MuiSelect, { SelectChangeEvent } from '@mui/material/Select';

import {
  PuiSelectProps,
  PuiSelectRequiredItems
} from './Select.types';
import PuiSelectInput from './SelectInput';
import PuiSelectOption from './SelectOption';

const PuiSelect = <T extends PuiSelectRequiredItems>({
  label,
  placeholder,
  helperText,

  id,
  value,
  setValue,
  list,

  selectProps,

  multiple,
  chip,

  renderTag,
  renderOption,
}: PuiSelectProps<T>) => {
  const getItemFromString = (stringList: Array<string>): Array<T> =>
    list.filter(({ value: listValue }) => stringList.includes(listValue));

  const handleSelectChange = (event: SelectChangeEvent<unknown>, child: React.ReactNode) => {
    const {
      target: { value: eventValue },
    } = event;

    if (!multiple) {
      const selectedValue = (child as React.ReactElement).props.value;
      return setValue(list.filter(({ value: listValue }) => listValue === selectedValue));
    }

    return setValue(getItemFromString(eventValue as Array<string>));
  };

  const defaultTag = (props: Array<T>) => <PuiSelectInput selectedItems={props} chip={chip} />;
  const finalRenderTag = renderTag || defaultTag;

  const defaultOption = (item: T) => <PuiSelectOption item={item} />;
  const finalRenderOption = renderOption || defaultOption;

  return (
    <FormControl>
      {label && <InputLabel id={id}>{label}</InputLabel>}

      <MuiSelect
        id={id}
        labelId={id}
        placeholder={placeholder || label}
        label={label}
        multiple={true}
        value={value.map((val) => val.value)}
        onChange={handleSelectChange}
        renderValue={(selected) => finalRenderTag(getItemFromString(selected as Array<string>))}
        {...selectProps}
      >
        {list.map((item) => (
          <MuiMenuItem key={item.value} value={item.value}>
            {finalRenderOption(item)}
          </MuiMenuItem>
        ))}
      </MuiSelect>

      {helperText && <FormHelperText sx={{ color: 'text.tertiary' }}>{helperText}</FormHelperText>}
    </FormControl>
  );
};

export default PuiSelect;
