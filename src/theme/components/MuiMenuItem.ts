import { alpha, Components } from '@mui/material';
import { colors } from '../colors';

export const MuiMenuItem: Components['MuiMenuItem'] = {
  styleOverrides: {
    root: {
      fontSize: 14,
    },
    gutters: {
      backgroundColor: colors.primary,
      '&.Mui-selected': {
        backgroundColor: colors.primaryMedium,
        '&:hover': {
          backgroundColor: alpha(colors.primaryLight, 0.2),
        },
      },
    },
  },
};
