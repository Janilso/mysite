'use client';
import { ptBR } from '@mui/material/locale';
import { alpha, createTheme } from '@mui/material/styles';
import {
  MuiButton,
  MuiButtonBase,
  MuiDialog,
  MuiDialogActions,
  MuiDialogContent,
  MuiDialogTitle,
  MuiFormLabel,
  MuiInputBase,
  MuiLink,
  MuiList,
  MuiMenuItem,
  MuiOutlinedInput,
  MuiSelect,
  MuiSkeleton,
  MuiTextField,
  MuiToggleButton,
  MuiTooltip,
  MuiTypography,
} from './components';
import './types';
import { colors } from './colors';
import { red, yellow } from '@mui/material/colors';

const fontFamily = 'var(--font-exo)';

const defaultTheme = createTheme(
  {
    typography: {
      fontFamily,
      allVariants: {
        fontWeight: 400,
        color: colors.white,
        fontFamily,
      },
      button: {
        fontSize: 14,
        textTransform: 'initial',
      },
      h2: {
        fontSize: 28,
        fontWeight: 400,
      },
      h3: {
        fontSize: 20,
        fontWeight: 400,
      },
      h2semibold: {
        fontFamily,
        color: colors.white,
        fontSize: 28,
        fontWeight: 600,
      },
    },
    palette: {
      mode: 'dark',
      background: {
        paper: colors.primary,
        default: colors.primary,
      },
      primary: {
        main: colors.primary,
        dark: colors.primaryMedium,
        light: colors.primaryLight,
        contrastText: colors.white,
      },
      secondary: {
        main: colors.secondary,
        dark: yellow[400],
        contrastText: colors.white,
      },
      text: {
        primary: colors.primary,
        secondary: colors.secondary,
        disabled: alpha(colors.primary, 0.5),
      },
      error: {
        main: red.A400,
      },
      colors,
    },
    colors,
    components: {
      MuiTypography,
      MuiTextField,
      MuiOutlinedInput,
      MuiFormLabel,
      MuiInputBase,
      MuiSelect,
      MuiMenuItem,
      MuiList,
      MuiButton,
      MuiTooltip,
      MuiSkeleton,
      MuiLink,
      MuiDialog,
      MuiDialogActions,
      MuiDialogTitle,
      MuiDialogContent,
      MuiToggleButton,
      MuiButtonBase,
    },
    cssVariables: true,
  },
  ptBR
);

const { breakpoints } = defaultTheme;

defaultTheme.typography.h1 = {
  fontSize: 32,
  fontWeight: 400,
  [breakpoints.down('sm')]: {
    fontSize: 24,
  },
};

defaultTheme.typography.h2 = {
  fontSize: 28,
  fontWeight: 400,
};

defaultTheme.typography.h3 = {
  fontSize: 20,
  fontWeight: 400,
};

defaultTheme.typography.h4 = {
  fontSize: 16,
  fontWeight: 400,
};

export default defaultTheme;
