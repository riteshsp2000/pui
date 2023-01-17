import React from 'react';
import {
  ComponentMeta,
  ComponentStory
} from '@storybook/react';

import {
  Demo as DemoComponent,
  SearchableSelect
} from './Demo';
import PuiSelect from './Select';

const list = [
  {
    value: 'option 1',
    label: 'Option 1',
  },
  {
    value: 'option 2',
    label: 'Option 2',
  },
  {
    value: 'option 3',
    label: 'Option 3',
  },
];

export default {
  title: 'Atoms/Select',
  component: PuiSelect,
  args: {
    list,
    id: 'select-component',
    label: 'options',
  },
} as ComponentMeta<typeof PuiSelect>;

const Template: ComponentStory<typeof DemoComponent> = (args) => <DemoComponent {...args} />;

export const Singular = Template.bind({});

export const Multiple = Template.bind({});
Multiple.args = {
  multiple: true,
};

export const MultipleWithChip = Template.bind({});
MultipleWithChip.args = {
  multiple: true,
  chip: true,
};

export const ScrolledSelect = Template.bind({});
ScrolledSelect.args = {
  list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20].map((num) => ({
    value: `option ${num}`,
    label: `Option ${num}`,
  })),
  selectProps: {
    MenuProps: {
      MenuListProps: {
        sx: {
          height: '300px',
        },
      },
    },
  },
};

const Template2: ComponentStory<typeof SearchableSelect> = () => <SearchableSelect />;

export const Searchable = Template2.bind({});
