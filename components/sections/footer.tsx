"use client"

import { ArrowUp, Code2, Heart } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="relative bg-black py-6 border-t border-white/10 overflow-hidden">
      <div className="absolute top-0 left-1/4 right-1/4 h-px bg-linear-to-r from-transparent via-indigo-500/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-4">
          <a href="#" onClick={scrollToTop} className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-linear-to-br from-indigo-600 to-violet-600 flex items-center justify-center shadow-md transition-transform group-hover:scale-105">
               <Code2 className="text-white w-4 h-4" />
            </div>
            <span className="font-bold text-gray-200 tracking-wide text-sm">
              Nitin<span className="text-indigo-400">.dev</span>
            </span>
          </a>
          
          <span className="hidden md:block w-px h-4 bg-white/10" />
          
          <p className="text-xs text-gray-500">
            &copy; {currentYear} All rights reserved.
          </p>
        </div>

        <div className="flex items-center gap-6">
          <div className="hidden md:flex items-center gap-1 text-xs text-gray-600">
            <span>Built with</span>
            <Heart className="w-3 h-3 text-red-500/80 fill-red-500/80 mx-0.5" />
            <span>& Next.js</span>
          </div>

          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 text-xs font-medium text-gray-400 hover:text-indigo-400 transition-colors bg-white/5 px-3 py-1.5 rounded-full border border-white/5 hover:border-white/10"
          >
            Back to Top
            <ArrowUp className="w-3 h-3 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  )
}
