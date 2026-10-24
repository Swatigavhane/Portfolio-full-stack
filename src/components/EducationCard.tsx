import React from 'react';
import { GraduationCap, Award, BookOpen } from 'lucide-react';

export const EducationCard: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-12" id="education">
      {/* Section Header */}
      <div className="mb-8 flex flex-col">
        <span className="font-mono text-xs uppercase tracking-widest text-primary block mb-1">
          Academic Foundation
        </span>
        <h2 className="font-headline text-2xl md:text-3xl text-on-surface font-semibold tracking-tight">
          Education &amp; Credentials
        </h2>
      </div>

      {/* Education Container */}
      <div className="rounded-xl bg-surface-container p-6 md:p-8 border border-outline-variant/60 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 hover:border-primary/40 transition-all">
        <div className="flex items-start gap-4 w-full">
          <div className="w-12 h-12 rounded-xl bg-surface-container-lowest border border-primary/30 flex items-center justify-center text-primary shrink-0">
            <GraduationCap className="w-6 h-6" />
          </div>

          <div>
            <div className="flex flex-wrap items-center gap-2 mb-1.5">
              <span className="font-mono text-[11px] px-2.5 py-0.5 rounded bg-surface-container-lowest text-primary font-medium">
                B.E. COMPUTER ENGINEERING
              </span>
              <span className="font-mono text-[11px] px-2.5 py-0.5 rounded bg-surface-container-lowest text-secondary font-medium flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                First Class
              </span>
            </div>

            <h3 className="font-headline text-base md:text-xl text-on-surface font-semibold">
              Sarvajanik College of Engineering &amp; Technology (SCET)
            </h3>

            <p className="font-body text-xs md:text-sm text-on-surface-variant mt-0.5">
              Surat, Gujarat, India • Graduation: June 2018
            </p>

            <p className="font-body text-xs text-outline mt-3 leading-relaxed max-w-2xl">
              Core coursework: Data Structures &amp; Algorithms, Object-Oriented Analysis &amp;
              Design, Database Management Systems, Computer Networks, Software Engineering.
            </p>
          </div>
        </div>

        {/* Right Badge Box */}
        <div className="p-4 rounded-lg bg-surface-container-lowest border border-outline-variant/50 shrink-0 w-full md:w-auto text-left md:text-right">
          <div className="font-mono text-[10px] text-outline uppercase tracking-wider">
            ACADEMIC STANDING
          </div>
          <div className="font-headline text-base font-semibold text-secondary mt-0.5">
            First Class with Distinction
          </div>
          <div className="font-mono text-[11px] text-outline mt-1">
            4-Year Rigorous Engineering Curriculum
          </div>
        </div>
      </div>
    </section>
  );
};
