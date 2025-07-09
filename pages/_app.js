import "@/styles/globals.css";
import "keen-slider/keen-slider.min.css";
import { UserProvider } from "@/context/UserContext";
import dynamic from "next/dynamic";
import Head from "next/head";
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from "@vercel/speed-insights/next";
import { useRouter } from "next/router";

// Load WhatsApp button only on client (avoids blocking main thread)
const WhatsAppFloatingButton = dynamic(() => import("@/components/WhatsAppFloatingButton"), {
  ssr: false,
  loading: () => null,
});

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const canonicalUrl = `https://dholeragujarat.in${router.asPath === "/" ? "" : router.asPath}`;

  return (
    <UserProvider>
      <Head>
        {/* Basic Meta */}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <title>DholeraGujarat.in - Smart City Investment Destination</title>
        <meta
          name="description"
          content="Dholera Smart City - Explore investment, residential plots, township projects, and long-term growth opportunities."
        />

        {/* Canonical URL */}
        <link rel="canonical" href={canonicalUrl} />
        <meta name="author" content="DholeraGujarat.in" />

        <meta name="robots" content="index, follow" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />

        {/* Open Graph (for social sharing) */}
        <meta property="og:title" content="DholeraGujarat.in - Smart City Investment Destination" />
        <meta
          property="og:description"
          content="Dholera Smart City - Explore real estate, projects, residential plots, and more."
        />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://dholeragujarat.in/images/dholera-og.webp" />

        {/* Twitter Meta */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Dholera Smart City - Plot & Project Investment Hub" />
        <meta
          name="twitter:description"
          content="Dholera Smart City: Invest in your future with the best residential & commercial plots in Gujarat."
        />
        <meta name="twitter:image" content="https://dholeragujarat.in/images/dholera-og.webp" />
      </Head>

      <Component {...pageProps} />
      <Analytics />
      <SpeedInsights />
      <WhatsAppFloatingButton />
    </UserProvider>
  );
}
