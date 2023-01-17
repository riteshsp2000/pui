/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import React from 'react';
import {
  ComponentMeta,
  ComponentStory
} from '@storybook/react';

import { Switch } from '@mui/material';
import Typography from '@mui/material/Typography';

import { PuiSearchableSelect } from '../Select';
import {
  dataDefault,
  fieldsDefault,
  IDataDefaultItem,
  selectItems
} from './constants';
import { TableWithPagination } from './Demo';
import PuiTable from './Table';

export default {
  title: 'Molecules/Table',
  component: PuiTable,
  parameters: {
    backgrounds: { default: 'primary' },
  },
} as ComponentMeta<typeof PuiTable>;

const Template: ComponentStory<typeof PuiTable<IDataDefaultItem>> = (args) => (
  <PuiTable {...args} />
);

export const Default = Template.bind({});
Default.args = {
  data: dataDefault,
  fields: fieldsDefault,
  title: (
    <Typography variant="h1" sx={{ color: 'text.primary', marginBottom: '1rem' }}>
      Different Heading
    </Typography>
  ),
};

export const MissingData = Template.bind({});
MissingData.args = {
  fields: fieldsDefault,
  data: dataDefault.map((data, index) =>
    index % 2
      ? data
      : {
          ...data,
          productName: null,
          integrationTitle: null,
        },
  ),
};

const setValue = () => {};
const setInputValue = () => {};

export const CustomComponents = Template.bind({});
CustomComponents.args = {
  data: dataDefault,
  fields: fieldsDefault.map((field, index) => {
    if (index === fieldsDefault.length - 1) {
      return {
        // @ts-ignore
        ...field,
        value: (val) => <Switch checked={!!val} />,
      };
    }

    if (index === 1) {
      return {
        // @ts-ignore
        ...field,
        // @ts-ignore
        value: (val) => (
          <PuiSearchableSelect
            value={selectItems.filter(({ value }) => value === val)}
            setValue={setValue}
            inputValue={''}
            setInputValue={setInputValue}
            list={selectItems}
            label="integration names"
            id="table-select-item"
            chip
            multiple
          />
        ),
      };
    }

    return field;
  }),
};

const Template2: ComponentStory<typeof TableWithPagination> = () => <TableWithPagination />;

export const TableWithPaginationAndSearch = Template2.bind({});
