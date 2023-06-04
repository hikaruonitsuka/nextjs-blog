import Inner from './Inner';
import { FaTwitter, FaGithub } from 'react-icons/fa';
import ChangeThemeButton from './button/ChangeThemeButton';
import Link from 'next/link';

const Header = () => {
  return (
    <header className='py-4'>
      <Inner>
        <div className='flex justify-between gap-4'>
          <Link href='/'>
            <h1 className='text-4xl font-bold'>oni.log</h1>
            <p className='mt-2 text-xs'>日々の備忘録ログ</p>
          </Link>
          <ul className='flex items-center gap-4'>
            <li className='flex'>
              <a
                className='rounded-full p-2 transition duration-300 hover:scale-110 hover:bg-secondary-50 dark:hover:bg-secondary-900'
                href='https://twitter.com/onioni1109'
                target='_blank'
                rel='noopener noreferrer'
                aria-label='サイト制作者のTwitterへ'
              >
                <FaTwitter size={'18px'} />
              </a>
            </li>
            <li className='flex'>
              <a
                className='rounded-full p-2 transition duration-300 hover:scale-110 hover:bg-secondary-50 dark:hover:bg-secondary-900'
                href='https://github.com/hikaruonitsuka'
                target='_blank'
                rel='noopener noreferrer'
                aria-label='サイト制作者のGithubへ'
              >
                <FaGithub size={'18px'} />
              </a>
            </li>
            <li className='flex'>
              <ChangeThemeButton />
            </li>
          </ul>
        </div>
      </Inner>
    </header>
  );
};

export default Header;
