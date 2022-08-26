import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  useMediaQuery,
  Theme,
  Button,
} from '@mui/material';
import { Fragment } from 'react';
import { getProjectName } from '../../utils/functions';
import { stringCapitalized } from '../../utils/normalizers';
import { styles } from './style';

interface ProjectProps {
  name: string;
  image: string;
  description: string;
  live?: string;
  url?: string;
  technologies?: Array<string>;
}

const Project: React.FC<ProjectProps> = ({
  name,
  image,
  description,
  live,
  url,
  technologies = [],
}) => {
  const isMd = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'));

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
