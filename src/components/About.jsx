import React from 'react'

const About = () => {
  return (
    <section id="about" className="relative py-20 sm:py-24">
      <div className="relative max-w-4xl mx-auto px-6">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-md">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">About</h2>
          <p className="mt-3 text-slate-300/90">
            I specialize in end-to-end AI engineering: from data pipelines and retrieval to prompt
            engineering, evaluation, and production operations. I’ve built platforms that power
            copilots, search, analytics, and decision automation for startups and enterprises.
          </p>
          <ul className="mt-4 grid sm:grid-cols-2 gap-3 text-sm text-white/80">
            <li>• LLM architecture, prompt & function calling</li>
            <li>• RAG pipelines, vector stores, evaluators</li>
            <li>• Agents, tools, orchestration, memory</li>
            <li>• MLOps: tracing, metrics, CI/CD, testing</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default About
