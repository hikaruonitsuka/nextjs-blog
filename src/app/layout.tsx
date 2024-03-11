import { ThemeProvider } from 'next-themes';
import { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/react';
import '@/styles/globals.scss';
import { BASE_URL, SITE_NAME, TWITTER_USER_ACCOUNT } from '@/config';

const metaTags = {
  title: 'HOME',
  ogTitle: SITE_NAME,
  description: 'おにの備忘録ブログです',
};

export const metadata: Metadata = {
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

{
  /* <NextSeo
        title={metaTags.title}
        description={metaTags.description}
        openGraph={{
          type: 'website',
          title: `${metaTags.ogTitle}`,
          description: `${metaTags.description}`,
        }}
      /> */
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ThemeProvider attribute='class' enableSystem={true}>
      <Analytics />
      <html lang='ja'>
        <body className='font-body text-body-black dark:bg-primary-950 dark:text-body-white'>
          {children}
        </body>
      </html>
    </ThemeProvider>
  );
}
