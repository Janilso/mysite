import * as React from 'react';
import Head from 'next/head';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider } from '@emotion/react';
import theme from '../src/theme';
import createEmotionCache from '../src/utils/createEmotionCache';
import '../src/theme/globalCss.css';

const clientSideEmotionCache = createEmotionCache();

export default function MyApp(props: {
  Component: any;
  emotionCache?: any;
  pageProps: any;
}) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <meta
          name="description"
          content="Site portifólio de Janilso Rodrigues, programador frontend web, mobile e backend"
        />
        <meta property="og:title" content="Janilso Rodrigues - Programador" />
        <meta
          property="og:description"
          content={`Site portifólio de Janilso Rodrigues, programador frontend web, mobile, backend. 
            Analista de sistemas sênior com anos de experiência em programação de interfaces digitais 
            modernas, intuitivas e responsivas. Uso de linguagens como Dart, Javascript, Typescript e 
            tecnologias como ReactJS, NextJs e Flutter.`}
        />
        <meta
          property="og:image"
          content="https://media.licdn.com/dms/image/v2/C4E03AQFvM0gqm7h89A/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1637692309517?e=1741219200&v=beta&t=xrdyhNlCI1se3uQi01HHgZg8yQeT-DedHdSZZFZhxPw"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <title>Janilso Rodrigues</title>
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  );
}
