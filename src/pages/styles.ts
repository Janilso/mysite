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
    text: globalStyles.h1Regular,
    textAbout: (theme: Theme) => ({
        ...globalStyles.h3Regular,
        [`mark`]: {
            color: theme.palette.secondary.main,
            background: 'transparent',
        },
    }),
};
