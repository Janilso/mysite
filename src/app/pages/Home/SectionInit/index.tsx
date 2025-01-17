import { ImagePrograming } from '@/app/assets/images';
import { AnimatedContent, Title } from '@/app/components';
import { Container, Grid2, SxProps, Typography } from '@mui/material';
import React from 'react';
import { homeStyles } from '../styles';
import { SectionProps } from '../types';
import { styles } from './styles';

const SectionInit: React.FC<SectionProps> = ({ ref }) => {
  return (
    <Grid2
      component="section"
      sx={[homeStyles.minHeightContainer, homeStyles.container] as SxProps}
      ref={ref}
      container
    >
      <Container>
        <Grid2 sx={styles.containerItens}>
          <Grid2 size={12} sx={styles.texts}>
            <Typography variant="h1" sx={styles.text}>
              Site de
            </Typography>
            <Title type="main">Janilso Rodrigues</Title>
            <Typography variant="h1" sx={styles.text}>
              A programmer!
            </Typography>
          </Grid2>
          <Grid2 size={12} container sx={styles.containerImage}>
            <AnimatedContent>
              <ImagePrograming sx={styles.image} />
            </AnimatedContent>
          </Grid2>
        </Grid2>
      </Container>
    </Grid2>
  );
};

export default SectionInit;
