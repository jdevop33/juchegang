import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "The 48 Laws of Excellence - Juche GanG Edition",
  description:
    "A comprehensive guide to achieving personal excellence through discipline, courage, and unwavering commitment to your highest potential.",
  keywords: "excellence, personal development, discipline, courage, juche, self-improvement, laws of excellence, leadership, success, motivation",
  authors: [{ name: "Dr. Henry Jekyll" }],
  creator: "Juche GanG",
  publisher: "Juche GanG",
  robots: "index, follow",
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#991b1b",
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
        url: "https://juche.org/og-image.png",
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
    images: ["https://juche.org/og-image.png"],
  },
  icons: {
    icon: [
      { url: "/kffav.png" },
      { url: "/kffav.png", sizes: "16x16", type: "image/png" },
      { url: "/kffav.png", sizes: "32x32", type: "image/png" },
      { url: "/kffav.png", sizes: "48x48", type: "image/png" },
    ],
    apple: [{ url: "/kffav.png", sizes: "180x180", type: "image/png" }],
    shortcut: "/kffav.png",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/kffav.png" sizes="any" />
        <link rel="apple-touch-icon" href="/kffav.png" />
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                  c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                  t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                  y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "qxe1et76wh");
            `,
          }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
