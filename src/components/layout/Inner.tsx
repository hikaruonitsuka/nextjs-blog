type Props = {
  children: React.ReactNode;
};

const Inner: React.FC<Props> = ({ children }) => {
  return <div className='mx-auto max-w-3xl px-4'>{children}</div>;
};

export default Inner;
