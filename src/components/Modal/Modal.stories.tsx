import React from 'react';
import {
  ComponentMeta,
  ComponentStory
} from '@storybook/react';

import Modal from './Demo';

export default {
  title: 'Molecules/Modal',
  component: Modal,
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = () => <Modal />;

export const Default = Template.bind({});
Default.args = {};
