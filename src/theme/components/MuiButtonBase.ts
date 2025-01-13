import { Components } from '@mui/material';

export const MuiButtonBase: Components['MuiButtonBase'] = {
  styleOverrides: {
    root: {
      fontFamily: ['Exo', 'Helvetica', 'Arial', 'sans-serif'].join(','),
      padding: 12,
      borderRadius: 4,
    },
  },
};
