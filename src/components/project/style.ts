import { Theme } from '@mui/material';
import theme from '../../theme';
import { globalStyles } from '../../theme/globalStyles';

export const styles = {
  title: (theme: Theme) => ({
    ...globalStyles.h3Semibold,
    color: theme.palette.secondary.main,
  }),
  description: (theme: Theme) => ({
    ...globalStyles.h4Regular,
    mt: theme.spacing(2),
    flex: 1,
    [theme.breakpoints.down('md')]: {
      mt: theme.spacing(1),
    },
  }),
  technologies: (theme: Theme) => ({
    ...globalStyles.h5Regular,
    mt: theme.spacing(1),
    [`mark`]: {
      color: theme.palette.secondary.main,
      background: 'transparent',
    },
    [theme.breakpoints.down('md')]: {
      mt: 0,
    },
  }),
  content: {
    height: '100%',
    display: 'flex',
    flexDirection: ' column',
    [theme.breakpoints.down('md')]: {
      p: theme.spacing(1),
    },
  },
  card: (theme: Theme) => ({
    background: theme.palette.primary.dark,
    maxWidth: 375,
    display: 'flex',
    flexDirection: ' column',
    height: '100%',
    transition: 'all 0.3s ease-out',
    [':hover']: {
      transform: 'translateY(-5px) scale(1.1) translateZ(0)',
    },
    [theme.breakpoints.down('md')]: {
      minWidth: 255,
      [':hover']: {
        transform: 'none',
      },
    },
  }),
  actions: (theme: Theme) => ({
    p: theme.spacing(2),
    pt: 0,
    gap: theme.spacing(2),
    [theme.breakpoints.down('md')]: {
      p: theme.spacing(1),
      gap: theme.spacing(1),
    },
  }),
};
