import React, { Fragment } from 'react';
import { ProjectProps } from './types';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';
import useProject from './useProject';
import { stringCapitalized } from '@/app/utils/normalizers';
import { styles } from './styles';

const Project: React.FC<ProjectProps> = ({
  name,
  image,
  description,
  live,
  url,
  technologies = [],
}) => {
  const { getProjectName, isMd } = useProject();

  return (
    <Card sx={styles.card} elevation={0}>
      <CardMedia
        component="img"
        height={isMd ? 140 : 200}
        image={image}
        alt="Project Image"
      />
      <CardContent sx={styles.content}>
        <Typography color="secondary" fontWeight={600} variant="h3">
          {getProjectName(name)}
        </Typography>
        <Typography variant="h4" sx={styles.description}>
          {description}
        </Typography>
        {technologies.length ? (
          <Typography align="right" sx={styles.technologies}>
            {technologies.map((tech, index) => {
              return (
                <Fragment key={index}>
                  {index !== 0 ? <mark> | </mark> : null}
                  {stringCapitalized(tech)}
                </Fragment>
              );
            })}
          </Typography>
        ) : null}
      </CardContent>
      <CardActions disableSpacing sx={styles.actions}>
        {live && (
          <Button LinkComponent="a" href={live ?? ''} target="_blank" fullWidth>
            Ver
          </Button>
        )}
        {url && (
          <Button
            LinkComponent="a"
            href={url ?? ''}
            target="_blank"
            variant="outlined"
            fullWidth
          >
            Repositório
          </Button>
        )}
      </CardActions>
    </Card>
  );
};

export default Project;
