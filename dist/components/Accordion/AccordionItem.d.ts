import React from 'react';
import { PuiAccordionProps, PuiAccortionItemProps } from './Accordion.types';
interface Props extends Partial<PuiAccordionProps> {
    index: number;
    item: PuiAccortionItemProps;
    expanded: string | false;
    handleChange: (panel: string) => (_event: React.SyntheticEvent, newExpanded: boolean) => void;
}
declare const PuiAccordionItem: React.FC<Props>;
export default PuiAccordionItem;
