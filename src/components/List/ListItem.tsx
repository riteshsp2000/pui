import React, { useState } from 'react';

import Collapse from '@mui/material/Collapse';
import Divider from '@mui/material/Divider';
import MuiList from '@mui/material/List';
import MuiListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';

import { ChevronDown } from '../../assets/icons/ChevronDown';
import { ChevronUp } from '../../assets/icons/ChevronUp';
import { PuiListItemProps } from './List.types';

const PuiListItem: React.FC<PuiListItemProps> = ({
  item,
  isFirstCategoryItem,
  isFirstListItem,
  selected,
  handleClick,
  index,
  previousIndex = 0,
  isSublistItem,
  level = 2,
}) => {
  const [open, setOpen] = useState(false);
  const { icon, text, custom, subList, categoryTitle, onClick } = item;

  const listContents = (
    <>
      {icon && <ListItemIcon>{icon}</ListItemIcon>}

      <ListItemText primary={text} />
    </>
  );

  return (
    <>
      {isFirstCategoryItem && !isFirstListItem && <Divider color="text.secondary" />}
      {isFirstCategoryItem && categoryTitle && <ListSubheader>{categoryTitle}</ListSubheader>}
      {custom || (
        <>
          {subList ? (
            <>
              <ListItemButton
                selected={selected === `${previousIndex}-${index}`}
                onClick={() => {
                  setOpen(!open);
                  if (onClick) onClick();
                }}
                sx={{ paddingLeft: isSublistItem ? `${level}rem !important` : '0rem' }}
              >
                {listContents}

                {open ? (
                  <ChevronUp sx={{ fontSize: '1rem' }} />
                ) : (
                  <ChevronDown sx={{ fontSize: '1rem' }} />
                )}
              </ListItemButton>
              <Collapse in={open} timeout="auto" unmountOnExit>
                <MuiList
                  sx={{
                    bgcolor: 'background.paper',
                    color: 'text.secondary',
                  }}
                >
                  {subList.map((subItem, i) => (
                    <PuiListItem
                      key={subItem.text}
                      item={subItem}
                      isFirstCategoryItem={subItem.category !== subList[i - 1]?.category}
                      isFirstListItem={i === 0}
                      selected={selected}
                      handleClick={handleClick}
                      index={i}
                      previousIndex={index}
                      isSublistItem={true}
                      level={level + 1}
                    />
                  ))}
                </MuiList>
              </Collapse>
            </>
          ) : (
            <MuiListItem
              selected={selected === `${previousIndex}-${index}`}
              sx={{ paddingLeft: isSublistItem ? `${level}rem !important` : '0rem' }}
              onClick={() => {
                handleClick(`${previousIndex}-${index}`);
                if (onClick) onClick();
              }}
            >
              {listContents}
            </MuiListItem>
          )}
        </>
      )}
    </>
  );
};

export default PuiListItem;
