import React, { useState } from 'react';

import MuiList from '@mui/material/List';

import { PuiListProps } from './List.types';
import PuiListItem from './ListItem';

const PuiList: React.FC<PuiListProps> = ({ list, listProps }) => {
  const [selected, setSelected] = useState<string | null>(null);

  const handleClick = (x: string) => {
    setSelected(selected === x ? null : x);
  };

  return (
    <MuiList
      sx={{
        width: '100%',
        bgcolor: 'background.paper',
        color: 'text.primary',
        position: 'relative',
      }}
      {...listProps}
    >
      {list.map((item, index) => (
        <PuiListItem
          key={item.text}
          item={item}
          isFirstCategoryItem={item.category !== list[index - 1]?.category}
          isFirstListItem={index === 0}
          selected={selected}
          handleClick={handleClick}
          index={index}
        />
      ))}
    </MuiList>
  );
};

export default PuiList;
