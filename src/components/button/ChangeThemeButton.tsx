import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { BsSunFill, BsMoonStarsFill } from 'react-icons/bs';

export const ChangeThemeButton: React.FC = () => {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted && theme === 'system') {
      setTheme(`${resolvedTheme}`);
    }
  }, [mounted]);

  return (
    <button
      className='rounded-full p-2 transition duration-300 hover:scale-110 hover:bg-secondary-50 dark:hover:bg-secondary-900'
      type='button'
      aria-label={mounted ? (theme === 'dark' ? 'ダークモード' : 'ライトモード') : 'テーマ切り替え'}
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      {mounted && (
        <>{theme === 'dark' ? <BsSunFill size={'18px'} /> : <BsMoonStarsFill size={'1.2rem'} />}</>
      )}
    </button>
  );
};

export default ChangeThemeButton;
