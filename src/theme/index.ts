import { createTheme } from '@mui/material/styles';
import { ptBR } from '@mui/material/locale';

import { red } from '@mui/material/colors';

const theme = createTheme(
    {
        palette: {
            primary: {
                main: '#001F3F',
                dark: '#083358',
                light: '#0D63A5',
            },
            secondary: {
                main: '#FFD717',
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
        },
    },
    ptBR,
);

export default theme;
