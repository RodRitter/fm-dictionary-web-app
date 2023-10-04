import { create } from "zustand";
import { persist } from "zustand/middleware";

type Font = "sans-serif" | "serif" | "monospace";

export interface ThemeState {
  font: Font;
  setFont: Function;
}

const useFont = create<ThemeState>()(
  persist(
    (set) => ({
      font: "serif",
      setFont: (font: Font) => set(() => ({ font })),
    }),
    {
      name: "font-store",
    }
  )
);

export default useFont;
