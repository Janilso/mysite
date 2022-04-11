import type { NextPage } from 'next';
import Menu from '../components/menu/menu';

const Home: NextPage = () => {
    return (
        <Menu
            panes={[
                { title: 'Minha História' },
                { title: 'Projetos' },
                { title: 'Skills' },
                { title: 'Redes' },
            ]}
        />
    );
};

export default Home;
