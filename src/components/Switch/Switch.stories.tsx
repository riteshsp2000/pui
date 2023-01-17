import React from 'react';
import {
  ComponentMeta,
  ComponentStory
} from '@storybook/react';

import Switch from '@mui/material/Switch';

export default {
  title: 'Atoms/Switch',
  component: Switch,
} as ComponentMeta<typeof Switch>;

const Template: ComponentStory<typeof Switch> = () => <Switch />;

export const Default = Template.bind({});
