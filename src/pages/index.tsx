import { Container, Grid, Typography } from '@mui/material';
import type { NextPage } from 'next';
import Menu from '../components/menu/menu';
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
            <Grid component="section" sx={styles.container} container>
                <Container>
                    <Grid container>
                        <Grid xs={6} direction="column" item container>
                            <Typography sx={styles.text}>
                                Olá! Me chamo
                            </Typography>
                            <Title type="main">Janilso Rodrigues</Title>
                            <Typography sx={styles.text}>
                                Um programador web!
                            </Typography>
                        </Grid>
                        <Grid xs={6} item>
                            Imagem
                        </Grid>
                    </Grid>
                </Container>
            </Grid>
        </>
    );
};

export default Home;
