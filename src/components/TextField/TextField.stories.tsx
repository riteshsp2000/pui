import React from 'react';
import {
  ComponentMeta,
  ComponentStory
} from '@storybook/react';

import { IconButton, InputAdornment } from '@mui/material';

import { Search } from '../../assets/icons/SearchIcon';
import TextField from './TextField';

export default {
  title: 'Atoms/TextField',
  component: TextField,
  parameters: {
    backgrounds: { default: 'primary' },
  },
} as ComponentMeta<typeof TextField>;

const Template: ComponentStory<typeof TextField> = (args) => <TextField {...args} />;

export const Default = Template.bind({});
Default.args = {
  inputProps: {
    placeholder: 'Placeholder',
  },
  label: 'Label',
};

export const Active = Template.bind({});
Active.args = {
  value: 'Input with Value',
  label: 'Label',
};

export const Information = Template.bind({});
Information.args = {
  info: 'Information',
  label: 'Label',
  placeholder: 'Enter text',
};

export const Errored = Template.bind({});
Errored.args = {
  label: 'Email',
  error: true,
  placeholder: 'enter your email',
  info: 'enter a valid email',
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  label: 'Label',
  placeholder: 'Placeholder',
};

export const Multiline = Template.bind({});
Multiline.args = {
  label: 'Label',
  multiline: true,
  minRows: 4,
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  label: 'Label',
  endAdornment: (
    <InputAdornment position="end">
      <IconButton edge="end">
        <Search sx={{ color: 'text.primary' }} />
      </IconButton>
    </InputAdornment>
  ),
};

export const WithStartIcon = Template.bind({});
WithStartIcon.args = {
  label: 'Label',
  startAdornment: (
    <InputAdornment position="start">
      <IconButton sx={{ background: 'transparent' }}>
        <Search sx={{ color: 'text.tertiary' }} />
      </IconButton>
    </InputAdornment>
  ),
};
