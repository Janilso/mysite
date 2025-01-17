'use client';
import { Box, Button, Grid2 } from '@mui/material';
import React from 'react';
import { styles } from './pages/NotFound/styles';
import { AnimatedContent } from './components';
import { ImageError404 } from './assets/images';
import Link from 'next/link';

const NotFoundPage: React.FC = () => {
  return (
    <Grid2 container sx={styles.root}>
      <Box sx={styles.image}>
        <AnimatedContent type="moving2">
          <ImageError404 />
        </AnimatedContent>
      </Box>
      <Grid2 justifyContent="center" container>
        <Link href="/">
          <Button color="primary">Ir para o início</Button>
        </Link>
      </Grid2>
    </Grid2>
  );
};

export default NotFoundPage;
