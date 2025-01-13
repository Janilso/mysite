import { makeSxStyles } from '@/theme/makeSxStyles';

export const styles = makeSxStyles({
  container: {
    bgcolor: 'colors.primary',
    width: 130,
    height: 130,
    p: 3,
    borderRadius: '5px',
    boxSizing: 'border-box',
    position: 'relative',
    '& img': {
      position: 'absolute',
      zIndex: 2,
      transform: 'translate(0, 0) rotate(0deg) scale(1)',
      transition: 'all 0.75s cubic-bezier(.71,0,.33,1.56) 0ms',
    },
    '& .MuiTypography-root': {
      margin: '0 auto',
      zIndex: 1,
      opacity: 0,
      transform: 'translate(0, 95px)',
      transition: 'all 0.75s cubic-bezier(.71,0,.33,1.56) 0ms',
      color: 'colors.white',
    },

    '&:hover': {
      '& img': {
        transform: 'translate(-18px, -18px) rotate(360deg) scale(0.6)',
      },
      '& .MuiTypography-root': {
        opacity: 1,
        transform: 'translate(0, 65px)',
      },
    },
  },
  text: { fontSize: 16 },
});
