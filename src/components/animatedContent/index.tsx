import { Box } from '@mui/material';
import React, { ReactElement } from 'react';
import animations from './animations';

interface AnimatedContentProps {
  type?: 'rotate' | 'moving' | 'rotateHover';
  children: ReactElement;
  boxed?: boolean;
}

const AnimatedContent: React.FC<AnimatedContentProps> = (props) => {
  const { type = 'rotate', children, boxed = true } = props;

  return boxed ? (
    <Box
      sx={[
        animations?.[`${type}Animate`],
        animations?.[`${type}AnimateResponsive`],
      ]}
    >
      {children}
    </Box>
  ) : (
    React.cloneElement(children, {
      sx: [children.props.sx, animations?.[`${type}Animate`]] ?? {},
    })
  );
};

export default AnimatedContent;
