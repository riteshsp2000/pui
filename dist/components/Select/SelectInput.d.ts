/// <reference types="react" />
import { PuiSelectRequiredItems } from './Select.types';
declare const PuiSelectInput: <T extends PuiSelectRequiredItems>({ selectedItems, chip, }: {
    selectedItems: T[];
    chip?: boolean | undefined;
}) => JSX.Element;
export default PuiSelectInput;
