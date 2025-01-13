import { Components } from '@mui/material';
import { colors } from '../colors';

export const MuiFormLabel: Components['MuiFormLabel'] = {
  styleOverrides: {
    root: {
      fontSize: 14,
      color: colors.primaryLight,
    },
  },
};
