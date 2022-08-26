import { TypeStyles } from '../theme';

const defaultStyles = {
  minHeightContainer: {
    minHeight: { xs: 'initial', sm: 'calc(100vh - 64px)' },
  },
  container: {
    py: 5,
    alignItems: 'center',
  },
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
    px: { xs: 0, md: null },
  },
  sectionProjectList: {
    justifyContent: { xs: 'flex-start', md: 'center' },
    gap: 0,
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
      pl: 2,
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

  sectionSkills: {
    ...defaultStyles.minHeightContainer,
    ...defaultStyles.container,
    bgcolor: 'colors.primaryMedium',
  },

  sectionNetworks: {
    ...defaultStyles.container,
  },
  sectionNetworksList: {
    display: 'flex',
    gap: 2,
    mb: { xs: 5, sm: 0 },
  },
  sectionNetworksItem: {
    p: 1,
  },
};
