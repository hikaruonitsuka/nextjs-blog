import Link from 'next/link';

type Props = {
  children: React.ReactNode;
  href: string;
};

export const LinkButton = ({ children, href }: Props) => {
  return (
    <Link
      href={href}
      className='rounded-md bg-primary-800 p-3 font-bold leading-snug text-body-white transition duration-300 hover:bg-primary-600 dark:bg-secondary-900 dark:hover:bg-secondary-800'
    >
      {children}
    </Link>
  );
};

export default LinkButton;
