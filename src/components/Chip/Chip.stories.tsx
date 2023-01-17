import React from 'react';
import {
  ComponentMeta,
  ComponentStory
} from '@storybook/react';

import { Avatar } from '@mui/material';
import Chip from '@mui/material/Chip';

import { ChevronRight } from '../../assets/icons/ChevronRight';
import Person from '../../assets/images/person1.jpeg';

export default {
  title: 'Atoms/Chips',
  component: Chip,
} as ComponentMeta<typeof Chip>;

const Template: ComponentStory<typeof Chip> = (args) => <Chip {...args} />;

export const SmallOutlinedChip = Template.bind({});
SmallOutlinedChip.args = {
  label: 'Small Outlined Chip',
  size: 'small',
  variant: 'outlined',
};

export const MediumOutlinedChip = Template.bind({});
MediumOutlinedChip.args = {
  label: 'Medium Outlined Chip',
  size: 'medium',
  variant: 'outlined',
};

export const SmallContainedChip = Template.bind({});
SmallContainedChip.args = {
  label: 'Small Contained Chip',
  size: 'small',
  variant: 'filled',
};

export const MediumContainedChip = Template.bind({});
MediumContainedChip.args = {
  label: 'Medium Contained Chip',
  size: 'medium',
  variant: 'filled',
};

export const SelectedSmallOutlinedChip = Template.bind({});
SelectedSmallOutlinedChip.args = {
  label: 'Small Outlined Chip',
  size: 'small',
  variant: 'outlined',
  color: 'primary',
};

export const SelectedMediumOutlinedChip = Template.bind({});
SelectedMediumOutlinedChip.args = {
  label: 'Medium Outlined Chip',
  size: 'medium',
  variant: 'outlined',
  color: 'primary',
};

export const SelectedSmallContainedChip = Template.bind({});
SelectedSmallContainedChip.args = {
  label: 'Small Contained Chip',
  size: 'small',
  variant: 'filled',
  color: 'primary',
};

export const SelectedMediumContainedChip = Template.bind({});
SelectedMediumContainedChip.args = {
  label: 'Medium Contained Chip',
  size: 'medium',
  variant: 'filled',
  color: 'primary',
};

export const DeletableOutlinedChip = Template.bind({});
DeletableOutlinedChip.args = {
  label: 'Medium Contained Chip',
  size: 'medium',
  variant: 'outlined',
  color: 'primary',
  onDelete: () => console.log('delete'),
};

export const DeletableChip = Template.bind({});
DeletableChip.args = {
  label: 'Medium Contained Chip',
  size: 'medium',
  variant: 'filled',
  color: 'primary',
  onDelete: () => console.log('delete'),
};

export const CustomIconChip = Template.bind({});
CustomIconChip.args = {
  label: 'Medium Contained Chip',
  size: 'medium',
  variant: 'filled',
  color: 'primary',
  deleteIcon: <ChevronRight sx={{ fontSize: '1rem !important' }} />,
  onDelete: () => console.log('custom delete icon'),
};

export const AdornmentIconChip = Template.bind({});
AdornmentIconChip.args = {
  label: 'Medium Contained Chip',
  size: 'medium',
  variant: 'filled',
  color: 'primary',
  avatar: <Avatar src={Person} variant="square" />,
};

export const SecondaryChip = Template.bind({});
SecondaryChip.args = {
  label: 'Medium Contained Chip',
  size: 'medium',
  variant: 'filled',
  color: 'secondary',
  avatar: <Avatar src={Person} variant="square" />,
};
