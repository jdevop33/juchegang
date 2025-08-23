import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { LanguageProvider } from "@/contexts/language-context"
import { getServerLanguage, type Language } from "@/lib/i18n-server"
import { getDictionary } from "@/lib/dictionary"
import { Analytics } from "@vercel/analytics/next"

const inter = Inter({ subsets: ["latin"] })

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#034DA2",
}

export const metadata = {
  metadataBase: new URL("https://juche.org"),
  title: "The 48 Laws of Excellence - Juche GanG Edition",
  description:
    "A comprehensive guide to achieving personal excellence through discipline, courage, and unwavering commitment to your highest potential.",
  keywords: "excellence, personal development, discipline, courage, juche, self-improvement, laws of excellence, leadership, success, motivation",
  authors: [{ name: "Dr. Henry Jekyll" }],
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
        url: "/images/brothers.jpg",
        width: 1200,
        height: 630,
        alt: "Juche GanG - The 48 Laws of Excellence",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The 48 Laws of Excellence - Juche GanG Edition",
    description:
      "A comprehensive guide to achieving personal excellence through discipline, courage, and unwavering commitment to your highest potential.",
    images: ["/images/brothers.jpg"],
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
    generator: 'v0.dev'
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
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.svg" sizes="any" />
        <link rel="apple-touch-icon" href="/favicon.svg" />
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${process.env.NEXT_PUBLIC_GTM_ID || "GTM-T6TZ48WR"}');
            `,
          }}
        />
        {/* End Google Tag Manager */}
        {/* Microsoft Clarity */}
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                  c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                  t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                  y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "${process.env.NEXT_PUBLIC_CLARITY_ID || "sxi1aj8201"}");
            `,
          }}
        />
        {/* End Microsoft Clarity */}
      </head>
      <body className={inter.className}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe 
            src={`https://www.googletagmanager.com/ns.html?id=${process.env.NEXT_PUBLIC_GTM_ID || "GTM-T6TZ48WR"}`}
            height="0" 
            width="0" 
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <LanguageProvider initialLanguage={serverLang} dictionary={dict}>
            {children}
          </LanguageProvider>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
