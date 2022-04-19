import { Theme } from '@mui/material';

const rotateAnimate = {
  animation: 'rotate 5s ease infinite',
  position: 'relative',
  right: '20px',

  '@keyframes rotate': {
    '20%': {
      transform: 'translate(0, 10px) rotate(5deg)',
    },
    '50%': {
      transform: 'translate(20px,0) rotate(-5deg)',
    },
    '100%': {
      transform: 'translate(0,0) rotate(0deg)',
    },
  },
};

const rotateAnimateResponsive = (theme: Theme) => ({
  [theme.breakpoints.down('md')]: {
    right: '5px',
  },
});

const movingAnimate = {
  animation: 'moving 5s cubic-bezier(0.61, -0.49, 0.37, 1.27) infinite',
  position: 'relative',
  left: '20px',
  '@keyframes moving': {
    '50%': {
      transform: 'translateX(20px)',
    },
  },
};

const movingAnimateResponsive = (theme: Theme) => ({
  [theme.breakpoints.down('md')]: {
    right: '5px',
  },
});

const animations = {
  rotateAnimate,
  rotateAnimateResponsive,
  movingAnimate,
  movingAnimateResponsive,
};

export default animations;
