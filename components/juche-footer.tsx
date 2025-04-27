import { Star, Heart } from "lucide-react"

export function JucheFooter() {
  return (
    <footer className="bg-red-950 border-t border-red-800 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Star className="h-6 w-6 text-red-500" />
              <span className="text-xl font-bold text-red-300">Juche GanG</span>
            </div>
            <p className="text-red-200 mb-4">
              Dedicated to the pursuit of excellence and the cultivation of personal power through discipline, courage,
              and unwavering commitment.
            </p>
            <div className="flex items-center gap-2 text-red-300">
              <Heart className="h-4 w-4 text-red-500" />
              <span>Made with excellence</span>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold text-red-300 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-red-200 hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#laws" className="text-red-200 hover:text-white transition-colors">
                  The 48 Laws
                </a>
              </li>
              <li>
                <a href="#about" className="text-red-200 hover:text-white transition-colors">
                  About the Author
                </a>
              </li>
              <li>
                <a href="#" className="text-red-200 hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-red-300 mb-4">Categories</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-red-200 hover:text-white transition-colors">
                  Self-Discipline
                </a>
              </li>
              <li>
                <a href="#" className="text-red-200 hover:text-white transition-colors">
                  Relationships
                </a>
              </li>
              <li>
                <a href="#" className="text-red-200 hover:text-white transition-colors">
                  Strategy
                </a>
              </li>
              <li>
                <a href="#" className="text-red-200 hover:text-white transition-colors">
                  Personal Growth
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-red-800 pt-8 text-center">
          <p className="text-red-200">© {new Date().getFullYear()} Juche GanG. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
