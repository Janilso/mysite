import { Theme } from '@mui/material';
import { globalStyles } from '../../theme/globalStyles';

export const styles = {
    title: (theme: Theme) => ({
        ...globalStyles.h3Semibold,
        color: theme.palette.secondary.main,
    }),
    description: (theme: Theme) => ({
        ...globalStyles.h4Regular,
        mt: theme.spacing(2),
    }),
    technologies: (theme: Theme) => ({
        ...globalStyles.h5Regular,
        mt: theme.spacing(1),
        [`mark`]: {
            color: theme.palette.secondary.main,
            background: 'transparent',
        },
    }),
    content: (theme: Theme) => ({
        background: theme.palette.primary.dark,
        maxWidth: 375,
    }),
    actions: (theme: Theme) => ({
        p: theme.spacing(2),
        pt: 0,
        gap: theme.spacing(2),
    }),
};
