import React from 'react';

import { Box, Button } from '@mui/material';

import PuiStepper from './Stepper';
import { usePuiStepper } from './Stepper.hooks';

const steps = [
  {
    description: 'Select Integration',
  },
  {
    description: 'Enter Details',
  },
  {
    description: 'Manage Access',
  },
  {
    description: 'Review Summary',
  },
  {
    description: 'Asthana Summary',
  },
];

const StepperDemo = () => {
  const { activeStep, completed, handleBack, handleNext, handleComplete, handleReset, handleStep } =
    usePuiStepper(steps);

  return (
    <Box>
      <PuiStepper
        steps={steps}
        activeStep={activeStep}
        completed={completed}
        handleStepClick={handleStep}
        nonLinear
      />

      <Box
        sx={{ marginTop: '1rem' }}
        display="flex"
        alignItems="center"
        justifyContent="flex-start"
        flexWrap="wrap"
      >
        <Button
          sx={{ mr: 1, mb: 1 }}
          disabled={activeStep === 0}
          variant="outlined"
          onClick={handleBack}
        >
          Previous Step
        </Button>
        <Button
          disabled={activeStep === steps.length - 1}
          sx={{ mr: 1, mb: 1 }}
          variant="outlined"
          onClick={handleNext}
        >
          Next Step
        </Button>
        <Button
          disabled={completed[activeStep]}
          sx={{ mr: 1, mb: 1 }}
          variant="outlined"
          onClick={handleComplete}
        >
          {completed[activeStep] ? 'Step already completed' : 'Complete Step'}
        </Button>
        <Button sx={{ mr: 1, mb: 1 }} variant="outlined" onClick={handleReset}>
          Reset All
        </Button>
      </Box>
    </Box>
  );
};

export default StepperDemo;
