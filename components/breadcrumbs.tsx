"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { ChevronRight, Home } from "lucide-react"
import { motion } from "framer-motion"

export function Breadcrumbs() {
  const pathname = usePathname()

  // Don't show on homepage
  if (pathname === "/") return null

  const segments = pathname.split("/").filter(Boolean)

  const breadcrumbItems = segments.map((segment, index) => {
    const href = `/${segments.slice(0, index + 1).join("/")}`
    const label = segment
      .split("-")
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ")

    return { href, label }
  })

  return (
    <nav aria-label="Breadcrumb" className="bg-river-depths/80 backdrop-blur-sm border-b border-sovereign-gold/20">
      <div className="container mx-auto px-4 py-3">
        <ol className="flex items-center space-x-2 text-sm">
          <motion.li
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Link
              href="/"
              className="flex items-center gap-1 text-cream-muted hover:text-sovereign-gold transition-colors"
            >
              <Home className="w-4 h-4" />
              <span>Home</span>
            </Link>
          </motion.li>

          {breadcrumbItems.map((item, index) => (
            <motion.li
              key={item.href}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: (index + 1) * 0.1 }}
              className="flex items-center"
            >
              <ChevronRight className="w-4 h-4 text-river-current mx-2" />
              {index === breadcrumbItems.length - 1 ? (
                <span className="text-river-mist font-medium">{item.label}</span>
              ) : (
                <Link
                  href={item.href}
                  className="text-cream-muted hover:text-sovereign-gold transition-colors"
                >
                  {item.label}
                </Link>
              )}
            </motion.li>
          ))}
        </ol>
      </div>
    </nav>
  )
}
