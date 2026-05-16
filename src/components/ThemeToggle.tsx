import { useEffect, useState, type FC } from 'react';

export const ThemeToggle: FC = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>(
    (localStorage.getItem('theme') as 'light' | 'dark') || 'light'
  );

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <button
      onClick={toggleTheme}
      className="theme-toggle"
      aria-label="Toggle Theme"
      style={{
        padding: '0.5rem',
        borderRadius: '50%',
        width: '40px',
        height: '40px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'var(--card-bg)',
        boxShadow: 'var(--card-shadow)',
        color: 'var(--accent-color)',
        fontSize: '1.2rem',
        transition: 'all 0.3s ease'
      }}
    >
      <i className={`fa-solid ${theme === 'light' ? 'fa-moon' : 'fa-sun'}`}></i>
    </button>
  );
};
