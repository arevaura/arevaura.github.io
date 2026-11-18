"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, Moon, Sun, Terminal } from "lucide-react";
import { NAV_ITEMS } from "@/data/navigation";
import { useThemeStore } from "@/stores/useThemeStore";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { MobileMenu } from "@/components/layout/mobile-menu";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [mounted, setMounted] = React.useState(false);
  const { theme, toggleTheme } = useThemeStore();

  React.useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem("theme-preference") as "dark" | "light" | null;
    if (savedTheme) {
      document.documentElement.setAttribute("data-theme", savedTheme);
      useThemeStore.setState({ theme: savedTheme });
    }
  }, []);

  return (
    <>
      <header className="sticky top-0 z-40 w-full border-b border-surface-border/60 bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60">
        <Container size="xl" className="flex h-16 items-center justify-between">
          {/* Logo / Brand */}
          <Link
            href="/"
            className="group flex items-center gap-2.5 font-mono text-sm font-semibold tracking-tight text-foreground"
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-surface border border-surface-border group-hover:border-primary/50 transition-colors">
              <Terminal className="h-4 w-4 text-primary" />
            </div>
            <span className="text-base font-bold">
              evaura
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-3.5 py-1.5 text-sm font-medium text-muted hover:text-foreground hover:bg-surface-muted rounded-md transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Actions: Theme Toggle & Mobile Trigger */}
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              aria-label={
                mounted && theme === "dark"
                  ? "Switch to light theme"
                  : "Switch to dark theme"
              }
              className="text-muted hover:text-foreground"
            >
              {mounted && theme === "dark" ? (
                <Sun className="h-4 w-4" />
              ) : (
                <Moon className="h-4 w-4" />
              )}
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-foreground"
              onClick={() => setMobileMenuOpen(true)}
              aria-expanded={mobileMenuOpen}
              aria-label="Open navigation menu"
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </Container>
      </header>

      {/* Mobile Drawer */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </>
  );
}
