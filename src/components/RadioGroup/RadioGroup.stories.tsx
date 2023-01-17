/* eslint-disable @typescript-eslint/ban-ts-comment */
import React from 'react';
import {
  ComponentMeta,
  ComponentStory
} from '@storybook/react';

import Demo from './Demo';
import PuiRadioGroup from './RadioGroup';

const list = [
  {
    value: 'male',
    label: 'Male',
    href: '/male',
  },
  {
    value: 'female',
    label: 'Female',
    href: '/female',
  },
  {
    value: 'others',
    label: 'Others',
    href: '/others',
  },
];

export default {
  title: 'Molecules/RadioGroup',
  component: PuiRadioGroup,
  args: {
    list,
    id: 'radio-group',
    label: 'Gender',
  },
} as ComponentMeta<typeof PuiRadioGroup>;

const Template: ComponentStory<typeof PuiRadioGroup> = (args) => <PuiRadioGroup {...args} />;

export const Vertical = Template.bind({});
Vertical.args = {
  selectedItem: list[0],
  // @ts-ignore
  setSelectedItem: (value: typeof list[0]) => {
    console.log(value);
  },
};

export const Horizontal = Template.bind({});
Horizontal.args = {
  selectedItem: list[0],
  // @ts-ignore
  setSelectedItem: (value: typeof list[0]) => {
    console.log(value);
  },
  radioGroupProps: {
    row: true,
  },
};

const Template2: ComponentStory<typeof Demo> = () => <Demo />;
export const WorkingDemo = Template2.bind({});
