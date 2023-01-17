import React from 'react';

import Box from '@mui/material/Box';
import Step from '@mui/material/Step';
import MuiStepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';
import StepLabel from '@mui/material/StepLabel';
import MuiStepper from '@mui/material/Stepper';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import {
  PuiStepIconProps,
  PuiStepperProps
} from './Stepper.types';

const StepConnector = styled(MuiStepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 28,
  },

  [`& .${stepConnectorClasses.line}`]: {
    height: 4,
    border: 0,
    backgroundColor: theme.palette.background.secondary,
    borderRadius: 0,
  },
}));

const StepIconRoot = styled(Box)<{ ownerState: { completed?: boolean; active?: boolean } }>(
  ({ theme, ownerState }) => ({
    background: theme.palette.background.secondary,
    zIndex: 1,
    color: theme.palette.text.primary,
    width: '60px',
    height: '60px',
    borderRadius: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: '"Graphik" serif',

    ...(ownerState.active && {
      background: `${theme.palette.primary.main}`,
      color: `${theme.palette.primary.contrastText}`,
    }),

    ...(ownerState.completed &&
      !ownerState.active && {
        background: `${theme.palette.primary.dark}`,
        color: `${theme.palette.text.secondary}`,
      }),
  }),
);

const StyledStepper = styled(MuiStepper)(({ theme }) => ({
  '& .previous-complete.previous-inactive .MuiStepConnector-root.Mui-completed .MuiStepConnector-line':
    {
      background: `linear-gradient(to right, ${theme.palette.primary.dark} 0%, ${theme.palette.primary.dark} 50%, ${theme.palette.primary.dark} 50%, ${theme.palette.primary.dark} 100%)`,
    },
  '& .previous-complete.previous-active .MuiStepConnector-root.Mui-completed .MuiStepConnector-line':
    {
      background: `linear-gradient(to right, ${theme.palette.primary.main} 0%, ${theme.palette.primary.main} 50%, ${theme.palette.primary.dark} 50%, ${theme.palette.primary.dark} 100%)`,
    },

  '& .previous-incomplete.previous-inactive .MuiStepConnector-root.Mui-completed .MuiStepConnector-line':
    {
      background: `linear-gradient(to right, ${theme.palette.background.secondary} 0%, ${theme.palette.background.secondary} 50%, ${theme.palette.primary.dark} 50%, ${theme.palette.primary.dark} 100%)`,
    },
  '& .previous-incomplete.previous-active .MuiStepConnector-root.Mui-completed .MuiStepConnector-line':
    {
      background: `linear-gradient(to right, ${theme.palette.primary.main} 0%, ${theme.palette.primary.main} 50%, ${theme.palette.primary.dark} 50%, ${theme.palette.primary.dark} 100%)`,
    },

  // ===
  '& .previous-complete.previous-inactive .MuiStepConnector-root.Mui-active .MuiStepConnector-line':
    {
      background: `linear-gradient(to right, ${theme.palette.primary.dark} 0%, ${theme.palette.primary.dark} 50%, ${theme.palette.primary.main} 50%, ${theme.palette.primary.main} 100%)`,
    },
  '& .previous-complete.previous-active .MuiStepConnector-root.Mui-active .MuiStepConnector-line': {
    background: `linear-gradient(to right, ${theme.palette.primary.main} 0%, ${theme.palette.primary.main} 50%, ${theme.palette.primary.main} 50%, ${theme.palette.primary.main} 100%)`,
  },

  '& .previous-incomplete.previous-inactive .MuiStepConnector-root.Mui-active .MuiStepConnector-line':
    {
      background: `linear-gradient(to right, ${theme.palette.background.secondary} 0%, ${theme.palette.background.secondary} 50%, ${theme.palette.primary.main} 50%, ${theme.palette.primary.main} 100%)`,
    },
  '& .previous-incomplete.previous-active .MuiStepConnector-root.Mui-active .MuiStepConnector-line':
    {
      background: `linear-gradient(to right, ${theme.palette.primary.main} 0%, ${theme.palette.primary.main} 50%, ${theme.palette.primary.main} 50%, ${theme.palette.primary.main} 100%)`,
    },

  // ===
  '& .previous-complete.previous-inactive .MuiStepConnector-root .MuiStepConnector-line': {
    background: `linear-gradient(to right, ${theme.palette.primary.dark} 0%, ${theme.palette.primary.dark} 50%, ${theme.palette.background.secondary} 50%, ${theme.palette.background.secondary} 100%)`,
  },
  '& .previous-complete.previous-active .MuiStepConnector-root .MuiStepConnector-line': {
    background: `linear-gradient(to right, ${theme.palette.primary.main} 0%, ${theme.palette.primary.main} 50%, ${theme.palette.background.secondary} 50%, ${theme.palette.background.secondary} 100%)`,
  },

  '& .previous-incomplete.previous-inactive .MuiStepConnector-root .MuiStepConnector-line': {
    background: `linear-gradient(to right, ${theme.palette.background.secondary} 0%, ${theme.palette.background.secondary} 50%, ${theme.palette.background.secondary} 50%, ${theme.palette.background.secondary} 100%)`,
  },
  '& .previous-incomplete.previous-active .MuiStepConnector-root .MuiStepConnector-line': {
    background: `linear-gradient(to right, ${theme.palette.primary.main} 0%, ${theme.palette.primary.main} 50%, ${theme.palette.background.secondary} 50%, ${theme.palette.background.secondary} 100%)`,
  },
}));

const PuiStepIconComponent: React.FC<PuiStepIconProps> = ({
  active,
  completed,
  className,
  content,
  index,
}) => {
  return (
    <StepIconRoot ownerState={{ completed, active }} className={className}>
      {content || (
        <Typography component="h3" variant="h3">
          {index + 1}
        </Typography>
      )}
    </StepIconRoot>
  );
};

const PuiStepper: React.FC<PuiStepperProps> = ({
  steps,
  activeStep,
  completed,
  handleStepClick,
  nonLinear,
}) => {
  return (
    <StyledStepper
      nonLinear={nonLinear}
      activeStep={activeStep}
      alternativeLabel
      connector={<StepConnector />}
    >
      {steps.map(({ description }, index) => (
        <Step
          key={description}
          completed={completed[index]}
          className={`custom-step-class-${index} ${
            completed[index - 1] ? 'previous-complete' : 'previous-incomplete'
          } ${index - 1 === activeStep ? 'previous-active' : 'previous-inactive'}`}
        >
          <StepLabel
            onClick={() => handleStepClick && handleStepClick(index)}
            StepIconComponent={(args) => <PuiStepIconComponent {...args} index={index} />}
          >
            {description}
          </StepLabel>
        </Step>
      ))}
    </StyledStepper>
  );
};

export default PuiStepper;
