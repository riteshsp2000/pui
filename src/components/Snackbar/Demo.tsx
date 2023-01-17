import * as React from 'react';

import { Box } from '@mui/material';
import Button from '@mui/material/Button';

import PuiSnackbarProvider, { usePuiSnackbar } from './Snackbar.context';

const Snackbar = () => {
  const { toast } = usePuiSnackbar();
  return (
    <Box>
      <Button variant="outlined" onClick={() => toast.info('This is a Info Snackbar')}>
        Open Info Snackbar
      </Button>
      <Button variant="outlined" onClick={() => toast.warn('This is a Warn Snackbar')}>
        Open Warn Snackbar
      </Button>
      <Button variant="outlined" onClick={() => toast.error('This is a Error Snackbar')}>
        Open Error Snackbar
      </Button>
      <Button variant="outlined" onClick={() => toast.success('This is a Success Snackbar')}>
        Open Success Snackbar
      </Button>
    </Box>
  );
};

const Demo = () => {
  return (
    <PuiSnackbarProvider>
      <Snackbar />
    </PuiSnackbarProvider>
  );
};

export default Demo;
