"use client";

import * as React from "react";
import Link from "next/link";
import { X, Sun, Moon, ArrowUpRight } from "lucide-react";
import { NAV_ITEMS, SOCIAL_LINKS } from "@/data/navigation";
import { useThemeStore } from "@/stores/useThemeStore";
import { Button } from "@/components/ui/button";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const { theme, toggleTheme } = useThemeStore();

  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Navigation Menu"
      className="fixed inset-0 z-50 bg-background/95 backdrop-blur-xl md:hidden flex flex-col justify-between p-6 animate-in fade-in duration-200"
    >
      <div className="flex items-center justify-between border-b border-surface-border pb-4">
        <Link
          href="/"
          onClick={onClose}
          className="text-lg font-bold tracking-tight text-foreground font-mono"
        >
          evaura<span className="text-primary">.dev</span>
        </Link>
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
          >
            {theme === "dark" ? (
              <Sun className="w-5 h-5 text-muted hover:text-foreground" />
            ) : (
              <Moon className="w-5 h-5 text-muted hover:text-foreground" />
            )}
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            aria-label="Close menu"
          >
            <X className="w-6 h-6 text-foreground" />
          </Button>
        </div>
      </div>

      <nav className="flex flex-col gap-6 py-12">
        {NAV_ITEMS.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            onClick={onClose}
            className="text-2xl font-bold tracking-tight text-muted hover:text-foreground transition-colors"
          >
            {item.label}
          </Link>
        ))}
      </nav>

      <div className="pt-6 border-t border-surface-border space-y-4">
        <div className="text-xs font-mono uppercase tracking-wider text-muted">
          Connect
        </div>
        <div className="flex flex-wrap gap-4">
          {SOCIAL_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm text-muted hover:text-foreground transition-colors"
            >
              <span>{link.name}</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
