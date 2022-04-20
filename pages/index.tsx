import {
  Button,
  Container,
  Grid,
  Theme,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import type { NextPage } from 'next';
import Image from 'next/image';
import { useRef, useState } from 'react';
import icon from '../src/assets/icons';
import images from '../src/assets/images';
import AnimatedContent from '../src/components/animatedContent';
import CustomButton from '../src/components/button';
import IconSkill from '../src/components/iconSkill';
import Menu from '../src/components/menu/menu';
import Project from '../src/components/project';
import Title from '../src/components/title';
import { globalStyles } from '../src/theme/globalStyles';
import { networks, projects } from '../src/utils/constants';
import { getMyAge, loadMore } from '../src/utils/functions';

const styles = {
  containerName: (theme: Theme) => ({
    mt: theme.spacing(8),
    minHeight: 790,
    [theme.breakpoints.down('sm')]: { minHeight: 'initial' },
  }),
  container: (theme: Theme) => ({
    py: theme.spacing(5),
  }),
  container2: (theme: Theme) => ({
    py: theme.spacing(5),
    background: theme.palette.primary.dark,
  }),
  minHeightContainer: (theme: Theme) => ({
    minHeight: 855,
    [theme.breakpoints.down('sm')]: { minHeight: 'initial' },
  }),
  more: (theme: Theme) => ({
    mt: theme.spacing(4),
  }),
  text: (theme: Theme) => ({
    ...globalStyles.h1Regular,
    [theme.breakpoints.down('sm')]: {
      ...globalStyles.h1RegularMobile,
    },
  }),
  textAbout: (theme: Theme) => ({
    ...globalStyles.h3Regular,
    [`mark`]: {
      color: theme.palette.secondary.main,
      background: 'transparent',
    },
  }),
  networks: (theme: Theme) => ({
    display: 'flex',
    gap: theme.spacing(3),
  }),

  imageContantResponsive: (theme: Theme) => ({
    [theme.breakpoints.down('md')]: { mt: theme.spacing(5) },
  }),
  projectsResponsive: (theme: Theme) => ({
    [theme.breakpoints.down('md')]: {
      gap: theme.spacing(2),
      flexWrap: 'nowrap',
      overflowX: 'auto',
      webkitOverflowScrolling: 'touch',
      scrollSnapType: 'x mandatory',
      '::-webkit-scrollbar': {
        display: 'none',
      },
      '.MuiGrid-root.MuiGrid-item': {
        scrollSnapAlign: 'start',
        position: 'relative',
      },
    },
  }),
  itemProjectResponsive: (theme: Theme) => ({
    [theme.breakpoints.down('md')]: {
      width: 'fit-content',
      maxWidth: 'initial',
      position: 'relative',
      '&:last-child:after': {
        content: '""',
        width: theme.spacing(2),
        height: '1px',
        position: 'absolute',
        left: '100%',
        top: 0,
      },
    },
  }),
  containerProjectsResposive: (theme: Theme) => ({
    [theme.breakpoints.down('md')]: {
      pr: 0,
    },
  }),
};

const Home: NextPage = () => {
  const refInit = useRef<HTMLElement>();
  const refMyHistory = useRef<HTMLElement>();
  const refProjects = useRef<HTMLElement>();
  const refSkills = useRef<HTMLElement>();
  const refNetworks = useRef<HTMLElement>();

  const [range, setRange] = useState(3);
  const theme = useTheme();

  const matches = useMediaQuery('(max-width:1023px)');
  const isMd = useMediaQuery(theme.breakpoints.down('md'));

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
        alignItems="center"
        sx={[styles.container, styles.containerName]}
        ref={(r: HTMLElement) => (refInit.current = r)}
        container
      >
        <Container>
          <Grid alignItems="center" container>
            <Grid
              md={6}
              xs={12}
              direction="column"
              alignItems={matches ? 'center' : 'flex-start'}
              item
              container
            >
              <Typography
                textAlign={{ xs: 'center', lg: 'left' }}
                sx={styles.text}
              >
                Olá! Me chamo
              </Typography>
              <Title type="main">Janilso Rodrigues</Title>
              <Typography
                textAlign={{ xs: 'center', lg: 'left' }}
                sx={styles.text}
              >
                Sou um programador!
              </Typography>
            </Grid>
            <Grid
              md
              xs={12}
              container
              item
              justifyContent={{ md: 'flex-end', xs: 'center' }}
              sx={styles.imageContantResponsive}
            >
              <AnimatedContent>
                <Image
                  alt="Janilso Programing"
                  width={isMd ? 224 : 375}
                  height={isMd ? 264 : 440}
                  src={images.programing}
                  priority
                />
              </AnimatedContent>
            </Grid>
          </Grid>
        </Container>
      </Grid>

      <Grid
        component="section"
        alignItems="center"
        sx={[styles.container2, styles.minHeightContainer]}
        ref={(r: HTMLElement) => (refMyHistory.current = r)}
        container
      >
        <Container>
          <Grid
            alignItems="center"
            container
            gap={{ xs: 5, md: 8 }}
            direction={{ xs: 'column-reverse', md: 'row' }}
          >
            <Grid xs item>
              <AnimatedContent type="moving">
                <Image
                  alt="Janilso History"
                  width={isMd ? 232 : 451}
                  height={isMd ? 164 : 317}
                  src={images.history}
                />
              </AnimatedContent>
            </Grid>

            <Grid
              md={6}
              xs={12}
              direction="column"
              alignItems={{ xs: 'center', md: 'flex-start' }}
              item
              container
            >
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
        sx={[styles.container, styles.minHeightContainer]}
        ref={(r: HTMLElement) => (refProjects.current = r)}
        container
      >
        <Container sx={[styles.containerProjectsResposive]}>
          <Grid
            direction="column"
            alignItems="center"
            justifyContent="center"
            container
          >
            <Grid xs item>
              <Title>Projetos</Title>
            </Grid>
            <Grid
              spacing={{ md: 4, xs: 0 }}
              sx={styles.projectsResponsive}
              item
              container
            >
              {!isMd &&
                projects.slice(0, range).map((project, key) => (
                  <Grid key={key} xs={4} item>
                    <Project {...project} />
                  </Grid>
                ))}

              {isMd &&
                projects.map((project, key) => (
                  <Grid key={key} xs={4} sx={styles.itemProjectResponsive} item>
                    <Project {...project} />
                  </Grid>
                ))}
            </Grid>

            {!isMd && (
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
            )}
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
          <Grid justifyContent="space-between" container gap={{ xs: 4, md: 0 }}>
            <Grid
              md={4}
              xs={12}
              direction="column"
              alignItems={{ xs: 'center', md: 'flex-start' }}
              item
              container
            >
              <Title>Skills</Title>
              <Typography
                textAlign={{ xs: 'center', lg: 'left' }}
                sx={styles.textAbout}
              >
                {isMd ? 'Abaixo' : 'Ao lado'} estou exibindo algumas habilidades
                que tenho.
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
                <AnimatedContent type="rotateHover" boxed={false} key={i}>
                  <Button LinkComponent="a" href={link} target="_blank">
                    <Image
                      alt="Janilso Neworks"
                      width={45}
                      height={45}
                      src={image}
                    />
                  </Button>
                </AnimatedContent>
              ))}
            </Grid>
          </Grid>
        </Container>
      </Grid>
    </>
  );
};

export default Home;
