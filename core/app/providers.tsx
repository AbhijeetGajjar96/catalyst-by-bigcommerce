'use client';

import { PropsWithChildren } from 'react';
import { ThemeProvider } from './ThemeContext';

import { Toaster } from '@/vibes/soul/primitives/toaster';
import { SearchProvider } from '~/lib/search';

export function Providers({ children }: PropsWithChildren) {
  return (
    <ThemeProvider>
      <SearchProvider>
        <Toaster position="top-right" />
        {children}
      </SearchProvider>
    </ThemeProvider>
  );
}