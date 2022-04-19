import { Theme } from '@mui/material';

export const styles = {
  container: (theme: Theme) => ({
    bgcolor: theme.palette.primary.main,
    width: 130,
    height: 130,
    p: theme.spacing(3),
    borderRadius: '5px',
  }),
};
