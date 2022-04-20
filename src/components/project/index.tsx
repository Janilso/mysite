import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import React from 'react';
import { goToUrl } from '../../utils/functions';
import CustomButton from '../button';
import { styles } from './style';

interface ProjectProps {
  title: string;
  description: string;
  technologies: Array<string>;
  repository: string;
  view: string;
}

const Project: React.FC<ProjectProps> = ({
  title,
  description,
  technologies,
  repository,
  view,
}) => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Card sx={styles.card} elevation={0}>
      <CardMedia
        component="img"
        height={isMd ? 140 : 200}
        image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
        alt="Project Image"
      />
      <CardContent sx={styles.content}>
        <Typography sx={styles.title} variant="h3">
          {title}
        </Typography>
        <Typography sx={styles.description}>{description}</Typography>
        {technologies.length && (
          <Typography align="right" sx={styles.technologies}>
            {technologies.map((tech, index) => {
              return (
                <React.Fragment key={index}>
                  {index !== 0 ? <mark> | </mark> : null}
                  {tech}
                </React.Fragment>
              );
            })}
          </Typography>
        )}
      </CardContent>
      <CardActions disableSpacing sx={styles.actions}>
        {view && (
          <CustomButton onClick={() => goToUrl(view)} fullWidth>
            Ver
          </CustomButton>
        )}
        {repository && (
          <CustomButton
            onClick={() => goToUrl(repository)}
            variant="outlined"
            fullWidth
          >
            Repositório
          </CustomButton>
        )}
      </CardActions>
    </Card>
  );
};

export default Project;
