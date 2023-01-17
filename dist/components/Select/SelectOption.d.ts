/// <reference types="react" />
import { PuiSelectRequiredItems } from './Select.types';
declare const PuiSelectOption: <T extends PuiSelectRequiredItems>({ item }: {
    item: T;
}) => JSX.Element;
export default PuiSelectOption;
