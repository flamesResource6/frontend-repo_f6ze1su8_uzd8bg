import React from 'react'

const Footer = () => {
  return (
    <footer className="relative py-10 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-white/70">
        <p>© {new Date().getFullYear()} Avery — AI Engineer</p>
        <div className="flex items-center gap-4">
          <a href="#home" className="hover:text-white">Home</a>
          <a href="#projects" className="hover:text-white">Projects</a>
          <a href="#about" className="hover:text-white">About</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
