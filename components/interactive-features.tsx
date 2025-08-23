"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { 
  Star, 
  Bookmark, 
  Share2, 
  Download, 
  Filter, 
  Search,
  TrendingUp,
  Users,
  Clock,
  Target,
  Zap
} from "lucide-react"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import type { Law } from "@/types/law"

interface InteractiveFeaturesProps {
  laws: Law[]
  onLawSelect?: (law: Law) => void
}

export function InteractiveFeatures({ laws, onLawSelect }: InteractiveFeaturesProps) {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [favorites, setFavorites] = useState<Set<number>>(new Set())
  const [readingProgress, setReadingProgress] = useState<Record<number, number>>({})
  const [dailyLaw, setDailyLaw] = useState<Law | null>(null)

  // Initialize daily law
  useEffect(() => {
    const today = new Date().getDate()
    const lawIndex = today % laws.length
    setDailyLaw(laws[lawIndex])
  }, [laws])

  // Filter laws based on search and category
  const filteredLaws = laws.filter(law => {
    const matchesSearch = law.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         law.content.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "all" || 
                           (selectedCategory === "favorites" && favorites.has(law.number))
    return matchesSearch && matchesCategory
  })

  const toggleFavorite = (lawNumber: number) => {
    setFavorites(prev => {
      const newFavorites = new Set(prev)
      if (newFavorites.has(lawNumber)) {
        newFavorites.delete(lawNumber)
      } else {
        newFavorites.add(lawNumber)
      }
      return newFavorites
    })
  }

  const updateProgress = (lawNumber: number, progress: number) => {
    setReadingProgress(prev => ({
      ...prev,
      [lawNumber]: progress
    }))
  }

  return (
    <div className="space-y-8">
      {/* Daily Law Feature */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative overflow-hidden"
      >
        <Card className="bg-gradient-to-r from-accent/10 via-primary/10 to-accent/10 border-2 border-accent/30">
          <CardContent className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              >
                <Star className="w-6 h-6 text-accent" />
              </motion.div>
              <div>
                <h3 className="text-lg font-semibold text-foreground">Law of the Day</h3>
                <p className="text-sm text-muted-foreground">Daily wisdom for excellence</p>
              </div>
            </div>
            {dailyLaw && (
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Badge variant="secondary">Law {dailyLaw.number}</Badge>
                  <h4 className="font-medium">{dailyLaw.title}</h4>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {dailyLaw.content.substring(0, 200)}...
                </p>
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={() => onLawSelect?.(dailyLaw)}
                  className="hover:bg-accent hover:text-accent-foreground"
                >
                  Study Today's Law
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      </motion.div>

      {/* Interactive Controls */}
      <Tabs defaultValue="explore" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="explore" className="flex items-center gap-2">
            <Search className="w-4 h-4" />
            Explore
          </TabsTrigger>
          <TabsTrigger value="progress" className="flex items-center gap-2">
            <TrendingUp className="w-4 h-4" />
            Progress
          </TabsTrigger>
          <TabsTrigger value="insights" className="flex items-center gap-2">
            <Target className="w-4 h-4" />
            Insights
          </TabsTrigger>
        </TabsList>

        <TabsContent value="explore" className="space-y-4">
          {/* Search and Filter */}
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Search laws by title or content..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex gap-2">
              <Button
                variant={selectedCategory === "all" ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory("all")}
              >
                All Laws
              </Button>
              <Button
                variant={selectedCategory === "favorites" ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory("favorites")}
                className="flex items-center gap-2"
              >
                <Bookmark className="w-4 h-4" />
                Favorites ({favorites.size})
              </Button>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="flex flex-wrap gap-2">
            <Button variant="ghost" size="sm" className="text-xs">
              <Zap className="w-3 h-3 mr-1" />
              Random Law
            </Button>
            <Button variant="ghost" size="sm" className="text-xs">
              <Share2 className="w-3 h-3 mr-1" />
              Share Collection
            </Button>
            <Button variant="ghost" size="sm" className="text-xs">
              <Download className="w-3 h-3 mr-1" />
              Export PDF
            </Button>
          </div>

          {/* Results Summary */}
          <div className="text-sm text-muted-foreground">
            Showing {filteredLaws.length} of {laws.length} laws
            {searchTerm && ` for "${searchTerm}"`}
          </div>
        </TabsContent>

        <TabsContent value="progress" className="space-y-4">
          <Card>
            <CardContent className="p-6">
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Your Learning Journey</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="text-center p-4 rounded-lg bg-accent/10">
                      <div className="text-2xl font-bold text-accent">{favorites.size}</div>
                      <div className="text-sm text-muted-foreground">Favorites</div>
                    </div>
                    <div className="text-center p-4 rounded-lg bg-primary/10">
                      <div className="text-2xl font-bold text-primary">
                        {Object.keys(readingProgress).length}
                      </div>
                      <div className="text-sm text-muted-foreground">In Progress</div>
                    </div>
                    <div className="text-center p-4 rounded-lg bg-green-500/10">
                      <div className="text-2xl font-bold text-green-500">
                        {Object.values(readingProgress).filter(p => p === 100).length}
                      </div>
                      <div className="text-sm text-muted-foreground">Completed</div>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-medium mb-3">Overall Progress</h4>
                  <Progress 
                    value={(favorites.size / laws.length) * 100} 
                    className="h-2"
                  />
                  <p className="text-xs text-muted-foreground mt-1">
                    {Math.round((favorites.size / laws.length) * 100)}% of laws favorited
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="insights" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Users className="w-5 h-5 text-accent" />
                  <h4 className="font-medium">Community Favorites</h4>
                </div>
                <div className="space-y-2">
                  {[1, 25, 8].map(num => {
                    const law = laws.find(l => l.number === num)
                    return law ? (
                      <div key={law.number} className="flex justify-between items-center text-sm">
                        <span>Law {law.number}: {law.title.substring(0, 30)}...</span>
                        <Badge variant="outline" className="text-xs">Popular</Badge>
                      </div>
                    ) : null
                  })}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Clock className="w-5 h-5 text-primary" />
                  <h4 className="font-medium">Reading Time</h4>
                </div>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div>Average per law: ~2 minutes</div>
                  <div>Total collection: ~1.5 hours</div>
                  <div>Recommended daily: 10-15 minutes</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>

      {/* Interactive Law List */}
      <div className="space-y-3">
        <AnimatePresence>
          {filteredLaws.map((law, index) => (
            <motion.div
              key={law.number}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ delay: index * 0.05 }}
              className="group"
            >
              <Card className="hover:shadow-md transition-all duration-300 hover:border-accent/30">
                <CardContent className="p-4">
                  <div className="flex items-start gap-3">
                    <Badge variant="outline" className="shrink-0">
                      {law.number}
                    </Badge>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium group-hover:text-accent transition-colors">
                        {law.title}
                      </h4>
                      <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
                        {law.content}
                      </p>
                    </div>
                    <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-8 w-8 p-0"
                        onClick={() => toggleFavorite(law.number)}
                      >
                        <Bookmark 
                          className={`w-4 h-4 ${favorites.has(law.number) ? 'fill-current text-accent' : ''}`} 
                        />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-8 w-8 p-0"
                        onClick={() => onLawSelect?.(law)}
                      >
                        <Share2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  )
}