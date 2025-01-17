import type { Metadata } from 'next';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { GoogleAnalytics } from '@next/third-parties/google';

import { Exo } from 'next/font/google';
import { ThemeProvider } from '@mui/material/styles';
import defaultTheme from '@/theme/DefaultTheme';
import '../theme/global.css';
import { GOOGLE_ADSENSE, GOOGLE_ANALYTICS } from './utils/variables';
import GoogleAdsense from './components/GoogleAdsense';

const exo = Exo({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
});

export const metadata: Metadata = {
  title: 'Janilso Rodrigues',
  description: `Site portifólio de Janilso Rodrigues, 
  programador frontend web, mobile, backend. Analista 
  de sistemas sênior com anos de experiência em programação 
  de interfaces digitais modernas, intuitivas e responsivas. 
  Uso de linguagens como Dart, Javascript, Typescript e 
  tecnologias como ReactJS, NextJs e Flutter.`,
  openGraph: {
    title: 'Janilso Rodrigues - A programmer',
    description: `Site portifólio de Janilso Rodrigues, 
  programador frontend web, mobile, backend.`,
    images: ['https://www.janilso.com.br/favicon.svg'],
  },
  icons: {
    icon: '/favicon.svg',
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={exo.variable}>
        <AppRouterCacheProvider>
          <ThemeProvider theme={defaultTheme}>{children}</ThemeProvider>
        </AppRouterCacheProvider>
      </body>
      <GoogleAnalytics gaId={GOOGLE_ANALYTICS} />
      <GoogleAdsense client={GOOGLE_ADSENSE} />
    </html>
  );
}
