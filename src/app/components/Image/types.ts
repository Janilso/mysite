import { JSX } from 'react';
import { SxProps, Theme } from '@mui/material';
import { ImageProps as ImagePropsNext } from 'next/dist/shared/lib/get-img-props';

export type IconImageProps = (
  props: Omit<ImagePropsNext, 'src' | 'alt' | 'priority'> & {
    sx?: SxProps<Theme>;
  }
) => React.ReactNode;

export type ImageProps = Omit<ImagePropsNext, 'src'> & {
  src: string;
};

export type ComponetBoxType = JSX.IntrinsicAttributes &
  Omit<ImageProps, 'src' | 'alt'>;
