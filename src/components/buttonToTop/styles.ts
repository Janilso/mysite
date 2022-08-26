import { TypeStyles } from '../../theme';

export const styles: TypeStyles = {
  root: {
    position: 'fixed',
    right: { xs: 16, md: 40 },
    bgcolor: 'colors.secondary',
    borderRadius: 50,
    width: { xs: 50, md: 56 },
    height: { xs: 50, md: 56 },
    minWidth: { xs: 50, md: 56 },
    p: 0,
    transition: 'all 0.5s cubic-bezier(0.61, -0.49, 0.37, 1.27)',
    [':hover']: {
      transform: { xs: 'none', md: 'scale(1.1)' },
    },
  },
};
