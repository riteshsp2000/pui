import React from 'react';
import {
  ComponentMeta,
  ComponentStory
} from '@storybook/react';

import Snackbar from './Demo';

export default {
  title: 'Atoms/Snackbar',
  component: Snackbar,
} as ComponentMeta<typeof Snackbar>;

const Template: ComponentStory<typeof Snackbar> = () => <Snackbar />;

export const Default = Template.bind({});
Default.args = {};
