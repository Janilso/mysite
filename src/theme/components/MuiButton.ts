import { Components, darken } from '@mui/material';
import { colors } from '../colors';

export const MuiButton: Components['MuiButton'] = {
  defaultProps: {
    color: 'secondary',
    variant: 'contained',
    size: 'medium',
    disableElevation: true,
  },
  variants: [
    {
      props: { size: 'medium' },
      style: { padding: 12, height: 50 },
    },
    {
      props: { size: 'large' },
      style: {
        padding: 13,
      },
    },
    {
      props: { color: 'secondary', variant: 'contained' },
      style: { color: colors.primary },
    },
    {
      props: { color: 'secondary', variant: 'outlined' },
      style: { color: colors.secondary },
    },
    {
      props: { color: 'primary' },
      style: {
        background: colors.primaryMedium,
        color: colors.secondary,
        '&:hover': {
          background: darken(colors.primaryMedium, 0.4),
        },
      },
    },
    {
      props: { variant: 'text' },
      style: {
        color: colors.white,
      },
    },
    {
      props: { fullWidth: true },
      style: { minWidth: 'initial' },
    },
  ],
  styleOverrides: {
    root: {
      // minWidth: 136,
      // fontSize: 14,
      // textTransform: 'none',
      minWidth: 160,
      alignItems: 'center',
    },
  },
};
