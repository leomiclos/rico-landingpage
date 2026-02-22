'use client';

import { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  // Valor inicial fixo para manter SSR/CSR iguais na hidratacao
  const [theme, setTheme] = useState<Theme>('light');

  // Aplica preferencia salva (ou do sistema) apenas no cliente, apos mount
  useEffect(() => {
    const stored = localStorage.getItem('theme');
    const initialTheme: Theme =
      stored === 'light' || stored === 'dark'
        ? stored
        : window.matchMedia('(prefers-color-scheme: dark)').matches
          ? 'dark'
          : 'light';

    const timerId = window.setTimeout(() => {
      setTheme(initialTheme);
    }, 0);

    return () => window.clearTimeout(timerId);
  }, []);

  // Sincroniza html e persistencia quando o tema muda
  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
}
