import React, { cloneElement } from 'react';
import { ElevationScrollProps } from './types';
import { SxProps, useScrollTrigger } from '@mui/material';

const ElevationScroll: React.FC<ElevationScrollProps> = ({
  children,
  window,
  sx,
  sxScrolling,
}) => {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return cloneElement(children, {
    sx: trigger ? ([sx, sxScrolling] as SxProps) : sx,
  });
};

export default ElevationScroll;
