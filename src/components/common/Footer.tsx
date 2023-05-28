import Inner from '../layout/Inner';

type Props = {
  children: React.ReactNode;
};

const Footer: React.FC<Props> = () => {
  return (
    <footer>
      <Inner>
        <small>2023 oni</small>
      </Inner>
    </footer>
  );
};

export default Footer;
