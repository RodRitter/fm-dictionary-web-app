import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface ThemeState {
  theme: "light" | "dark";
  setTheme: Function;
}

const useTheme = create<ThemeState>()(
  persist(
    (set) => ({
      theme: "light",
      setTheme: (theme: "light" | "dark") => set(() => ({ theme })),
    }),
    {
      name: "theme-store",
    }
  )
);

export default useTheme;
