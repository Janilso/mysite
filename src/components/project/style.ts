import { TypeStyles } from '../../theme';

export const styles: TypeStyles = {
  card: {
    bgcolor: 'colors.primaryMedium',
    maxWidth: 375,
    minWidth: { xs: 300, md: 'initial' },
    display: 'flex',
    flexDirection: ' column',
    height: '100%',
    transition: 'all 0.3s ease-out',
    [':hover']: {
      transform: {
        xs: 'none',
        md: 'translateY(-5px) scale(1.1) translateZ(0)',
      },
    },
  },
  content: {
    height: '100%',
    display: 'flex',
    flexDirection: ' column',
    p: { xs: 1, md: 2 },
  },
  description: {
    mt: { xs: 1, md: 2 },
    flex: 1,
  },
  technologies: {
    mt: { xs: 0, md: 1 },
  },
  actions: {
    p: { xs: 1, md: 2 },
    pt: 0,
    gap: { xs: 1, sm: 2 },
    justifyContent: 'center',
  },
};
