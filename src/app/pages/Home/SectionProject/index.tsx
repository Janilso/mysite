import React from 'react';
import { SectionProps } from '../types';
import {
  Button,
  Container,
  Grid2,
  Typography,
  useMediaQuery,
} from '@mui/material';
import { AnimatedContent, Title } from '@/app/components';
import { ImagenNotFound } from '@/app/assets/images';
import { homeStyles } from '../styles';
import { styles } from './styles';
import useSectionProject from './useSectionProject';
import Project from '@/app/components/Project';

const SectionProject: React.FC<SectionProps> = ({ ref }) => {
  const {
    projects,
    range,
    handleClickMore,
    refItemProject,
    refContainerProjects,
  } = useSectionProject();
  const isMd = useMediaQuery((theme) => theme.breakpoints.down('md'));

  return (
    <Grid2
      component="section"
      sx={[homeStyles.minHeightContainer, homeStyles.container]}
      ref={ref}
      container
    >
      <Container sx={styles.projectContainer}>
        <Grid2 justifyContent="center" container>
          <Title>Projetos</Title>
          <Grid2
            direction="row"
            spacing={{ xs: 0, md: 4 }}
            sx={styles.projectList}
            ref={refContainerProjects}
            container
          >
            {isMd
              ? projects?.map((project, key) => (
                  <Grid2 key={key} sx={styles.projectItem}>
                    <Project {...project} />
                  </Grid2>
                ))
              : projects?.slice(0, range).map((project, key) => (
                  <Grid2 ref={refItemProject} key={key}>
                    <Project {...project} />
                  </Grid2>
                ))}
          </Grid2>

          {!isMd && projects?.length > 3 ? (
            <Grid2 sx={styles.projectMore}>
              <Button onClick={handleClickMore} variant="outlined">
                {range < projects?.length ? 'Ver Mais' : 'Ver Menos'}
              </Button>
            </Grid2>
          ) : null}

          {!projects?.length ? (
            <Grid2
              size={12}
              container
              sx={styles.notFoundContainer}
              spacing={{ xs: 5, sm: 10 }}
            >
              <AnimatedContent type="moving2">
                <ImagenNotFound
                  width={298}
                  height={226}
                  sx={styles.notFoundImage}
                />
              </AnimatedContent>
              <Grid2 size={12}>
                <Typography variant="h3" fontWeight={600} color="secondary">
                  Erro ao carregar
                </Typography>
              </Grid2>
            </Grid2>
          ) : null}
        </Grid2>
      </Container>
    </Grid2>
  );
};

export default SectionProject;
