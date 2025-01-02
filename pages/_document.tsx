import * as React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import createEmotionServer from '@emotion/server/create-instance';
import theme from '../src/theme';
import createEmotionCache from '../src/utils/createEmotionCache';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="pt-br">
        <Head>
          <meta name="theme-color" content={theme.palette.primary.main} />
          <link rel="shortcut ico" href="/favicon.ico" />
          <link
            href="https://fonts.googleapis.com/css2?family=Exo:wght@400;600;700&display=swap"
            rel="stylesheet"
          />
          {/* Global site tag (gtag.js) - Google Analytics  */}
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.PUBLIC_GOOGLE_ANALYTICS}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });
          `,
            }}
          />

          {/* Global Adsense  */}

          <script
            async
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1847960525943735"
            crossOrigin="anonymous"
          ></script>

          {(this.props as any).emotionStyleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

MyDocument.getInitialProps = async (ctx) => {
  const originalRenderPage = ctx.renderPage;
  const cache = createEmotionCache();
  const { extractCriticalToChunks } = createEmotionServer(cache);

  ctx.renderPage = () =>
    originalRenderPage({
      // eslint-disable-next-line react/display-name
      enhanceApp: (App: any) => (props) =>
        <App emotionCache={cache} {...props} />,
    });

  const initialProps = await Document.getInitialProps(ctx);
  const emotionStyles = extractCriticalToChunks(initialProps.html);
  const emotionStyleTags = emotionStyles.styles.map((style) => (
    <style
      data-emotion={`${style.key} ${style.ids.join(' ')}`}
      key={style.key}
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: style.css }}
    />
  ));

  return {
    ...initialProps,
    emotionStyleTags,
  };
};
