import React from 'react'
import Hero from './components/Hero'
import Projects from './components/Projects'
import About from './components/About'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Subtle starry background pattern */}
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_50%_-20%,rgba(99,102,241,0.18),transparent_60%)]" />

      {/* Top nav */}
      <header className="relative z-20">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-5">
          <a href="#home" className="font-bold tracking-tight text-white text-lg">Avery</a>
          <nav className="hidden sm:flex items-center gap-6 text-sm text-white/80">
            <a href="#projects" className="hover:text-white">Projects</a>
            <a href="#about" className="hover:text-white">About</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>
        </div>
      </header>

      <main className="relative z-10">
        <Hero />
        <Projects />
        <About />

        {/* Contact section */}
        <section id="contact" className="relative py-20 sm:py-24">
          <div className="relative max-w-4xl mx-auto px-6">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-md">
              <h2 className="text-2xl sm:text-3xl font-bold">Let’s build</h2>
              <p className="mt-2 text-slate-300/90">Have a project in mind? I’m available for select consulting and collaborations.</p>
              <form className="mt-6 grid sm:grid-cols-2 gap-4">
                <input className="w-full rounded-lg bg-slate-900/60 border border-white/10 px-4 py-3 text-sm outline-none focus:border-white/20" placeholder="Your name" />
                <input className="w-full rounded-lg bg-slate-900/60 border border-white/10 px-4 py-3 text-sm outline-none focus:border-white/20" placeholder="Email" />
                <textarea className="sm:col-span-2 w-full min-h-[120px] rounded-lg bg-slate-900/60 border border-white/10 px-4 py-3 text-sm outline-none focus:border-white/20" placeholder="Tell me about your project" />
                <button type="button" className="sm:col-span-2 inline-flex justify-center rounded-xl bg-white text-slate-900 px-5 py-3 font-semibold shadow-lg shadow-blue-500/10 hover:shadow-blue-500/25">
                  Send message
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default App
