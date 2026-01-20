"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";

export function ThemeProvider({ children, ...props }) {
  return (
    <NextThemesProvider 
      attribute="class"
      defaultTheme="light"
      enableSystem
      enableTransitionOnChange
      disableTransitionOnChange={false}
      storageKey="theme"
      themes={["light", "dark"]}
      forcedTheme={undefined}
    >
      {children}
    </NextThemesProvider>
  );
}
