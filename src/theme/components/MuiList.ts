import { Components } from '@mui/material';
import { colors } from '../colors';

export const MuiList: Components['MuiList'] = {
  styleOverrides: {
    root: {
      backgroundColor: colors.primary,
    },
  },
};
