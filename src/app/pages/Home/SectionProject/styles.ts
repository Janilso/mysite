import { makeSxStyles } from '@/theme/makeSxStyles';

export const styles = makeSxStyles({
  projectList: (theme) => ({
    justifyContent: 'center',

    [theme.breakpoints.down('md')]: {
      justifyContent: 'flex-start',
      flexWrap: 'nowrap',
      overflow: 'auto',
      webkitOverflowScrolling: 'touch',
      scrollSnapType: 'x mandatory',
      '::-webkit-scrollbar': {
        display: 'none',
      },
      '& > .MuiGrid2-root': {
        scrollSnapAlign: 'start',
        position: 'relative',
        pl: 2,
      },
    },
  }),
  projectItem: (theme) => ({
    maxWidth: '100%',
    position: 'relative',

    [theme.breakpoints.down('md')]: {
      minWidth: 316,
      maxWidth: 'initial',
      '&:last-of-type:after': {
        content: '""',
        width: 2,
        height: '1px',
        position: 'absolute',
        left: '100%',
        top: 0,
        display: 'block',
      },
    },
  }),
  projectMore: {
    mt: 4,
  },
  projectContainer: {
    px: { xs: 0, md: null },
  },
  notFoundContainer: {
    justifyContent: 'center',
    textAlign: 'center',
    mt: 4,
  },
  notFoundImage: {
    width: { xs: 200, md: 298 },
    height: { xs: 167, md: 226 },
  },
});
