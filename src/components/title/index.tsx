import { Box, Typography } from '@mui/material';
import { ReactNode } from 'react';
import { styles } from './styles';

type typesTitle = 'main' | 'default';
interface TitleProps {
  children: ReactNode;
  type?: typesTitle;
}

const animationText = (size?: number) => {
  const delays = Array.from({ length: size || 0 }).reduce(
    (acc: object, _, i: number) => {
      const index = i + 1;
      return {
        ...acc,
        [`i:nth-of-type(${index})`]: {
          animationDelay: `${(index * 0.05).toFixed(2)}s`,
        },
      };
    },
    {}
  );
  const animation = {
    'span i': {
      fontStyle: 'normal',
      opacity: 0,
      transform: 'translate(-150px, 0) scale(.3)',
      animation: 'leftRight 3s ease infinite alternate',
      display: 'inline-block',
    },
    '@keyframes dropVanish': {
      '30%': {
        transform: 'translate(0, -50px) rotate(180deg) scale(1)',
      },
      '50%': {
        transform: 'translate(0, 20px) scale(.8) rotate(0deg)',
        opacity: 1,
      },
      '80%': {
        transform: 'translate(-100px, -100px) scale(1.5) rotate(-180deg)',
        opacity: 0,
      },
      '100%': {
        transform: 'translate(0) scale(1) rotate(0deg)',
        opacity: 1,
      },
    },
    '@keyframes leftRight': {
      '40%': {
        transform: 'ranslate(50px, 0) scale(.7)',
        opacity: 1,
      },
      '80%': {
        transform: 'translate(0) scale(2)',
        opacity: 0,
      },
      '100%': {
        transform: 'translate(0) scale(1)',
        opacity: 1,
      },
    },
    ...delays,
  };

  return animation;
};

const Title: React.FC<TitleProps> = ({ type = 'default', children }) => {
  const isDefault = type === 'default';
  return (
    <Typography
      variant={isDefault ? 'h3' : 'h1'}
      textAlign={{ xs: 'center', lg: 'left' }}
      sx={isDefault ? styles.text : [styles.textMain]}
    >
      <span>
        {children}
        <Box sx={isDefault ? styles.marker : styles.markerMain} />
      </span>
    </Typography>
  );
};

export default Title;
