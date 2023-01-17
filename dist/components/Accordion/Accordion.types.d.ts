import { AccordionDetailsProps, AccordionProps, AccordionSummaryProps } from '@mui/material';
import { RecordType } from '../../types/list-item';
export interface PuiAccortionItemProps<T = RecordType> {
    summary: string;
    details: string;
    onClick?: AccordionProps['onClick'];
    item?: T;
    subList?: Array<PuiAccortionItemProps<T>>;
}
export interface PuiAccordionProps {
    list: Array<PuiAccortionItemProps>;
    divider?: boolean;
    accordionProps?: AccordionProps;
    accordionSummaryProps?: AccordionSummaryProps;
    accoridionDetailsProps?: AccordionDetailsProps;
}
