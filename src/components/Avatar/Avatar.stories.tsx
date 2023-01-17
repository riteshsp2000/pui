import React from 'react';
import {
  ComponentMeta,
  ComponentStory
} from '@storybook/react';

import Avatar from '@mui/material/Avatar';

import Person1 from '../../assets/images/person1.jpeg';

export default {
  title: 'Atoms/Avatar',
  component: Avatar,
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const Circle = Template.bind({});
Circle.args = {
  alt: 'Ritesh Patil',
  src: Person1,
};

export const Square = Template.bind({});
Square.args = {
  alt: 'Jira',
  src: Person1,
  variant: 'square',
  sx: { width: '60px', height: '60px' },
};
