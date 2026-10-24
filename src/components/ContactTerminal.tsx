import React, { useState, useRef, useEffect } from 'react';
import { Mail, Phone, Play, Copy, Check, Terminal as TerminalIcon, Sparkles } from 'lucide-react';

interface LogEntry {
  type: 'user' | 'system' | 'success' | 'highlight';
  text: string;
  isHtml?: boolean;
}

export const ContactTerminal: React.FC = () => {
  const [inputVal, setInputVal] = useState('');
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [logs, setLogs] = useState<LogEntry[]>([
    {
      type: 'system',
      text: '> Swati Gavhane | Senior Fullstack Engineer (6+ yrs) initialized.',
    },
    {
      type: 'success',
      text: '> Ready for new opportunities in Pune, India & Remote.',
    },
  ]);

  const outputRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (outputRef.current) {
      outputRef.current.scrollTop = outputRef.current.scrollHeight;
    }
  }, [logs]);

  const handleCommand = (cmd: string) => {
    const trimmed = cmd.trim();
    if (!trimmed) return;

    const lower = trimmed.toLowerCase();
    const newLogs: LogEntry[] = [...logs, { type: 'user', text: `> ${trimmed}` }];

    if (lower === 'clear' || lower === 'cls') {
      setLogs([]);
      setInputVal('');
      return;
    }

    if (lower.includes('schedule') || lower.includes('chat') || lower === 'calendar') {
      newLogs.push({
        type: 'success',
        text: '> Ready to schedule! Email directly at swatigavhane1996@gmail.com or phone +91 8320672652.',
      });
    } else if (
      lower.includes('contact') ||
      lower.includes('phone') ||
      lower.includes('email') ||
      lower.includes('reach')
    ) {
      newLogs.push({
        type: 'highlight',
        text: '> Contact: Swati Gavhane | Email: swatigavhane1996@gmail.com | Phone: +91 8320672652 | Location: Pune, India.',
      });
    } else if (
      lower.includes('resume') ||
      lower.includes('phonepe') ||
      lower.includes('exp') ||
      lower.includes('work')
    ) {
      newLogs.push({
        type: 'highlight',
        text: '> 6+ Yrs Experience: Ex-PhonePe (LCP 4.2s->1.2s, LiveKit WebRTC), ZURUTech (Netra Portal), Vebholic (CRM), Coruscate (JSON UI engine). SCET B.E. Distinction.',
      });
    } else if (lower.includes('skills') || lower.includes('stack')) {
      newLogs.push({
        type: 'system',
        text: '> Core Stack: React, Next.js, TypeScript, LiveKit (WebRTC), Node.js, Express, TanStack Query, Redux Toolkit, Tailwind CSS, PostgreSQL, DuckDB-wasm.',
      });
    } else if (lower.includes('help')) {
      newLogs.push({
        type: 'system',
        text: '> Available commands: schedule-chat, contact-info, view-resume, skills, clear, help',
      });
    } else {
      newLogs.push({
        type: 'system',
        text: `> Command received: "${trimmed}". For direct inquiries: swatigavhane1996@gmail.com or +91 8320672652.`,
      });
    }

    setLogs(newLogs);
    setInputVal('');
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('swatigavhane1996@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText('+918320672652');
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  return (
    <section className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-12" id="contact">
      <div className="rounded-xl bg-surface-container-lowest border border-outline-variant/60 p-6 md:p-10 overflow-hidden shadow-2xl flex flex-col">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 w-full">
          {/* Terminal & Form Column */}
          <div className="lg:col-span-8 flex flex-col gap-4">
            {/* Terminal Window Header Bar */}
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-error inline-block"></span>
              <span className="w-3 h-3 rounded-full bg-tertiary-container inline-block"></span>
              <span className="w-3 h-3 rounded-full bg-secondary inline-block"></span>
              <span className="font-mono text-xs text-outline ml-2">
                swati@portfolio: ~/connect
              </span>
            </div>

            {/* Title & Pitch */}
            <div>
              <h2 className="font-headline text-2xl md:text-3xl text-on-surface font-semibold tracking-tight">
                Let&apos;s Connect &amp; Build
              </h2>
              <p className="font-body text-xs md:text-sm text-on-surface-variant mt-1.5 leading-relaxed max-w-2xl">
                Open to Senior Fullstack and Senior Frontend roles. Let&apos;s discuss high-scale web platforms,
                real-time architectures, or collaborative product opportunities.
              </p>
            </div>

            {/* Contact Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="mailto:swatigavhane1996@gmail.com"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-primary text-on-primary font-mono text-xs font-semibold hover:bg-primary-fixed-dim transition-colors shadow-md"
              >
                <Mail className="w-4 h-4" />
                <span>Email Swati Directly</span>
              </a>

              <a
                href="tel:+918320672652"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-surface-container hover:bg-surface-variant text-on-surface border border-outline-variant font-mono text-xs transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>+91 8320672652</span>
              </a>

              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-1.5 px-3 py-2.5 rounded-lg bg-surface-container hover:bg-surface-variant text-outline hover:text-on-surface border border-outline-variant/60 font-mono text-xs transition-colors"
                title="Copy email to clipboard"
              >
                {copiedEmail ? <Check className="w-3.5 h-3.5 text-secondary" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedEmail ? 'Copied Email' : 'Copy Email'}</span>
              </button>
            </div>
          </div>

          {/* Location & Quick Credentials Card */}
        </div>
      </div>
    </section>
  );
};
