import { Components } from '@mui/material';
import { colors } from '../colors';

export const MuiSelect: Components['MuiSelect'] = {
  styleOverrides: {
    outlined: {
      lineHeight: 'initial',
    },
    iconOutlined: {
      color: colors.primaryMedium,
    },
  },
};
