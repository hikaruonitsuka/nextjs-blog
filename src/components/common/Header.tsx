import Inner from '../layout/Inner';
import { IconContext } from 'react-icons/lib';
import { FaTwitter, FaGithub } from 'react-icons/fa';
import ChangeThemeButton from '../button/ChangeThemeButton';

const Header = () => {
  return (
    <header className='py-4'>
      <Inner>
        <div className='flex justify-between gap-4'>
          <div>
            <h1 className='text-4xl font-bold'>oni.log</h1>
            <p>日々の備忘録ログ</p>
          </div>
          <ul className='flex items-center gap-4'>
            <li className='flex'>
              <a
                href='https://twitter.com/onioni1109'
                target='_blank'
                rel='noopener noreferrer'
                aria-label='サイト制作者のTwitterへ'
              >
                <FaTwitter size={'1.5rem'} />
              </a>
            </li>
            <li className='flex'>
              <a
                href='https://github.com/hikaruonitsuka'
                target='_blank'
                rel='noopener noreferrer'
                aria-label='サイト制作者のGithubへ'
              >
                <FaGithub size={'1.5rem'} />
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
