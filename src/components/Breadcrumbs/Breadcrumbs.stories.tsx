/* eslint-disable no-console */
import React from 'react';
import {
  ComponentMeta,
  ComponentStory
} from '@storybook/react';

import PuiBreadcrumbs from './Breadcrumbs';

export default {
  title: 'Atoms/Breadcrumbs',
  component: PuiBreadcrumbs,
  args: {
    list: [
      {
        onClick: () => console.log('clicked'),
        text: 'item 1',
      },
      {
        onClick: () => console.log('clicked'),
        text: 'item 2',
      },
      {
        onClick: () => console.log('clicked'),
        text: 'item 3',
      },
    ],
  },
} as ComponentMeta<typeof PuiBreadcrumbs>;

const Template: ComponentStory<typeof PuiBreadcrumbs> = (args) => <PuiBreadcrumbs {...args} />;

export const Default = Template.bind({});
Default.args = {};
