import { Image } from '@/app/components';
import { ComponetBoxType, IconImageProps } from '@/app/components/Image/types';
import { Box } from '@mui/material';
import error404 from './error404.svg';
import history from './history.svg';
import notFound from './notFound.svg';
import programing from './programing.svg';

const ImageHistory: IconImageProps = ({ sx, ...rest }) => (
  <Box
    component={(props: ComponetBoxType) => (
      <Image
        alt={`imagem história`}
        src={history}
        priority
        {...props}
        {...rest}
      />
    )}
    sx={sx}
  />
);

const ImagePrograming: IconImageProps = ({ sx, ...rest }) => (
  <Box
    component={(props: ComponetBoxType) => (
      <Image
        alt={`imagem programador`}
        src={programing}
        priority
        {...props}
        {...rest}
      />
    )}
    sx={sx}
  />
);

const ImageError404: IconImageProps = ({ sx, ...rest }) => (
  <Box
    component={(props: ComponetBoxType) => (
      <Image
        alt={`imagem erro 404`}
        src={error404}
        priority
        {...props}
        {...rest}
      />
    )}
    sx={sx}
  />
);

const ImagenNotFound: IconImageProps = ({ sx, ...rest }) => (
  <Box
    component={(props: ComponetBoxType) => (
      <Image
        alt={`imagem não encontrada`}
        src={notFound}
        priority
        {...props}
        {...rest}
      />
    )}
    sx={sx}
  />
);

export { ImageError404, ImageHistory, ImagenNotFound, ImagePrograming };
