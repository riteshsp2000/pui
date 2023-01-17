import { PuiTableRow as PuiTableRow } from './Table.types';

export type IDataDefaultItem = {
  id: string | number | null | undefined;
  productName: string | null | undefined;
  integrationTitle: string | null | undefined;
  date: string | null | undefined;
  totalRequests: number | null | undefined;
  active: boolean;
};

export const dataDefault: Array<IDataDefaultItem> = [
  {
    id: '1',
    productName: 'Jira',
    integrationTitle: 'Alpha Team Jira',
    date: '02/12/2022',
    totalRequests: 456,
    active: true,
  },
  {
    id: '2',
    productName: 'Jira',
    integrationTitle: 'Beta Team Jira',
    date: '02/12/2022',
    totalRequests: 5000,
    active: true,
  },
  {
    id: '3',
    productName: 'Jira',
    integrationTitle: 'Gamma Team Jira',
    date: '02/12/2022',
    totalRequests: 4378,
    active: true,
  },
  {
    id: '4',
    productName: 'Asana',
    integrationTitle: 'Alpha Team Jira',
    date: '02/12/2022',
    totalRequests: 156,
    active: true,
  },
  {
    id: '5',
    productName: 'GitLab',
    integrationTitle: 'Beta Team Jira',
    date: '02/12/2022',
    totalRequests: 543,
    active: false,
  },
  {
    id: '6',
    productName: 'MongoDB',
    integrationTitle: 'Alpha Team Jira',
    date: '02/12/2022',
    totalRequests: 456,
    active: true,
  },
  {
    id: '7',
    productName: 'MongoDB',
    integrationTitle: 'Beta Team Jira',
    date: '02/12/2022',
    totalRequests: 5000,
    active: true,
  },
  {
    id: '8',
    productName: 'Metabase',
    integrationTitle: 'Gamma Team Jira',
    date: '02/12/2022',
    totalRequests: 4378,
    active: true,
  },
  {
    id: '9',
    productName: 'Metabase',
    integrationTitle: 'Alpha Team Jira',
    date: '02/12/2022',
    totalRequests: 156,
    active: true,
  },
  {
    id: '10',
    productName: 'Redash',
    integrationTitle: 'Beta Team Jira',
    date: '02/12/2022',
    totalRequests: 543,
    active: false,
  },
];

export const fieldsDefault: PuiTableRow<IDataDefaultItem> = [
  {
    title: 'Product Name',
    key: 'productName',
  },
  {
    title: 'Integration Name',
    key: 'integrationTitle',
  },
  {
    title: 'Integrated On',
    key: 'date',
  },
  {
    title: 'Total Requests',
    key: 'totalRequests',
  },
  {
    title: 'Status',
    key: 'active',
    value: (value) => (value ? 'Active' : 'Inactive'),
  },
];

export const selectItems = [
  {
    value: 'Alpha Team Jira',
    label: 'Alpha Team Jira',
    isHeader: false,
  },
  {
    value: 'Beta Team Jira',
    label: 'Beta Team Jira',
    isHeader: false,
  },
  {
    value: 'Gamma Team Jira',
    label: 'Gamma Team Jira',
    isHeader: false,
  },
];
