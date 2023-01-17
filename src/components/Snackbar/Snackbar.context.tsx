import React, {
  createContext,
  useContext,
  useState
} from 'react';

import Alert, {
  AlertColor,
  AlertProps
} from '@mui/material/Alert';
import Snackbar, { SnackbarProps } from '@mui/material/Snackbar';
import Typography from '@mui/material/Typography';

interface IDetails {
  title: string;
  description: string;
}

type IParamDetails = IDetails | string;

const SEVERITY = {
  ERROR: 'error',
  WARNING: 'warning',
  INFO: 'info',
  SUCCESS: 'success',
};

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

export const PuiSnackbarContext = createContext<PuiSnackbarContextType | undefined>(undefined);
export const PuiSnackbarConsumer = PuiSnackbarContext.Consumer;

const PuiSnackbarProvider: React.FC<{ children: React.ReactNode }> = (props) => {
  const [open, setOpen] = useState(false);
  const [severity, setSeverity] = useState(SEVERITY.INFO);
  const [details, setDetails] = useState({
    title: '',
    description: '',
  });
  const [alertProps, setAlertProps] = useState<AlertProps>({});
  const [snackbarProps, setSnackbarProps] = useState<SnackbarProps>({});

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleDetails = (param: IDetails | string) =>
    setDetails(typeof param === 'string' ? { title: param, description: '' } : param);

  const handleOperation = (param: IDetails | string, cb: () => void) => {
    handleDetails(param);
    handleOpen();
    cb();
  };

  const info = (param: IDetails | string) =>
    handleOperation(param, () => setSeverity(SEVERITY.INFO));
  const warn = (param: IDetails | string) =>
    handleOperation(param, () => setSeverity(SEVERITY.WARNING));
  const success = (param: IDetails | string) =>
    handleOperation(param, () => setSeverity(SEVERITY.SUCCESS));
  const error = (param: IDetails | string) =>
    handleOperation(param, () => setSeverity(SEVERITY.ERROR));

  const value = {
    isOpen: open,
    open: handleOpen,
    close: handleClose,
    setDetails: handleDetails,
    setAlertProps,
    setToastProps: setSnackbarProps,
    toast: {
      success,
      info,
      warn,
      error,
    },
  };

  return (
    <PuiSnackbarContext.Provider value={value}>
      {props.children}

      <Snackbar open={open} autoHideDuration={5000} onClose={handleClose} {...snackbarProps}>
        <Alert
          onClose={handleClose}
          severity={severity as AlertColor}
          sx={{ width: '100%' }}
          variant="filled"
          {...alertProps}
        >
          <Typography>{details.title}</Typography>

          {details.description && <Typography>{details.description}</Typography>}
        </Alert>
      </Snackbar>
    </PuiSnackbarContext.Provider>
  );
};

export const usePuiSnackbar = (): PuiSnackbarContextType => {
  const context = useContext(PuiSnackbarContext);
  if (!context) throw new Error('useSnackbar must be used within a SnackbarContext');

  return context;
};

export default PuiSnackbarProvider;
