import React, { useState, useEffect } from 'react';
import { Terminal, Mail, ExternalLink, Menu, X, ArrowUpRight } from 'lucide-react';

interface HeaderProps {
  activeSection: string;
}

export const Header: React.FC<HeaderProps> = ({ activeSection }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Overview', href: '#overview' },
    { label: 'Experience', href: '#experience' },
    { label: 'Skills & Architecture', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-surface/85 backdrop-blur-xl border-b border-surface-variant/40">
      {/* Top Bar Zone */}
      <div className="w-full border-b border-surface-variant/40">
        <div className="h-14 max-w-7xl mx-auto px-4 md:px-8 lg:px-16 flex items-center justify-between gap-4">
          {/* Brand & Identity */}
          <div className="flex items-center gap-4">
            <a href="#overview" className="flex items-center gap-3 group">
              <div className="w-9 h-9 rounded-lg bg-surface-container-high border border-outline-variant flex items-center justify-center text-primary font-mono text-sm font-bold shadow-inner shrink-0 group-hover:border-primary/60 transition-colors">
                SG
              </div>
              <div className="flex flex-col">
                <span className="font-headline font-semibold text-base tracking-tight text-on-surface leading-tight group-hover:text-primary transition-colors">
                  Swati Gavhane
                </span>
                <span className="font-mono text-[11px] text-outline hidden sm:inline leading-tight">
                  Senior Fullstack Engineer
                </span>
              </div>
            </a>

            {/* Live Status Badge */}
            <div className="hidden md:flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container-high border border-secondary/20 ml-1">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
              </span>
              <span className="font-mono text-[11px] text-secondary font-medium tracking-wide">
                Available for Senior Roles • Pune, India
              </span>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="flex items-center gap-2">
            <a
              href="https://github.com/Swatigavhane"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-lg border border-outline-variant/60 flex items-center justify-center text-on-surface-variant hover:text-primary hover:bg-surface-container-high transition-all"
              aria-label="GitHub Profile"
              title="GitHub Profile: Swatigavhane"
            >
              <Terminal className="w-4 h-4" />
            </a>

            <a
              href="mailto:swatigavhane1996@gmail.com"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-outline-variant/70 text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high font-mono text-xs transition-all"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Email Me</span>
            </a>

            <a
              href="#contact"
              className="sm:hidden inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg border border-outline-variant/70 text-on-surface-variant hover:text-on-surface font-mono text-xs"
            >
              <Mail className="w-3.5 h-3.5" />
            </a>

            {/* Mobile nav toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden w-8 h-8 rounded-lg border border-outline-variant/60 flex items-center justify-center text-on-surface-variant hover:text-on-surface"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </div>

      {/* Subnav Bar (Desktop) */}
      <div className="w-full bg-surface-container-lowest/60 hidden md:block">
        <div className="h-10 max-w-7xl mx-auto px-4 md:px-8 lg:px-16 flex items-center overflow-x-auto">
          <nav className="flex items-center gap-1 whitespace-nowrap">
            {navItems.map((item) => {
              const sectionId = item.href.replace('#', '');
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  className={`px-3 py-1 rounded-lg text-xs transition-colors font-medium ${
                    isActive
                      ? 'bg-surface-container-high text-on-surface border border-outline-variant/40 shadow-xs'
                      : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high/60'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-surface-variant/70 bg-surface-container-lowest p-4 space-y-2">
          <div className="pb-2 border-b border-surface-variant/40">
            <div className="flex items-center gap-2 text-xs font-mono text-secondary">
              <span className="w-2 h-2 rounded-full bg-secondary"></span>
              Available for Senior Roles • Pune, India
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2 pt-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg text-xs font-medium text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};
