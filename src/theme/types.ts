import { SxProps, Theme } from '@mui/material';
import { CSSProperties } from 'react';

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

  interface TypographyVariants {
    h2semibold: CSSProperties;
  }
  interface TypographyVariantsOptions {
    h2semibold?: CSSProperties;
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    h2semibold: true;
  }
}

export type SxStyleType = SxProps<Theme>;
