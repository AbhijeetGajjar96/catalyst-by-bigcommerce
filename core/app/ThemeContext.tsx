"use client";

import React, { createContext, useContext, ReactNode } from 'react';
import { useThemeConfig } from './hooks/useThemeConfig';

interface ThemeContextType {
  config: ReturnType<typeof useThemeConfig>;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const config = useThemeConfig();

  return (
    <ThemeContext.Provider value={{ config }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}