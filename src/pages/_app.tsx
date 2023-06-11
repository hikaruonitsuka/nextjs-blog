import '@/styles/globals.scss';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import { DefaultSeo } from 'next-seo';
import SEO from '@/lib/seoConfig';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider attribute='class'>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default MyApp;
