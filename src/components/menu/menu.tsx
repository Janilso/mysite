import { MouseEventHandler } from 'react';
import { AppBar, Box, Button, Container, Toolbar } from '@mui/material';
import { useStyles } from './styles';

interface MenuProps {
    panes: Array<{
        title: string;
        onClick?: MouseEventHandler<HTMLElement>;
    }>;
}

const Menu: React.FC<MenuProps> = ({ panes }) => {
    const styles = useStyles();

    return (
        <Box sx={{ flexGrow: 0 }}>
            <AppBar position="static">
                <Container>
                    <Toolbar sx={{ justifyContent: 'flex-end' }}>
                        {panes?.map(({ title, onClick }) => {
                            return (
                                <Button
                                    key={title}
                                    className={styles.root}
                                    color="inherit"
                                    onClick={onClick}
                                >
                                    {title}
                                </Button>
                            );
                        })}
                    </Toolbar>
                </Container>
            </AppBar>
        </Box>
    );
};

export default Menu;
