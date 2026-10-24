import React, { useState } from 'react';
import { Terminal, Zap, Smile, Users, Info } from 'lucide-react';

export const StatsCounters: React.FC = () => {
  const [activeMetric, setActiveMetric] = useState<number | null>(null);

  const stats = [
    {
      label: 'Production Exp',
      value: '6+ Years',
      icon: Terminal,
      iconColor: 'text-primary',
      valueColor: 'text-on-surface',
      hoverBorder: 'hover:border-primary/40',
      description:
        'Production fullstack engineering across fintech, enterprise CRM & influencer platforms',
      footer: (
        <span className="font-mono text-xs text-outline">
          <span className="text-primary font-semibold">PhonePe</span> • ZURUTech • Vebholic • Coruscate
        </span>
      ),
      details: 'Over 6 years designing modular React architectures, WebRTC media streaming, and REST/Node microservices.',
    },
    {
      label: 'Core Web Vitals',
      value: '1.2s LCP',
      icon: Zap,
      iconColor: 'text-secondary',
      valueColor: 'text-secondary',
      hoverBorder: 'hover:border-secondary/40',
      description:
        'Reduced Largest Contentful Paint from 4.2s via tree-shaking & bundle code-splitting',
      footer: (
        <div className="w-full bg-surface-container-low h-2 rounded-full overflow-hidden">
          <div
            className="bg-gradient-to-r from-primary to-secondary h-full w-[82%] transition-all duration-1000"
            title="82% Optimization benchmark"
          ></div>
        </div>
      ),
      details: '71% latency cut via dynamic imports, lazy component hydration, tree shaking, and modern asset bundling.',
    },
    {
      label: 'Customer Satisfaction',
      value: '+40% CSAT',
      icon: Smile,
      iconColor: 'text-tertiary',
      valueColor: 'text-tertiary',
      hoverBorder: 'hover:border-tertiary/40',
      description:
        'In high-revenue categories through real-time bot-assisted support & seamless agent handoff',
      footer: (
        <span className="font-mono text-xs text-outline">
          <span className="text-secondary font-semibold">High-Revenue</span> Fintech Verticals
        </span>
      ),
      details: 'Engineered smooth bot-to-agent transitions and live chat queues, minimizing user drop-off during checkout queries.',
    },
    {
      label: 'Platform Scale',
      value: 'Millions',
      icon: Users,
      iconColor: 'text-primary',
      valueColor: 'text-on-surface',
      hoverBorder: 'hover:border-primary/40',
      description:
        'Users served daily across real-time video/audio support & enterprise customer portals',
      footer: (
        <span className="font-mono text-xs text-outline">
          <span className="text-secondary font-semibold">Zero-Downtime</span> Resilience
        </span>
      ),
      details: 'Engineered distributed client state with TanStack Query and WebSockets to sustain peak transactional surges.',
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
        {stats.map((stat, idx) => {
          const Icon = stat.icon;
          const isExpanded = activeMetric === idx;

          return (
            <div
              key={stat.label}
              onClick={() => setActiveMetric(isExpanded ? null : idx)}
              className={`p-5 rounded-xl bg-surface-container-high border border-outline-variant/40 ${stat.hoverBorder} transition-all duration-200 flex flex-col justify-between w-full group cursor-pointer`}
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-[11px] uppercase tracking-wider text-outline font-medium">
                  {stat.label}
                </span>
                <Icon className={`${stat.iconColor} w-4 h-4 group-hover:scale-110 transition-transform`} />
              </div>

              <div className="py-4">
                <div className={`font-headline text-3xl font-semibold tracking-tight ${stat.valueColor}`}>
                  {stat.value}
                </div>
                <div className="font-body text-xs text-on-surface-variant mt-1 leading-relaxed">
                  {stat.description}
                </div>
                {isExpanded && (
                  <div className="mt-2 pt-2 border-t border-surface-variant/40 text-[11px] font-mono text-primary/90 animate-fadeIn">
                    {stat.details}
                  </div>
                )}
              </div>

              <div className="pt-2 border-t border-surface-variant/30 flex items-center justify-between">
                {stat.footer}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
