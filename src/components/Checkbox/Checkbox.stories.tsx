import React from 'react';
import {
  ComponentMeta,
  ComponentStory
} from '@storybook/react';

import Checkbox from '@mui/material/Checkbox';

export default {
  title: 'Atoms/Checkbox',
  component: Checkbox,
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args) => <Checkbox {...args} />;

export const Default = Template.bind({});
Default.args = {
  color: 'primary',
  defaultChecked: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  color: 'primary',
  disabled: true,
};

export const DisabledCheck = Template.bind({});
DisabledCheck.args = {
  color: 'primary',
  defaultChecked: true,
  disabled: true,
};
