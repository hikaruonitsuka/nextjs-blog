import Head from "next/head";

const Layout = ({ children }) => {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <h1>ブログ</h1>
      </header>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
