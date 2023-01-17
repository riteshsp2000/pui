import { AutocompleteProps } from '@mui/material';
import { SelectProps } from '@mui/material/Select';

export interface PuiSelectRequiredItems {
  label: string;
  value: string;
}

export interface PuiSelectProps<T extends PuiSelectRequiredItems> {
  label?: string;
  placeholder?: string;
  helperText?: string;

  id: string;
  value: Array<T>;
  setValue: (param: Array<T>) => void;

  list: Array<T>;

  multiple?: boolean;
  chip?: boolean;

  renderOption?: (props: T) => React.ReactNode;
  renderTag?: (props: Array<T>) => React.ReactNode;

  selectProps?: Partial<SelectProps>;
}

export interface PuiSearchableSelectProps<T extends PuiSelectRequiredItems> {
  label?: string;
  placeholder?: string;
  helperText?: string;

  id: string;
  value: Array<T>;
  setValue: (param: Array<T>) => void;
  inputValue: string;
  setInputValue: (param: string) => void;

  list: Array<T>;

  multiple?: boolean;
  chip?: boolean;

  renderInput?: AutocompleteProps<T, boolean, boolean, boolean>['renderInput'];
  renderOption?: AutocompleteProps<T, boolean, boolean, boolean>['renderOption'];
  renderTags?: AutocompleteProps<T, boolean, boolean, boolean>['renderTags'];

  autoCompleteProps?: Partial<AutocompleteProps<T, boolean, boolean, boolean>>;
}
