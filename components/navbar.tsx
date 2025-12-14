"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence, easeInOut } from "framer-motion"
import { Menu, X, Code2 } from "lucide-react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ]

  const menuVariants = {
    closed: { 
      opacity: 0, 
      height: 0,
      transition: { duration: 0.3, ease: easeInOut }
    },
    open: { 
      opacity: 1, 
      height: "auto",
      transition: { duration: 0.3, ease: easeInOut }
    }
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-black/50 backdrop-blur-xl border-b border-white/5 shadow-lg shadow-indigo-500/5" 
          : "bg-transparent border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          
          <a href="#" className="group flex items-center gap-3">
            <div className="relative w-10 h-10 rounded-xl bg-linear-to-br from-indigo-600 to-violet-600 flex items-center justify-center shadow-lg group-hover:shadow-indigo-500/50 transition-all duration-300 overflow-hidden">
               <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
               <Code2 className="text-white w-5 h-5 relative z-10" />
            </div>
            <span className="font-bold text-gray-200 tracking-wide text-lg group-hover:text-white transition-colors">
              Nitin<span className="text-indigo-400">.dev</span>
            </span>
          </a>

          <div className="hidden md:flex gap-8 items-center">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="relative text-sm font-medium text-gray-400 hover:text-white transition-colors py-2 group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-400 group-hover:w-full transition-all duration-300 ease-out" />
                <span className="absolute inset-0 bg-indigo-400/20 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
              </a>
            ))}
            
            <a 
              href="https://tiny.cc/nitin-resume" 
              target="_blank"
              className="px-5 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-semibold text-white hover:bg-white/10 hover:border-indigo-500/50 transition-all"
            >
              Resume
            </a>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="md:hidden border-t border-white/10 bg-black/95 backdrop-blur-xl overflow-hidden"
          >
            <div className="flex flex-col p-4 space-y-2">
              {navItems.map((item, i) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="px-4 py-3 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition-all font-medium flex items-center gap-3"
                  onClick={() => setIsOpen(false)}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-500/50" />
                  {item.label}
                </motion.a>
              ))}
              <motion.a
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                  href="https://tiny.cc/nitin-resume"
                  target="_blank"
                  className="mt-4 px-4 py-3 rounded-lg bg-indigo-600 text-white text-center font-bold"
                  onClick={() => setIsOpen(false)}
                >
                  View Resume
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
