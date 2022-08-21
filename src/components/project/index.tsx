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
import React from 'react';
import { getProjectName } from '../../utils/functions';
import { stringCapitalized } from '../../utils/normalizers';
import CustomButton from '../button';
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
                <React.Fragment key={index}>
                  {index !== 0 ? <mark> | </mark> : null}
                  {stringCapitalized(tech)}
                </React.Fragment>
              );
            })}
          </Typography>
        ) : null}
      </CardContent>
      <CardActions disableSpacing sx={styles.actions}>
        <Button
          // onClick={() => {
          //   console.log('clicl');
          // }}
          // LinkComponent="a"
          // href={live}
          // target="_blank"
          variant="outlined"
          fullWidth
        >
          Vejaa
        </Button>
        {/* {live && (
          <CustomButton LinkComponent="a" href={live} target="_blank" fullWidth>
            Ver
          </CustomButton>
        )} */}
        {url && (
          <CustomButton
            LinkComponent="a"
            href={url}
            target="_blank"
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
