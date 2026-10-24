import React from 'react';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-surface-container-low border-t border-surface-variant/40 py-10 mt-12">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left Column Info */}
        <div className="flex flex-col items-center md:items-start gap-1">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-2">
            <span className="w-6 h-6 rounded bg-surface-container-high border border-outline-variant flex items-center justify-center text-primary font-mono text-xs font-bold">
              SG
            </span>
            <span className="font-mono text-xs text-on-surface font-semibold tracking-wider">
              SWATI GAVHANE
            </span>
            <span className="text-outline text-xs hidden sm:inline">
              • Senior Fullstack &amp; Frontend Engineer
            </span>
          </div>
          <p className="font-body text-xs text-outline text-center md:text-left mt-1">
            Architecting high-scale web platforms, real-time systems, and AI integrations.
          </p>
        </div>

        {/* Right Column Coordinates & Back-to-Top */}
        <div className="flex flex-wrap items-center justify-center gap-6">
          <span className="font-mono text-xs text-outline">
            LOCATION: <span className="text-secondary font-medium">PUNE, INDIA</span>
          </span>
          <span className="font-mono text-xs text-outline">
            &copy; {new Date().getFullYear()} Swati Gavhane. All rights reserved.
          </span>
          <button
            onClick={scrollToTop}
            className="w-8 h-8 rounded-lg border border-outline-variant/60 flex items-center justify-center text-outline hover:text-primary hover:border-primary/50 transition-colors"
            title="Back to top"
            aria-label="Back to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};
