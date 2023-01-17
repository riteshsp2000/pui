import React from 'react';

import { styled } from '@mui/material/styles';
import MuiToolTip, {
  tooltipClasses,
  TooltipProps as MuiTooltipProps
} from '@mui/material/Tooltip';

const PuiTooltip = styled(({ className, ...props }: MuiTooltipProps) => (
  <MuiToolTip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    borderRadius: '7px',
    background: theme.palette.background.secondary,
    border: `1px solid ${theme.palette.border?.dark}`,
    boxShadow: theme.shadows[1],
    color: theme.palette.border?.dark,
  },
  [`& .${tooltipClasses.arrow}`]: {
    background: theme.palette.border?.dark,
    width: '1px',
  },
  [`& .${tooltipClasses.tooltipPlacementRight}, & .${tooltipClasses.tooltipPlacementLeft}`]: {
    [`& .${tooltipClasses.arrow}`]: {
      height: '1px',
    },
  },
}));

export default PuiTooltip;
