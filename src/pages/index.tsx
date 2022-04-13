import { Container, Grid, Typography } from '@mui/material';
import type { NextPage } from 'next';
import Image from 'next/image';
import images from '../assets/images';
import Menu from '../components/menu/menu';
import Project from '../components/project';
import Title from '../components/title';
import { styles } from './styles';

const Home: NextPage = () => {
    return (
        <>
            <Menu
                panes={[
                    { title: 'Minha História' },
                    { title: 'Projetos' },
                    { title: 'Skills' },
                    { title: 'Redes' },
                ]}
            />
            <Grid
                component="section"
                sx={[styles.container, styles.containerName]}
                container
            >
                <Container>
                    <Grid alignItems="center" container>
                        <Grid xs={6} direction="column" item container>
                            <Typography sx={styles.text}>
                                Olá! Me chamo
                            </Typography>
                            <Title type="main">Janilso Rodrigues</Title>
                            <Typography sx={styles.text}>
                                Um programador web!
                            </Typography>
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
                                Sou o Janilso Rodrigues, tenho 23 anos. Sou
                                desenvolvedor <mark>web frontend pleno</mark>,
                                que gosta de se aventurar no mobile, e um pouco
                                no bakend. Sou um Maranhense que iniciou o Curso
                                de <mark>Sistemas de Informação</mark>,
                                conseguiu uma oportunidade de emprego em São
                                Paulo e decidiu arriscar. Me mudei, transferi o
                                curso para SP e estou nos últimos semestres!
                                Gosto muito de estar atento às{' '}
                                <mark>tendências do mercado</mark>, haja vista
                                que na área de tecnologia, temos sempre que nos
                                mantermos <mark>atualizados</mark>.
                            </Typography>
                        </Grid>
                    </Grid>
                </Container>
            </Grid>

            <Grid
                component="section"
                alignItems="center"
                sx={styles.container}
                container
            >
                <Container>
                    <Grid direction="column" alignItems="center" container>
                        <Grid xs item>
                            <Title>Projetos</Title>
                        </Grid>
                        <Grid item container>
                            <Project />
                        </Grid>
                    </Grid>
                </Container>
            </Grid>
        </>
    );
};

export default Home;
