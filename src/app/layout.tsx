import type { Metadata, Viewport } from "next";
import "@/styles/globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { SmoothScrollProvider } from "@/components/animation/smooth-scroll-provider";
import { ScrollProgress } from "@/components/animation/scroll-progress";
import { CustomCursor } from "@/components/cursor/custom-cursor";
import { DraggablePlayer } from "@/components/audio/draggable-player";

export const metadata: Metadata = {
  metadataBase: new URL("https://arevaura.github.io"),
  
  title: "Eva Jiang | Software Engineer & UX Developer",
  description:
    "Personal portfolio of Eva Jiang (@arevaura) — Software Engineer & UX-oriented developer based at The University of British Columbia.",
  
    keywords: [
    "Eva Jiang",
    "arevaura",
    "Software Engineer",
    "UX Developer",
    "Frontend Developer",
    "UBC",
    "Portfolio",
  ],

  authors: [{ name: "Eva Jiang", url: "https://github.com/arevaura" }],
  creator: "Eva Jiang",

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://arevaura.github.io",
    title: "Eva Jiang | Software Engineer & UX Developer",
    description:
      "Personal portfolio of Eva Jiang (@arevaura) — Software Engineer & UX-oriented developer.",
    siteName: "Eva Jiang Portfolio",
    images: [
      {
        url: "/assets/og-image.png",
        width: 1200,
        height: 630,
        alt: "Eva Jiang | Software Engineer & UX Developer",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Eva Jiang | Software Engineer & UX Developer",
    description: "Software Engineer & UX-oriented developer based at UBC.",
    images: ["/asssets/og-image.png"],
  },

  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export const viewport: Viewport = {
  themeColor: "#090a0f",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased selection:bg-primary selection:text-primary-foreground">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-md"
        >
          Skip to main content
        </a>
        <CustomCursor />
        <SmoothScrollProvider>
          <div className="relative min-h-screen flex flex-col">
            <ScrollProgress />
            <Navbar />
            <div className="flex-1 flex flex-col">
              {children}
            </div>
            <Footer />
            <DraggablePlayer />
          </div>
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
