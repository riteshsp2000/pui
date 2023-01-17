import React from 'react';
import {
  ComponentMeta,
  ComponentStory
} from '@storybook/react';

import { Typography } from '@mui/material';
import Paper from '@mui/material/Paper';

export default {
  title: 'Atoms/Paper',
  component: Paper,
} as ComponentMeta<typeof Paper>;

const Template: ComponentStory<typeof Paper> = (args) => <Paper {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: <Typography variant="h1">This is a paper component</Typography>,
};
