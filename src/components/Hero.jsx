import React from 'react'
import Spline from '@splinetool/react-spline'
import { ArrowRight, Mail, Github, Linkedin } from 'lucide-react'

const Hero = () => {
  const backendUrl = import.meta.env.VITE_BACKEND_URL // reserved for future use

  return (
    <section id="home" className="relative min-h-[92vh] w-full overflow-hidden">
      {/* Spline 3D scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient aura overlays (non-blocking) */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(closest-side,rgba(147,51,234,0.12),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(closest-side,rgba(59,130,246,0.10),transparent_55%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/30 via-transparent to-slate-950" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-28 pb-16 sm:pt-36">
        <div className="text-center">
          <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs sm:text-sm text-white/80 backdrop-blur-md">
            AI Engineering • GenAI Systems • MLOps
          </span>
          <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white">
            Hi, I’m Avery — AI Engineer
          </h1>
          <p className="mt-4 text-base sm:text-lg md:text-xl text-slate-200/90 max-w-3xl mx-auto">
            I design, build, and ship production-grade AI systems: RAG platforms, multi-agent workflows, scalable inference, and robust MLOps.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a href="#projects" className="group inline-flex items-center gap-2 rounded-xl bg-white text-slate-900 px-5 py-3 font-semibold shadow-lg shadow-blue-500/10 transition hover:shadow-blue-500/25">
              Explore Projects
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
            </a>
            <a href="mailto:hello@avery.ai" className="inline-flex items-center gap-2 rounded-xl bg-white/10 text-white px-5 py-3 font-semibold backdrop-blur-md border border-white/10 hover:bg-white/15 transition">
              <Mail className="h-4 w-4" /> Contact
            </a>
          </div>

          <div className="mt-6 flex items-center justify-center gap-4">
            <a href="https://github.com/" target="_blank" rel="noreferrer" className="text-white/80 hover:text-white transition" aria-label="GitHub">
              <Github className="h-5 w-5" />
            </a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="text-white/80 hover:text-white transition" aria-label="LinkedIn">
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
