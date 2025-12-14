"use client"

import { useRef } from "react"
import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion"
import { Lightbulb, Layers, Briefcase, Code, Cpu, Globe } from "lucide-react"

function StatsCard() {
  const ref = useRef<HTMLDivElement>(null)
  
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const mouseXSpring = useSpring(x)
  const mouseYSpring = useSpring(y)

  const rotateX = useSpring(useMotionValue(0), { stiffness: 150, damping: 20 })
  const rotateY = useSpring(useMotionValue(0), { stiffness: 150, damping: 20 })

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const width = rect.width
    const height = rect.height
    
    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top
    
    const rX = (mouseY / height - 0.5) * -20
    const rY = (mouseX / width - 0.5) * 20

    rotateX.set(rX)
    rotateY.set(rY)
  }

  function handleMouseLeave() {
    rotateX.set(0)
    rotateY.set(0)
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d",
        rotateX,
        rotateY,
      }}
      className="relative w-full max-w-sm mx-auto h-[420px] rounded-3xl bg-gray-900/40 border border-white/10 backdrop-blur-xl shadow-2xl overflow-hidden cursor-pointer group perspective-1000"
    >
      <div 
        style={{ transform: "translateZ(50px)" }} 
        className="absolute inset-0 p-8 flex flex-col justify-between z-20"
      >
        <div className="w-16 h-16 rounded-2xl bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center mb-4 shadow-[0_0_30px_rgba(99,102,241,0.3)]">
          <Code className="w-8 h-8 text-indigo-400" />
        </div>

        <div className="space-y-6">
          <div className="space-y-1">
            <h3 className="text-3xl font-bold text-white tracking-tight">Nitin Jha</h3>
            <p className="text-indigo-400 font-medium">Full Stack Engineer</p>
          </div>

          <div className="grid grid-cols-2 gap-3">
             <div className="p-3 rounded-lg bg-white/5 border border-white/10">
                <p className="text-xs text-gray-400 uppercase tracking-wider">LeetCode Rating</p>
                <p className="text-xl font-bold text-white">1813</p>
             </div>
             <div className="p-3 rounded-lg bg-white/5 border border-white/10">
                <p className="text-xs text-gray-400 uppercase tracking-wider">Problems</p>
                <p className="text-xl font-bold text-white">1000+</p>
             </div>
             <div className="p-3 rounded-lg bg-white/5 border border-white/10 col-span-2">
                <p className="text-xs text-gray-400 uppercase tracking-wider">Education</p>
                <p className="text-white font-medium">Netaji Subhas University of Technology (NSUT)</p>
             </div>
          </div>
        </div>

        <div className="flex items-center gap-3 pt-4 border-t border-white/10">
          <div className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
          </div>
          <span className="text-sm text-gray-300">Open to Opportunities</span>
        </div>
      </div>

      <div className="absolute inset-0 z-0 bg-linear-to-br from-indigo-500/5 via-transparent to-purple-500/5 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-indigo-600/20 rounded-full blur-[80px]" />
    </motion.div>
  )
}

export default function About() {
  const features = [
    {
      icon: Cpu,
      title: "Problem Solving",
      description: "Strong foundation in algorithms and data structures with 1000+ solved problems.",
      color: "text-blue-400",
      bg: "bg-blue-400/10",
      border: "border-blue-400/20"
    },
    {
      icon: Layers,
      title: "Full-Stack Engineering",
      description: "Experience building complete systems using Next.js, React, Node.js, and MongoDB.",
      color: "text-purple-400",
      bg: "bg-purple-400/10",
      border: "border-purple-400/20"
    },
    {
      icon: Briefcase,
      title: "Real-World Experience",
      description: "Delivered production features and performance improvements during an internship.",
      color: "text-emerald-400",
      bg: "bg-emerald-400/10",
      border: "border-emerald-400/20"
    },
  ]

  return (
    <section id="about" className="relative py-24 px-4 bg-black overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-size-[24px_24px]" />
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-indigo-900/20 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div
             initial={{ opacity: 0, x: -50 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8 }}
             className="order-2 lg:order-1"
          >
             <StatsCard />
          </motion.div>

          <div className="space-y-10 order-1 lg:order-2">
            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="space-y-6"
            >
               <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-linear-to-r from-indigo-400 via-purple-400 to-pink-400">
                  About Me
               </h2>
               
               <div className="space-y-4 text-lg text-gray-400 leading-relaxed">
                  <p>
                    I’m a final year Computer Science student at <span className="text-white font-semibold">NSUT</span> and a full stack developer who enjoys building complete, well structured digital products.
                  </p>
                  <p>
                    I like solving problems, understanding how things work at a deeper level, and turning ideas into clean, functional software.
                  </p>
                  <p>
                    Beyond academics, I’ve built multiple projects, completed an internship, and continue to sharpen my skills through constant learning and practice.
                  </p>
               </div>
            </motion.div>

            <div className="grid gap-4">
              {features.map((feature, index) => {
                const Icon = feature.icon
                return (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ x: 10 }}
                    className={`
                      group p-4 rounded-xl border border-white/5 bg-white/5 backdrop-blur-sm 
                      hover:bg-white/10 transition-all duration-300 cursor-default
                      ${feature.border} hover:border-opacity-50
                    `}
                  >
                    <div className="flex items-start gap-4">
                      <div className={`p-3 rounded-lg ${feature.bg} ${feature.color} group-hover:scale-110 transition-transform`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-white mb-1 group-hover:text-indigo-300 transition-colors">
                          {feature.title}
                        </h3>
                        <p className="text-gray-400 text-sm leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
