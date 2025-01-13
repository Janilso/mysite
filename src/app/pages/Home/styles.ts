import { makeSxStyles } from '@/theme/makeSxStyles';

export const homeStyles = makeSxStyles({
  minHeightContainer: {
    minHeight: { xs: 'initial', sm: 'calc(100vh - 64px)' },
  },
  container: {
    py: 5,
    alignItems: 'center',
  },
});
