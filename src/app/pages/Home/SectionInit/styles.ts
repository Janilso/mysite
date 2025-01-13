import { makeSxStyles } from '@/theme/makeSxStyles';

export const styles = makeSxStyles({
  containerItens: {
    display: 'flex',
    flexDirection: { xs: 'column', md: 'row' },
    flexWrap: 'nowrap',
    justifyContent: 'space-between',
  },
  containerImage: {
    mt: { xs: 5, md: 0 },
    justifyContent: { xs: 'center', md: 'flex-end' },
  },
  image: {
    width: { xs: 224, md: 375 },
    height: { xs: 264, md: 440 },
  },
  texts: (theme) => ({
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',

    [theme.breakpoints.down(1023)]: {
      justifyContent: 'flex-start',
    },
  }),
  text: {
    textAlign: { xs: 'center', lg: 'left' },
  },
});
