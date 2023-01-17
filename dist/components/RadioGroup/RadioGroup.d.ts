/// <reference types="react" />
import { PuiRadioGroupProps, PuiRadioListProps } from './RadioGroup.types';
declare const PuiRadioGroup: <T extends PuiRadioListProps>({ selectedItem, setSelectedItem, id, list, radioGroupProps, radioProps, label, }: PuiRadioGroupProps<T>) => JSX.Element;
export default PuiRadioGroup;
