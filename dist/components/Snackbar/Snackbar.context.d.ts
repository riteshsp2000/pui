import React from 'react';
import { AlertProps } from '@mui/material/Alert';
import { SnackbarProps } from '@mui/material/Snackbar';
interface IDetails {
    title: string;
    description: string;
}
declare type IParamDetails = IDetails | string;
interface IToast {
    info: (param: IParamDetails) => void;
    warn: (param: IParamDetails) => void;
    success: (param: IParamDetails) => void;
    error: (param: IParamDetails) => void;
}
export interface PuiSnackbarContextType {
    isOpen: boolean;
    close: () => void;
    open: () => void;
    setDetails: (param: IParamDetails) => void;
    toast: IToast;
    setAlertProps: React.Dispatch<React.SetStateAction<AlertProps>>;
    setToastProps: React.Dispatch<React.SetStateAction<SnackbarProps>>;
}
export declare const PuiSnackbarContext: React.Context<PuiSnackbarContextType | undefined>;
export declare const PuiSnackbarConsumer: React.Consumer<PuiSnackbarContextType | undefined>;
declare const PuiSnackbarProvider: React.FC<{
    children: React.ReactNode;
}>;
export declare const usePuiSnackbar: () => PuiSnackbarContextType;
export default PuiSnackbarProvider;
