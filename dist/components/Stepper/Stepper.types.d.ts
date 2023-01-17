import React from 'react';
import { StepIconProps } from '@mui/material';
export interface PuiStepIconProps extends StepIconProps {
    index: number;
    content: React.ReactNode;
}
export interface PuiStepProps {
    content?: React.ReactNode;
    description: string;
}
export interface PuiStepperProps {
    steps: Array<PuiStepProps>;
    activeStep: number;
    completed: {
        [k: number]: boolean;
    };
    handleStepClick?: (step: number) => void;
    nonLinear?: boolean;
}
