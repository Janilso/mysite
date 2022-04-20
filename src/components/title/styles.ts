import { Theme } from '@mui/material';
import { globalStyles } from '../../theme/globalStyles';

const defaultMarker = {
  position: 'absolute',
  right: '0',
  bottom: '-2px',
};

const defaultText = {
  width: 'fit-content',
  [`span`]: {
    position: 'relative',
  },
  'span .MuiBox-root': {
    transition: 'all 0.75s cubic-bezier(0.61, 0.04, 0.42, 1.1) 0ms',
    transform: 'rotateY(-160deg)',
  },
  ':hover': {
    'span .MuiBox-root': {
      transform: 'rotateY(0deg)',
    },
  },
};

export const styles = {
  textMain: (theme: Theme) => ({
    ...defaultText,
    fontSize: 60,
    fontWeight: 700,
    color: theme.palette.secondary.main,
    [theme.breakpoints.down('sm')]: {
      fontSize: 50,
      my: theme.spacing(1),
    },
  }),
  markerMain: (theme: Theme) => ({
    ...defaultMarker,
    background: theme.palette.primary.light,
    width: '18%',
    height: theme.spacing(1),
  }),
  text: (theme: Theme) => ({
    ...defaultText,
    ...globalStyles.h2Semibold,
    mb: theme.spacing(5),
    [theme.breakpoints.down('sm')]: {
      ...globalStyles.h1SemiboldMobile,
      mb: theme.spacing(3),
    },
  }),
  marker: (theme: Theme) => ({
    ...defaultMarker,
    background: theme.palette.secondary.main,
    width: '30%',
    height: theme.spacing(0.6),
  }),
};
