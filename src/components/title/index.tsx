import { Box, SxProps, Typography } from '@mui/material';
import { ReactNode } from 'react';
import { ETypeTitle } from '../../interfaces';
import { styles } from './styles';

interface TitleProps {
  children: ReactNode;
  type?: ETypeTitle;
}

const Title: React.FC<TitleProps> = ({
  type = ETypeTitle.default,
  children,
}) => {
  const isMain = type === ETypeTitle.main;

  return (
    <Typography
      variant={isMain ? 'h1' : 'h2'}
      sx={[styles.text, isMain && styles.textMain] as SxProps}
    >
      <Box
        component="span"
        sx={[styles.effect, isMain && styles.effectMain] as SxProps}
      >
        {children}
      </Box>
    </Typography>
  );
};

export default Title;
