import { Star, Heart, Mail, Instagram } from "lucide-react"

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
                <a href="/" className="text-red-200 hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#laws" className="text-red-200 hover:text-white transition-colors">
                  The 48 Laws
                </a>
              </li>
              <li>
                <a href="/social" className="text-red-200 hover:text-white transition-colors">
                  Social Media
                </a>
              </li>
              <li>
                <a href="#about" className="text-red-200 hover:text-white transition-colors">
                  About the Author
                </a>
              </li>
              <li>
                <a href="#contact" className="text-red-200 hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-red-300 mb-4">Connect</h3>
            <div className="space-y-3">
              <a href="mailto:panda@juche.org" className="flex items-center gap-2 text-red-200 hover:text-white transition-colors">
                <Mail className="h-4 w-4" />
                <span>panda@juche.org</span>
              </a>
              <a href="https://instagram.com/jpandajames39" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-red-200 hover:text-white transition-colors">
                <Instagram className="h-4 w-4" />
                <span>@jpandajames39</span>
              </a>
              <a href="https://instagram.com/kimjongunwins" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-red-200 hover:text-white transition-colors">
                <Instagram className="h-4 w-4" />
                <span>@kimjongunwins</span>
              </a>
            </div>
            <div className="mt-6">
              <h4 className="text-sm font-semibold text-red-300 mb-2">Follow Us</h4>
              <div className="flex gap-3">
                <a 
                  href="https://instagram.com/jpandajames39" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-red-800 hover:bg-red-700 rounded-full flex items-center justify-center transition-colors"
                  aria-label="Instagram jpandajames39"
                >
                  <Instagram className="h-4 w-4 text-red-200" />
                </a>
                <a 
                  href="https://instagram.com/kimjongunwins" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-red-800 hover:bg-red-700 rounded-full flex items-center justify-center transition-colors"
                  aria-label="Instagram kimjongunwins"
                >
                  <Instagram className="h-4 w-4 text-red-200" />
                </a>
                <a 
                  href="mailto:panda@juche.org"
                  className="w-8 h-8 bg-red-800 hover:bg-red-700 rounded-full flex items-center justify-center transition-colors"
                  aria-label="Email"
                >
                  <Mail className="h-4 w-4 text-red-200" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-red-800 pt-8 text-center">
          <p className="text-red-200">© {new Date().getFullYear()} Juche GanG. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
