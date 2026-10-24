import React, { useState } from 'react';
import { CreditCard, Network, Database, Code, CheckCircle2, Copy, Check } from 'lucide-react';

interface ExperienceTimelineProps {
  filterTech?: string | null;
}

export const ExperienceTimeline: React.FC<ExperienceTimelineProps> = ({ filterTech }) => {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const experiences = [
    {
      id: 'phonepe',
      role: 'Senior Software Engineer – Frontend',
      company: 'PhonePe Pvt. Ltd',
      location: 'Pune, India',
      period: 'Mar 2023 – Present',
      current: true,
      icon: CreditCard,
      accentBorder: 'hover:border-primary/50',
      badgeColor: 'bg-secondary/10 text-secondary border-secondary/30',
      iconBg: 'border-primary/30 text-primary',
      bullets: [
        'Architected and implemented a high-performance, real-time audio/video customer support feature using LiveKit (WebRTC), enabling direct in-app KYC verification and support calls without 3rd-party vendor licensing costs.',
        'Designed and developed an embeddable Web SDK powering the Agent Dashboard across internal operations, integrating TanStack React Query for cached server-state synchronisation and low latency call handling.',
        'Delivered end-to-end bot-assisted live chat customer support with seamless agent handoff, boosting CSAT scores by +40% in high-revenue consumer categories.',
        'Led web performance optimization initiatives, slashing Largest Contentful Paint (LCP) from 4.2s to 1.2s via tree-shaking, bundle code-splitting, lazy hydration, and asset pipeline tuning.',
        'Actively mentored junior and mid-level engineers, institutionalizing strict TypeScript practices, reusable component design systems, and automated testing suites.',
      ],
      skills: [
        { name: 'React.js', color: 'text-primary' },
        { name: 'TypeScript', color: 'text-secondary' },
        { name: 'LiveKit (WebRTC)', color: 'text-tertiary' },
        { name: 'React Query', color: 'text-on-surface' },
        { name: 'Embeddable SDK', color: 'text-outline' },
        { name: 'WebSockets', color: 'text-primary' },
      ],
    },
    {
      id: 'zurutech',
      role: 'Software Developer – Frontend',
      company: 'ZURUTech India Pvt. Ltd',
      location: 'Ahmedabad, India / Remote',
      period: 'Dec 2021 – Mar 2023',
      current: false,
      icon: Network,
      accentBorder: 'hover:border-secondary/50',
      badgeColor: 'bg-surface-container-high text-on-surface-variant border-outline-variant',
      iconBg: 'border-secondary/30 text-secondary',
      bullets: [
        'Led end-to-end frontend development for Netra, an enterprise influencer campaign management platform supporting influencer discovery, campaign tracking, and analytics dashboards.',
        'Built a reusable, accessible UI component library adopted across 3+ client-facing projects, cutting UI duplication by 30% and standardizing accessibility patterns.',
        'Collaborated cross-functionally with product designers and backend teams to implement real-time campaign performance charts and robust client workflows.',
      ],
      skills: [
        { name: 'React', color: 'text-primary' },
        { name: 'Redux Toolkit', color: 'text-secondary' },
        { name: 'Design System', color: 'text-on-surface' },
        { name: 'Tailwind CSS', color: 'text-outline' },
      ],
    },
    {
      id: 'vebholic',
      role: 'Software Developer',
      company: 'Vebholic Pvt. Ltd',
      location: 'Remote',
      period: 'Dec 2020 – Dec 2021',
      current: false,
      icon: Database,
      accentBorder: 'hover:border-tertiary/50',
      badgeColor: 'bg-surface-container-high text-on-surface-variant border-outline-variant',
      iconBg: 'border-tertiary/30 text-tertiary',
      bullets: [
        'Engineered a comprehensive, Salesforce-inspired internal CRM platform featuring lead tracking, activity timelines, and real-time deal pipeline stages.',
        'Constructed dynamic data grids with sorting, multi-attribute filtering, batch mutations, and pagination for high-volume customer records.',
        'Accelerated feature turnaround by 20% by establishing standard frontend-backend API conventions and modular state management slices.',
      ],
      skills: [
        { name: 'React', color: 'text-primary' },
        { name: 'Data Grids', color: 'text-tertiary' },
        { name: 'REST APIs', color: 'text-secondary' },
        { name: 'State Management', color: 'text-outline' },
      ],
    },
    {
      id: 'coruscate',
      role: 'Full-Stack JavaScript Developer',
      company: 'Coruscate Solutions Pvt. Ltd',
      location: 'Surat, India',
      period: 'Aug 2019 – Dec 2020',
      current: false,
      icon: Code,
      accentBorder: 'hover:border-primary/50',
      badgeColor: 'bg-surface-container-high text-on-surface-variant border-outline-variant',
      iconBg: 'border-outline-variant text-outline',
      bullets: [
        'Spearheaded a dynamic JSON-schema driven UI rendering engine, empowering non-technical team members to configure custom client pages and decreasing custom UI development effort by 35%.',
        'Created a complex multi-step form engine featuring conditional validation schemas, field dependency graphs, and draft autosave recovery.',
        'Developed and secured robust Node.js and Express REST APIs interfacing with MongoDB, implementing JWT auth and role-based permissions.',
      ],
      skills: [
        { name: 'Node.js', color: 'text-primary' },
        { name: 'Express', color: 'text-secondary' },
        { name: 'MongoDB', color: 'text-on-surface' },
        { name: 'Schema Engine', color: 'text-tertiary' },
      ],
    },
  ];

  const filteredExperiences = filterTech
    ? experiences.filter((exp) =>
        exp.skills.some((s) => s.name.toLowerCase().includes(filterTech.toLowerCase()))
      )
    : experiences;

  return (
    <section className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-12" id="experience">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
        <div className="w-full">
          <span className="font-mono text-xs uppercase tracking-widest text-primary block mb-1">
            Career Timeline
          </span>
          <h2 className="font-headline text-2xl md:text-3xl text-on-surface font-semibold tracking-tight">
            Professional Experience
          </h2>
        </div>
        <p className="font-body text-xs md:text-sm text-outline max-w-md leading-relaxed">
          6+ years of shipping scalable frontends, resilient micro-frontends, real-time communication
          systems, and high-performance web tooling.
        </p>
      </div>

      {filterTech && (
        <div className="mb-4 flex items-center justify-between p-2.5 px-4 rounded-lg bg-surface-container-high border border-primary/30 text-xs font-mono">
          <span>Filtering experience matching &ldquo;<span className="text-primary font-semibold">{filterTech}</span>&rdquo;</span>
          <span className="text-outline text-[11px]">{filteredExperiences.length} company records</span>
        </div>
      )}

      {/* Experience Cards Stack */}
      <div className="space-y-4 flex flex-col">
        {filteredExperiences.map((exp) => {
          const Icon = exp.icon;
          const isCopied = copiedId === exp.id;

          return (
            <div
              key={exp.id}
              className={`rounded-xl bg-surface-container p-5 md:p-7 border border-outline-variant/60 ${exp.accentBorder} transition-all w-full`}
            >
              {/* Card Header */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 pb-4 border-b border-surface-variant/70">
                <div className="flex items-center gap-3">
                  <div
                    className={`w-10 h-10 rounded-lg bg-surface-container-lowest border ${exp.iconBg} flex items-center justify-center font-bold shrink-0`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-headline text-base md:text-lg text-on-surface font-semibold">
                      {exp.role}
                    </h3>
                    <div className="font-body text-sm font-medium text-primary">
                      {exp.company}{' '}
                      <span className="text-outline text-xs font-normal">• {exp.location}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span
                    className={`font-mono text-[11px] px-3 py-1 rounded-full border ${exp.badgeColor}`}
                  >
                    {exp.period}
                  </span>
                  <button
                    onClick={() => handleCopy(exp.id, `${exp.role} at ${exp.company}\n` + exp.bullets.join('\n'))}
                    className="p-1 rounded text-outline hover:text-on-surface hover:bg-surface-container-high transition-colors"
                    title="Copy experience details"
                    aria-label="Copy experience details"
                  >
                    {isCopied ? <Check className="w-3.5 h-3.5 text-secondary" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </div>

              {/* Achievements Bullets */}
              <ul className="mt-4 space-y-2.5 font-body text-xs md:text-sm text-on-surface-variant list-none">
                {exp.bullets.map((bullet, bIdx) => (
                  <li key={bIdx} className="flex items-start gap-2.5 leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              {/* Tech Stack Chips */}
              <div className="flex flex-wrap gap-1.5 pt-5">
                {exp.skills.map((skill) => (
                  <span
                    key={skill.name}
                    className={`font-mono text-[11px] px-2.5 py-1 rounded bg-surface-container-low ${skill.color} border border-outline-variant/30`}
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
