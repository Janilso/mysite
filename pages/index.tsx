import { ApolloClient, gql, InMemoryCache } from '@apollo/client';
import {
  Button,
  Container,
  Grid,
  IconButton,
  Theme,
  Typography,
  useMediaQuery,
} from '@mui/material';
import type { NextPage } from 'next';
import Image from 'next/image';
import { useRef, useState } from 'react';
import images from '../src/assets/images';
import AnimatedContent from '../src/components/animatedContent';
import ButtonToTop from '../src/components/buttonToTop';
import Header from '../src/components/header';
import IconSkill from '../src/components/iconSkill';
import Project from '../src/components/project';
import Title from '../src/components/title';
import { ETypeTitle, IRepositoryBackend } from '../src/interfaces';
import { styles } from '../src/stylesPage/home';
import { networks } from '../src/utils/constants';
import { getMyAge, getProjectPriority, loadMore } from '../src/utils/functions';

interface NextPageProps {
  projects: Array<{
    name: string;
    image: string;
    description: string;
    live?: string;
    url?: string;
    technologies?: Array<string>;
  }>;
}

const Home: NextPage<NextPageProps> = ({ projects = [] }) => {
  const refInit = useRef<HTMLElement>();
  const refAbout = useRef<HTMLElement>();
  const refProjects = useRef<HTMLElement>();
  const refSkills = useRef<HTMLElement>();
  const refNetworks = useRef<HTMLElement>();

  const [range, setRange] = useState(3);

  const matches = useMediaQuery('(max-width:1023px)');
  const isMd = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'));

  const newRange = loadMore(projects, range, 4);

  return (
    <>
      <Header
        panes={[
          { title: 'Início', ref: refInit },
          { title: 'Sobre', ref: refAbout },
          { title: 'Projetos', ref: refProjects },
          { title: 'Skills', ref: refSkills },
          { title: 'Redes', ref: refNetworks },
        ]}
      />

      <Grid
        component="section"
        alignItems="center"
        sx={styles.sectionName}
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
              <Typography textAlign={{ xs: 'center', lg: 'left' }} variant="h1">
                Olá! Me chamo
              </Typography>
              <Title type={ETypeTitle.main}>Janilso Rodrigues</Title>
              <Typography textAlign={{ xs: 'center', lg: 'left' }} variant="h1">
                Sou um programador!
              </Typography>
            </Grid>
            <Grid md xs={12} container item sx={styles.sectionNameimage}>
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
        sx={styles.sectionAbout}
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
              <Typography align="justify" variant="h3" sx={styles.textAbout}>
                Sou o Janilso Rodrigues, tenho {getMyAge()} anos e sou
                desenvolvedor <mark>front-end</mark>. Tenho muita afinidade pela
                programação voltada para web, mas gosto de me aventurar no{' '}
                <mark>mobile</mark>, e um pouco no back-end. Estou nos últimos
                semestres do curso de <mark>Sistemas de Informação</mark>,
                procuro sempre me atualizar sobre às tendências e novidades do
                mercado de tecnologia. Tenho muita afeição com o
                <mark> Javascript</mark>, mas tenho conhecimento em{' '}
                <mark>Dart</mark>, Java e <mark>Typescript</mark>.
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Grid>

      <Grid
        component="section"
        sx={styles.sectionProject}
        ref={(r: HTMLElement) => (refProjects.current = r)}
        container
      >
        <Container sx={styles.sectionProjectContainer}>
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
              sx={styles.sectionProjectList}
              item
              container
            >
              {isMd
                ? projects?.map((project, key) => (
                    <Grid key={key} xs={4} sx={styles.sectionProjectItem} item>
                      <Project {...project} />
                    </Grid>
                  ))
                : projects.slice(0, range)?.map((project, key) => (
                    <Grid key={key} xs={4} item>
                      <Project {...project} />
                    </Grid>
                  ))}
            </Grid>

            {!isMd && projects?.length >= 3 ? (
              <Grid item sx={styles.sectionProjectMore}>
                <Button
                  onClick={() =>
                    setRange(range < projects?.length ? newRange : 3)
                  }
                  variant="outlined"
                >
                  {range < projects?.length ? 'Ver Mais' : 'Ver Menos'}
                </Button>
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
                <Typography variant="h3" fontWeight={600} color="secondary">
                  Erro ao carregar
                </Typography>
              </Grid>
            ) : null}
          </Grid>
        </Container>
      </Grid>

      <Grid
        component="section"
        sx={styles.sectionSkills}
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
              <Typography textAlign={{ xs: 'center', md: 'left' }} variant="h3">
                {isMd ? 'Abaixo' : 'Ao lado'} estou exibindo algumas habilidades
                que tenho.
                <mark>
                  {isMd
                    ? ' (Clique nos ícones para ver mais)'
                    : ' (Passe o mouse sobre os ícones para ver mais)'}
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
        sx={styles.sectionNetworks}
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

            <Grid sx={styles.sectionNetworksList} item>
              {networks.map(({ image, link }, i) => (
                <AnimatedContent type="rotateHover" boxed={false} key={i}>
                  <IconButton
                    color="secondary"
                    LinkComponent="a"
                    href={link}
                    target="_blank"
                    sx={styles.sectionNetworksItem}
                  >
                    <Image
                      alt="Janilso Neworks"
                      width={35}
                      height={35}
                      src={image}
                    />
                  </IconButton>
                </AnimatedContent>
              ))}
            </Grid>
          </Grid>
        </Container>
      </Grid>
      <ButtonToTop />
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
                  technologies: repositoryTopics(first: 5) {
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

    const projectsSorted = data.search.repositories
      .map((item: IRepositoryBackend) => item)
      .sort((a: IRepositoryBackend, b: IRepositoryBackend) => {
        const priorityA = getProjectPriority(a);
        const priorityB = getProjectPriority(b);
        return priorityB - priorityA;
      });

    const projects = projectsSorted.map((repositories: IRepositoryBackend) => {
      const { repository } = repositories;
      const { technologies: tech } = repository;
      const technologies = tech.nodes.reduce((acc: Array<string>, node) => {
        const { topic } = node;
        const { name } = topic;
        return name === 'mysite' || name.startsWith('priority')
          ? acc
          : [...acc, name];
      }, []);
      return { ...repository, technologies };
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
