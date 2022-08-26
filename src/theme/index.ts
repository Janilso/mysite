import { createTheme, SxProps, Theme } from '@mui/material/styles';
import { ptBR } from '@mui/material/locale';

import { red, yellow } from '@mui/material/colors';

const colors = {
  primaryDark: '#001F3F',
  primaryMedium: '#083358',
  primaryLight: '#0D63A5',
  secondary: '#FFD717',
};

declare module '@mui/material/styles' {
  interface Theme {
    colors: Record<string, string>;
  }
  interface ThemeOptions {
    colors: Record<string, string>;
  }

  interface Palette {
    colors: Record<string, string>;
  }
  interface PaletteOptions {
    colors?: Record<string, string>;
  }
}

const theme = createTheme(
  {
    palette: {
      mode: 'dark',
      background: {
        paper: colors.primaryDark,
        default: colors.primaryDark,
      },
      primary: {
        main: colors.primaryDark,
        dark: colors.primaryMedium,
        light: colors.primaryLight,
      },
      secondary: {
        main: colors.secondary,
        dark: yellow[400],
      },
      error: {
        main: red.A400,
      },
      colors,
    },
    colors,
    typography: {
      fontFamily: ['Exo', 'Helvetica', 'Arial', 'sans-serif'].join(','),
      allVariants: {
        fontWeight: 400,
        fontFamily: ['"Exo"', 'sans-serif'].join(','),
      },
      button: {
        fontSize: 14,
        textTransform: 'initial',
      },
    },
    components: {
      MuiTypography: {
        styleOverrides: {
          root: {
            mark: {
              backgroundColor: 'transparent',
              color: colors.secondary,
            },
          },
        },
      },
      MuiButton: {
        defaultProps: {
          color: 'secondary',
          variant: 'contained',
          size: 'medium',
          href: '',
          disableElevation: true,
        },
        variants: [
          {
            props: { size: 'medium' },
            style: { padding: 12, height: 50 },
          },
          {
            props: { color: 'secondary', variant: 'contained' },
            style: { color: colors.primaryDark },
          },
          {
            props: { color: 'secondary', variant: 'outlined' },
            style: { color: colors.secondary },
          },
          {
            props: { fullWidth: true },
            style: { minWidth: 'initial' },
          },
        ],
        styleOverrides: {
          root: {
            minWidth: 160,
            alignItems: 'center',
          },
        },
      },
      MuiButtonBase: {
        styleOverrides: {
          root: {
            fontFamily: ['Exo', 'Helvetica', 'Arial', 'sans-serif'].join(','),
            padding: 12,
            borderRadius: 4,
          },
        },
      },
      MuiToggleButton: {
        styleOverrides: {
          root: {
            border: 'none',
          },
        },
      },
    },
  },
  ptBR
);

const { breakpoints } = theme;

theme.typography.h1 = {
  fontSize: 32,
  fontWeight: 400,
  [breakpoints.down('sm')]: {
    fontSize: 24,
  },
};

theme.typography.h2 = {
  fontSize: 28,
  fontWeight: 400,
};

theme.typography.h3 = {
  fontSize: 20,
  fontWeight: 400,
};

theme.typography.h4 = {
  fontSize: 16,
  fontWeight: 400,
};

export default theme;

export type TypeStyles = Record<string, SxProps<Theme>>;
