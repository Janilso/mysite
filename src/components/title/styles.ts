import { Theme } from '@mui/material';
import { globalStyles } from '../../theme/globalStyles';

const defaultMarker = {
    position: 'absolute',
    right: '0',
    bottom: '-2px',
};

const defaultText = {
    width: 'fit-content',
    [`span`]: {
        position: 'relative',
    },
};

export const styles = {
    textMain: (theme: Theme) => ({
        ...defaultText,
        fontSize: 60,
        fontWeight: 700,
        color: theme.palette.secondary.main,
    }),
    markerMain: (theme: Theme) => ({
        ...defaultMarker,
        background: theme.palette.primary.light,
        width: '18%',
        height: theme.spacing(1),
    }),
    text: (theme: Theme) => ({
        ...defaultText,
        ...globalStyles.h2Semibold,
        mb: theme.spacing(5),
    }),
    marker: (theme: Theme) => ({
        ...defaultMarker,
        background: theme.palette.secondary.main,
        width: '30%',
        height: theme.spacing(0.6),
    }),
};
