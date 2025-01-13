import React from 'react';
import { SectionProps } from '../types';
import {
  Container,
  Grid2,
  SxProps,
  Typography,
  useMediaQuery,
} from '@mui/material';
import { IconSkill, Title } from '@/app/components';
import { homeStyles } from '../styles';
import { styles } from './styles';
import { IconSkillProps } from '@/app/components/IconSkill/types';

const SectionSkills: React.FC<SectionProps> = ({ ref }) => {
  const isMd = useMediaQuery((theme) => theme.breakpoints.down('md'));
  const types = [
    'html',
    'css',
    'javascript',
    'typescript',
    'jest',
    'flutter',
    'reactjs',
    'nextjs',
    'sass',
    'git',
  ];

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
        <Grid2
          spacing={{ xs: 2, sm: 3 }}
          justifyContent="space-between"
          container
        >
          <Grid2 size={{ xs: 12, md: 4 }} sx={styles.containerText}>
            <Title>Skills</Title>
            <Typography textAlign={{ xs: 'center', md: 'left' }} variant="h3">
              {isMd ? 'Abaixo' : 'Ao lado'} estou exibindo algumas habilidades
              que tenho.
              <mark>
                {isMd
                  ? ' (Clique nos ícones para ver mais)'
                  : ' (Passe o mouse sobre os ícones para ver mais)'}
              </mark>
            </Typography>
          </Grid2>

          <Grid2 justifyContent="center" container size={{ xs: 12, md: 7 }}>
            {types.map((type) => (
              <Grid2 key={type}>
                <IconSkill type={type as IconSkillProps['type']} />
              </Grid2>
            ))}
          </Grid2>
        </Grid2>
      </Container>
    </Grid2>
  );
};

export default SectionSkills;
