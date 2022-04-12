import { SxProps, Theme } from '@mui/material';
// import { globalStyles } from '../../theme/globalStyles';

export const styles = {
    container: (theme: Theme) => ({
        p: theme.spacing(8),
        mt: theme.spacing(8),
        background: theme.palette.primary.main,
        justifyContent: 'flex-end',
        gap: theme.spacing(2),
    }),
};
