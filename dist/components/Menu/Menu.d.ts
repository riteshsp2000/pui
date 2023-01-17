/// <reference types="react" />
import { PuiMenuListProps, PuiMenuProps } from './Menu.types';
export declare const PuiMenuList: <T extends {
    title: string;
    subList?: T[] | undefined;
}>({ list, dense, closeOnItemClick, selected, menuProps, listProps, handleMenuSelect, handleMenuClose, renderListItemComponent, }: PuiMenuListProps<T>) => JSX.Element;
/**
 *
 * if (menu)
 * 		if (not list item)
 * 			return menu component and menuList
 * 		if (list item)
 * 			return menu list item component and menuList
 * if (not menu)
 * 		return menuList
 */
declare const PuiMenu: <T extends {
    title: string;
    subList?: T[] | undefined;
}>({ list, dense, menu, closeOnItemClick, selected, menuProps, listProps, renderListItemComponent, renderMenuComponent, }: PuiMenuProps<T>) => JSX.Element;
export default PuiMenu;
