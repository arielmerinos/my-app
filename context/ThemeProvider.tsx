'use client'
import React, {useEffect, useContext, useState, createContext, use} from "react";

interface ThemeContextType {    
    theme: string;
    handleThemeChange: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export default function ThemeProvider({children} : {children: React.ReactNode}) {
  const [theme, setTheme] = useState('light');

  const handleThemeChange = () => {
    if (theme === 'light') {
        setTheme('dark');
        document.documentElement.classList.add('dark');
    } else {
        setTheme('light');
        document.documentElement.classList.remove('dark');
        document.documentElement.classList.add('light');
    }
  }


  useEffect(() => {
    handleThemeChange();
  }, [theme]);

  return (
    <ThemeContext.Provider value={{theme, handleThemeChange}}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
    const context = useContext(ThemeContext);
    if( context === undefined ){
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
}