import React from 'react';
import {
  ComponentMeta,
  ComponentStory
} from '@storybook/react';

import Radio from '@mui/material/Radio';

export default {
  title: 'Atoms/Radio',
  component: Radio,
} as ComponentMeta<typeof Radio>;

const Template: ComponentStory<typeof Radio> = () => <Radio />;

export const Default = Template.bind({});
