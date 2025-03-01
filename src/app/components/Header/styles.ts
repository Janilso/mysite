import { makeSxStyles } from '@/theme/makeSxStyles';

export const styles = makeSxStyles({
  appBar: (theme) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin', 'box-shadow'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  }),
  toolbar: {
    justifyContent: 'flex-end',
    gap: 2,
  },
  appBarScroll: {
    boxShadow: `0 10px 35px rgba(0, 0, 0, 0.2)`,
  },
});
