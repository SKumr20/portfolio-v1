import React, { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from 'next-themes';
import { Toggle } from './toggle';

const ToggleDarkmode = () => {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Only run this effect on the client side
  useEffect(() => {
    setMounted(true);
  }, []);

  // Determine if dark mode is active based on resolved theme
  const isDark = mounted && (resolvedTheme === 'dark' || theme === 'dark');

  const toggleTheme = () => {
    setTheme(isDark ? 'light' : 'dark');
  };

  // Don't render anything until mounted to prevent hydration mismatch
  if (!mounted) {
    return <div className="w-10 h-10" />; // Placeholder with same dimensions
  }

  return (
    <Toggle onClick={toggleTheme} size="lg" className="p-6">
      <div
        className={`absolute transform transition-all duration-500 ease-in-out ${
          isDark ? 'opacity-0 -translate-y-10' : 'opacity-100 translate-y-0'
        }`}
      >
        <Sun className="scale-150 text-primary" />
      </div>

      <div
        className={`absolute transform transition-all duration-500 ease-in-out ${
          isDark ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <Moon className="scale-150 text-primary" />
      </div>
    </Toggle>
  );
};

export default ToggleDarkmode;