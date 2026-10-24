import React, { useState } from 'react';
import {
  Monitor,
  Server,
  Code2,
  Zap,
  Bot,
  Wrench,
  Search,
  CheckCircle,
} from 'lucide-react';

interface SkillsMatrixProps {
  onSelectSkill?: (skill: string) => void;
  selectedSkill?: string | null;
}

export const SkillsMatrix: React.FC<SkillsMatrixProps> = ({ onSelectSkill, selectedSkill }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    {
      id: 'frontend',
      title: 'Frontend Architecture',
      icon: Monitor,
      iconColor: 'text-primary',
      borderHover: 'hover:border-primary/40',
      description:
        'Modern, high-performance web applications, state synchronization, and component design systems.',
      skills: [
        { name: 'React.js', color: 'hover:text-primary hover:border-primary/40' },
        { name: 'Next.js', color: 'hover:text-primary hover:border-primary/40' },
        { name: 'TypeScript', color: 'hover:text-secondary hover:border-secondary/40' },
        { name: 'JavaScript (ES6+)', color: 'hover:text-secondary hover:border-secondary/40' },
        { name: 'Redux Toolkit', color: 'hover:text-primary hover:border-primary/40' },
        { name: 'Zustand', color: 'hover:text-primary hover:border-primary/40' },
        { name: 'React Query', color: 'hover:text-tertiary hover:border-tertiary/40' },
        { name: 'Tailwind CSS', color: 'hover:text-primary hover:border-primary/40' },
        { name: 'HTML5 / CSS3', color: 'hover:text-outline hover:border-outline-variant' },
        { name: 'Responsive UI', color: 'hover:text-outline hover:border-outline-variant' },
        { name: 'Skeleton Loaders', color: 'hover:text-secondary hover:border-secondary/40' },
      ],
    },
    {
      id: 'backend',
      title: 'Backend & Real-Time APIs',
      icon: Server,
      iconColor: 'text-secondary',
      borderHover: 'hover:border-secondary/40',
      description:
        'Scalable server runtimes, live WebRTC streaming, and event-driven communication pipelines.',
      skills: [
        { name: 'Node.js', color: 'hover:text-primary hover:border-primary/40' },
        { name: 'Express.js', color: 'hover:text-primary hover:border-primary/40' },
        { name: 'REST APIs', color: 'hover:text-secondary hover:border-secondary/40' },
        { name: 'WebSockets', color: 'hover:text-primary hover:border-primary/40' },
        { name: 'LiveKit (WebRTC)', color: 'hover:text-tertiary hover:border-tertiary/40' },
        { name: 'GraphQL', color: 'hover:text-secondary hover:border-secondary/40' },
        { name: 'MongoDB', color: 'hover:text-primary hover:border-primary/40' },
        { name: 'PostgreSQL', color: 'hover:text-secondary hover:border-secondary/40' },
        { name: 'Microservices', color: 'hover:text-outline hover:border-outline-variant' },
        { name: 'API Design', color: 'hover:text-outline hover:border-outline-variant' },
      ],
    },
    {
      id: 'languages',
      title: 'Programming Languages',
      icon: Code2,
      iconColor: 'text-tertiary',
      borderHover: 'hover:border-tertiary/40',
      description:
        'Strong software engineering fundamentals, type systems, and data structures.',
      skills: [
        { name: 'TypeScript', color: 'hover:text-secondary hover:border-secondary/40' },
        { name: 'JavaScript (ESNext)', color: 'hover:text-secondary hover:border-secondary/40' },
        { name: 'Python', color: 'hover:text-primary hover:border-primary/40' },
        { name: 'C++', color: 'hover:text-tertiary hover:border-tertiary/40' },
        { name: 'SQL', color: 'hover:text-primary hover:border-primary/40' },
        { name: 'Bash / Shell', color: 'hover:text-outline hover:border-outline-variant' },
      ],
    },
    {
      id: 'architecture',
      title: 'Architecture & Vitals',
      icon: Zap,
      iconColor: 'text-secondary',
      borderHover: 'hover:border-secondary/40',
      description:
        'Core Web Vitals optimization, bundle tree-shaking, and high-concurrency client scaling.',
      skills: [
        { name: 'Core Web Vitals (LCP/FID/CLS)', color: 'hover:text-secondary hover:border-secondary/40' },
        { name: 'Code Splitting', color: 'hover:text-primary hover:border-primary/40' },
        { name: 'Lazy Hydration', color: 'hover:text-tertiary hover:border-tertiary/40' },
        { name: 'Browser Profiling & DevTools', color: 'hover:text-primary hover:border-primary/40' },
        { name: 'Zero-Lag Renders', color: 'hover:text-secondary hover:border-secondary/40' },
        { name: 'Headless DOM Architecture', color: 'hover:text-tertiary hover:border-tertiary/40' },
      ],
    },
    {
      id: 'ai',
      title: 'AI & In-Browser Analytics',
      icon: Bot,
      iconColor: 'text-primary',
      borderHover: 'hover:border-primary/40',
      description:
        'GenAI/LLM integrations, prompt-driven UI generation, and client-side vectorized query engines.',
      skills: [
        { name: 'GenAI / LLM APIs', color: 'hover:text-primary hover:border-primary/40' },
        { name: 'Hugging Face API', color: 'hover:text-primary hover:border-primary/40' },
        { name: 'Vercel AI SDK', color: 'hover:text-secondary hover:border-secondary/40' },
        { name: 'DuckDB-wasm', color: 'hover:text-secondary hover:border-secondary/40' },
        { name: 'Recharts', color: 'hover:text-tertiary hover:border-tertiary/40' },
        { name: 'React Table', color: 'hover:text-secondary hover:border-secondary/40' },
        { name: 'Papa Parse', color: 'hover:text-outline hover:border-outline-variant' },
        { name: 'Cursor', color: 'hover:text-primary hover:border-primary/40' },
        { name: 'Claude Code', color: 'hover:text-tertiary hover:border-tertiary/40' },
        { name: 'GitHub Copilot', color: 'hover:text-secondary hover:border-secondary/40' },
      ],
    },
    {
      id: 'testing',
      title: 'Testing, Tooling & DevOps',
      icon: Wrench,
      iconColor: 'text-tertiary',
      borderHover: 'hover:border-tertiary/40',
      description:
        'Automated testing suites, modern bundlers, and containerized deployment workflows.',
      skills: [
        { name: 'Playwright (E2E)', color: 'hover:text-secondary hover:border-secondary/40' },
        { name: 'Jest / Vitest', color: 'hover:text-secondary hover:border-secondary/40' },
        { name: 'Unit & Integration Testing', color: 'hover:text-tertiary hover:border-tertiary/40' },
        { name: 'Vite', color: 'hover:text-primary hover:border-primary/40' },
        { name: 'Webpack', color: 'hover:text-outline hover:border-outline-variant' },
        { name: 'Babel', color: 'hover:text-outline hover:border-outline-variant' },
        { name: 'Git & GitHub', color: 'hover:text-secondary hover:border-secondary/40' },
        { name: 'GitHub Actions', color: 'hover:text-primary hover:border-primary/40' },
        { name: 'Docker', color: 'hover:text-tertiary hover:border-tertiary/40' },
        { name: 'Postman', color: 'hover:text-secondary hover:border-secondary/40' },
      ],
    },
  ];

  const filteredCategories = categories.filter((cat) => {
    if (activeCategory !== 'all' && cat.id !== activeCategory) return false;
    if (!searchQuery.trim()) return true;
    const query = searchQuery.toLowerCase();
    const matchesCat = cat.title.toLowerCase().includes(query) || cat.description.toLowerCase().includes(query);
    const matchesSkill = cat.skills.some((s) => s.name.toLowerCase().includes(query));
    return matchesCat || matchesSkill;
  });

  return (
    <section className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-12" id="skills">
      {/* Center Section Header */}
      <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-8">
        <div className="w-10 h-10 rounded-full bg-surface-container-high border border-outline-variant/60 flex items-center justify-center text-primary mb-3 shadow-inner">
          <Code2 className="w-5 h-5" />
        </div>
        <h2 className="font-headline text-2xl md:text-3xl text-on-surface font-semibold tracking-tight">
          Skills &amp; Technology Stack
        </h2>
        <p className="font-body text-xs md:text-sm text-on-surface-variant mt-2 leading-relaxed">
          Comprehensive toolkit spanning frontend architecture, real-time client systems, and modern
          fullstack technologies.
        </p>

        {/* Search & Filter Toolbar */}
        <div className="w-full mt-6 flex flex-col sm:flex-row items-center gap-2">
          <div className="relative w-full">
            <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-outline" />
            <input
              type="text"
              placeholder="Filter skills (e.g., LiveKit, React, TypeScript, Vitest)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-2 rounded-lg bg-surface-container-high/80 border border-outline-variant/50 text-xs font-mono text-on-surface placeholder:text-outline focus:outline-none focus:border-primary/60"
            />
          </div>
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="font-mono text-xs text-outline hover:text-on-surface px-2 py-1"
            >
              Clear
            </button>
          )}
        </div>
      </div>

      {/* Grid of Skill Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredCategories.map((cat) => {
          const Icon = cat.icon;
          return (
            <div
              key={cat.id}
              className={`p-5 md:p-6 rounded-xl bg-surface-container border border-outline-variant/60 ${cat.borderHover} transition-all flex flex-col justify-between shadow-lg`}
            >
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-3 pb-1">
                  <div className="w-9 h-9 rounded-lg bg-surface-container-lowest border border-outline-variant/40 flex items-center justify-center text-primary shrink-0">
                    <Icon className={`w-4 h-4 ${cat.iconColor}`} />
                  </div>
                  <h3 className="font-headline text-sm md:text-base text-on-surface font-semibold">
                    {cat.title}
                  </h3>
                </div>
                <p className="font-body text-xs text-on-surface-variant leading-relaxed">
                  {cat.description}
                </p>
              </div>

              {/* Skill Badges */}
              <div className="flex flex-wrap gap-1.5 pt-4">
                {cat.skills.map((skill) => {
                  const isHighlighted =
                    selectedSkill?.toLowerCase() === skill.name.toLowerCase() ||
                    (searchQuery && skill.name.toLowerCase().includes(searchQuery.toLowerCase()));

                  return (
                    <button
                      key={skill.name}
                      onClick={() => onSelectSkill && onSelectSkill(skill.name)}
                      className={`font-mono text-[11px] px-2.5 py-1 rounded bg-surface-container-low border transition-colors cursor-pointer ${
                        isHighlighted
                          ? 'border-primary text-primary bg-primary/10 shadow-[0_0_8px_rgba(76,215,246,0.3)]'
                          : `border-outline-variant/40 text-on-surface ${skill.color}`
                      }`}
                    >
                      {skill.name}
                    </button>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
