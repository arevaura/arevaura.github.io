import { create } from "zustand";

export type Theme = "dark" | "light" | "cosmic";

interface ThemeState {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
}

export const useThemeStore = create<ThemeState>((set) => ({
  theme: "dark",
  setTheme: (theme: Theme) => {
    if (typeof window !== "undefined") {
      document.documentElement.setAttribute("data-theme", theme);
      try {
        localStorage.setItem("theme-preference", theme);
      } catch {
        // Ignore localStorage errors
      }
    }
    set({ theme });
  },
  toggleTheme: () => {
    set((state) => {
      const nextTheme: Theme = state.theme === "dark" ? "light" : "dark";
      if (typeof window !== "undefined") {
        document.documentElement.setAttribute("data-theme", nextTheme);
        try {
          localStorage.setItem("theme-preference", nextTheme);
        } catch {
          // Ignore localStorage errors
        }
      }
      return { theme: nextTheme };
    });
  },
}));
