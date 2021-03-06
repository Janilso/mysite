import { ApolloClient, gql, InMemoryCache } from '@apollo/client';
import {
  Button,
  Container,
  Grid,
  Theme,
  Typography,
  useMediaQuery,
  useScrollTrigger,
  useTheme,
} from '@mui/material';
import type { NextPage } from 'next';
import Image from 'next/image';
import { useRef, useState } from 'react';
import icon from '../src/assets/icons';
import images from '../src/assets/images';
import AnimatedContent from '../src/components/animatedContent';
import CustomButton from '../src/components/button';
import CustomAppBar from '../src/components/customAppBar';
import IconSkill from '../src/components/iconSkill';
import Project from '../src/components/project';
import Title from '../src/components/title';
import { globalStyles } from '../src/theme/globalStyles';
import { networks } from '../src/utils/constants';
import { getMyAge, loadMore } from '../src/utils/functions';

const styles = {
  containerName: (theme: Theme) => ({
    mt: theme.spacing(8),
    minHeight: 'calc(100vh - 64px)',
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
    minHeight: 'calc(100vh - 64px)',
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
    [theme.breakpoints.down('sm')]: {
      mb: theme.spacing(5),
    },
  }),
  textNotfound: (theme: Theme) => ({
    ...globalStyles.h3Semibold,
    color: theme.palette.secondary.main,
  }),
  buttonToTop: (theme: Theme) => ({
    position: 'fixed',
    right: theme.spacing(5),
    bgcolor: theme.palette.secondary.main,
    borderRadius: 50,
    width: 64,
    height: 64,
    p: 0,
    transition: 'all 0.5s cubic-bezier(0.61, -0.49, 0.37, 1.27)',
    [':hover']: {
      transform: 'scale(1.1)',
    },
    [theme.breakpoints.down('md')]: {
      right: theme.spacing(2),
      minWidth: 50,
      width: 50,
      height: 50,
      [':hover']: {
        transform: 'none',
      },
    },
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

interface NextPageProps {
  projects: Array<{
    name: string;
    image: string;
    description: string;
    live?: string;
    url?: string;
    technologies?: Array<string>;
  }>;
  windowProps?: () => Window;
}

const Home: NextPage<NextPageProps> = ({ projects = [], windowProps }) => {
  const refInit = useRef<HTMLElement>();
  const refAbout = useRef<HTMLElement>();
  const refProjects = useRef<HTMLElement>();
  const refSkills = useRef<HTMLElement>();
  const refNetworks = useRef<HTMLElement>();

  const showToTop = useScrollTrigger({
    disableHysteresis: true,
    threshold: 200,
    target: windowProps ? windowProps() : undefined,
  });

  const [range, setRange] = useState(3);
  const theme = useTheme();

  const matches = useMediaQuery('(max-width:1023px)');
  const isMd = useMediaQuery(theme.breakpoints.down('md'));

  const newRange = loadMore(projects, range, 4);

  const renderShowToTop = () => {
    return (
      <Button
        color="secondary"
        variant="contained"
        onClick={() => {
          window.scrollTo({
            top: 0,
            left: 0,
          });
        }}
        sx={[
          styles.buttonToTop,
          (theme: Theme) => ({
            bottom: showToTop ? theme.spacing(5) : '-100px',
            [theme.breakpoints.down('md')]: {
              bottom: showToTop ? theme.spacing(3) : '-100px',
            },
          }),
        ]}
      >
        <Grid container justifyContent="center" alignItems="center">
          <Image alt="Top" width={40} height={40} src={icon.chevronUp} />
        </Grid>
      </Button>
    );
  };

  return (
    <>
      <CustomAppBar
        panes={[
          { title: 'In??cio', ref: refInit },
          { title: 'Sobre', ref: refAbout },
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
                Ol??! Me chamo
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
        ref={(r: HTMLElement) => (refAbout.current = r)}
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
                  alt="Janilso Sobre"
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
              <Title>Sobre</Title>
              <Typography align="justify" sx={styles.textAbout}>
                Sou o Janilso Rodrigues, tenho {getMyAge()} anos e sou
                desenvolvedor <mark>front-end</mark>. Tenho muita afinidade pela
                programa????o voltada para web, mas gosto de me aventurar no
                <mark> mobile</mark>, e um pouco no back-end. Estou nos ??ltimos
                semestres do curso de <mark>Sistemas de Informa????o</mark>,
                procuro sempre me atualizar sobre ??s tend??ncias e novidades do
                mercado de tecnologia. Tenho muita afei????o com o
                <mark> Javascript</mark>, mas tenho conhecimento em
                <mark> Dart</mark>, Java e<mark> Typescript</mark>.
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
              justifyContent={{ xs: 'flex-start', md: 'center' }}
              item
              container
            >
              {!isMd
                ? projects.slice(0, range)?.map((project, key) => (
                    <Grid key={key} xs={4} item>
                      <Project {...project} />
                    </Grid>
                  ))
                : null}

              {isMd
                ? projects?.map((project, key) => (
                    <Grid
                      key={key}
                      xs={4}
                      sx={styles.itemProjectResponsive}
                      item
                    >
                      <Project {...project} />
                    </Grid>
                  ))
                : null}
            </Grid>

            {!isMd && projects?.length >= 3 ? (
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
            ) : null}

            {!projects?.length ? (
              <Grid
                direction="column"
                alignItems="center"
                gap={6}
                sx={{ mt: 6 }}
                item
                container
              >
                <AnimatedContent type="moving2">
                  <Image
                    alt="Janilso Not Found"
                    width={isMd ? 220 : 298}
                    height={isMd ? 167 : 226}
                    src={images.notFound}
                  />
                </AnimatedContent>
                <Typography sx={styles.textNotfound}>
                  Erro ao carregar
                </Typography>
              </Grid>
            ) : null}
          </Grid>
        </Container>
      </Grid>

      <Grid
        component="section"
        alignItems="center"
        sx={[styles.container2, styles.minHeightContainer]}
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
                textAlign={{ xs: 'center', md: 'left' }}
                sx={styles.textAbout}
              >
                {isMd ? 'Abaixo' : 'Ao lado'} estou exibindo algumas habilidades
                que tenho.
                <mark>
                  {isMd
                    ? ' (Clique nos ??cones para ver mais)'
                    : ' (Passe o mouse sobre os ??cones para ver mais)'}
                </mark>
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

      {renderShowToTop()}
    </>
  );
};

export default Home;

export async function getStaticProps() {
  const client = new ApolloClient({
    headers: {
      Authorization: `bearer ${process.env.GITHUB_PERSONAL_ACCESS_TOKEN}`,
    },
    uri: 'https://api.github.com/graphql',
    cache: new InMemoryCache(),
  });

  try {
    const { data } = await client.query({
      query: gql`
        query {
          search(
            type: REPOSITORY
            first: 10
            query: "topic:mysite org:janilso"
          ) {
            repositories: edges {
              repository: node {
                ... on Repository {
                  name
                  image: openGraphImageUrl
                  description
                  live: homepageUrl
                  url
                  technologies: repositoryTopics(first: 3) {
                    nodes {
                      topic {
                        name
                      }
                    }
                  }
                }
              }
            }
          }
        }
      `,
    });

    interface typebackend {
      repository: {
        technologies: {
          nodes: Array<{
            topic: {
              name: string;
            };
          }>;
        };
      };
    }

    const projects = data.search.repositories
      .map((repositories: typebackend) => {
        const { repository } = repositories;
        const { technologies: tech } = repository;
        const technologies = tech.nodes.reduce((acc: Array<string>, node) => {
          const { topic } = node;
          const { name } = topic;
          return name === 'mysite' ? acc : [...acc, name];
        }, []);
        return { ...repository, technologies };
      })
      .sort((a: { live: string }, b: { live: string }) => {
        const textA = Boolean(a.live);
        const textB = Boolean(b.live);
        return textA === textB ? 0 : textA ? -1 : 1;
      });

    return {
      props: {
        projects,
      },
    };
  } catch (error) {
    return {
      props: {
        projects: [],
      },
    };
  }
}
