/// <reference types="react" />
import { ListProps } from '@mui/material';
export interface Item {
    icon?: React.ReactNode;
    text: string;
    subList?: Item[];
    custom?: React.ReactNode;
    category?: string;
    categoryTitle?: string;
    onClick?: () => void;
}
export interface PuiListItemProps {
    item: Item;
    isFirstCategoryItem: boolean;
    isFirstListItem: boolean;
    isSublistItem?: boolean;
    level?: number;
    handleClick: (x: string) => void;
    index: number;
    previousIndex?: number;
    selected: string | null;
}
export interface PuiListProps {
    list: Item[];
    listProps?: ListProps;
}
