import { Container, Grid, Typography } from '@mui/material';
import type { NextPage } from 'next';
import Menu from '../components/menu/menu';
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
                        <Typography color="white">Olá! Me chamo</Typography>
                        <Typography color="white">Janilso Rodrigues</Typography>
                        <Typography color="white">
                            Um programador web!
                        </Typography>
                    </Grid>
                </Container>
            </Grid>
        </>
    );
};

export default Home;
