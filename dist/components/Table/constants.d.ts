import { PuiTableRow as PuiTableRow } from './Table.types';
export declare type IDataDefaultItem = {
    id: string | number | null | undefined;
    productName: string | null | undefined;
    integrationTitle: string | null | undefined;
    date: string | null | undefined;
    totalRequests: number | null | undefined;
    active: boolean;
};
export declare const dataDefault: Array<IDataDefaultItem>;
export declare const fieldsDefault: PuiTableRow<IDataDefaultItem>;
export declare const selectItems: {
    value: string;
    label: string;
    isHeader: boolean;
}[];
