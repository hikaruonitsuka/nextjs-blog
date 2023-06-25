import { Html, Head, Main, NextScript } from 'next/document';

const Document = () => {
  return (
    <Html>
      <Head>
        <link rel='shortcut icon' href='/favicon.ico' />
        <link rel='apple-touch-icon' href='/apple-touch-icon.png' />
        <link rel='icon' type='image/png' href='/android-chrome-192x192.png' />
        <link
          href='https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap'
          rel='stylesheet'
        />
				<meta name="google-site-verification" content="bwWuDvACPi3UMIujXGkeCx-DP5ZW_q8ju59Da5_p5io" />
      </Head>
      <body className='font-body text-body-black dark:bg-primary-950 dark:text-body-white'>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
