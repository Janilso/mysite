import { Theme } from '@mui/material';
import { globalStyles } from '../../theme/globalStyles';

export const styles = {
    button: {
        ...globalStyles.h4Regular,
        textTransform: 'none',
    },
    toolbar: (theme: Theme) => ({
        justifyContent: 'flex-end',
        gap: theme.spacing(2),
    }),
    appBar: (theme: Theme) => ({
        boxShadow: `0 10px 35px rgba(0, 0, 0, 0.2)`,
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    }),
};
