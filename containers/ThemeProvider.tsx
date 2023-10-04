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
  const { theme } = useTheme();
  const { font } = useFont();

  useEffect(() => {
    setIsClient(true);
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
