import { Theme } from '@mui/material';
import { globalStyles } from '../theme/globalStyles';

export const styles = {
    containerName: (theme: Theme) => ({
        mt: theme.spacing(8),
    }),
    container: (theme: Theme) => ({
        py: theme.spacing(8),
    }),
    container2: (theme: Theme) => ({
        py: theme.spacing(8),
        background: theme.palette.primary.dark,
    }),
    more: (theme: Theme) => ({
        mt: theme.spacing(4),
    }),
    text: globalStyles.h1Regular,
    textAbout: (theme: Theme) => ({
        ...globalStyles.h3Regular,
        [`mark`]: {
            color: theme.palette.secondary.main,
            background: 'transparent',
        },
    }),
    networks: (theme: Theme) => ({
        display: 'flex',
        gap: theme.spacing(3),
        ['img']: {
            width: '45px',
        },
    }),
};
