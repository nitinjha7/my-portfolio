"use client"

import { useRef } from "react"
import { motion, useMotionTemplate, useMotionValue } from "framer-motion"
import { ExternalLink, Github, ArrowUpRight, Layers } from "lucide-react"

const projects = [
  {
    title: "InteractPro",
    subtitle: "Real-Time Chat Infrastructure",
    description: "High-concurrency chat platform engineered with WebSockets. Features optimistic UI updates, JWT security, and Redis-like state management for <100ms latency.",
    tags: ["React", "Node.js", "Socket.io", "MongoDB"],
    live: "https://interactpro.vercel.app/",
    github: "https://github.com/nitinjha7/InteractPro-ChatApplication",
    color: "#818cf8"
  },
  {
    title: "AstraFin",
    subtitle: "AI-Powered Financial Intelligence",
    description: "Next.js application integrating Gemini API for predictive budgeting. Handles complex financial data visualization with server-side rendering for optimal performance.",
    tags: ["Next.js", "Gemini AI", "Tailwind", "Recharts"],
    live: "https://astrafin.vercel.app/",
    github: "https://github.com/nitinjha7/AstraFin",
    color: "#38bdf8"
  },
  {
    title: "Reservation System",
    subtitle: "Full-Stack Booking Engine",
    description: "End-to-end MERN solution for restaurant management. Includes automated email microservices, role-based access control, and atomic transaction handling.",
    tags: ["MERN Stack", "Nodemailer", "JWT", "Render"],
    live: "https://restaurant-table-booking.vercel.app/",
    github: "https://github.com/nitinjha7/Restaurant-Table-Booking-System",
    color: "#34d399"
  },
  {
    title: "Portfolio V1",
    subtitle: "Interactive 3D Experience",
    description: "Current site. Leveraging Framer Motion for complex gesture handling and Three.js concepts for depth. Built with strict TypeScript and component modularity.",
    tags: ["Next.js", "Framer Motion", "TypeScript", "3D"],
    live: "#",
    github: "#",
    color: "#f472b6"
  },
]

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect()
    mouseX.set(clientX - left)
    mouseY.set(clientY - top)
  }

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative border border-white/10 bg-gray-900/40 overflow-hidden rounded-3xl"
    >
      <motion.div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              ${project.color}15,
              transparent 80%
            )
          `,
        }}
      />
      
      <div className="relative h-full flex flex-col p-8 z-10">
        <div className="flex justify-between items-start mb-6">
          <div className="p-3 rounded-xl bg-white/5 border border-white/10 group-hover:border-white/20 transition-colors backdrop-blur-md">
             <Layers className="w-6 h-6" style={{ color: project.color }} />
          </div>
          
          <div className="flex gap-3">
             <a 
               href={project.github} 
               target="_blank" 
               rel="noopener noreferrer"
               className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors text-gray-400 hover:text-white"
               title="View Code"
             >
                <Github className="w-5 h-5" />
             </a>
             <a 
               href={project.live} 
               target="_blank" 
               rel="noopener noreferrer"
               className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors text-gray-400 hover:text-white"
               title="View Live App"
             >
                <ArrowUpRight className="w-5 h-5" />
             </a>
          </div>
        </div>

        <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-linear-to-r group-hover:from-white group-hover:to-gray-400 transition-all">
          {project.title}
        </h3>
        
        <p className="text-sm font-semibold tracking-wide mb-4 uppercase" style={{ color: project.color }}>
          {project.subtitle}
        </p>
        
        <p className="text-gray-400 leading-relaxed mb-8 grow">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mt-auto">
          {project.tags.map((tag) => (
            <span 
              key={tag} 
              className="text-xs font-medium px-3 py-1 rounded-full bg-white/5 text-gray-300 border border-white/5 group-hover:border-white/10 transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="relative py-32 px-4 bg-black overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-indigo-900/20 via-black to-black -z-10" />

      <div className="max-w-7xl mx-auto">
        <motion.div 
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="text-center mb-16 space-y-4"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-linear-to-r from-indigo-400 via-purple-400 to-pink-400">
            Featured Work
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A selection of projects focusing on high-concurrency systems, AI integration, and scalable architecture.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <a
            href="https://github.com/nitinjha7"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-indigo-500/50 transition-all text-white font-medium"
          >
            View all repositories on GitHub
            <ExternalLink className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform text-indigo-400" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
