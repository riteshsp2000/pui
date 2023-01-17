import React from 'react';
import {
  ComponentMeta,
  ComponentStory
} from '@storybook/react';

import { Button } from '@mui/material';

import PuiTooltip from './Tooltip';

export default {
  title: 'Atoms/Tooltip',
  component: PuiTooltip,
  args: {
    arrow: true,
    children: (
      <Button variant="outlined" color="primary" sx={{ margin: '10rem' }}>
        Hover
      </Button>
    ),
  },
} as ComponentMeta<typeof PuiTooltip>;

const Template: ComponentStory<typeof PuiTooltip> = (args) => <PuiTooltip {...args} />;

export const Bottom = Template.bind({});
Bottom.args = {
  title: 'Bootom Tooltip',
};

export const Right = Template.bind({});
Right.args = {
  title: 'Right Tooltip',
  placement: 'right',
};

export const Top = Template.bind({});
Top.args = {
  title: 'Top Tooltip',
  placement: 'top',
};

export const Left = Template.bind({});
Left.args = {
  title: 'Left Tooltip',
  placement: 'left',
};
