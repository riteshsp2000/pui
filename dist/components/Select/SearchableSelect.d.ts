/// <reference types="react" />
import { PuiSearchableSelectProps, PuiSelectRequiredItems } from './Select.types';
declare const PuiSearchableSelect: <T extends PuiSelectRequiredItems>({ label, placeholder, id, value, setValue, inputValue, setInputValue, list, multiple, chip, renderInput, renderOption, renderTags, autoCompleteProps, }: PuiSearchableSelectProps<T>) => JSX.Element;
export default PuiSearchableSelect;
