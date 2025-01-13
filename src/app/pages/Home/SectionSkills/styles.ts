import { makeSxStyles } from '@/theme/makeSxStyles';

export const styles = makeSxStyles({
  root: {
    bgcolor: 'colors.primaryMedium',
  },
  containerText: {
    display: { xs: 'flex', md: 'block' },
    flexDirection: { xs: 'column' },
    alignItems: { xs: 'center' },
  },
});
