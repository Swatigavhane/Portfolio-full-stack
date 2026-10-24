import React from 'react';
import { Layers, Gauge, Cpu, Code2, Activity, ArrowDownRight, Mail } from 'lucide-react';

interface HeroProps {
  onSelectTech?: (tech: string) => void;
  selectedTech?: string | null;
}

export const Hero: React.FC<HeroProps> = ({ onSelectTech, selectedTech }) => {
  const coreTech = [
    { name: 'React', color: 'primary' },
    { name: 'Next.js', color: 'primary' },
    { name: 'TypeScript', color: 'secondary' },
    { name: 'JavaScript', color: 'secondary' },
    { name: 'Node.js', color: 'primary' },
    { name: 'Tailwind CSS', color: 'primary' },
    { name: 'WebRTC', color: 'tertiary' },
    { name: 'PostgreSQL', color: 'secondary' },
  ];

  const archPills = [
    'Component Architecture',
    'Design Systems',
    'State Management',
    'Micro-Frontends',
    'API Architecture',
  ];

  const perfPills = [
    'Core Web Vitals',
    'React Profiler',
    'Automated Testing',
    'Accessibility',
    'Memory Profiling',
  ];

  return (
    <section className="relative w-full pt-16 md:pt-20 pb-10" id="overview">
      {/* Subtle Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1100px] h-[520px] bg-gradient-to-b from-primary/10 via-secondary/5 to-transparent blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        <div className="flex flex-col items-start gap-5 w-full max-w-5xl py-4">
          {/* Intro Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface-container-high border border-primary/20">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
            </span>
            <span className="font-mono text-xs text-primary font-medium tracking-wide">
              Senior Fullstack Engineer • 6+ Yrs Exp
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-headline font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-[46px] text-on-surface tracking-tight leading-[1.18]">
            Architecting high-scale web platforms,{' '}
            <span className="text-primary font-semibold">real-time systems</span>, and AI integrations.
          </h1>

          {/* Bio Description */}
          <p className="font-body text-base md:text-lg text-on-surface-variant max-w-2xl leading-relaxed">
            Senior Full Stack Engineer with 6+ years of experience engineering scalable web systems,
            WebRTC streaming architectures, and modern AI interfaces. Proven impact reducing
            latency, lowering infrastructure overhead, and delivering reliable platforms for millions
            of users.
          </p>

          {/* CTA Actions */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              href="#experience"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-primary text-on-primary font-mono text-xs font-semibold hover:bg-primary-fixed-dim transition-all shadow-[0_0_16px_rgba(6,182,212,0.35)]"
            >
              <ArrowDownRight className="w-4 h-4" />
              <span>View Experience &amp; Projects</span>
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-surface-container-high hover:bg-surface-variant text-on-surface font-mono text-xs font-semibold border border-outline-variant/60 transition-all"
            >
              <Mail className="w-4 h-4" />
              <span>Get in Touch</span>
            </a>
          </div>

          {/* Core Technologies Bar */}
          <div className="w-full flex flex-col gap-2 pt-6 border-t border-surface-variant/40">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[11px] uppercase tracking-widest text-outline font-semibold flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block"></span>
                Core Technologies &amp; Stack
              </span>
              <span className="font-mono text-[11px] text-outline hidden sm:inline">
                Production-Hardened
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-2 pt-1">
              {coreTech.map((tech) => {
                const isSelected = selectedTech === tech.name;
                const dotColor =
                  tech.color === 'primary'
                    ? 'bg-primary'
                    : tech.color === 'secondary'
                    ? 'bg-secondary'
                    : 'bg-tertiary';

                return (
                  <button
                    key={tech.name}
                    onClick={() => onSelectTech && onSelectTech(tech.name)}
                    className={`inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-surface-container-high border font-mono text-xs transition-all cursor-pointer ${
                      isSelected
                        ? 'border-primary text-primary shadow-[0_0_12px_rgba(76,215,246,0.3)]'
                        : 'border-outline-variant/60 text-on-surface hover:border-primary/50 hover:text-primary'
                    }`}
                  >
                    <span className={`w-1.5 h-1.5 rounded-full ${dotColor}`}></span>
                    <span>{tech.name}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Architecture & Quality Focus Cards */}
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            <div className="p-4 rounded-xl bg-surface-container-high/60 border border-outline-variant/40 hover:border-primary/40 transition-colors">
              <div className="flex items-center gap-2 mb-3">
                <Layers className="text-primary w-4 h-4" />
                <span className="font-mono text-xs uppercase tracking-wider text-on-surface font-semibold">
                  Architecture &amp; Design
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {archPills.map((pill) => (
                  <span
                    key={pill}
                    className="font-mono text-[11px] px-2.5 py-1 rounded-lg bg-surface-container-lowest text-on-surface-variant border border-outline-variant/30 hover:border-primary/40 hover:text-primary transition-colors cursor-default"
                  >
                    {pill}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-4 rounded-xl bg-surface-container-high/60 border border-outline-variant/40 hover:border-secondary/40 transition-colors">
              <div className="flex items-center gap-2 mb-3">
                <Gauge className="text-secondary w-4 h-4" />
                <span className="font-mono text-xs uppercase tracking-wider text-on-surface font-semibold">
                  Performance &amp; Quality
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {perfPills.map((pill) => (
                  <span
                    key={pill}
                    className="font-mono text-[11px] px-2.5 py-1 rounded-lg bg-surface-container-lowest text-on-surface-variant border border-outline-variant/30 hover:border-secondary/40 hover:text-secondary transition-colors cursor-default"
                  >
                    {pill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
