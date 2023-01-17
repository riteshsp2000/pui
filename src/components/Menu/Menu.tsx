/* eslint-disable no-use-before-define */
/* eslint-disable no-nested-ternary */
import React from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import MuiMenu, { MenuProps } from '@mui/material/Menu';
import MuiMenuList from '@mui/material/MenuList';
import Typography from '@mui/material/Typography';

import { ChevronDown } from '../../assets/icons/ChevronDown';
import {
  PuiMenuButtonProps,
  PuiMenuListProps,
  PuiMenuProps
} from './Menu.types';
import PuiMenuItem from './MenuItem';

const nestedMenuProps: Partial<MenuProps> = {
  open: false,
  anchorOrigin: {
    vertical: 'top',
    horizontal: 'right',
  },
};

const DefaultListItem: React.FC<{ title: string }> = ({ title }) => {
  return (
    <Box sx={{ padding: '1rem' }}>
      <Typography variant="body1">{title}</Typography>
    </Box>
  );
};

const DefaultMenu: React.FC<PuiMenuButtonProps> = ({ handleMenuOpen, open }) => {
  return (
    <Button
      id="menu-button"
      aria-controls={open ? 'demo-customized-menu' : undefined}
      aria-expanded={open ? 'true' : undefined}
      aria-haspopup="true"
      variant="contained"
      disableElevation
      onClick={handleMenuOpen}
      endIcon={<ChevronDown sx={{ fontSize: '1rem !important' }} />}
    >
      Option
    </Button>
  );
};

export const PuiMenuList = <T extends { title: string; subList?: Array<T> }>({
  list,
  dense = false,
  closeOnItemClick = false,
  selected,
  menuProps,
  listProps,
  handleMenuSelect,
  handleMenuClose,

  renderListItemComponent = ({ title }) => <DefaultListItem title={title} />,
}: PuiMenuListProps<T>) => {
  return (
    <MuiMenuList {...listProps}>
      {list.map((item, index) =>
        item.subList ? (
          <PuiMenu
            key={item.title}
            list={item.subList}
            dense={dense}
            closeOnItemClick={closeOnItemClick}
            menuProps={{ ...nestedMenuProps, ...menuProps } as MenuProps}
            listProps={listProps}
            menu
            renderListItemComponent={renderListItemComponent}
            renderMenuComponent={({ handleMenuOpen }) => (
              <Box onClick={handleMenuOpen}>
                <PuiMenuItem
                  selected={selected as number}
                  index={index}
                  dense={dense}
                  closeOnItemClick={closeOnItemClick}
                  handleMenuSelect={handleMenuSelect}
                  // eslint-disable-next-line @typescript-eslint/no-empty-function
                  handleMenuClose={() => {}}
                >
                  {renderListItemComponent(item)}
                </PuiMenuItem>
              </Box>
            )}
          />
        ) : (
          <PuiMenuItem
            key={item.title}
            selected={selected as number}
            index={index}
            dense={dense}
            closeOnItemClick={closeOnItemClick}
            handleMenuSelect={handleMenuSelect}
            handleMenuClose={handleMenuClose}
          >
            {renderListItemComponent(item)}
          </PuiMenuItem>
        ),
      )}
    </MuiMenuList>
  );
};

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

const PuiMenu = <T extends { title: string; subList?: Array<T> }>({
  list,
  dense = false,
  menu = false,
  closeOnItemClick = false,
  selected = null,
  menuProps,
  listProps,

  renderListItemComponent = ({ title }) => <DefaultListItem title={title} />,
  renderMenuComponent = ({ handleMenuOpen, open }) => (
    <DefaultMenu handleMenuOpen={handleMenuOpen} open={open} />
  ),
}: PuiMenuProps<T>) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [selectedIndex, setSelectedIndex] = React.useState<number | null>(selected);
  const open = Boolean(anchorEl);

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => setAnchorEl(event.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);
  const handleMenuSelect = (index: number) => setSelectedIndex(index);

  return menu ? (
    <>
      {renderMenuComponent({ handleMenuOpen, open })}
      <MuiMenu {...menuProps} anchorEl={anchorEl} open={open} onClose={handleMenuClose}>
        <PuiMenuList
          list={list}
          dense={dense}
          selected={selectedIndex as number}
          setSelected={setSelectedIndex}
          closeOnItemClick={closeOnItemClick}
          listProps={listProps}
          handleMenuClose={handleMenuClose}
          handleMenuSelect={handleMenuSelect}
          renderListItemComponent={renderListItemComponent}
        />
      </MuiMenu>
    </>
  ) : (
    <PuiMenuList
      list={list}
      dense={dense}
      selected={selectedIndex as number}
      setSelected={setSelectedIndex}
      closeOnItemClick={closeOnItemClick}
      listProps={listProps}
      handleMenuClose={handleMenuClose}
      handleMenuSelect={handleMenuSelect}
      renderListItemComponent={renderListItemComponent}
    />
  );
};

export default PuiMenu;
