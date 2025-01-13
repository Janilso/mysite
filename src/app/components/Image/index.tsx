import React from 'react';
import ImageNext from 'next/image';
import { ImageProps } from './types';

const Image: React.FC<ImageProps> = ({ alt, src, ...rest }) => {
  return <ImageNext alt={alt} src={src} {...rest} />;
};

export default Image;
