import { Box, Typography } from '@mui/material';
import { ReactNode } from 'react';
import { styles } from './styles';

type typesTitle = 'main' | 'default';
interface TitleProps {
  children: ReactNode;
  type?: typesTitle;
}

const Title: React.FC<TitleProps> = ({ type = 'default', children }) => {
  const isDefault = type === 'default';
  return (
    <Typography
      variant={isDefault ? 'h3' : 'h1'}
      sx={isDefault ? styles.text : styles.textMain}
    >
      <span>
        {children}
        <Box sx={isDefault ? styles.marker : styles.markerMain} />
      </span>
    </Typography>
  );
};

export default Title;
