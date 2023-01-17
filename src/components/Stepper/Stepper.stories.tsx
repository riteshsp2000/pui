import React from 'react';
import {
  ComponentMeta,
  ComponentStory
} from '@storybook/react';

import StepperDemo from './Demo';
import PuiStepper from './Stepper';

export default {
  title: 'Molecules/Stepper',
  component: PuiStepper,
} as ComponentMeta<typeof PuiStepper>;

const Template: ComponentStory<typeof PuiStepper> = (args) => <PuiStepper {...args} />;

export const Default = Template.bind({});
Default.args = {
  activeStep: 2,
  completed: {
    0: true,
    1: true,
    2: false,
    3: false,
    4: true,
  },
  steps: [
    {
      description: 'Select Integration',
    },
    {
      description: 'Enter Details',
    },
    {
      description: 'Manage Access',
    },
    {
      description: 'Review Summary',
    },
    {
      description: 'Asthana Summary',
    },
  ],
};

const Template2: ComponentStory<typeof StepperDemo> = () => <StepperDemo />;
export const Demo = Template2.bind({});
