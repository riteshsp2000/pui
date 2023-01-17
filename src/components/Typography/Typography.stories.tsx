import React from 'react';
import {
  ComponentMeta,
  ComponentStory
} from '@storybook/react';

import Typography from '@mui/material/Typography';

export default {
  title: 'Atoms/Typography',
  component: Typography,
  args: {
    sx: { color: 'white' },
  },
  parameters: {
    backgrounds: { default: 'primary' },
  },
} as ComponentMeta<typeof Typography>;

const Template: ComponentStory<typeof Typography> = (args) => <Typography {...args} />;

export const HeadingOne = Template.bind({});
HeadingOne.args = {
  variant: 'h1',
  children: 'Heading One',
};

export const HeadingTwo = Template.bind({});
HeadingTwo.args = {
  variant: 'h2',
  children: 'Heading Two',
};

export const HeadingThree = Template.bind({});
HeadingThree.args = {
  variant: 'h3',
  children: 'Heading Three',
};

export const HeadingFour = Template.bind({});
HeadingFour.args = {
  variant: 'h4',
  children: 'Heading Four',
};

export const BodyOne = Template.bind({});
BodyOne.args = {
  variant: 'body1',
  children: 'Body One',
};

export const BodyTwo = Template.bind({});
BodyTwo.args = {
  variant: 'body2',
  children: 'Body Two',
};
