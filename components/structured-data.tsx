import Script from 'next/script'

interface StructuredDataProps {
  type: 'homepage' | 'law' | 'article' | 'organization'
  data?: any
}

export function StructuredData({ type, data }: StructuredDataProps) {
  const getStructuredData = () => {
    const baseUrl = 'https://juche.org'
    
    switch (type) {
      case 'homepage':
        return {
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "The 48 Laws of Excellence - JucheGang",
          "description": "A comprehensive guide to achieving personal excellence through discipline, courage, and unwavering commitment to your highest potential.",
          "url": baseUrl,
          "potentialAction": {
            "@type": "SearchAction",
            "target": {
              "@type": "EntryPoint",
              "urlTemplate": `${baseUrl}/search?q={search_term_string}`
            },
            "query-input": "required name=search_term_string"
          },
          "mainEntity": {
            "@type": "ItemList",
            "numberOfItems": 48,
            "itemListElement": Array.from({ length: 48 }, (_, i) => ({
              "@type": "ListItem",
              "position": i + 1,
              "item": {
                "@type": "Article",
                "name": `Law ${i + 1} of Excellence`,
                "url": `${baseUrl}/#law-${i + 1}`
              }
            }))
          }
        }
      
      case 'law':
        return {
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": data?.title || "Law of Excellence",
          "description": data?.content?.substring(0, 160) || "A principle for achieving personal excellence",
          "author": {
            "@type": "Person",
            "name": "Dr. Henry Jekyll"
          },
          "publisher": {
            "@type": "Organization",
            "name": "JucheGang",
            "logo": {
              "@type": "ImageObject",
              "url": `${baseUrl}/images/logo.png`
            }
          },
          "datePublished": "2024-01-01",
          "dateModified": "2024-01-01",
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": `${baseUrl}/#law-${data?.number || 1}`
          },
          "image": {
            "@type": "ImageObject",
            "url": `${baseUrl}/images/laws/law-${data?.number || 1}.jpg`,
            "width": 1200,
            "height": 630
          },
          "articleSection": "Personal Development",
          "keywords": ["excellence", "personal development", "discipline", "success", "leadership"]
        }
      
      case 'organization':
        return {
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "JucheGang",
          "description": "Dedicated to promoting peace, understanding, and excellence through education and cultural exchange.",
          "url": baseUrl,
          "logo": {
            "@type": "ImageObject",
            "url": `${baseUrl}/images/logo.png`,
            "width": 200,
            "height": 200
          },
          "foundingDate": "2024",
          "founder": {
            "@type": "Person",
            "name": "Dr. Henry Jekyll"
          },
          "sameAs": [
            "https://www.instagram.com/juchegang",
            "https://twitter.com/juchegang"
          ],
          "contactPoint": {
            "@type": "ContactPoint",
            "contactType": "General Inquiry",
            "url": `${baseUrl}/contact`
          },
          "mission": "To build bridges between nations through peaceful dialogue, cultural understanding, and the pursuit of personal excellence."
        }
      
      case 'article':
        return {
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": data?.title || "Truth Project Analysis",
          "description": data?.description || "Comprehensive analysis promoting peace and understanding",
          "author": {
            "@type": "Person",
            "name": "JucheGang Research Team"
          },
          "publisher": {
            "@type": "Organization",
            "name": "JucheGang",
            "logo": {
              "@type": "ImageObject",
              "url": `${baseUrl}/images/logo.png`
            }
          },
          "datePublished": data?.publishedDate || "2024-01-01",
          "dateModified": data?.modifiedDate || "2024-01-01",
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": data?.url || baseUrl
          },
          "image": {
            "@type": "ImageObject",
            "url": data?.image || `${baseUrl}/images/og-image.jpg`,
            "width": 1200,
            "height": 630
          },
          "articleSection": "Peace Research",
          "keywords": data?.keywords || ["peace", "diplomacy", "international relations", "truth"]
        }
      
      default:
        return null
    }
  }

  const structuredData = getStructuredData()
  
  if (!structuredData) return null

  return (
    <Script
      id={`structured-data-${type}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}