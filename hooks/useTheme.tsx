import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface ThemeState {
  theme: "light" | "dark" | null;
  setTheme: Function;
}

const useTheme = create<ThemeState>()(
  persist(
    (set) => ({
      theme: null,
      setTheme: (theme: "light" | "dark") => set(() => ({ theme })),
    }),
    {
      name: "theme-store",
    }
  )
);

export default useTheme;
