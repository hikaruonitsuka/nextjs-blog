import '@/styles/globals.scss';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import { DefaultSeo } from 'next-seo';
import { Analytics } from '@vercel/analytics/react';
import SEO from '@/utils/seoConfig';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider attribute='class' enableSystem={true}>
      <Analytics />
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default MyApp;
