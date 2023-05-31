import { Html, Head, Main, NextScript } from 'next/document';

const Document = () => {
  return (
    <Html>
      <Head>
        <link
          href='https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap'
          rel='stylesheet'
        ></link>
      </Head>
      <body className='font-body text-light-black dark:bg-dark-black-primary dark:text-dark-white'>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
