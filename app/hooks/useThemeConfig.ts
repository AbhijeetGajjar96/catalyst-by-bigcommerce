"use client";

export interface ThemeConfig {
  brandPrimary: string;
  brandSecondary: string;
}

// Simple client hook to expose theme values used by the app.
// Extend this later to read from a CMS or server-provided config.
export function useThemeConfig(): ThemeConfig {
  return {
    brandPrimary: '#7a4a34',
    brandSecondary: '#d2a44d',
  };
}
