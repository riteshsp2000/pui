import React from 'react';
import { addParameters } from '@storybook/react';
import { create } from '@storybook/theming';
import { withKnobs } from '@storybook/addon-knobs';

import ThemeProvider from '../src/components/ThemeProvider';
import Logo from './logo.png';

addParameters({
  options: {
    theme: create({
      brandTitle: 'P-UI',
      brandImage: Logo,
      brandUrl: 'https://pui.com/components',
      base: 'light',
      colorPrimary: '#1976D2',
      colorSecondary: '#e63946',
      backgroundColor: '#ffffff',
    }),
    storySort: {
      method: '',
      order: ['Theme', 'Atoms', 'Molecules', 'Organisms'],
      locales: '',
    },
  },
  backgrounds: {
    default: 'primary',
    values: [
      {
        name: 'primary',
        value: '#ffffff',
      },
      {
        name: 'secondary',
        value: 'rgba(235, 235, 245, 0.6)',
      },
    ],
  },
});

export const decorators = [
  withKnobs,
  (Story) => (
    <ThemeProvider>
      <Story />
    </ThemeProvider>
  ),
];
