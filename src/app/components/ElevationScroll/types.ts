import { SxProps, Theme } from '@mui/material';

export type ElevationScrollProps = {
  window?: () => Window;
  children: React.ReactElement<{ sx?: SxProps<Theme> }>;
  sx?: SxProps<Theme>;
  sxScrolling?: SxProps<Theme>;
};
