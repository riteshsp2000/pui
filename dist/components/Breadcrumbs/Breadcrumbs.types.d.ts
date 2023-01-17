/// <reference types="react" />
import { BreadcrumbsProps } from '@mui/material';
export interface PuiBreadcrumbsItemProps {
    onClick: () => void;
    text: string;
    custom?: React.ReactNode;
}
export interface PuiBreadcrumbsProps extends BreadcrumbsProps {
    list: Array<PuiBreadcrumbsItemProps>;
}
