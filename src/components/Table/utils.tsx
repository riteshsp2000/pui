/* eslint-disable no-param-reassign */
import {
  PuiRenderableValue,
  PuiTableCell,
  PuiTableCellFilled,
  PuiTableRow,
  PuiTableRowFilled
} from './Table.types';

export function getValue<T>(field: PuiTableCellFilled<T>, item: T): PuiRenderableValue {
  const { key, value } = field;
  const val = item[key];
  return value(val, item);
}

export function getDefaultValue(value: PuiRenderableValue, defaultEmptyValue: PuiRenderableValue) {
  if (value === '' || value === null || value === undefined) return defaultEmptyValue;
  return value;
}

export function filterFields<T>(field: PuiTableCellFilled<T>): boolean {
  return typeof field.condition === 'boolean' ? field.condition : field.condition();
}

export function truthyCondition() {
  return true;
}

export function returnValue<T>(val: T): string {
  return val as unknown as string;
}

export function transformKey<T>(val: string) {
  return val.toLocaleLowerCase().split(' ').join('_') as keyof T;
}

export function transformFields<T>(field: PuiTableCell<T>): PuiTableCellFilled<T> {
  if (typeof field === 'string') {
    return {
      title: field as string,
      condition: truthyCondition,
      key: transformKey(field as string),
      value: returnValue,
    };
  }

  if (!field.key && typeof field.title === 'string') {
    field.key = transformKey(field.title);
  }

  if (!field.condition) {
    field.condition = truthyCondition;
  }

  if (!field.value) {
    field.value = returnValue;
  }

  return field as PuiTableCellFilled<T>;
}

export function getFields<T>(fields: PuiTableRow<T>): PuiTableRowFilled<T> {
  return fields.map((field) => transformFields(field)).filter((field) => filterFields(field));
}

export function getRenderableValue(
  value: PuiRenderableValue,
  component: React.ReactElement,
): PuiRenderableValue {
  return typeof value === ('string' || 'number') ? component : value;
}
