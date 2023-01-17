import { TableProps } from '@mui/material/Table';
import { TableBodyProps } from '@mui/material/TableBody';
import { TableCellProps } from '@mui/material/TableCell';
import { TableContainerProps } from '@mui/material/TableContainer';
import { TableHeadProps } from '@mui/material/TableHead';
import { TableRowProps } from '@mui/material/TableRow';

export type PuiRenderableValue = string | number | React.ReactElement;

export interface PuiTableCellFilledPreProps<T, K extends keyof T> {
  title: PuiRenderableValue;
  condition: boolean | (() => boolean);
  key: K;
  value: (value: T[K], item: T) => PuiRenderableValue;
}
export interface PuiTableCellPreProps<T, K extends keyof T> {
  title: PuiRenderableValue;
  condition?: boolean | (() => boolean);
  key?: K;
  value?: (value: T[K], item: T) => PuiRenderableValue | null | undefined | boolean;
}

export type PuiTableCell<T> = PuiTableCellPreProps<T, keyof T> | string;
export type PuiTableCellFilled<T> = PuiTableCellFilledPreProps<T, keyof T>;

export type PuiTableRow<T> = Array<PuiTableCell<T>>;
export type PuiTableRowFilled<T> = Array<PuiTableCellFilled<T>>;

export type PuiTableRows<T> = Array<PuiTableRow<T>>;
export type PuiTableRowsFilled<T> = Array<PuiTableRowFilled<T>>;

export interface PuiTableProps<T> {
  title?: PuiRenderableValue;
  data: Array<T>;
  fields: PuiTableRow<T>;
  loading?: boolean;
  defaultEmptyValue?: PuiRenderableValue;
  noRecordMsg?: PuiRenderableValue;

  tableHeadProps?: TableHeadProps;
  tableRowProps?: TableRowProps;
  tableCellProps?: TableCellProps;
  tableBodyProps?: TableBodyProps;
  tableProps?: TableProps;
  tableContainerProps?: TableContainerProps;
}
