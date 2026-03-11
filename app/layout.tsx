import type React from "react"
import "@/app/globals.css"
import { Source_Sans_3, Noto_Serif_KR, Playfair_Display } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { LanguageProvider } from "@/contexts/language-context"
import { getServerLanguage, type Language } from "@/lib/i18n-server"
import { getDictionary } from "@/lib/dictionary"
import { Breadcrumbs } from "@/components/breadcrumbs"
import Script from "next/script"

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
  themeColor: "#0d1b2a", // River Depths
  colorScheme: "dark",
}

export const metadata = {
  metadataBase: new URL("https://juche.org"),
  title: "The 48 Laws of Excellence - Juche GanG Edition",
  description:
    "A comprehensive guide to achieving personal excellence through discipline, courage, and unwavering commitment to your highest potential.",
  keywords: "excellence, personal development, discipline, courage, juche, self-improvement, laws of excellence, leadership, success, motivation",
  authors: [{ name: "Jesse James" }],
  creator: "Juche GanG",
  publisher: "Juche GanG",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://juche.org",
    title: "The 48 Laws of Excellence - Juche GanG Edition",
    description:
      "A comprehensive guide to achieving personal excellence through discipline, courage, and unwavering commitment to your highest potential.",
    siteName: "Juche GanG",
    images: [
      {
        url: "/images/heros/0sunsetpaektu3.jpg",
        width: 700,
        height: 285,
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
  icons: {
    icon: [
      { url: "/favicon.svg" },
      { url: "/favicon.svg", sizes: "16x16", type: "image/svg+xml" },
      { url: "/favicon.svg", sizes: "32x32", type: "image/svg+xml" },
      { url: "/favicon.svg", sizes: "48x48", type: "image/svg+xml" },
    ],
    apple: [{ url: "/favicon.svg", sizes: "180x180", type: "image/svg+xml" }],
    shortcut: "/favicon.svg",
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
        <link rel="icon" href="/favicon.svg" sizes="any" />
        <link rel="apple-touch-icon" href="/favicon.svg" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="license" href="https://creativecommons.org/licenses/by/4.0/" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        {/* Umami Analytics - Privacy-respecting */}
        <Script
          defer
          src="https://cloud.umami.is/script.js"
          data-website-id="e42c2739-f5a9-4dbf-8325-2e5b80eeee19"
          strategy="afterInteractive"
        />
        {/* Instagram Embed Script */}
        <Script async src="https://www.instagram.com/embed.js" strategy="lazyOnload" />
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
