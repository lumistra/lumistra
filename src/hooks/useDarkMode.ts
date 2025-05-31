import { useEffect, useState } from 'react';

export const useDarkMode = () => {
  const [isDark, setIsDark] = useState(false);
  const storageKey = '__lumistra_dark_mode';

  const handleMode = (isOn: boolean, storedMode?: string | null) => {
    if (storedMode) {
      setIsDark(storedMode === 'ON');

      return;
    }

    setIsDark(isOn);
    sessionStorage.setItem(storageKey, isOn ? 'ON' : 'OFF');
  };

  useEffect(() => {
    const darkMode = window.matchMedia('(prefers-color-scheme: dark)');
    const storedMode = sessionStorage.getItem(storageKey);

    const handler = () => {
      handleMode(darkMode.matches);
    };

    handleMode(darkMode.matches, storedMode);
    darkMode.addEventListener('change', handler);

    return () => {
      darkMode.removeEventListener('change', handler);
    };
  }, []);

  useEffect(() => {
    const root = document.getElementsByTagName('html')[0];
    if (isDark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [isDark]);

  return {
    isDark,
    setIsDark: handleMode,
  };
};
