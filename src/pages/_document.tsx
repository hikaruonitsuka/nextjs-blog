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
      </Head>
      <body className='font-body text-body-black dark:bg-primary-950 dark:text-body-white'>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
