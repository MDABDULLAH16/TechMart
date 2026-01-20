"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const { theme, setTheme, resolvedTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // This prevents the "hydration mismatch" error
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-9 h-9 rounded-lg bg-gray-200 dark:bg-gray-800 animate-pulse" />
    );
  }

  const toggleTheme = () => {
    const newTheme = resolvedTheme === "dark" ? "light" : "dark";
    setTheme(newTheme);
  };

  const currentTheme = resolvedTheme || systemTheme;

  return (
    <button
      onClick={toggleTheme}
      className="group relative p-2 rounded-lg bg-gray-200 hover:bg-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-950"
      aria-label={`Switch to ${currentTheme === "dark" ? "light" : "dark"} mode`}
      title={`Current theme: ${currentTheme}`}
    >
      {currentTheme === "dark" ? (
        <Sun className="w-5 h-5 text-yellow-500 transition-transform duration-300 group-hover:rotate-45" />
      ) : (
        <Moon className="w-5 h-5 text-blue-600 transition-transform duration-300 group-hover:rotate-45" />
      )}
    </button>
  );
}
