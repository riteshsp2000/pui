import React from 'react';
import {
  ComponentMeta,
  ComponentStory
} from '@storybook/react';

import { CheckBroken } from '../../assets/icons/CheckBroken';
import PuiList from './List';

const list = [
  {
    icon: <CheckBroken />,
    text: 'List Item 1',
    category: 'one',
    categoryTitle: 'First Category',
  },
  {
    icon: <CheckBroken />,
    text: 'List Item 2',
    category: 'one',
  },
  {
    icon: <CheckBroken />,
    text: 'List Item 3',
    category: 'one',
    subList: [
      {
        icon: <CheckBroken />,
        text: 'Sub List Item 1',
      },
      {
        icon: <CheckBroken />,
        text: 'Sub List Item 2',
      },
    ],
  },
  {
    icon: <CheckBroken />,
    text: 'List Item 4',
    categoryTitle: 'Second Category',

    subList: [
      {
        icon: <CheckBroken />,
        text: 'Sub List Item 1',
      },
      {
        icon: <CheckBroken />,
        text: 'Sub List Item 2',
        subList: [
          {
            icon: <CheckBroken />,
            text: 'Sub Sub List Item 1',
          },
          {
            icon: <CheckBroken />,
            text: 'Sub Sub List Item 2',
          },
        ],
      },
    ],
  },
];

export default {
  title: 'Molecules/List',
  component: PuiList,
  args: {
    list,
  },
} as ComponentMeta<typeof PuiList>;

const Template: ComponentStory<typeof PuiList> = (args) => <PuiList {...args} />;

export const Default = Template.bind({});
Default.args = {};
