import { ImagenNotFound } from '@/app/assets/images';
import { AnimatedContent, Title } from '@/app/components';
import Project from '@/app/components/Project';
import { Button, Container, Grid2, Typography } from '@mui/material';
import React from 'react';
import { homeStyles } from '../styles';
import { SectionProps } from '../types';
import { styles } from './styles';
import useSectionProject from './useSectionProject';

const SectionProject: React.FC<SectionProps> = ({ ref }) => {
  const {
    projects,
    isMd,
    range,
    handleClickMore,
    refItemProject,
    refContainerProjects,
  } = useSectionProject();

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
            {projects
              ?.slice(0, isMd ? projects.length : range)
              .map((project, key) => (
                <Grid2
                  ref={refItemProject}
                  sx={isMd ? styles.projectItem : null}
                  key={key}
                >
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
