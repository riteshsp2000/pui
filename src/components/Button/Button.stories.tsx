import React from 'react';
import {
  ComponentMeta,
  ComponentStory
} from '@storybook/react';

import Button from '@mui/material/Button';

export default {
  title: 'Atoms/Button',
  component: Button,
  parameters: {
    backgrounds: { default: 'primary' },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

/** =============================================== Primary Buttons */
export const Primary = Template.bind({});
Primary.args = {
  variant: 'text',
  color: 'primary',
  children: 'Primary Button',
};

export const PrimaryOutlined = Template.bind({});
PrimaryOutlined.args = {
  variant: 'outlined',
  color: 'primary',
  children: 'Primary Outlined Button',
};

export const PrimaryContained = Template.bind({});
PrimaryContained.args = {
  variant: 'contained',
  color: 'primary',
  children: 'Primary Contained Button',
};

/** =============================================== Secondary Buttons */
export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'text',
  color: 'secondary',
  children: 'Secondary Button',
};

export const SecondaryOutlined = Template.bind({});
SecondaryOutlined.args = {
  variant: 'outlined',
  color: 'secondary',
  children: 'Secondary Outlined Button',
};

export const SecondaryContained = Template.bind({});
SecondaryContained.args = {
  variant: 'contained',
  color: 'secondary',
  children: 'Secondary Contained Button',
};

/** =============================================== Info Buttons */
export const Info = Template.bind({});
Info.args = {
  variant: 'text',
  color: 'info',
  children: 'Info Button',
};

export const InfoOutlined = Template.bind({});
InfoOutlined.args = {
  variant: 'outlined',
  color: 'info',
  children: 'Info Outlined Button',
};

export const InfoContained = Template.bind({});
InfoContained.args = {
  variant: 'contained',
  color: 'info',
  children: 'Info Contained Button',
};

/** =============================================== Success Buttons */
export const Success = Template.bind({});
Success.args = {
  variant: 'text',
  color: 'success',
  children: 'Success Button',
};

export const SuccessOutlined = Template.bind({});
SuccessOutlined.args = {
  variant: 'outlined',
  color: 'success',
  children: 'Success Outlined Button',
};

export const SuccessContained = Template.bind({});
SuccessContained.args = {
  variant: 'contained',
  color: 'success',
  children: 'Success Contained Button',
};

/** =============================================== Warning Buttons */
export const Warning = Template.bind({});
Warning.args = {
  variant: 'text',
  color: 'warning',
  children: 'Warning Button',
};

export const WarningOutlined = Template.bind({});
WarningOutlined.args = {
  variant: 'outlined',
  color: 'warning',
  children: 'Warning Outlined Button',
};

export const WarningContained = Template.bind({});
WarningContained.args = {
  variant: 'contained',
  color: 'warning',
  children: 'Warning Contained Button',
};

/** =============================================== Error Buttons */
export const Error = Template.bind({});
Error.args = {
  variant: 'text',
  color: 'error',
  children: 'Error Button',
};

export const ErrorOutlined = Template.bind({});
ErrorOutlined.args = {
  variant: 'outlined',
  color: 'error',
  children: 'Error Outlined Button',
};

export const ErrorContained = Template.bind({});
ErrorContained.args = {
  variant: 'contained',
  color: 'error',
  children: 'Error Contained Button',
};
