import Header from '../common/Header';
import Footer from '../common/Footer';

type Props = {
  children: React.ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className='grid min-h-screen grid-cols-100 grid-rows-layout'>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
