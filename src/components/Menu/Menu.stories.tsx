import React from 'react';
import {
  ComponentMeta,
  ComponentStory
} from '@storybook/react';

import { Box, Typography } from '@mui/material';

import { ChevronRight } from '../../assets/icons/ChevronRight';
import Demo from './Demo';
import Menu from './Menu';

const LIST_DATA = [
  {
    title: 'Integration Select',
    href: '/integrations/select',
  },
  {
    title: 'Integration Details',
    href: '/integrations/details',
  },
  {
    title: 'Integration Access',
    href: '/integrations/access',
  },
  {
    title: 'Integration Summary',
    href: '/integrations/summary',
  },
];

const NESTED_LIST_DATA = LIST_DATA.map((item, index) =>
  index === 2
    ? {
        ...item,
        subList: [
          {
            title: 'Primary',
            href: '/integrations/access/primary',
          },
          {
            title: 'Secondary',
            href: '/integrations/access/secondary',
          },
        ],
      }
    : item,
);

export default {
  title: 'Molecules/Menu',
  component: Menu,
  args: {
    list: LIST_DATA,
  },
} as ComponentMeta<typeof Menu>;

const Template: ComponentStory<typeof Menu> = (args) => <Menu {...args} />;

export const List = Template.bind({});
List.args = {};

export const ListDense = Template.bind({});
ListDense.args = {
  dense: true,
  selected: 0,
};

export const ListWithIcons = Template.bind({});
ListWithIcons.args = {
  dense: true,
  renderListItemComponent: ({ title }) => (
    <Box sx={{ padding: '1rem' }} display="flex" justifyContent="flex-start" alignItems="center">
      <ChevronRight sx={{ marginRight: '1rem', fontSize: '1rem' }} />

      <Typography variant="body1">{title}</Typography>
    </Box>
  ),
};

export const MenuButton = Template.bind({});
MenuButton.args = {
  menu: true,
  dense: true,
  closeOnItemClick: true,
};

export const NestedMenu = Template.bind({});
NestedMenu.args = {
  menu: true,
  dense: true,
  closeOnItemClick: true,
  list: NESTED_LIST_DATA,
};

const Template2: ComponentStory<typeof Demo> = () => <Demo />;
export const Menu2 = Template2.bind({});
