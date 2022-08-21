import { TypeStyles } from '../theme';

const defaultStyles = {
  minHeightContainer: {
    minHeight: { xs: 'initial', sm: 'calc(100vh - 64px)' },
  },
  container: {
    py: 5,
    alignItems: 'center',
  },

  // text: (theme: Theme) => ({
  //   ...globalStyles.h1Regular,
  //   [theme.breakpoints.down('sm')]: {
  //     ...globalStyles.h1RegularMobile,
  //   },
  // }),
  // textAbout: (theme: Theme) => ({
  //   ...globalStyles.h3Regular,
  //   [`mark`]: {
  //     color: theme.palette.secondary.main,
  //     background: 'transparent',
  //   },
  // }),
  // textNotfound: (theme: Theme) => ({
  //   ...globalStyles.h3Semibold,
  //   color: theme.palette.secondary.main,
  // }),
};

export const styles: TypeStyles = {
  sectionName: {
    ...defaultStyles.minHeightContainer,
    ...defaultStyles.container,
  },
  sectionNameimage: {
    mt: { xs: 5, md: 0 },
    justifyContent: { xs: 'center', md: 'flex-end' },
  },
  sectionAbout: {
    ...defaultStyles.minHeightContainer,
    ...defaultStyles.container,
    bgcolor: 'colors.primaryMedium',
  },
  sectionProject: {
    ...defaultStyles.minHeightContainer,
    ...defaultStyles.container,
  },
  sectionProjectContainer: {
    pr: { xs: 0, md: null },
  },
  sectionProjectList: {
    justifyContent: { xs: 'flex-start', md: 'center' },
    gap: { xs: 2, md: 0 },
    flexWrap: { xs: 'nowrap', md: 'wrap' },
    overflowX: { xs: 'auto', md: 'initial' },
    webkitOverflowScrolling: { xs: 'touch', md: 'initial' },
    scrollSnapType: { xs: 'x mandatory', md: 'initial' },
    '::-webkit-scrollbar': {
      display: { xs: 'none', md: 'initial' },
    },
    '.MuiGrid-root.MuiGrid-item': {
      scrollSnapAlign: { xs: 'start', md: 'initial' },
      position: 'relative',
    },
  },
  sectionProjectItem: {
    width: { xs: 'fit-content', md: 'initial' },
    maxWidth: { xs: 'initial', md: '100%' },
    position: 'relative',
    '&:last-of-type:after': {
      content: '""',
      width: 2,
      height: '1px',
      position: 'absolute',
      left: '100%',
      top: 0,
      display: { xs: 'block', md: 'none' },
    },
  },
  sectionProjectMore: {
    mt: 4,
  },

  networks: {
    display: 'flex',
    gap: 3,
    mb: { xs: 5, sm: 0 },
  },
  buttonToTop: {
    position: 'fixed',
    right: { xs: 2, md: 5 },
    bgcolor: 'colors.secondary',
    borderRadius: 50,
    width: { xs: 50, md: 64 },
    height: { xs: 50, md: 64 },
    minWidth: { xs: 50, md: '100%' },
    p: 0,
    transition: 'all 0.5s cubic-bezier(0.61, -0.49, 0.37, 1.27)',
    [':hover']: {
      transform: { xs: 'none', md: 'scale(1.1)' },
    },
  },
};
