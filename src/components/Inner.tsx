type Props = {
  className?: string;
  children: React.ReactNode;
};

const Inner = ({ className, children }: Props) => {
  return <div className={`mx-auto max-w-3xl px-4 ${className}`}>{children}</div>;
};

export default Inner;
