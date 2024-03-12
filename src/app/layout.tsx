import { Analytics } from '@vercel/analytics/react';
import { Metadata } from 'next';
import '@/styles/globals.scss';
import { BASE_URL, SITE_NAME, TWITTER_USER_ACCOUNT } from '@/config';
import Layout from '@/components/Layout';
import Inner from '@/components/Inner';
import { ThemeProvider } from '@/components/Theme-provider';

const metaTags = {
  title: 'HOME',
  ogTitle: SITE_NAME,
  description: 'おにの備忘録ブログです',
};

export const metadata: Metadata = {
  metadataBase: new URL(`https://${process.env.BASE_URL}`),
  title: {
    default: SITE_NAME,
    template: `%s - ${SITE_NAME}`,
  },
  description: metaTags.description,
  openGraph: {
    title: SITE_NAME,
    description: metaTags.description,
    url: BASE_URL,
    siteName: SITE_NAME,
    locale: 'ja_JP',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_NAME,
    description: metaTags.description,
    site: TWITTER_USER_ACCOUNT,
    creator: TWITTER_USER_ACCOUNT,
  },
  alternates: {
    canonical: BASE_URL,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ja' suppressHydrationWarning>
      <body className='font-body text-body-black dark:bg-primary-950 dark:text-body-white'>
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          <Layout>
            <Inner>{children}</Inner>
          </Layout>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
