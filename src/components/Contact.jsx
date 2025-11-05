import { Mail, Github, Linkedin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="relative bg-gradient-to-b from-black to-[#05090d] py-24">
      <div className="pointer-events-none absolute inset-x-0 -top-20 mx-auto h-40 w-[80%] rounded-full bg-emerald-500/20 blur-3xl" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Let’s build something great</h2>
          <p className="mt-3 text-white/70">
            Open to freelance work, collaborations, and fun side projects.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href="mailto:hello@example.com"
              className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 font-semibold text-black transition hover:bg-emerald-300"
            >
              <Mail size={18} />
              hello@example.com
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-3 font-semibold text-white hover:bg-white/20 transition"
            >
              <Github size={18} />
              GitHub
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-3 font-semibold text-white hover:bg-white/20 transition"
            >
              <Linkedin size={18} />
              LinkedIn
            </a>
          </div>
        </div>
        <p className="mt-12 text-center text-xs text-white/50">© {new Date().getFullYear()} My Portfolio — Built with love and a hint of caffeine.</p>
      </div>
    </section>
  );
}
