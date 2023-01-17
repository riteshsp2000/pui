import React from 'react';
import {
  ComponentMeta,
  ComponentStory
} from '@storybook/react';

import Slider from '@mui/material/Slider';

export default {
  title: 'Atoms/Slider',
  component: Slider,
} as ComponentMeta<typeof Slider>;

const Template: ComponentStory<typeof Slider> = (args) => <Slider {...args} />;

export const Continuous = Template.bind({});
Continuous.args = {};

export const Discrete = Template.bind({});
Discrete.args = {
  'aria-label': 'Custom marks',
  defaultValue: 100,
  step: 200,
  valueLabelDisplay: 'auto',
  min: 100,
  max: 1100,
  sx: {
    marginTop: '2rem',
    root: {},
    '& .MuiSlider-rail': {
      backgroundColor: '#000000',
    },
    '& .MuiSlider-mark': {
      color: '#000000',
    },
  },
};
