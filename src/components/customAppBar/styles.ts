import { Theme } from '@mui/material';
import { globalStyles } from '../../theme/globalStyles';

export const styles = {
  button: {
    ...globalStyles.h4Regular,
    textTransform: 'none',
  },
  container: (theme: Theme) => ({
    [theme.breakpoints.down('sm')]: {
      p: 0,
    },
  }),
  toolbar: (theme: Theme) => ({
    justifyContent: 'flex-end',
    gap: theme.spacing(2),
    [theme.breakpoints.down('sm')]: {
      p: 0,
    },
  }),
  appBar: (theme: Theme) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin', 'box-shadow'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  }),
  appBarScroll: {
    boxShadow: `0 10px 35px rgba(0, 0, 0, 0.2)`,
  },
};
