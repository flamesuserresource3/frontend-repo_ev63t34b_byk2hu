import Spline from '@splinetool/react-spline';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative h-[90vh] min-h-[600px] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />

      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl text-white">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium backdrop-blur">
            <Sparkles size={14} className="text-emerald-300" />
            Interactive • Tech • Modern
          </div>
          <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl leading-tight">
            Crafting playful, modern web experiences
          </h1>
          <p className="mt-4 text-white/80 text-lg">
            I build high-performance products with delightful interactions, blending 3D, motion, and clean design.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#projects" className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-5 py-3 font-semibold text-black hover:bg-emerald-400 transition shadow-lg">
              Explore Projects
              <ArrowRight size={18} />
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-3 font-semibold text-white hover:bg-white/20 transition">
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
