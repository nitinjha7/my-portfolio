"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Briefcase, GraduationCap, Users } from "lucide-react"

export default function ProfessionalJourney() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  })

  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1])

  const timelineData = [
    {
      type: "work",
      title: "Software Development Intern",
      organization: "Biofield Power Pvt. Ltd. (IIT Ropar Startup)",
      date: "June 2025 – July 2025",
      description:
        "Developed end-to-end scalable modules using Next.js and Node.js. Optimized UI rendering by 28% and implemented secure RESTful APIs for a distributed system architecture.",
      tags: ["Next.js", "Node.js", "MongoDB", "Redux"],
      icon: Briefcase,
      color: "text-blue-400",
      bg: "bg-blue-500/20",
    },
    {
      type: "responsibility",
      title: "Organizing Committee Member",
      organization: "Finance & Economics Society, NSUT",
      date: "2023 – 2024",
      description:
        "Managed large-scale events and enhanced team coordination. Developed leadership and financial management skills through cross-college collaborations.",
      tags: ["Leadership", "Event Management", "Finance"],
      icon: Users,
      color: "text-purple-400",
      bg: "bg-purple-500/20",
    },
    {
      type: "education",
      title: "B.Tech in Computer Science",
      organization: "Netaji Subhas University of Technology",
      date: "Nov 2022 – Present",
      description:
        "Final year undergraduate specialized in CSE. Built a strong foundation in Data Structures, Algorithms (LeetCode 1813), and System Design.",
      tags: ["DSA", "DBMS", "OS"],
      icon: GraduationCap,
      color: "text-amber-400",
      bg: "bg-amber-500/20",
    },
  ]

  return (
    <section id="experience" className="relative py-24 px-4 bg-black text-white overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-blue-900/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-20 left-0 w-[500px] h-[500px] bg-purple-900/20 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10" ref={containerRef}>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-linear-to-r from-blue-400 via-purple-400 to-amber-400">
            Professional Journey
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            My path from engineering student to software developer.
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-800">
            <motion.div 
              style={{ scaleY, transformOrigin: "top" }}
              className="absolute top-0 left-0 w-full h-full bg-linear-to-b from-blue-500 via-purple-500 to-amber-500"
            />
          </div>

          <div className="space-y-12">
            {timelineData.map((item, index) => {
              const isEven = index % 2 === 0
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className={`relative flex flex-col md:flex-row gap-8 ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-black border-4 border-gray-700 z-10 mt-6 md:mt-8">
                     <div className={`w-full h-full rounded-full ${item.bg.replace('/20', '')} animate-pulse`} />
                  </div>

                  <div className="ml-20 md:ml-0 flex-1">
                    <div className={`p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm hover:border-white/20 transition-all group ${
                      isEven ? "md:text-left" : "md:text-right"
                    }`}>
                      <div className={`flex flex-col gap-2 mb-4 ${
                         isEven ? "md:items-start" : "md:items-end"
                      }`}>
                        <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium ${item.bg} ${item.color} w-fit`}>
                           <item.icon className="w-3 h-3" />
                           {item.date}
                        </span>
                        <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-gray-400 font-medium">
                          {item.organization}
                        </p>
                      </div>

                      <p className="text-gray-400 text-sm leading-relaxed mb-4">
                        {item.description}
                      </p>

                      <div className={`flex flex-wrap gap-2 ${
                        isEven ? "justify-start" : "justify-start md:justify-end"
                      }`}>
                        {item.tags.map((tag, i) => (
                          <span 
                            key={i} 
                            className="text-xs px-2 py-1 rounded-md bg-white/5 text-gray-300 border border-white/5"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex-1 hidden md:block" />
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
