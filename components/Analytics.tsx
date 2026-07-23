import Script from "next/script";

/**
 * Google Analytics 4. Activates as soon as NEXT_PUBLIC_GA_ID is set in Vercel
 * (Project → Settings → Environment Variables), e.g. G-XXXXXXXXXX.
 * Renders nothing when unset, so it is safe to ship before the ID exists.
 */
export default function Analytics() {
  const id = process.env.NEXT_PUBLIC_GA_ID;
  if (!id) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${id}`}
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${id}');
        `}
      </Script>
    </>
  );
}
