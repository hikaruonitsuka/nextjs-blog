import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { BsSunFill, BsMoonStarsFill } from 'react-icons/bs';

export const ChangeThemeButton: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => setMounted(true), []);

  return (
    <button
      type='button'
      aria-label='ダークモードの切り替えボタン'
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      {mounted && (
        <>
          {theme === 'dark' ? <BsSunFill size={'1.5rem'} /> : <BsMoonStarsFill size={'1.5rem'} />}
        </>
      )}
    </button>
  );
};

export default ChangeThemeButton;
