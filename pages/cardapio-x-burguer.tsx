import type { NextPage } from 'next';
import { Box } from '@mui/material';
import Image from 'next/image';
import images from '../src/assets/images';
// import myResume from '';

const Cardapio: NextPage = () => {
  const link = process.env.NEXT_PUBLIC_IMAGE_CARDAPIO;

  if (!link) {
    return (
      <Image
        alt="Cardápio"
        layout="fill"
        objectFit="contain"
        src={link ?? images.notFound}
      />
    );
  }

  return (
    <Box>
      <object
        data={link}
        type="application/pdf"
        width="100%"
        style={{
          height: '99vh',
        }}
      />
    </Box>
  );
};

export default Cardapio;
