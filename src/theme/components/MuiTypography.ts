import { Components } from '@mui/material';
import { colors } from '../colors';

export const MuiTypography: Components['MuiTypography'] = {
  defaultProps: {
    variant: 'body2',
  },
  styleOverrides: {
    root: {
      mark: {
        backgroundColor: 'transparent',
        color: colors.secondary,
      },
    },
  },
};
