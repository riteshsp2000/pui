import React, { useState } from 'react';

import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

import { ChevronRight } from '../../assets/icons/ChevronRight';
import {
  PuiAccordionProps,
  PuiAccortionItemProps
} from './Accordion.types';

interface Props extends Partial<PuiAccordionProps> {
  index: number;
  item: PuiAccortionItemProps;
  expanded: string | false;
  handleChange: (panel: string) => (_event: React.SyntheticEvent, newExpanded: boolean) => void;
}

const PuiAccordionItem: React.FC<Props> = ({
  item,
  index,
  expanded,
  divider = true,
  handleChange,
  ...rest
}) => {
  const [subExpanded, setSubExpanded] = useState<string | false>(false);

  const { summary, details, onClick, subList } = item;
  const { accordionProps, accordionSummaryProps, accoridionDetailsProps } = rest;

  const handleSubChange =
    (panel: string) => (_event: React.SyntheticEvent, newExpanded: boolean) => {
      setSubExpanded(newExpanded ? panel : false);
    };

  return (
    <Accordion
      key={summary}
      expanded={expanded === `panel${index}`}
      onChange={handleChange(`panel${index}`)}
      onClick={onClick}
      {...accordionProps}
    >
      <AccordionSummary
        expandIcon={<ChevronRight />}
        id={`panel${index}a-header`}
        aria-controls={`panel${index}a-content`}
        {...accordionSummaryProps}
      >
        <Typography variant="h4">{summary}</Typography>
      </AccordionSummary>

      <AccordionDetails {...accoridionDetailsProps}>
        {divider && <Divider orientation="vertical" flexItem />}

        {subList ? (
          <Box>
            {subList.map((subItem, subIndex) => (
              <PuiAccordionItem
                key={`accordion-item-${index}-${item.summary}`}
                index={subIndex}
                item={subItem}
                expanded={subExpanded}
                handleChange={handleSubChange}
                {...rest}
              />
            ))}
          </Box>
        ) : (
          <Typography sx={{ marginLeft: divider ? '0px' : '28.6px' }} variant="body1">
            {details}
          </Typography>
        )}
      </AccordionDetails>
    </Accordion>
  );
};

export default PuiAccordionItem;
