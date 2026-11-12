/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Header } from './components/Header.tsx';
import { Hero } from './components/Hero.tsx';
import { StatsCounters } from './components/StatsCounters.tsx';
import { ExperienceTimeline } from './components/ExperienceTimeline.tsx';
import { ProjectsShowcase } from './components/ProjectsShowcase.tsx';
import { SkillsMatrix } from './components/SkillsMatrix.tsx';
import { EducationCard } from './components/EducationCard.tsx';
import { ContactTerminal } from './components/ContactTerminal.tsx';
import { Footer } from './components/Footer.tsx';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('overview');
  const [selectedTech, setSelectedTech] = useState<string | null>(null);

  // Scroll spy for navigation
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['overview', 'experience', 'projects', 'skills', 'education', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSelectTech = (tech: string) => {
    if (selectedTech === tech) {
      setSelectedTech(null);
    } else {
      setSelectedTech(tech);
      // Smooth scroll to experience or skills if clicked
      const expEl = document.getElementById('experience');
      if (expEl) {
        expEl.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="min-h-screen bg-surface font-body text-on-surface antialiased selection:bg-primary selection:text-on-primary">
      {/* Top Fixed Header with Sub-navigation */}
      <Header activeSection={activeSection} />

      {/* Main Content Sections */}
      <main className="w-full bg-surface pt-14">
        {/* Hero & Identity */}
        <Hero onSelectTech={handleSelectTech} selectedTech={selectedTech} />

        {/* Key Impact Stats Counters */}
        <StatsCounters />

        {/* Professional Experience Timeline */}
        <ExperienceTimeline filterTech={selectedTech} />

        {/* Featured Projects & Case Studies */}
        <ProjectsShowcase />

        {/* Technical Skills & Architecture Matrix */}
        <SkillsMatrix onSelectSkill={handleSelectTech} selectedSkill={selectedTech} />

        {/* Academic Credentials & Degree */}
        <EducationCard />

        {/* Interactive CLI Terminal & Contact Section */}
        <ContactTerminal />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
