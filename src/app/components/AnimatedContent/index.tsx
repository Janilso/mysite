import React, { cloneElement, PropsWithChildren } from 'react';
import { AnimatedContentProps } from './types';
import { Box, SxProps } from '@mui/material';
import { styles } from './styles';

const AnimatedContent: React.FC<PropsWithChildren<AnimatedContentProps>> = ({
  boxed = true,
  children,
  type = 'rotate',
}) => {
  return boxed ? (
    <Box sx={styles[`${type}Animate`] as SxProps}>{children}</Box>
  ) : (
    cloneElement(children, {
      sx: [children?.props?.sx, styles[`${type}Animate`]] as SxProps,
    })
  );
};

export default AnimatedContent;
