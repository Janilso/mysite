import { BoxProps, SxProps, Theme } from '@mui/material';

export type AnimatedContentProps = BoxProps & {
  type?: 'rotate' | 'moving' | 'rotateHover' | 'moving2';
  boxed?: boolean;
  children: React.ReactElement<{ sx?: SxProps<Theme> }>;
};
