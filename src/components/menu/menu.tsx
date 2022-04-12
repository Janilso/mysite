import { MouseEventHandler } from 'react';
import { AppBar, Button, Container, Toolbar } from '@mui/material';
import { styles } from './styles';

interface MenuProps {
    panes: Array<{
        title: string;
        onClick?: MouseEventHandler<HTMLElement>;
    }>;
}

const Menu: React.FC<MenuProps> = ({ panes }) => {
    return (
        <AppBar position="fixed" elevation={0} sx={styles.appBar}>
            <Container>
                <Toolbar sx={styles.toolbar}>
                    {panes?.map(({ title, onClick }) => (
                        <Button
                            key={title}
                            sx={styles.button}
                            color="inherit"
                            onClick={onClick}
                        >
                            {title}
                        </Button>
                    ))}
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default Menu;
