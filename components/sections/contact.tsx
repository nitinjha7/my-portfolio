"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, Linkedin, Github, Send, MapPin, Loader2, ArrowRight } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setIsSubmitted(true)
    setFormData({ name: "", email: "", message: "" })

    setTimeout(() => setIsSubmitted(false), 3000)
  }

  const socials = [
    { icon: Github, href: "https://github.com/nitinjha7", label: "GitHub", color: "hover:text-white" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/nitinjhaconnect", label: "LinkedIn", color: "hover:text-blue-400" },
    { icon: Mail, href: "mailto:nitin.jha.connect@gmail.com", label: "Email", color: "hover:text-red-400" },
  ]

  return (
    <section id="contact" className="relative py-24 px-4 bg-black overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-900/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 space-y-4"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-linear-to-r from-indigo-400 via-purple-400 to-pink-400">
            Ready to Collaborate?
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Whether you have a question, a project idea, or just want to say hi, I’m always open to discussing new opportunities.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <motion.div 
             initial={{ opacity: 0, x: -30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="space-y-8"
          >
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-white">Get in touch</h3>
              <p className="text-gray-400 leading-relaxed">
                I am currently looking for <span className="text-indigo-400 font-medium">SDE Roles</span> and freelance projects. 
                If you need a developer who bridges the gap between complex algorithms and beautiful UI, let's talk.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md">
                <div className="p-3 rounded-full bg-indigo-500/20 text-indigo-400">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Mail me at</p>
                  <a href="mailto:nitin.jha.connect@gmail.com" className="text-white font-medium hover:text-indigo-400 transition-colors">
                    nitin.jha.connect@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md">
                <div className="p-3 rounded-full bg-purple-500/20 text-purple-400">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Location</p>
                  <p className="text-white font-medium">New Delhi, India</p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <p className="text-sm text-gray-500 mb-4 uppercase tracking-wider font-semibold">Social Profiles</p>
              <div className="flex gap-4">
                {socials.map((social) => {
                  const Icon = social.icon
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 rounded-full bg-white/5 border border-white/10 text-gray-400 transition-all hover:scale-110 hover:border-white/20 ${social.color}`}
                      aria-label={social.label}
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  )
                })}
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -inset-1 bg-linear-to-r from-indigo-500 to-purple-600 rounded-2xl blur opacity-20 pointer-events-none" />
            
            <form onSubmit={handleSubmit} className="relative p-8 rounded-2xl bg-gray-900 border border-white/10 shadow-2xl space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-gray-300">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                  className="w-full px-4 py-3 rounded-lg bg-black/50 border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-gray-300">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 rounded-lg bg-black/50 border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-gray-300">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  placeholder="Tell me about your project..."
                  className="w-full px-4 py-3 rounded-lg bg-black/50 border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting || isSubmitted}
                className={`
                  w-full py-4 rounded-lg font-bold text-white flex items-center justify-center gap-2 transition-all
                  ${isSubmitted 
                    ? "bg-green-600 hover:bg-green-700" 
                    : "bg-linear-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 shadow-lg shadow-indigo-500/25"
                  }
                `}
              >
                {isSubmitting ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : isSubmitted ? (
                  "Message Sent Successfully!"
                ) : (
                  <>
                    Send Message
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
