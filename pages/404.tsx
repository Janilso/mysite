import { Grid } from '@mui/material';
import { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import images from '../src/assets/images';
import AnimatedContent from '../src/components/animatedContent';
import CustomButton from '../src/components/button';

const Custom404: NextPage = () => {
  const router = useRouter();

  const goToHome = () => router.push('/');

  return (
    <>
      <Head>
        <title>404 - Janilso Rodrigues</title>
      </Head>
      <Grid
        container
        gap={4}
        direction="column"
        justifyContent="center"
        alignContent="center"
        sx={{
          height: '100vh',
          width: '100vw',
        }}
      >
        <Grid justifyContent="center" container item>
          <AnimatedContent type="moving2">
            <Image
              alt="Error 404"
              width={231}
              height={239}
              src={images.error404}
              priority
            />
          </AnimatedContent>
        </Grid>
        <Grid justifyContent="center" container item>
          <CustomButton onClick={goToHome} variant="outlined">
            Ir para o Início
          </CustomButton>
        </Grid>
      </Grid>
    </>
  );
};

export default Custom404;
