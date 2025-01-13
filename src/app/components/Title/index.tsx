import React, { PropsWithChildren } from 'react';
import { TitleProps } from './types';
import { Box, SxProps, Typography } from '@mui/material';
import { styles } from './styles';

const Title: React.FC<PropsWithChildren<TitleProps>> = ({
  children,
  type = 'default',
}) => {
  const isMain = type === 'main';

  return (
    <Typography
      variant={isMain ? 'h1' : 'h2'}
      sx={[styles.text, isMain && styles.textMain] as SxProps}
    >
      <Box
        component="span"
        sx={[styles.effect, isMain && styles.effectMain] as SxProps}
      >
        {children}
      </Box>
    </Typography>
  );
};

export default Title;
