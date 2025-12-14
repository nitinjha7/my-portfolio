"use client"

import React, { useState, useRef } from "react"
import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion"
import { 
  SiCplusplus, SiPython, SiJavascript, SiTypescript, SiMysql,
  SiReact, SiNextdotjs, SiTailwindcss, SiRedux, SiFramer,
  SiNodedotjs, SiExpress, SiMongodb, SiSocketdotio, SiJsonwebtokens,
  SiGit, SiGithub, SiLinux, SiPostman, SiVercel, SiRender
} from "react-icons/si"
import { Code2, Monitor, Server, Wrench } from "lucide-react"

const ROTATION_RANGE = 20.5
const HALF_ROTATION_RANGE = 20.5 / 2

const skillCategories = {
  languages: {
    icon: Code2,
    title: "Languages",
    items: [
      { name: "C++", icon: SiCplusplus, color: "#00599C" },
      { name: "Python", icon: SiPython, color: "#3776AB" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
    ],
  },
  frontend: {
    icon: Monitor,
    title: "Frontend",
    items: [
      { name: "React.js", icon: SiReact, color: "#61DAFB" },
      { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
      { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" },
      { name: "Redux", icon: SiRedux, color: "#764ABC" },
      { name: "Framer", icon: SiFramer, color: "#0055FF" },
    ],
  },
  backend: {
    icon: Server,
    title: "Backend",
    items: [
      { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
      { name: "Express", icon: SiExpress, color: "#ffffff" },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "SQL", icon: SiMysql, color: "#4479A1" },
      { name: "Socket.io", icon: SiSocketdotio, color: "#ffffff" },
      { name: "JWT", icon: SiJsonwebtokens, color: "#D63AFF" },
    ],
  },
  tools: {
    icon: Wrench,
    title: "Tools",
    items: [
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "Linux", icon: SiLinux, color: "#FCC624" },
      { name: "Postman", icon: SiPostman, color: "#FF6C37" },
      { name: "Vercel", icon: SiVercel, color: "#ffffff" },
      { name: "Render", icon: SiRender, color: "#D2E555" },
    ],
  },
}

const TiltCard = ({ item }: { item: any }) => {
  const ref = useRef<HTMLDivElement>(null)

  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const xSpring = useSpring(x)
  const ySpring = useSpring(y)

  const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return

    const rect = ref.current.getBoundingClientRect()

    const width = rect.width
    const height = rect.height

    const mouseX = (e.clientX - rect.left) * ROTATION_RANGE
    const mouseY = (e.clientY - rect.top) * ROTATION_RANGE

    const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1
    const rY = mouseX / width - HALF_ROTATION_RANGE

    x.set(rX)
    y.set(rY)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  const Icon = item.icon

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d",
        transform,
      }}
      className="relative h-40 w-full rounded-xl bg-linear-to-br from-white/5 to-white/0 border border-white/10 backdrop-blur-md cursor-pointer group"
    >
      <div
        style={{
          transform: "translateZ(75px)",
          transformStyle: "preserve-3d",
        }}
        className="absolute inset-0 grid place-content-center"
      >
        <Icon className="w-12 h-12 mx-auto mb-2 transition-colors duration-300 group-hover:text-white" style={{ color: item.color }} />
        <p className="text-center font-bold text-gray-200 group-hover:text-white tracking-wider text-sm">
          {item.name}
        </p>
      </div>

      <div 
        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `radial-gradient(circle at 50% 0%, rgba(255,255,255,0.15) 0%, transparent 60%)`
        }} 
      />
    </motion.div>
  )
}

export default function Skills3D() {
  const [activeCategory, setActiveCategory] = useState<keyof typeof skillCategories>("languages")
  const categories = Object.keys(skillCategories) as (keyof typeof skillCategories)[]

  return (
    <section id="skills" className="relative min-h-[800px] w-full bg-black py-32 overflow-hidden flex flex-col items-center">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[24px_24px] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
      
      <div className="absolute top-[20%] right-[10%] w-[500px] h-[500px] bg-indigo-600/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[10%] left-[10%] w-[400px] h-[400px] bg-violet-600/20 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16 space-y-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold"
          >
            <span className="bg-linear-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Skills & Technologies
            </span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-lg max-w-2xl mx-auto"
          >
            A snapshot of my technical toolkit across the full development stack
          </motion.p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((cat) => {
            const Icon = skillCategories[cat].icon
            const isActive = activeCategory === cat
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`
                  relative px-8 py-3 rounded-full flex items-center gap-3 transition-all duration-300 border
                  ${isActive 
                    ? 'bg-white text-black scale-105 border-white shadow-[0_0_20px_rgba(255,255,255,0.3)]' 
                    : 'bg-white/5 border-white/10 text-gray-400 hover:bg-white/10 hover:text-white hover:border-white/20'
                  }
                `}
              >
                <Icon className="w-4 h-4" />
                <span className="font-semibold capitalize">{cat}</span>
              </button>
            )
          })}
        </div>

        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 perspective-1000"
        >
          {skillCategories[activeCategory].items.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <TiltCard item={item} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
