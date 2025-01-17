import { IconGitHub, IconGmail, IconLinkedIn } from '@/app/assets/icons';
import { AnimatedContent, Title } from '@/app/components';
import { Container, Grid2, IconButton } from '@mui/material';
import React from 'react';
import { homeStyles } from '../styles';
import { SectionProps } from '../types';

const SectionNetworks: React.FC<SectionProps> = ({ ref }) => {
  const sizeIcon = {
    width: 35,
    height: 35,
  };

  const networks = [
    {
      image: <IconLinkedIn {...sizeIcon} />,
      link: 'https://www.linkedin.com/in/janilso-rodrigues/',
    },
    {
      image: <IconGitHub {...sizeIcon} />,
      link: 'https://github.com/Janilso',
    },
    {
      image: <IconGmail {...sizeIcon} />,
      link: 'mailto:janilsorodrigues10@gmail.com',
    },
  ];
  return (
    <Grid2 component="section" sx={[homeStyles.container]} ref={ref} container>
      <Container>
        <Grid2 alignItems="center" direction="column" container>
          <Grid2 direction="row" container>
            <Title>Redes</Title>
          </Grid2>

          <Grid2 container direction="row" spacing={2}>
            {networks.map(({ image, link }, i) => (
              <AnimatedContent type="rotateHover" boxed={false} key={i}>
                <IconButton
                  color="secondary"
                  LinkComponent="a"
                  href={link}
                  target="_blank"
                >
                  {image}
                </IconButton>
              </AnimatedContent>
            ))}
          </Grid2>
        </Grid2>
      </Container>
    </Grid2>
  );
};

export default SectionNetworks;
