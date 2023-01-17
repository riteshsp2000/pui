import React from 'react';
import { MenuListProps, MenuProps } from '@mui/material';
export interface PuiMenuItemProps {
    children: React.ReactNode;
    selected: number;
    index: number;
    dense: boolean;
    closeOnItemClick: boolean;
    handleMenuSelect: (index: number) => void;
    handleMenuClose: () => void;
}
export interface PuiMenuButtonProps {
    handleMenuOpen: (event: React.MouseEvent<HTMLElement>) => void;
    open: boolean;
}
export interface PuiMenuListProps<T extends {
    title: string;
    subList?: Array<T>;
}> {
    list: Array<T>;
    dense?: boolean;
    closeOnItemClick?: boolean;
    selected?: number;
    setSelected?: (param: number) => void;
    menuProps?: MenuProps;
    listProps?: MenuListProps;
    handleMenuSelect: (index: number) => void;
    handleMenuClose: () => void;
    renderMenuComponent?: (params: PuiMenuButtonProps) => React.ReactNode;
    renderListItemComponent?: (params: T) => React.ReactNode;
}
export interface PuiMenuProps<T extends {
    title: string;
    subList?: Array<T>;
}> {
    list: Array<T>;
    dense?: boolean;
    menu?: boolean;
    closeOnItemClick?: boolean;
    selected?: number | null;
    setSelected?: (param: number) => void;
    menuProps?: MenuProps;
    listProps?: MenuListProps;
    renderMenuComponent?: (params: PuiMenuButtonProps) => React.ReactNode;
    renderListItemComponent?: (params: T) => React.ReactNode;
}
