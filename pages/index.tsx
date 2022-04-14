import { Button, Container, Grid, Typography } from '@mui/material';
import type { NextPage } from 'next';
import { useRef, useState } from 'react';
import icon from '../src/assets/icons';
import images from '../src/assets/images';
import CustomButton from '../src/components/button';
import IconSkill from '../src/components/iconSkill';
import Menu from '../src/components/menu/menu';
import Project from '../src/components/project';
import Title from '../src/components/title';
import { getMyAge, loadMore } from '../src/utils/functions';
import { styles } from './styles';

// https://api.github.com/users/janilso/repos

const projects = [
  {
    title: 'Projeto',
    description: `Lorem Ipsum é simplesmente uma simulação de texto da
        indústria tipográfica e de impressos, e vem sendo utilizado
        desde o século XVI, quando um impressor desconhecido pegou
        uma bandeja de tipos e os embaralhou para.`,
    technologies: ['Typescript', 'NextJS'],
    repository: 'https://www.google.com/',
    view: 'https://www.google.com/',
  },
  {
    title: 'Projeto 2',
    description: `Lorem Ipsum é simplesmente uma simulação de texto da
        indústria tipográfica e de impressos, e vem sendo utilizado
        desde o século XVI, quando um.`,
    technologies: ['Dart', 'Flutter'],
    repository: 'https://www.google.com/',
    view: 'https://www.google.com/',
  },
  {
    title: 'Projetoinho',
    description: `Lorem Ipsum é simplesmente uma simulação de texto da
        indústria tipográfica e de impressos, e vem sendo utilizado
        desde o século XVI, quando um.`,
    technologies: ['Dart', 'Flutter'],
    repository: 'https://www.google.com/',
    view: 'https://www.google.com/',
  },
  {
    title: 'Projetoinho',
    description: `Lorem Ipsum é simplesmente uma simulação de texto da
        indústria tipográfica e de impressos, e vem sendo utilizado
        desde o século XVI, quando um.`,
    technologies: ['Dart', 'Flutter'],
    repository: 'https://www.google.com/',
    view: 'https://www.google.com/',
  },
];

const networks = [
  {
    image: icon.linkedin,
    link: 'https://www.linkedin.com/in/janilso-rodrigues/',
  },
  {
    image: icon.github,
    link: 'https://github.com/Janilso',
  },
  {
    image: icon.gmail,
    link: 'mailto:janilsorodrigues10@gmail.com',
  },
];

const Home: NextPage = () => {
  const refInit = useRef<HTMLElement>();
  const refMyHistory = useRef<HTMLElement>();
  const refProjects = useRef<HTMLElement>();
  const refSkills = useRef<HTMLElement>();
  const refNetworks = useRef<HTMLElement>();

  const [range, setRange] = useState(3);

  const newRange = loadMore(projects, range, 4);

  return (
    <>
      <Menu
        panes={[
          { title: 'Início', ref: refInit },
          { title: 'Minha História', ref: refMyHistory },
          { title: 'Projetos', ref: refProjects },
          { title: 'Skills', ref: refSkills },
          { title: 'Redes', ref: refNetworks },
        ]}
      />
      <Grid
        component="section"
        sx={[styles.container, styles.containerName]}
        ref={(r: HTMLElement) => (refInit.current = r)}
        container
      >
        <Container>
          <Grid alignItems="center" container>
            <Grid xs={6} direction="column" item container>
              <Typography sx={styles.text}>Olá! Me chamo</Typography>
              <Title type="main">Janilso Rodrigues</Title>
              <Typography sx={styles.text}>Um programador web!</Typography>
            </Grid>
            <Grid xs container item justifyContent="flex-end">
              <img src={images.programing} />
            </Grid>
          </Grid>
        </Container>
      </Grid>

      <Grid
        component="section"
        alignItems="center"
        sx={styles.container2}
        ref={(r: HTMLElement) => (refMyHistory.current = r)}
        container
      >
        <Container>
          <Grid alignItems="center" container>
            <Grid xs item>
              <img src={images.history} />
            </Grid>
            <Grid xs={6} direction="column" item container>
              <Title>Minha História</Title>
              <Typography align="justify" sx={styles.textAbout}>
                Sou o Janilso Rodrigues, tenho {getMyAge()} anos. Sou
                desenvolvedor <mark>web frontend pleno</mark>, que gosta de se
                aventurar no mobile, e um pouco no bakend. Sou um Maranhense que
                iniciou o Curso de <mark>Sistemas de Informação</mark>,
                conseguiu uma oportunidade de emprego em São Paulo e decidiu
                arriscar. Me mudei, transferi o curso para SP e estou nos
                últimos semestres! Gosto muito de estar atento às{' '}
                <mark>tendências do mercado</mark>, haja vista que na área de
                tecnologia, temos sempre que nos mantermos{' '}
                <mark>atualizados</mark>.
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Grid>

      <Grid
        component="section"
        alignItems="center"
        sx={styles.container}
        ref={(r: HTMLElement) => (refProjects.current = r)}
        container
      >
        <Container>
          <Grid
            direction="column"
            alignItems="center"
            justifyContent="center"
            container
          >
            <Grid xs item>
              <Title>Projetos</Title>
            </Grid>
            <Grid spacing={{ md: 4, xs: 2 }} item container>
              {projects.slice(0, range).map((project, key) => (
                <Grid key={key} xs={4} item>
                  <Project {...project} />
                </Grid>
              ))}
            </Grid>

            <Grid item sx={styles.more}>
              <CustomButton
                onClick={() =>
                  setRange(range < projects?.length ? newRange : 3)
                }
                variant="outlined"
              >
                {range < projects?.length ? 'Ver Mais' : 'Ver Menos'}
              </CustomButton>
            </Grid>
          </Grid>
        </Container>
      </Grid>

      <Grid
        component="section"
        alignItems="center"
        sx={styles.container2}
        ref={(r: HTMLElement) => (refSkills.current = r)}
        container
      >
        <Container>
          <Grid justifyContent="space-between" container>
            <Grid xs={4} direction="column" item container>
              <Title>Skills</Title>
              <Typography sx={styles.textAbout}>
                Ao lado estou exibindo algumas habilidades que tenho.
              </Typography>
            </Grid>

            <Grid
              xs={6}
              rowSpacing={2}
              columnSpacing={2}
              columns={{ lg: 12, md: 10 }}
              wrap="wrap"
              justifyContent="center"
              container
              item
            >
              <Grid item xs={3}>
                <IconSkill type="html" />
              </Grid>

              <Grid item xs={3}>
                <IconSkill type="css" />
              </Grid>

              <Grid item xs={3}>
                <IconSkill type="javascript" />
              </Grid>

              <Grid item xs={3}>
                <IconSkill type="typescript" />
              </Grid>

              <Grid item xs={3}>
                <IconSkill type="dart" />
              </Grid>

              <Grid item xs={3}>
                <IconSkill type="flutter" />
              </Grid>

              <Grid item xs={3}>
                <IconSkill type="reactjs" />
              </Grid>
              <Grid item xs={3}>
                <IconSkill type="nextjs" />
              </Grid>
              <Grid item xs={3}>
                <IconSkill type="sass" />
              </Grid>
              <Grid item xs={3}>
                <IconSkill type="git" />
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Grid>

      <Grid
        component="section"
        alignItems="center"
        sx={styles.container}
        ref={(r: HTMLElement) => (refNetworks.current = r)}
        container
      >
        <Container>
          <Grid
            direction="column"
            alignItems="center"
            justifyContent="center"
            container
          >
            <Grid xs item>
              <Title>Redes</Title>
            </Grid>

            <Grid sx={styles.networks} item>
              {networks.map(({ image, link }, i) => (
                <Button LinkComponent="a" href={link} target="_blank" key={i}>
                  <img src={image} />
                </Button>
              ))}
            </Grid>
          </Grid>
        </Container>
      </Grid>
    </>
  );
};

export default Home;
