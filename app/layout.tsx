import type React from "react"
import "@/app/globals.css"
import { Source_Sans_3, Noto_Serif_KR, Playfair_Display } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { LanguageProvider } from "@/contexts/language-context"
import { getServerLanguage, type Language } from "@/lib/i18n-server"
import { getDictionary } from "@/lib/dictionary"
import { Breadcrumbs } from "@/components/breadcrumbs"
import Script from "next/script"
import { jsonLdSafe } from "@/lib/json-ld"


// Performance-optimized fonts
const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  variable: "--font-body",
  display: "swap",
})

// Korean typography - Noto Serif KR for 주체강 branding
const notoSerifKR = Noto_Serif_KR({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-korean",
  display: "swap",
})

// English headings - Classical authority
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["700", "900"],
  variable: "--font-heading",
  display: "swap",
})

export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover" as const, // Respect iOS notches / Dynamic Island
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#e8dfd0" }, // River Mist
    { media: "(prefers-color-scheme: dark)", color: "#0d1b2a" },  // River Depths
  ],
  colorScheme: "dark light",
}

export const metadata = {
  metadataBase: new URL("https://juche.org"),
  title: {
    default: "The 48 Laws of Excellence - Juche GanG Edition",
    template: "%s — Juche GanG",
  },
  description:
    "A comprehensive guide to achieving personal excellence through discipline, courage, and unwavering commitment to your highest potential.",
  keywords: "excellence, personal development, discipline, courage, juche, self-improvement, laws of excellence, leadership, success, motivation",
  authors: [{ name: "Jesse James" }],
  creator: "Juche GanG",
  publisher: "Juche GanG",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/",
      "ko-KR": "/",
      "ko-KP": "/",
      "x-default": "/",
    },
    types: {
      "application/rss+xml": "/rss.xml",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: ["ko_KR"],
    url: "https://juche.org",
    title: "The 48 Laws of Excellence - Juche GanG Edition",
    description:
      "A comprehensive guide to achieving personal excellence through discipline, courage, and unwavering commitment to your highest potential.",
    siteName: "Juche GanG",
    images: [
      {
        url: "/images/heros/0sunsetpaektu3.jpg",
        width: 1200,
        height: 630,
        alt: "Sunset over Mount Paektu - Juche GanG",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The 48 Laws of Excellence - Juche GanG Edition",
    description:
      "A comprehensive guide to achieving personal excellence through discipline, courage, and unwavering commitment to your highest potential.",
    images: ["/images/heros/0sunsetpaektu3.jpg"],
  },
  // Icons are served dynamically via app/icon.tsx + app/apple-icon.tsx
  // (tiny ImageResponse PNGs, crisp at all sizes). Next.js auto-wires them.
  // We keep favicon.ico in /public as a legacy fallback for older crawlers.
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  let serverLang: Language = 'en'
  let dict: Record<string, string> = {}
  
  try {
    serverLang = await getServerLanguage()
    dict = await getDictionary(serverLang)
  } catch (error) {
    console.warn('Failed to load server language or dictionary, using defaults:', error)
    serverLang = 'en'
    dict = {}
  }
  return (
    <html lang={serverLang === 'en' ? 'en' : serverLang === 'kr' ? 'ko-KR' : 'ko-KP'} suppressHydrationWarning>
      <head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="license" href="https://creativecommons.org/licenses/by/4.0/" />
        <link rel="alternate" type="application/rss+xml" title="Juche GanG — Briefings" href="/rss.xml" />
        <link rel="sitemap" type="application/xml" title="Sitemap" href="/sitemap.xml" />
        {/* Speed: warm up connections to 3rd-parties we know we'll hit */}
        <link rel="preconnect" href="https://cloud.umami.is" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://cloud.umami.is" />
        <link rel="dns-prefetch" href="https://i.ytimg.com" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Juche GanG" />
        <meta name="application-name" content="Juche GanG" />
        {/* JSON-LD: Organization + WebSite (gives Google a knowledge panel + sitelinks search box) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: jsonLdSafe([
              {
                "@context": "https://schema.org",
                "@type": "Organization",
                name: "Juche GanG",
                alternateName: "JucheGang",
                url: "https://juche.org",
                logo: "https://juche.org/faviconjuche.png",
                sameAs: [
                  "https://t.me/jucheganG",
                  "https://github.com/jdevop33",
                ],
              },
              {
                "@context": "https://schema.org",
                "@type": "WebSite",
                name: "Juche GanG",
                url: "https://juche.org",
                inLanguage: ["en", "ko"],
                potentialAction: {
                  "@type": "SearchAction",
                  target: "https://juche.org/briefings?q={search_term_string}",
                  "query-input": "required name=search_term_string",
                },
              },
            ]),
          }}
        />
        {/* Umami Analytics - Privacy-respecting */}
        <Script
          defer
          src="https://cloud.umami.is/script.js"
          data-website-id="e42c2739-f5a9-4dbf-8325-2e5b80eeee19"
          strategy="afterInteractive"
        />
      </head>
      <body className={`${sourceSans.variable} ${notoSerifKR.variable} ${playfair.variable} font-sans`}>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:px-4 focus:py-2 focus:rounded-md focus:bg-primary focus:text-primary-foreground"
        >
          Skip to content
        </a>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <LanguageProvider initialLanguage={serverLang} dictionary={dict}>
            <Breadcrumbs />
            {children}
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
