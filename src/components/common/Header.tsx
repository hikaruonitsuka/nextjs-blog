/**
 * 共通ヘッダー
 */
const Header = () => {
  return (
    <header>
      <h1>ブログ</h1>
      <ul>
        <li>
          <a
            href='https://twitter.com/onioni1109'
            target='_blank'
            rel='noopener noreferrer'
            aria-label='サイト制作者のTwitterへ'
          >
            <i className='ri-twitter-fill'></i>
          </a>
        </li>
        <li>
          <a
            href='https://github.com/hikaruonitsuka'
            target='_blank'
            rel='noopener noreferrer'
            aria-label='サイト制作者のGithubへ'
          >
            <i className='ri-github-fill'></i>
          </a>
        </li>
      </ul>
    </header>
  );
};

export default Header;
