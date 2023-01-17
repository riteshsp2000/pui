import { PuiStepProps } from './Stepper.types';
export declare const usePuiStepper: (steps: Array<PuiStepProps>) => {
    isLastStep: () => boolean;
    allStepsCompleted: () => boolean;
    activeStep: number;
    completed: {
        [k: number]: boolean;
    };
    handleBack: () => void;
    handleNext: () => void;
    handleComplete: () => void;
    handleReset: () => void;
    handleStep: (step: number) => () => void;
};
