import { Html, Head, Main, NextScript } from 'next/document';
import Layout from '@/components/Layout';

const Document = () => {
  return (
    <Html>
      <Head>
        <link
          href='https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap'
          rel='stylesheet'
        ></link>
      </Head>
      <body className='font-body text-body-black dark:text-body-white dark:bg-primary-950'>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
