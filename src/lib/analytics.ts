/**
 * Google Analytics 4 — Analytics Utility
 *
 * Provides typed wrappers around window.gtag for page views and
 * all custom portfolio events. Safe to call during SSR (no-ops when
 * window/gtag is not available) and respects Do Not Track.
 */

export const GA_MEASUREMENT_ID =
  process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? "";

// ---------------------------------------------------------------------------
// Low-level gtag wrapper
// ---------------------------------------------------------------------------

type GtagCommand = "config" | "event" | "js" | "set";

declare global {
  interface Window {
    gtag: (
      command: GtagCommand,
      targetId: string | Date,
      params?: Record<string, unknown>
    ) => void;
    dataLayer: unknown[];
  }
}

function isGtagAvailable(): boolean {
  return (
    typeof window !== "undefined" &&
    typeof window.gtag === "function" &&
    Boolean(GA_MEASUREMENT_ID)
  );
}

// ---------------------------------------------------------------------------
// Page view
// ---------------------------------------------------------------------------

export function trackPageView(url: string): void {
  if (!isGtagAvailable()) return;
  window.gtag("config", GA_MEASUREMENT_ID, {
    page_path: url,
  });
}

// ---------------------------------------------------------------------------
// Generic event helper
// ---------------------------------------------------------------------------

interface GaEventParams {
  category?: string;
  label?: string;
  value?: number;
  [key: string]: unknown;
}

export function trackEvent(
  action: string,
  params: GaEventParams = {}
): void {
  if (!isGtagAvailable()) return;
  window.gtag("event", action, params);
}

// ---------------------------------------------------------------------------
// Portfolio custom events
// ---------------------------------------------------------------------------

/** Fired when a project card or modal is opened */
export function trackProjectView(projectTitle: string, category?: string): void {
  trackEvent("project_view", {
    category: "projects",
    label: projectTitle,
    project_name: projectTitle,
    project_category: category ?? "unknown",
  });
}

/** Fired when the resume download link is clicked */
export function trackResumeDownload(): void {
  trackEvent("resume_download", {
    category: "engagement",
    label: "resume_pdf",
  });
}

/** Fired when an external social / contact link is clicked */
export type ContactPlatform =
  | "github"
  | "linkedin"
  | "devpost"
  | "email"
  | "external";

export function trackContactClick(platform: ContactPlatform, url?: string): void {
  trackEvent("contact_click", {
    category: "outbound",
    label: platform,
    platform,
    destination_url: url,
  });
}

/** Fired when a gallery image or item is viewed / interacted with */
export function trackGalleryInteraction(
  action: "open" | "close" | "navigate" | "zoom",
  itemId?: string
): void {
  trackEvent("gallery_interaction", {
    category: "gallery",
    label: action,
    gallery_action: action,
    item_id: itemId,
  });
}

/** Fired on music player actions */
export type PlayerAction =
  | "play"
  | "pause"
  | "next_track"
  | "mute"
  | "unmute"
  | "volume_change"
  | "minimize"
  | "expand";

export function trackMusicPlayerInteraction(
  action: PlayerAction,
  trackTitle?: string
): void {
  trackEvent("music_player_interaction", {
    category: "audio",
    label: action,
    player_action: action,
    track_title: trackTitle,
  });
}

/** Fired when the user switches the colour theme */
export function trackThemeChange(newTheme: string, previousTheme: string): void {
  trackEvent("theme_change", {
    category: "preferences",
    label: newTheme,
    new_theme: newTheme,
    previous_theme: previousTheme,
  });
}
