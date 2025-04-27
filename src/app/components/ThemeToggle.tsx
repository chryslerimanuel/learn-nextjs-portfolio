'use client';

import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const [theme, setTheme] = useState<'light' | 'dark' | null>(null);
  const [isLoading, setIsLoading] = useState(true); // Loading state for button skeleton

  useEffect(() => {
    // Reset theme to light on every refresh
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialTheme = prefersDark ? 'light' : 'light'; // Always set to light mode

    setTheme(initialTheme); // Immediately set the theme to light

    // After theme is determined, stop the loading state for the button
    setIsLoading(false);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);

    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  // Show skeleton loader until theme is determined
  if (isLoading || theme === null) return <div className="w-24 h-8 bg-gray-300 animate-pulse"></div>;

  return (
    <div className="flex items-center space-x-2">
      {/* Light/Dark Mode Toggle Switch */}
      <span className="text-xl text-gray-600 dark:text-gray-200">{theme === 'dark' ? '🌙' : '☀️'}</span>
      <label htmlFor="theme-toggle" className="flex items-center cursor-pointer">
        <div className="relative">
          {/* Hidden checkbox to handle the toggle */}
          <input
            type="checkbox"
            id="theme-toggle"
            className="sr-only"
            checked={theme === 'dark'}
            onChange={toggleTheme}
          />
          {/* Switch container */}
          <div className="w-10 h-6 bg-gray-300 dark:bg-gray-700 rounded-full"></div>
          {/* Inner circle */}
          <div
            className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform ${
              theme === 'dark' ? 'transform translate-x-4' : ''
            }`}
          ></div>
        </div>
      </label>
    </div>
  );
}
