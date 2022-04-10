import {
    AppBar,
    Box,
    Button,
    Container,
    Toolbar,
    Typography,
} from '@mui/material';

const Menu = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Container>
                    <Toolbar>
                        <Button color="inherit">Minha História</Button>
                        <Button color="inherit">Projetos</Button>
                        <Button color="inherit">Skills</Button>
                        <Button color="inherit">Redes</Button>
                    </Toolbar>
                </Container>
            </AppBar>
        </Box>
    );
};

export default Menu;
