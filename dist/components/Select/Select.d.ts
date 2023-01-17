/// <reference types="react" />
import { PuiSelectProps, PuiSelectRequiredItems } from './Select.types';
declare const PuiSelect: <T extends PuiSelectRequiredItems>({ label, placeholder, helperText, id, value, setValue, list, selectProps, multiple, chip, renderTag, renderOption, }: PuiSelectProps<T>) => JSX.Element;
export default PuiSelect;
