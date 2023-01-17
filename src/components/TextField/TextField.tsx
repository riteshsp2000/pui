import React from 'react';

import Box from '@mui/material/Box';
import InputBase from '@mui/material/InputBase';
import Typography from '@mui/material/Typography';

import { ITextField } from './TextField.types';

const TextField: React.FC<ITextField> = ({
  inputProps,
  label,
  info,
  placeholder,
  disabled,
  value,
  error,
  ...rest
}) => {
  let textColor = 'border.light';
  let hoverTextColor = 'primary.main';

  if (error) {
    textColor = 'error.main';
    hoverTextColor = 'error.main';
  }

  if (disabled) {
    textColor = 'border.light';
    hoverTextColor = 'border.light';
  }

  return (
    <Box
      sx={{
        display: 'inline-block',
        '&:hover, &:focus-within': {
          '& p': {
            color: hoverTextColor,
          },
        },
      }}
    >
      {label && (
        <Typography
          component="p"
          variant="caption"
          sx={{
            marginBottom: '5px',
            color: textColor,
          }}
        >
          {label}
        </Typography>
      )}

      <InputBase
        value={value}
        disabled={disabled}
        error={error}
        sx={{
          borderColor: value ? 'border.light' : 'border.separator',
        }}
        componentsProps={{
          input: {
            placeholder,
            ...inputProps,
          },
        }}
        {...rest}
      />

      {info && (
        <Typography component="p" variant="caption" sx={{ color: textColor, marginTop: '5px' }}>
          {info}
        </Typography>
      )}
    </Box>
  );
};

export type TextFieldProps = ITextField;
export default TextField;
