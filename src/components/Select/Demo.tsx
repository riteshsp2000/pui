import React, { useState } from 'react';

import SearchSelect from './SearchableSelect';
import PuiSelect from './Select';
import {
  PuiSelectProps,
  PuiSelectRequiredItems
} from './Select.types';

export const Demo = <T extends PuiSelectRequiredItems>(args: PuiSelectProps<T>) => {
  const [value, setValue] = useState<Array<T>>([]);

  return <PuiSelect {...args} value={value} setValue={setValue} />;
};

const options = [
  {
    value: 'custom option value',
    label: 'custom optiom label',
    isHeader: false,
  },
  {
    value: 'option 2',
    label: 'Option 2',
    isHeader: false,
  },
  {
    value: 'category 1',
    label: 'Category 1',
    isHeader: true,
  },
  {
    value: 'option 3',
    label: 'Option 3',
    isHeader: false,
  },
];

export const SearchableSelect = () => {
  const [value, setValue] = useState<Array<{ value: string; label: string; isHeader: boolean }>>(
    [],
  );
  const [inputValue, setInputValue] = useState('');

  return (
    <SearchSelect
      value={value}
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      setValue={setValue}
      inputValue={inputValue}
      setInputValue={setInputValue}
      list={options}
      label="options"
      id="searchable-select"
      multiple
      chip
    />
  );
};
