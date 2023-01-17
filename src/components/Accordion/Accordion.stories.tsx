import React from 'react';
import {
  ComponentMeta,
  ComponentStory
} from '@storybook/react';

import Accordion from './Accordion';

const list = [
  {
    summary: `Accordion Item 1`,
    details:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    summary: `Accordion Item 2`,
    details:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    summary: `Accordion Item 3`,
    details:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
];

export default {
  title: 'Molecules/Accordion',
  component: Accordion,
  args: {
    list,
  },
} as ComponentMeta<typeof Accordion>;

const Template: ComponentStory<typeof Accordion> = (args) => <Accordion {...args} />;

export const Default = Template.bind({});

export const WithoutDivider = Template.bind({});
WithoutDivider.args = {
  divider: false,
};

export const Nested = Template.bind({});
Nested.args = {
  list: [
    ...list,
    {
      summary: 'Nested Accordion',
      details: 'Nested Accordion Details',
      subList: [
        ...list,
        {
          summary: 'Nested Accordion inner',
          details: 'Nested Accordion Details',
          subList: list,
        },
      ],
    },
  ],
};
