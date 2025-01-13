import { Components } from '@mui/material';
import { colors } from '../colors';

export const MuiTextField: Components['MuiTextField'] = {
  defaultProps: {
    variant: 'outlined',
  },
  styleOverrides: {
    root: {
      '&:hover .MuiFormLabel-root': {
        color: colors.primary,
      },
    },
  },
};
