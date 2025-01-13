import { Components } from '@mui/material';
import { colors } from '../colors';

export const MuiOutlinedInput: Components['MuiOutlinedInput'] = {
  styleOverrides: {
    notchedOutline: {
      borderColor: colors.primaryLight,
      '& legend': {
        fontSize: '0.65rem',
      },
    },
  },
};
