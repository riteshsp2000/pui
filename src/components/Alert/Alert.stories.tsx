/* eslint-disable no-console */
import React from 'react';
import {
  ComponentMeta,
  ComponentStory
} from '@storybook/react';

import { AlertTitle, Button } from '@mui/material';
import Alert from '@mui/material/Alert';

export default {
  title: 'Atoms/Alert',
  component: Alert,
} as ComponentMeta<typeof Alert>;

const Template: ComponentStory<typeof Alert> = (args) => <Alert {...args} />;

export const Error = Template.bind({});
Error.args = {
  severity: 'error',
  children: 'This is an error alert',
};
export const Warning = Template.bind({});
Warning.args = {
  severity: 'warning',
  children: 'This is a warning alert',
};
export const Info = Template.bind({});
Info.args = {
  severity: 'info',
  children: 'This is an info alert',
};
export const Success = Template.bind({});
Success.args = {
  severity: 'success',
  children: 'This is a success alert',
};

export const OutlinedError = Template.bind({});
OutlinedError.args = {
  severity: 'error',
  children: 'This is an error alert',
  variant: 'outlined',
};
export const OutlinedWarning = Template.bind({});
OutlinedWarning.args = {
  severity: 'warning',
  children: 'This is a warning alert',
  variant: 'outlined',
};
export const OutlinedInfo = Template.bind({});
OutlinedInfo.args = {
  severity: 'info',
  children: 'This is an info alert',
  variant: 'outlined',
};
export const OutlinedSuccess = Template.bind({});
OutlinedSuccess.args = {
  severity: 'success',
  children: 'This is a success alert',
  variant: 'outlined',
};

export const FilledError = Template.bind({});
FilledError.args = {
  severity: 'error',
  children: 'This is an error alert',
  variant: 'filled',
};
export const FilledWarning = Template.bind({});
FilledWarning.args = {
  severity: 'warning',
  children: 'This is a warning alert',
  variant: 'filled',
};
export const FilledInfo = Template.bind({});
FilledInfo.args = {
  severity: 'info',
  children: 'This is an info alert',
  variant: 'filled',
};
export const FilledSuccess = Template.bind({});
FilledSuccess.args = {
  severity: 'success',
  children: 'This is a success alert',
  variant: 'filled',
};

export const WithDescription = Template.bind({});
WithDescription.args = {
  severity: 'success',
  children: (
    <>
      <AlertTitle>Success Alert Title</AlertTitle>
      Success Alert Description
    </>
  ),
};

export const WithActionAndDescription = Template.bind({});
WithActionAndDescription.args = {
  severity: 'success',
  children: (
    <>
      <AlertTitle>Success Alert Title</AlertTitle>
      Success Alert Description
    </>
  ),
  action: (
    <Button color="inherit" size="small">
      Undo
    </Button>
  ),
  onClose: () => console.log('closed'),
};
