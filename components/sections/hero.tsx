"use client"

import { useEffect, useRef } from "react"
import { motion, useAnimation, useInView, easeInOut } from "framer-motion"
import { ArrowRight, Terminal, Database, Globe, Cpu, FileJson, Sparkles, Download } from "lucide-react"
import Link from "next/link"

const floatingVariant = {
  initial: { y: 0 },
  animate: {
    y: [0, -20, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: easeInOut,
    },
  },
}

export default function Hero() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const mainControls = useAnimation()

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible")
    }
  }, [isInView, mainControls])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: easeInOut }
    },
  }

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black pt-20">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[24px_24px] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-indigo-500 opacity-20 blur-[100px]" />

      <motion.div 
        animate={{ opacity: [0.3, 0.5, 0.3], scale: [1, 1.1, 1] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-1/3 left-0 w-72 h-72 bg-violet-500/10 rounded-full blur-[80px]" 
      />
      <motion.div 
         animate={{ opacity: [0.3, 0.5, 0.3], scale: [1, 1.2, 1] }}
         transition={{ duration: 10, repeat: Infinity, delay: 2 }}
         className="absolute bottom-1/3 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-[80px]" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="space-y-8 text-center lg:text-left">
            <motion.div variants={textVariants} className="flex justify-center lg:justify-start">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-md shadow-lg shadow-indigo-500/10">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                <span className="text-sm font-medium text-gray-300 tracking-wide">Welcome to my portfolio</span>
              </div>
            </motion.div>

            <motion.div variants={textVariants} className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-bold leading-tight text-white tracking-tight">
                Hi, I'm <br className="hidden lg:block" />
                <span className="bg-linear-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Nitin Jha.
                </span>
              </h1>
              <p className="text-lg md:text-xl text-gray-400 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Full-Stack Developer focused on <span className="text-gray-200 font-semibold">clean engineering</span>, <span className="text-gray-200 font-semibold">performance</span>, and building scalable production systems.
              </p>
            </motion.div>

            <motion.div variants={textVariants} className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <Link href="#projects" className="group relative px-8 py-3 rounded-xl bg-white text-black font-bold shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] transition-all overflow-hidden">
                <div className="absolute inset-0 bg-linear-to-r from-indigo-400 via-purple-400 to-pink-400 opacity-0 group-hover:opacity-20 transition-opacity" />
                <span className="relative flex items-center gap-2">
                  My Work 
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>

              <Link 
                href="https://tiny.cc/nitin-resume" 
                target="_blank" 
                className="px-8 py-3 rounded-xl bg-white/5 border border-white/10 text-white font-semibold hover:bg-white/10 hover:border-white/20 transition-all flex items-center gap-2"
              >
                <Download className="w-4 h-4" />
                View Resume
              </Link>
            </motion.div>
          </div>

          <motion.div variants={textVariants} className="relative h-[400px] lg:h-[500px] flex items-center justify-center perspective-1000">
            <motion.div 
              initial={{ rotateY: -10, rotateX: 5 }}
              animate={{ rotateY: 10, rotateX: -5 }}
              transition={{ duration: 6, repeat: Infinity, repeatType: "mirror", ease: easeInOut }}
              className="relative z-20 w-80 md:w-96 bg-gray-900/80 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl overflow-hidden"
            >
              <div className="flex items-center gap-2 px-4 py-3 bg-white/5 border-b border-white/5">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/50" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                  <div className="w-3 h-3 rounded-full bg-green-500/50" />
                </div>
                <div className="text-xs text-gray-500 ml-2 font-mono">nitin@nsut:~/portfolio</div>
              </div>

              <div className="p-6 space-y-4 font-mono text-sm">
                <div className="flex gap-2">
                  <span className="text-pink-400">➜</span>
                  <span className="text-cyan-400">~</span>
                  <span className="text-gray-300 typing-effect">npm install awesome-skills</span>
                </div>
                <div className="text-gray-400">
                  <span className="text-green-400">✔</span> Added 3 packages:
                  <div className="pl-4 mt-2 space-y-1 text-gray-300">
                    <div>+ @core/distributed-systems</div>
                    <div>+ @frontend/next-js</div>
                    <div>+ @backend/scalable-arch</div>
                  </div>
                </div>
                <div className="flex gap-2 pt-2">
                  <span className="text-pink-400">➜</span>
                  <span className="text-cyan-400">~</span>
                  <span className="animate-pulse">_</span>
                </div>
              </div>
            </motion.div>

            <div className="absolute inset-0 pointer-events-none">
              <motion.div 
                variants={floatingVariant}
                initial="initial"
                animate="animate"
                className="absolute top-10 right-10 md:right-20 p-4 rounded-2xl bg-gray-800/80 backdrop-blur-md border border-white/10 shadow-xl"
              >
                <Globe className="w-8 h-8 text-blue-400" />
              </motion.div>

              <motion.div 
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease:easeInOut, delay: 1 }}
                className="absolute bottom-20 left-4 md:left-10 p-4 rounded-2xl bg-gray-800/80 backdrop-blur-md border border-white/10 shadow-xl"
              >
                <Database className="w-8 h-8 text-green-400" />
              </motion.div>

              <motion.div 
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: easeInOut, delay: 0.5 }}
                className="absolute top-20 left-0 p-3 rounded-2xl bg-gray-800/80 backdrop-blur-md border border-white/10 shadow-xl"
              >
                <Cpu className="w-6 h-6 text-purple-400" />
              </motion.div>
            </div>

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-indigo-500/30 rounded-full blur-[100px] -z-10" />
          </motion.div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ delay: 1, duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500"
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <div className="w-px h-12 bg-linear-to-brom-gray-500 to-transparent" />
        </motion.div>
      </div>
    </section>
  )
}
