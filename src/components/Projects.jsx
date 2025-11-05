import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Neon Dashboard',
    desc: 'Analytics with reactive charts and real-time data.',
    tags: ['React', 'Tailwind', 'Realtime'],
    link: '#',
  },
  {
    title: '3D Product Configurator',
    desc: 'Interactive viewer with custom material swaps.',
    tags: ['Three.js', 'Spline', 'UX'],
    link: '#',
  },
  {
    title: 'AI Docs Assistant',
    desc: 'Semantic search and chat over documentation.',
    tags: ['FastAPI', 'Vector DB', 'Embeddings'],
    link: '#',
  },
  {
    title: 'Design System',
    desc: 'Component library with tokens and theming.',
    tags: ['Storybook', 'Radix', 'Design'],
    link: '#',
  },
  {
    title: 'Portfolio v3',
    desc: 'Playful motion, sound, and micro-interactions.',
    tags: ['Framer', 'Motion', 'Audio'],
    link: '#',
  },
  {
    title: 'E-commerce Starter',
    desc: 'Headless storefront with checkout and CMS.',
    tags: ['Next.js', 'Stripe', 'CMS'],
    link: '#',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative bg-black py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex items-end justify-between">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Selected Projects</h2>
            <p className="mt-2 text-white/60">Hover to preview. Click to explore details.</p>
          </div>
          <a href="#contact" className="hidden sm:inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white hover:bg-white/10 transition">
            Work together
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <a
              key={p.title}
              href={p.link}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.03] p-6 text-white shadow-lg transition-transform hover:-translate-y-1 hover:shadow-emerald-500/20"
            >
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-emerald-500/10 blur-3xl group-hover:bg-emerald-500/20 transition" />
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-xl font-semibold">{p.title}</h3>
                <ExternalLink className="opacity-60 group-hover:opacity-100 transition" size={18} />
              </div>
              <p className="mt-3 text-white/70">{p.desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="rounded-full bg-white/10 px-3 py-1 text-xs text-white/80">
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-6 h-28 w-full rounded-lg bg-gradient-to-tr from-emerald-500/10 to-cyan-400/10 ring-1 ring-inset ring-white/10 group-hover:from-emerald-500/20 group-hover:to-cyan-400/20 transition" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
