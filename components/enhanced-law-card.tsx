"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Expand, BookOpen, Star, ChevronDown } from "lucide-react"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import type { Law } from "@/types/law"

interface EnhancedLawCardProps {
  law: Law
  index?: number
}

export function EnhancedLawCard({ law, index = 0 }: EnhancedLawCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)

  const truncatedContent = law.content.length > 150 
    ? law.content.substring(0, 150) + "..." 
    : law.content

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.5, 
        delay: (index % 6) * 0.1,
        ease: [0.21, 1.11, 0.81, 0.99]
      }}
      whileHover={{ y: -8 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <Card className="h-full relative overflow-hidden group hover:shadow-2xl hover:shadow-accent/20 transition-all duration-500 border-2 hover:border-accent/30">
        {/* Animated gradient overlay */}
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: "linear-gradient(135deg, rgba(3, 77, 162, 0.05) 0%, rgba(236, 29, 37, 0.05) 100%)"
          }}
        />
        
        {/* Floating number badge with animation */}
        <motion.div
          className="absolute -top-3 -right-3 z-10"
          animate={isHovered ? { scale: 1.1, rotate: 5 } : { scale: 1, rotate: 0 }}
          transition={{ type: "spring", stiffness: 400, damping: 15 }}
        >
          <Badge 
            variant="secondary" 
            className="h-12 w-12 rounded-full flex items-center justify-center font-bold text-lg bg-accent/10 text-accent border-2 border-accent/30 shadow-lg"
          >
            {law.number}
          </Badge>
        </motion.div>

        <CardHeader className="relative z-10 pb-3">
          <div className="flex items-start gap-3">
            <motion.div
              animate={isHovered ? { rotate: 360 } : { rotate: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Star className={`w-5 h-5 transition-colors duration-300 ${isHovered ? 'text-accent' : 'text-muted-foreground'}`} />
            </motion.div>
            <div className="flex-1">
              <CardTitle className="text-lg font-semibold leading-tight group-hover:text-accent transition-colors duration-300">
                {law.title}
              </CardTitle>
            </div>
          </div>
        </CardHeader>

        <CardContent className="relative z-10">
          <CardDescription className="text-sm leading-relaxed text-foreground/80">
            {isExpanded ? law.content : truncatedContent}
          </CardDescription>

          <div className="flex items-center justify-between mt-4 pt-4 border-t border-border/50">
            {law.content.length > 150 && (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsExpanded(!isExpanded)}
                className="text-xs hover:text-accent transition-colors p-0 h-auto"
              >
                <motion.div
                  animate={{ rotate: isExpanded ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-4 h-4 mr-1" />
                </motion.div>
                {isExpanded ? "Show Less" : "Read More"}
              </Button>
            )}

            <Dialog>
              <DialogTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="text-xs hover:text-accent transition-colors p-1 h-auto ml-auto"
                >
                  <Expand className="w-4 h-4 mr-1" />
                  Expand
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl">
                <DialogHeader>
                  <DialogTitle className="flex items-center gap-2">
                    <Badge variant="secondary" className="text-sm">
                      Law {law.number}
                    </Badge>
                    {law.title}
                  </DialogTitle>
                </DialogHeader>
                <div className="space-y-4">
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {law.content}
                  </p>
                  
                  {/* Interactive quote section */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="bg-accent/5 border-l-4 border-accent p-4 rounded-r-lg"
                  >
                    <p className="text-xs text-muted-foreground italic">
                      "Excellence is not a destination, but a way of traveling." - Juche Philosophy
                    </p>
                  </motion.div>

                  <div className="flex justify-between items-center pt-4">
                    <Button variant="outline" size="sm" className="gap-2">
                      <BookOpen className="w-4 h-4" />
                      Study This Law
                    </Button>
                    <Button variant="ghost" size="sm" className="gap-2">
                      <Star className="w-4 h-4" />
                      Add to Favorites
                    </Button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </CardContent>

        {/* Subtle animated border effect */}
        <motion.div
          className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: "linear-gradient(135deg, transparent, rgba(3, 77, 162, 0.1), transparent)",
            mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            maskComposite: "exclude",
            padding: "2px",
          }}
        />
      </Card>
    </motion.div>
  )
}