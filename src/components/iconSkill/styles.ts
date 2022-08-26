import { Theme } from '@mui/material';
import { TypeStyles } from '../../theme';

export const styles: TypeStyles = {
  container: {
    bgcolor: 'colors.primaryDark',
    width: 130,
    height: 130,
    p: 3,
    borderRadius: '5px',
    position: 'relative',
    ['>span']: {
      position: 'absolute',
      zIndex: 2,
      transform: 'translate(0, 0) rotate(0deg) scale(1)',
      transition: 'all 0.75s cubic-bezier(.71,0,.33,1.56) 0ms',
    },
    '.MuiTypography-root': {
      margin: '0 auto',
      zIndex: 1,
      opacity: 0,
      transform: 'translate(0, 0)',
      transition: 'all 0.75s cubic-bezier(.71,0,.33,1.56) 0ms',
    },
    '.MuiBox-root': {
      position: 'absolute',
      width: '20px',
      height: '20px',
      background: 'colors.secondary',
      borderRadius: '60px 0px 5px 0px',
      transition: 'all 0.75s cubic-bezier(0.61, 0.04, 0.42, 1.1) 0ms',
      transform: 'translate(4px, -112px)',
      opacity: 0,
    },
    [':hover']: {
      ['>span']: {
        transform: 'translate(-25px, -25px) rotate(360deg) scale(0.6)',
      },
      '.MuiTypography-root': {
        opacity: 1,
        transform: 'translate(0, -30px)',
      },
      '.MuiBox-root': {
        opacity: 1,
        transform: 'translate(85px, -28px)',
      },
    },
  },
};
