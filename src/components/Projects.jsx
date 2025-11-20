import React from 'react'
import { Server, Database, Sparkles, Shield } from 'lucide-react'

const items = [
  {
    icon: <Sparkles className="h-5 w-5" />,
    title: 'Generative Agents Platform',
    desc: 'Multi-agent Orchestration with tools, memory, and planning for enterprise workflows.',
    tags: ['Agents', 'Tool-use', 'Observability']
  },
  {
    icon: <Database className="h-5 w-5" />,
    title: 'RAG at Scale',
    desc: 'Vector pipelines, evaluators, and cache layers powering sub-200ms responses.',
    tags: ['RAG', 'Embeddings', 'Evaluation']
  },
  {
    icon: <Server className="h-5 w-5" />,
    title: 'Inference Platform',
    desc: 'Autoscaled serverless GPU inference with cost-aware routing and canary deploys.',
    tags: ['Serving', 'Scaling', 'Observability']
  },
  {
    icon: <Shield className="h-5 w-5" />,
    title: 'Safety & Guardrails',
    desc: 'Policy engines, red-teaming harnesses, and robust monitoring for compliance.',
    tags: ['Safety', 'Guardrails', 'Monitoring']
  }
]

const Projects = () => {
  return (
    <section id="projects" className="relative py-20 sm:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(closest-side,rgba(59,130,246,0.08),transparent_60%)]" />
      <div className="relative max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Selected Work</h2>
          <p className="mt-3 text-slate-300/90">A snapshot of systems I’ve shipped recently</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it, idx) => (
            <div key={idx} className="group relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-5 hover:bg-white/10 transition">
              <div className="flex items-center justify-between">
                <div className="text-white/90">{it.icon}</div>
                <div className="text-xs text-white/60">Case Study</div>
              </div>
              <h3 className="mt-3 text-lg font-semibold text-white">{it.title}</h3>
              <p className="mt-1 text-sm text-slate-300/90">{it.desc}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {it.tags.map((t) => (
                  <span key={t} className="text-xs rounded-md bg-slate-900/60 border border-white/10 text-white/80 px-2 py-1">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
