import { createTheme } from '@mui/material/styles';
import { ptBR } from '@mui/material/locale';

import { red, yellow } from '@mui/material/colors';

const colors = {
    blueDark: '#001F3F',
    blueMedium: '#083358',
    blueLight: '#0D63A5',
    yellow: '#FFD717',
};

const theme = createTheme(
    {
        palette: {
            mode: 'dark',
            background: {
                paper: colors.blueDark,
                default: colors.blueDark,
            },
            primary: {
                main: colors.blueDark,
                dark: colors.blueMedium,
                light: colors.blueLight,
            },
            secondary: {
                main: colors.yellow,
                dark: yellow[400],
            },
            error: {
                main: red.A400,
            },
        },
        typography: {
            fontFamily: ['Exo', 'Helvetica', 'Arial'].join(','),

            body1: {
                fontFamily: 'Exo',
            },
            subtitle1: {
                fontSize: 14,
                fontWeight: 400,
            },
            button: {
                fontSize: 13,
                textTransform: 'initial',
            },
        },
    },
    ptBR,
);

export default theme;
