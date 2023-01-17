/// <reference types="react" />
import { PuiRenderableValue, PuiTableCell, PuiTableCellFilled, PuiTableRow, PuiTableRowFilled } from './Table.types';
export declare function getValue<T>(field: PuiTableCellFilled<T>, item: T): PuiRenderableValue;
export declare function getDefaultValue(value: PuiRenderableValue, defaultEmptyValue: PuiRenderableValue): PuiRenderableValue;
export declare function filterFields<T>(field: PuiTableCellFilled<T>): boolean;
export declare function truthyCondition(): boolean;
export declare function returnValue<T>(val: T): string;
export declare function transformKey<T>(val: string): keyof T;
export declare function transformFields<T>(field: PuiTableCell<T>): PuiTableCellFilled<T>;
export declare function getFields<T>(fields: PuiTableRow<T>): PuiTableRowFilled<T>;
export declare function getRenderableValue(value: PuiRenderableValue, component: React.ReactElement): PuiRenderableValue;
