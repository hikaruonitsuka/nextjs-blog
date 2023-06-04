import Header from './Header';
import Footer from './Footer';

type Props = {
  children: React.ReactNode;
  center?: boolean;
};

const Layout = ({ children, center }: Props) => {
  return (
    <div className='grid min-h-screen grid-cols-100 grid-rows-layout'>
      <Header />
      <main className={center && 'flex h-full items-center justify-center'}>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
