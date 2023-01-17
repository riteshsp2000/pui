import React, { useState } from 'react';

import Box from '@mui/material/Box';

import { PuiAccordionProps } from './Accordion.types';
import PuiAccordionItem from './AccordionItem';

const PuiAccordion: React.FC<PuiAccordionProps> = ({ list, ...rest }) => {
  const [expanded, setExpanded] = useState<string | false>('panel0');

  const handleChange = (panel: string) => (_event: React.SyntheticEvent, newExpanded: boolean) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <Box>
      {list.map((item, index) => (
        <PuiAccordionItem
          key={`accordion-item-${index}-${item.summary}`}
          index={index}
          expanded={expanded}
          item={item}
          handleChange={handleChange}
          {...rest}
        />
      ))}
    </Box>
  );
};

export default PuiAccordion;
