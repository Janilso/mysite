import { makeSxStyles } from '@/theme/makeSxStyles';

export const styles = makeSxStyles({
  root: {
    bgcolor: 'colors.primaryMedium',
  },
  containerItens: {
    gap: { xs: 5, md: 10 },
    alignItems: 'center',
    flexDirection: { xs: 'column-reverse', md: 'row' },
    flexWrap: 'nowrap',
  },
  image: {
    width: { xs: 232, md: 420 },
    height: { xs: 164, md: 317 },
  },
  texts: {
    justifyContent: { xs: 'center', md: 'flex-start' },
  },
});
