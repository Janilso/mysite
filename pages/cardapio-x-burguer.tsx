import type { NextPage } from 'next';
import { Box } from '@mui/material';
import Image from 'next/image';
import images from '../src/assets/images';

const Cardapio: NextPage = () => {
  const link = process.env.NEXT_PUBLIC_IMAGE_CARDAPIO;
  return (
    <Box>
      <Image
        alt="Cardápio"
        layout="fill"
        objectFit="contain"
        src={link || images.notFound}
      />
    </Box>
  );
};

export default Cardapio;
