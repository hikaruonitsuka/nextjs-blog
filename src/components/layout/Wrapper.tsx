import Head from 'next/head';
import 'remixicon/fonts/remixicon.css';
import Footer from '../common/Footer';
import Header from '../common/Header';

/**
 * 基本レイアウト
 */
const Wrapper = ({ children }) => {
  return (
    <div className='grid min-h-screen grid-cols-100 grid-rows-layout'>
      <Head>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Wrapper;
