import { DefaultSeoProps } from 'next-seo';

const config = {
  siteName: process.env.NEXT_PUBLIC_SITE_NAME,
  twitterAccount: process.env.NEXT_PUBLIC_TWITTER_USER_ACCOUNT,
  url: process.env.NEXT_PUBLIC_API_BASE_URL,
};

const SEO: DefaultSeoProps = {
  titleTemplate: `%s | ${config.siteName}`,
  defaultTitle: config.siteName,
  themeColor: '#000',
  openGraph: {
    url: config.url,
    type: 'article',
    siteName: config.siteName,
    title: '',
    description: '',
    images: [
      {
        url: `${config.url}/ogp.png`,
      },
    ],
    locale: 'ja_JP',
  },
  twitter: {
    handle: config.twitterAccount,
    cardType: 'summary_large_image',
  },
};

export default SEO;
