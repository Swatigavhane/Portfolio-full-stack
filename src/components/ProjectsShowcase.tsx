import React from 'react';
import { Sparkles, ArrowUpRight, Play, Terminal, Layers } from 'lucide-react';

interface ProjectsShowcaseProps {
  onOpenDemo: (tab: 'webrtc' | 'csv' | 'editor') => void;
}

export const ProjectsShowcase: React.FC<ProjectsShowcaseProps> = ({ onOpenDemo }) => {
  const projects = [
    {
      id: 'webrtc',
      title: 'Real-Time Audio/Video Support Platform & Embeddable Web SDK',
      tag: 'PHONEPE FINTECH',
      framework: 'Next.js',
      category: 'Production Scale',
      description:
        "Engineered an end-to-end video/audio KYC and customer support platform powered by LiveKit WebRTC, completely eliminating third-party vendor licensing costs. Built a modular, embeddable Web SDK integrated into PhonePe's agent portal with TanStack Query server-state synchronization.",
      stats: [
        { label: 'LATENCY', value: '< 180 ms', color: 'text-secondary' },
        { label: 'CSAT IMPACT', value: '+40% Boost', color: 'text-primary' },
        { label: '3RD-PARTY COST', value: '0 INR (Saved)', color: 'text-tertiary' },
      ],
      techs: ['LiveKit', 'WebRTC', 'React Query', 'WebSockets', 'Embeddable SDK'],
      demoTab: 'webrtc' as const,
      demoLabel: 'Explore WebRTC Architecture',
    },
    {
      id: 'csv-ai',
      title: 'CSV to Interactive Dashboard — AI-Powered Data Visualization',
      tag: 'GENAI & DUCKDB-WASM',
      framework: 'Next.js',
      category: 'Data Architecture',
      description:
        'A client-side fullstack application allowing users to upload arbitrary CSV data and instantly produce interactive charts and KPI grids. Leveraged Hugging Face / OpenAI APIs for automated schema inference and chart recommendations, executed on DuckDB-wasm for 100% in-browser SQL queries.',
      stats: [
        { label: 'COMPUTE ENGINE', value: 'DuckDB-wasm', color: 'text-secondary' },
        { label: 'DATA PRIVACY', value: '100% On-Device', color: 'text-primary' },
        { label: 'QUERY SPEED', value: '< 15 ms', color: 'text-tertiary' },
      ],
      techs: ['GenAI APIs', 'DuckDB-wasm', 'Recharts', 'React Table', 'Papa Parse'],
      demoTab: 'csv' as const,
      demoLabel: 'Launch DuckDB-wasm Query Sandbox',
    },
    {
      id: 'editor',
      title: 'Rich Text Editor & Custom Headless Form Engine',
      tag: 'HEADLESS UI ENGINE',
      framework: 'Next.js',
      category: 'DOM Architecture',
      description:
        'A custom rich text editor built from scratch without bloated third-party dependencies. Implemented raw DOM Selection and Range API handling, inline formatting tokens, custom undo/redo history stack, and full WCAG 2.1 AAA keyboard navigation compliance.',
      stats: [
        { label: 'ACCESSIBILITY', value: 'WCAG 2.1 AAA', color: 'text-secondary' },
        { label: 'BUNDLE SIZE', value: '< 8 KB Gzipped', color: 'text-primary' },
        { label: 'TEST SUITE', value: 'Playwright + Unit', color: 'text-tertiary' },
      ],
      techs: [
        'TypeScript',
        'DOM Selection API',
        'Undo/Redo Stack',
        'Playwright E2E',
        'ARIA Roles',
      ],
      demoTab: 'editor' as const,
      demoLabel: 'Test Live Editor Primitive',
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-12" id="projects">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
        <div className="w-full">
          <span className="font-mono text-xs uppercase tracking-widest text-secondary block mb-1">
            Production Systems
          </span>
          <h2 className="font-headline text-2xl md:text-3xl text-on-surface font-semibold tracking-tight">
            Featured Work &amp; Case Studies
          </h2>
        </div>
        <p className="font-body text-xs md:text-sm text-outline max-w-md leading-relaxed">
          Highlighted platforms across real-time WebRTC media, client-side SQL with GenAI visualization,
          and custom headless editing primitives.
        </p>
      </div>

      {/* Projects List */}
      <div className="space-y-6 flex flex-col">
        {projects.map((proj) => (
          <div
            key={proj.id}
            className="rounded-xl bg-surface-container p-6 md:p-8 border border-outline-variant/60 hover:bg-surface-container-high transition-all w-full group"
          >
            <div className="flex flex-col gap-5">
              {/* Top Tags */}
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="font-mono text-[11px] px-2.5 py-0.5 rounded bg-surface-container-lowest text-primary font-medium">
                    {proj.tag}
                  </span>
                  <span className="font-mono text-[11px] px-2.5 py-0.5 rounded bg-surface-container-lowest text-secondary font-medium flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                    {proj.framework}
                  </span>
                  <span className="font-mono text-[11px] text-outline">
                    {proj.category}
                  </span>
                </div>

                {/* Interactive Demo Trigger */}
                <button
                  onClick={() => onOpenDemo(proj.demoTab)}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-surface-container-lowest border border-outline-variant/50 hover:border-primary/60 text-primary font-mono text-xs transition-all cursor-pointer"
                >
                  <Play className="w-3 h-3 fill-current" />
                  <span>{proj.demoLabel}</span>
                </button>
              </div>

              {/* Title & Description */}
              <div>
                <h3 className="font-headline text-lg md:text-xl text-on-surface font-semibold group-hover:text-primary transition-colors">
                  {proj.title}
                </h3>
                <p className="font-body text-xs md:text-sm text-on-surface-variant mt-2 leading-relaxed">
                  {proj.description}
                </p>
              </div>

              {/* Metric Highlights */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 py-1">
                {proj.stats.map((stat, sIdx) => (
                  <div
                    key={sIdx}
                    className="p-3 rounded-lg bg-surface-container-lowest border border-outline-variant/30"
                  >
                    <div className="font-mono text-[10px] text-outline uppercase tracking-wider">
                      {stat.label}
                    </div>
                    <div className={`font-headline text-base md:text-lg ${stat.color} font-semibold mt-0.5`}>
                      {stat.value}
                    </div>
                  </div>
                ))}
              </div>

              {/* Tech Stack Chips */}
              <div className="flex flex-wrap gap-2 text-outline font-mono text-[11px]">
                {proj.techs.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded bg-surface-container-low border border-outline-variant/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
