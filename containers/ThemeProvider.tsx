"use client";

import useTheme, { ThemeState } from "@/hooks/useTheme";
import React, { useEffect, useState } from "react";
import { Inter } from "next/font/google";
import useFont from "@/hooks/useFont";

const inter = Inter({ subsets: ["latin"] });

interface ThemeProviderProps {
  children: React.ReactNode;
}

const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [isClient, setIsClient] = useState(false);
  const { theme, setTheme } = useTheme();
  const { font } = useFont();

  useEffect(() => {
    setIsClient(true);

    // If the user hasn't selected a theme yet,
    // use their system prefers-color-scheme.
    if (!theme && window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  return (
    <body>
      {isClient && (
        <div
          className={`${inter.className} body-content`}
          data-theme={theme}
          data-font={font}
        >
          {children}
        </div>
      )}
    </body>
  );
};

export default ThemeProvider;
