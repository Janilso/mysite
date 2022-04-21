import { Theme } from '@mui/material';

export const styles = {
  button: (theme: Theme) => ({
    boxShadow: 'none',

    '&:hover': {
      boxShadow: 'none',
    },
    '&:active': {
      boxShadow: 'none',
    },
    '&:focus': {
      boxShadow: 'none',
    },
    '&.MuiButton-containedSecondary': {
      color: theme.palette.primary.main,
    },
    ['a']: {
      color: 'inherit',
      textDecoration: 'none',
    },
  }),
};
