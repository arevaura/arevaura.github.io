import { create } from "zustand";
import { trackThemeChange } from "@/lib/analytics";

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
      const prev = document.documentElement.getAttribute("data-theme") ?? "dark";
      document.documentElement.setAttribute("data-theme", theme);
      trackThemeChange(theme, prev);
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
        trackThemeChange(nextTheme, state.theme);
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
