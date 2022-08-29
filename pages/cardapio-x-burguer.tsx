import React from 'react';
import type { NextPage } from 'next';
import { Box } from '@mui/material';
import Image from 'next/image';

const Cardapio: NextPage = () => {
  return (
    <Box>
      <Image
        alt="Cardápio"
        layout="fill"
        objectFit="contain"
        src={process?.env?.IMAGE_CARDAPIO || ''}
      />
    </Box>
  );
};

export default Cardapio;
