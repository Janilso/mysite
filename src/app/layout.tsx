import type { Metadata } from 'next';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { Exo } from 'next/font/google';
import { ThemeProvider } from '@mui/material/styles';
import defaultTheme from '@/theme/DefaultTheme';
import '../theme/global.css';

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
    </html>
  );
}
