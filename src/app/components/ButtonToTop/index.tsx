'use client';
import React from 'react';
import { ButtonToTopProps } from './types';
import { Button, Grid2, SxProps, useScrollTrigger } from '@mui/material';
import { styles } from './styles';
import { IconChevronUp } from '@/app/assets/icons';

const ButtonToTop: React.FC<ButtonToTopProps> = ({ windowProps }) => {
  const showToTop = useScrollTrigger({
    disableHysteresis: true,
    threshold: 200,
    target: windowProps ? windowProps() : undefined,
  });

  const handleToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
    });
  };

  return (
    <Button
      color="secondary"
      variant="contained"
      onClick={handleToTop}
      sx={
        [
          styles.root,
          {
            bottom: {
              xs: showToTop ? 24 : '-100px',
              md: showToTop ? 40 : '-100px',
            },
          },
        ] as SxProps
      }
    >
      <Grid2 container justifyContent="center" alignItems="center">
        <IconChevronUp width={30} height={30} />
      </Grid2>
    </Button>
  );
};

export default ButtonToTop;
