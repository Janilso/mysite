import { Box, SxProps } from '@mui/material';
import { cloneElement, ReactElement } from 'react';
import { styles } from './styles';

interface AnimatedContentProps {
  type?: 'rotate' | 'moving' | 'rotateHover' | 'moving2';
  children: ReactElement;
  boxed?: boolean;
}

const AnimatedContent: React.FC<AnimatedContentProps> = (props) => {
  const { type = 'rotate', children, boxed = true } = props;

  return boxed ? (
    <Box sx={styles?.[`${type}Animate`] as SxProps}>{children}</Box>
  ) : (
    cloneElement(children, {
      sx: [children.props.sx, styles?.[`${type}Animate`]] ?? {},
    })
  );
};

export default AnimatedContent;
