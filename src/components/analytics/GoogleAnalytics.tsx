"use client";

/**
 * GoogleAnalytics — injects the GA4 gtag.js script and fires a page-view
 * on every client-side navigation in the Next.js App Router.
 *
 * Renders nothing if NEXT_PUBLIC_GA_MEASUREMENT_ID is not set, so the
 * component is completely inert during local development unless you add
 * the env variable.
 */

import Script from "next/script";
import { usePathname, useSearchParams } from "next/navigation";
import * as React from "react";
import { GA_MEASUREMENT_ID, trackPageView } from "@/lib/analytics";

export function GoogleAnalytics() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Fire a page_view on every client-side route change
  React.useEffect(() => {
    if (!GA_MEASUREMENT_ID) return;
    const url =
      pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : "");
    trackPageView(url);
  }, [pathname, searchParams]);

  if (!GA_MEASUREMENT_ID) return null;

  return (
    <>
      {/* Load the gtag.js library */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
      />

      {/* Initialise the data layer */}
      <Script
        id="google-analytics-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}', {
              page_path: window.location.pathname,
              send_page_view: false
            });
          `,
        }}
      />
    </>
  );
}
