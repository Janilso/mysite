import { TypeStyles } from '../../theme';

export const styles: TypeStyles = {
  text: {
    textAlign: { xs: 'center', lg: 'left' },
    width: 'fit-content',
    fontWeight: 600,
    fontSize: { xs: 32, sm: null },
    mb: { xs: 3, sm: 5 },
    ':hover': {
      'span::after': {
        transform: 'rotateY(0deg)',
      },
    },
  },
  textMain: {
    fontSize: { sx: 50, sm: 60 },
    mb: 0,
    fontWeight: 700,
    color: 'colors.secondary',
    my: { sx: 1, sm: 0 },
  },
  effect: {
    position: 'relative',
    '&::after': {
      content: "''",
      position: 'absolute',
      right: '0',
      bottom: '-5px',
      bgcolor: 'colors.secondary',
      width: '30%',
      height: '5px',
      transition: 'all 0.75s cubic-bezier(0.61, 0.04, 0.42, 1.1) 0ms',
      transform: 'rotateY(-160deg)',
    },
  },
  effectMain: {
    '&::after': {
      bgcolor: 'colors.primaryLight',
      width: '18%',
      height: '8px',
    },
  },
};
