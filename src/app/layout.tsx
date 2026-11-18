import type { Metadata, Viewport } from "next";
import "@/styles/globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

export const metadata: Metadata = {
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
  },
  twitter: {
    card: "summary_large_image",
    title: "Eva Jiang | Software Engineer & UX Developer",
    description: "Software Engineer & UX-oriented developer based at UBC.",
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
        <div className="relative min-h-screen flex flex-col">
          <Navbar />
          <div className="flex-1 flex flex-col">
            {children}
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
