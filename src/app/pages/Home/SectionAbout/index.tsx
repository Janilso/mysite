import { ImageHistory } from '@/app/assets/images';
import { AnimatedContent, Title } from '@/app/components';
import { getMyAge, getMyExperience } from '@/app/utils/functions';
import { Container, Grid2, SxProps, Typography } from '@mui/material';
import React from 'react';
import { homeStyles } from '../styles';
import { SectionProps } from '../types';
import { styles } from './styles';

const SectionAbout: React.FC<SectionProps> = ({ ref }) => {
  return (
    <Grid2
      component="section"
      sx={
        [
          homeStyles.minHeightContainer,
          homeStyles.container,
          styles.root,
        ] as SxProps
      }
      ref={ref}
      container
    >
      <Container>
        <Grid2 container sx={styles.containerItens}>
          <Grid2 size={12} justifyContent="center" container>
            <AnimatedContent type="moving">
              <ImageHistory width={420} height={295} sx={styles.image} />
            </AnimatedContent>
          </Grid2>

          <Grid2 size={12} container sx={styles.texts}>
            <Title>Sobre</Title>
            <Typography align="justify" variant="h3">
              Com {getMyAge()} anos de idade e mais de{' '}
              <mark>{getMyExperience()} anos de experiência</mark> no mercado,
              sou um programador com foco principal no desenvolvimento{' '}
              <mark>front-end</mark>, com ampla sapiência na criação de
              interfaces digitais modernas, intuitivas e{' '}
              <mark>responsivas</mark>. Minha trajetória profissional é marcada
              por <mark>contribuições</mark> em projetos desafiadores e de{' '}
              <mark>alto impacto</mark>, sempre colaborando com equipes
              multidisciplinares para entregar produtos de{' '}
              <mark>alta qualidade</mark>. Tenho um compromisso constante com{' '}
              <mark>inovação</mark> e boas práticas, garantindo que cada
              interface ofereça uma experiência fluida e centrada no{' '}
              <mark>usuário</mark>.
            </Typography>
          </Grid2>
        </Grid2>
      </Container>
    </Grid2>
  );
};

export default SectionAbout;
