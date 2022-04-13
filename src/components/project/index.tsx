import {
    Card,
    CardMedia,
    CardContent,
    CardActions,
    Typography,
    Button,
} from '@mui/material';
import CustomButton from '../button';
import { styles } from './style';

const Project: React.FC = () => {
    const project = {
        title: 'Projeto',
        description: `Lorem Ipsum é simplesmente uma simulação de texto da
        indústria tipográfica e de impressos, e vem sendo utilizado
        desde o século XVI, quando um impressor desconhecido pegou
        uma bandeja de tipos e os embaralhou para.`,
        technologies: ['Typescript', 'NextJS'],
    };
    const { title, description, technologies } = project;

    return (
        <Card sx={styles.content} elevation={0}>
            <CardMedia
                component="img"
                height="200"
                image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
                alt="project Image"
            />
            <CardContent>
                <Typography sx={styles.title} variant="h3">
                    {title}
                </Typography>
                <Typography sx={styles.description}>{description}</Typography>
                {technologies.length && (
                    <Typography align="right" sx={styles.technologies}>
                        {technologies.map((tech, index) => {
                            return (
                                <>
                                    {index !== 0 ? <mark> | </mark> : null}
                                    {tech}
                                </>
                            );
                        })}
                    </Typography>
                )}
            </CardContent>
            <CardActions disableSpacing sx={styles.actions}>
                <CustomButton fullWidth>Ver</CustomButton>

                <CustomButton variant="outlined" fullWidth>
                    Repositório
                </CustomButton>
            </CardActions>
        </Card>
    );
};

export default Project;
