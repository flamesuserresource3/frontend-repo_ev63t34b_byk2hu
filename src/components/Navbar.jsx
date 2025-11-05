import { useState } from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 flex items-center justify-between rounded-full border border-white/10 bg-white/10 p-2 backdrop-blur-xl shadow-lg">
          <a href="#home" className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold text-white">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>My Portfolio</span>
          </a>

          <nav className="hidden md:flex items-center gap-6 text-sm text-white/80">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="hover:text-white transition-colors">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-2">
            <a href="mailto:hello@example.com" className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-white hover:bg-white/20 transition">
              <Mail size={18} />
              <span className="hidden sm:block">Say hello</span>
            </a>
            <a href="https://github.com" target="_blank" rel="noreferrer" className="p-2 rounded-full hover:bg-white/10 text-white">
              <Github size={20} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="p-2 rounded-full hover:bg-white/10 text-white">
              <Linkedin size={20} />
            </a>
          </div>

          <button onClick={() => setOpen((v) => !v)} className="md:hidden rounded-full p-2 text-white hover:bg-white/10">
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mt-2 rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur-xl text-white/90">
            <nav className="flex flex-col gap-3">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="rounded-lg px-3 py-2 hover:bg-white/10">
                  {item.label}
                </a>
              ))}
            </nav>
            <div className="mt-4 flex items-center gap-3">
              <a href="mailto:hello@example.com" className="inline-flex items-center gap-2 rounded-lg bg-white/10 px-3 py-2 hover:bg-white/20 transition">
                <Mail size={18} />
                Email
              </a>
              <a href="https://github.com" target="_blank" rel="noreferrer" className="p-2 rounded-lg hover:bg-white/10">
                <Github size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="p-2 rounded-lg hover:bg-white/10">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
