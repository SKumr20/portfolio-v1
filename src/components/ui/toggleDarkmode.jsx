import React from 'react';
import { Sun, Moon } from 'lucide-react'; 
import { useTheme } from 'next-themes';
import { Toggle } from './toggle'; 
import { motion } from 'framer-motion';

const ToggleDarkmode = () => {
  const { theme, setTheme } = useTheme(); 
  const isDark = theme === 'dark';

  const toggleTheme = () => {
    setTheme(isDark ? 'light' : 'dark');
  };

  return (
    <Toggle onClick={toggleTheme} size="lg" className="p-2">
    <motion.div
        initial={{ y: 0, opacity: 1 }}
        animate={isDark ? { y: -40, opacity: 0 } : { y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="absolute"
      >
        <Sun className="h-6 w-6 text-primary" />
      </motion.div>

      <motion.div
        initial={{ y: 40, opacity: 0 }}
        animate={isDark ? { y: 0, opacity: 1 } : { y: 40, opacity: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="absolute"
      >
        <Moon className="h-6 w-6 text-primary" />
      </motion.div>
       
    </Toggle>
  );
};

export default ToggleDarkmode;
