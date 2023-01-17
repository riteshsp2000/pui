import { useState } from 'react';

import { PuiStepProps } from './Stepper.types';

// TODO: Take in an argument as activeStep
export const usePuiStepper = (steps: Array<PuiStepProps>) => {
  const [activeStep, setActiveStep] = useState(0);
  const [completed, setCompleted] = useState<{
    [k: number]: boolean;
  }>({});

  const totalSteps = () => steps.length;
  const completedSteps = () => Object.keys(completed).length;
  const isLastStep = () => activeStep === totalSteps() - 1;
  const allStepsCompleted = () => completedSteps() === totalSteps();

  const handleStep = (step: number) => () => setActiveStep(step);
  const handleBack = () => setActiveStep((prevActiveStep) => prevActiveStep - 1);

  const handleNext = () => {
    // It's the last step, but not all steps have been completed,
    // find the first step that has been completed
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? steps.findIndex((_step, i) => !(i in completed))
        : activeStep + 1;
    setActiveStep(newActiveStep);
  };

  const handleComplete = () => {
    const newCompleted = completed;
    newCompleted[activeStep] = true;
    setCompleted(newCompleted);
    handleNext();
  };

  const handleReset = () => {
    setActiveStep(0);
    setCompleted({});
  };

  return {
    isLastStep,
    allStepsCompleted,
    activeStep,
    completed,
    handleBack,
    handleNext,
    handleComplete,
    handleReset,
    handleStep,
  };
};
