"use client"

import { useEffect } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/navigation'

interface SEOEnhancedLayoutProps {
  children: React.ReactNode
  title?: string
  description?: string
  keywords?: string[]
  image?: string
  url?: string
  type?: 'website' | 'article' | 'book'
  publishedTime?: string
  modifiedTime?: string
  author?: string
  section?: string
}

export function SEOEnhancedLayout({
  children,
  title = "The 48 Laws of Excellence - Juche GanG Edition",
  description = "A comprehensive guide to achieving personal excellence through discipline, courage, and unwavering commitment to your highest potential.",
  keywords = ["excellence", "personal development", "discipline", "courage", "juche", "self-improvement"],
  image = "/images/brothers.jpg",
  url = "https://juche.org",
  type = "website",
  publishedTime,
  modifiedTime,
  author = "Dr. Henry Jekyll",
  section = "Personal Development"
}: SEOEnhancedLayoutProps) {
  
  useEffect(() => {
    // Umami handles page views automatically
    // Custom events can be tracked via the analytics module
  }, [title, url, section])

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${url}#website`,
        "url": url,
        "name": "Juche GanG - The 48 Laws of Excellence",
        "description": description,
        "publisher": {
          "@id": `${url}#organization`
        },
        "potentialAction": [
          {
            "@type": "SearchAction",
            "target": {
              "@type": "EntryPoint",
              "urlTemplate": `${url}/search?q={search_term_string}`
            },
            "query-input": "required name=search_term_string"
          }
        ],
        "inLanguage": "en-US"
      },
      {
        "@type": "Organization",
        "@id": `${url}#organization`,
        "name": "Juche GanG",
        "url": url,
        "description": "Dedicated to promoting personal excellence through the 48 Laws of Excellence",
        "founder": {
          "@type": "Person",
          "name": author
        },
        "sameAs": [
          "https://twitter.com/juchegang",
          "https://facebook.com/juchegang"
        ]
      },
      ...(type === 'article' ? [{
        "@type": "Article",
        "@id": `${url}#article`,
        "isPartOf": {
          "@id": `${url}#website`
        },
        "author": {
          "@type": "Person",
          "name": author
        },
        "headline": title,
        "description": description,
        "image": {
          "@type": "ImageObject",
          "url": `${url}${image}`
        },
        "datePublished": publishedTime,
        "dateModified": modifiedTime || publishedTime,
        "publisher": {
          "@id": `${url}#organization`
        },
        "mainEntityOfPage": {
          "@id": url
        },
        "inLanguage": "en-US",
        "articleSection": section,
        "keywords": keywords.join(", ")
      }] : []),
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": url
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": section,
            "item": `${url}/${section.toLowerCase().replace(/\s+/g, '-')}`
          }
        ]
      }
    ]
  }

  return (
    <>
      <Head>
        {/* Enhanced Meta Tags */}
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords.join(", ")} />
        <meta name="author" content={author} />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow" />
        
        {/* Language and Region */}
        <meta httpEquiv="content-language" content="en-US" />
        <meta name="language" content="English" />
        <meta name="geo.region" content="US" />
        
        {/* Enhanced Open Graph */}
        <meta property="og:type" content={type} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={`${url}${image}`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content={title} />
        <meta property="og:url" content={url} />
        <meta property="og:site_name" content="Juche GanG" />
        <meta property="og:locale" content="en_US" />
        
        {/* Article specific OG tags */}
        {type === 'article' && (
          <>
            {publishedTime && <meta property="article:published_time" content={publishedTime} />}
            {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
            <meta property="article:author" content={author} />
            <meta property="article:section" content={section} />
            {keywords.map((keyword) => (
              <meta key={keyword} property="article:tag" content={keyword} />
            ))}
          </>
        )}
        
        {/* Enhanced Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={`${url}${image}`} />
        <meta name="twitter:image:alt" content={title} />
        <meta name="twitter:site" content="@juchegang" />
        <meta name="twitter:creator" content="@juchegang" />
        
        {/* Additional SEO Meta Tags */}
        <meta name="theme-color" content="#034DA2" />
        <meta name="msapplication-TileColor" content="#034DA2" />
        <meta name="application-name" content="Juche GanG" />
        <meta name="apple-mobile-web-app-title" content="Juche GanG" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="mobile-web-app-capable" content="yes" />
        
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://cloud.umami.is" />

        {/* DNS Prefetch */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//cloud.umami.is" />
        
        {/* Canonical URL */}
        <link rel="canonical" href={url} />
        
        {/* Alternative formats */}
        <link rel="alternate" type="application/rss+xml" title="Juche GanG RSS Feed" href={`${url}/rss.xml`} />
        <link rel="alternate" type="application/atom+xml" title="Juche GanG Atom Feed" href={`${url}/atom.xml`} />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        
        {/* Performance Hints */}
        <link rel="preload" href="/fonts/inter-var.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        
        {/* Security Headers */}
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta httpEquiv="X-Frame-Options" content="DENY" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        
        {/* Accessibility */}
        <meta name="color-scheme" content="dark light" />
      </Head>
      
      {/* Skip to main content for screen readers */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-accent focus:text-accent-foreground focus:rounded focus:shadow-lg focus:outline-none"
      >
        Skip to main content
      </a>
      
      {children}
    </>
  )
}

// Global type definitions for analytics
declare global {
  interface Window {
    umami?: {
      track: (eventName: string, eventData?: Record<string, string | number>) => void
    }
  }
}