import React from 'react';

import MuiAutoComplete, {
  AutocompleteRenderGetTagProps,
  AutocompleteRenderInputParams,
  AutocompleteRenderOptionState
} from '@mui/material/Autocomplete';
import Chip from '@mui/material/Chip';
import MuiMenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import {
  PuiSearchableSelectProps,
  PuiSelectRequiredItems
} from './Select.types';
import PuiSelectOption from './SelectOption';

const PuiSearchableSelect = <T extends PuiSelectRequiredItems>({
  label,
  placeholder,
  id,
  value,
  setValue,
  inputValue,
  setInputValue,
  list,
  multiple,
  chip,
  renderInput,
  renderOption,
  renderTags,
  autoCompleteProps,
}: PuiSearchableSelectProps<T>) => {
  const handleChange = (_event: React.SyntheticEvent<Element, Event>, newValue: unknown) =>
    setValue(newValue as Array<T>);
  const handleInputChange = (_event: React.SyntheticEvent<Element, Event>, newInputValue: string) =>
    setInputValue(newInputValue);

  const defaultRenderInput = (params: AutocompleteRenderInputParams) => (
    <TextField {...params} label={label} placeholder={placeholder} />
  );

  const defaultRenderOption = (
    props: React.HTMLAttributes<HTMLLIElement>,
    item: T,
    state: AutocompleteRenderOptionState,
  ) => (
    <MuiMenuItem selected={state.selected} {...props}>
      <PuiSelectOption item={item} />
    </MuiMenuItem>
  );

  const defaultRenderTags = (tags: Array<T>, getTagProps: AutocompleteRenderGetTagProps) =>
    tags.map((item, index: number) =>
      chip ? (
        <Chip variant="outlined" color="primary" label={item.label} {...getTagProps({ index })} />
      ) : (
        <Typography component="span" {...getTagProps({ index })}>
          {index !== 0 && ', '}
          {item.label}
        </Typography>
      ),
    );

  const finalRenderInput = renderInput || defaultRenderInput;
  const finalRenderOption = renderOption || defaultRenderOption;
  const finalRenderTags = renderTags || defaultRenderTags;

  return (
    <MuiAutoComplete
      id={id}
      multiple={multiple}
      clearOnEscape
      autoComplete
      openOnFocus
      autoHighlight
      clearOnBlur
      disableCloseOnSelect
      disablePortal
      {...autoCompleteProps}
      options={list}
      value={value}
      onChange={handleChange}
      inputValue={inputValue}
      onInputChange={handleInputChange}
      renderInput={finalRenderInput}
      renderOption={finalRenderOption}
      renderTags={finalRenderTags}
    />
  );
};

export default PuiSearchableSelect;
