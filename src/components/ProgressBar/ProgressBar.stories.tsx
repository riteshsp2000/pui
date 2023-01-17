import React from 'react';
import {
  ComponentMeta,
  ComponentStory
} from '@storybook/react';

import CircularProgress from '@mui/material/CircularProgress';
import LinearProgress from '@mui/material/LinearProgress';

export default {
  title: 'Atoms/ProgressBar',
  component: CircularProgress,
} as ComponentMeta<typeof CircularProgress>;

const Template1: ComponentStory<typeof CircularProgress> = (args) => <CircularProgress {...args} />;
const Template2: ComponentStory<typeof LinearProgress> = (args) => <LinearProgress {...args} />;

export const Circular = Template1.bind({});
Circular.args = {};

export const Linear = Template2.bind({});
Linear.args = {};
