import React, { useState, useRef } from 'react';
import { X, Play, RefreshCw, Bold, Italic, List, Heading1, Heading2, Undo, Redo, BarChart2, Video, Database, Check, ShieldCheck, Sparkles } from 'lucide-react';

interface InteractiveDemosModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTab?: 'webrtc' | 'csv' | 'editor';
}

export const InteractiveDemosModal: React.FC<InteractiveDemosModalProps> = ({
  isOpen,
  onClose,
  initialTab = 'webrtc',
}) => {
  const [activeTab, setActiveTab] = useState<'webrtc' | 'csv' | 'editor'>(initialTab);

  // WebRTC Demo state
  const [callState, setCallState] = useState<'idle' | 'connecting' | 'connected'>('idle');
  const [callLatency, setCallLatency] = useState(142);
  const [packetLoss, setPacketLoss] = useState(0.04);
  const [isMuted, setIsMuted] = useState(false);
  const [isVideoOn, setIsVideoOn] = useState(true);

  // CSV Demo state
  const [csvPreset, setCsvPreset] = useState<'fintech' | 'ecommerce' | 'performance'>('fintech');
  const [sqlQuery, setSqlQuery] = useState("SELECT category, SUM(amount_inr) AS volume, COUNT(*) AS transactions FROM payments GROUP BY category ORDER BY volume DESC;");
  const [queryRunning, setQueryRunning] = useState(false);

  // Rich Text Editor state
  const editorRef = useRef<HTMLDivElement>(null);
  const [editorText, setEditorText] = useState(
    '### WebRTC Media Engine Architecture\nCustom headless text primitives provide zero-bloat runtime control with **sub-8kb bundle footprint** and *WCAG 2.1 AAA* accessibility.'
  );
  const [selectionRange, setSelectionRange] = useState('Cursor: 0-0 | Node: p');

  if (!isOpen) return null;

  // WebRTC Actions
  const handleStartCall = () => {
    setCallState('connecting');
    setTimeout(() => {
      setCallState('connected');
      setCallLatency(Math.floor(110 + Math.random() * 40));
    }, 1200);
  };

  const handleEndCall = () => {
    setCallState('idle');
  };

  // CSV Presets
  const sampleDatasets = {
    fintech: [
      { category: 'UPI Transfers', volume: '₹142.8M', count: '1.42M', status: 'Optimal' },
      { category: 'Wallet Topups', volume: '₹48.2M', count: '480K', status: 'Optimal' },
      { category: 'Merchant QR', volume: '₹94.6M', count: '940K', status: 'Optimal' },
      { category: 'Bill Payments', volume: '₹31.1M', count: '310K', status: 'Optimal' },
    ],
    ecommerce: [
      { category: 'Electronics', volume: '₹64.2M', count: '124K', status: 'Optimal' },
      { category: 'Apparel', volume: '₹38.9M', count: '290K', status: 'Optimal' },
      { category: 'Home Goods', volume: '₹22.1M', count: '89K', status: 'Optimal' },
    ],
    performance: [
      { category: 'LCP Optimization', volume: '1.2s', count: 'Target < 2.5s', status: 'Exceeded' },
      { category: 'INP Interaction', volume: '48ms', count: 'Target < 200ms', status: 'Optimal' },
      { category: 'CLS Visual Shift', volume: '0.01', count: 'Target < 0.1', status: 'Optimal' },
    ],
  };

  // Formatting actions
  const formatDocument = (command: string, value: string | undefined = undefined) => {
    document.execCommand(command, false, value);
    if (editorRef.current) {
      setEditorText(editorRef.current.innerText);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-surface-container-lowest/80 backdrop-blur-md">
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-hidden rounded-2xl bg-surface-container border border-outline-variant/60 shadow-2xl flex flex-col">
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-surface-variant/70 bg-surface-container-high/60">
          <div className="flex items-center gap-3">
            <span className="w-3 h-3 rounded-full bg-primary animate-pulse"></span>
            <div>
              <h3 className="font-headline font-semibold text-base text-on-surface">
                Interactive Architecture Sandbox &amp; Deep-Dive
              </h3>
              <p className="font-mono text-xs text-outline">
                Live interactive prototypes demonstrating Swati&apos;s production systems
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-lg border border-outline-variant/50 flex items-center justify-center text-on-surface-variant hover:text-on-surface hover:bg-surface-variant transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center gap-2 px-6 pt-3 border-b border-surface-variant/40 bg-surface-container-lowest/50 overflow-x-auto">
          <button
            onClick={() => setActiveTab('webrtc')}
            className={`flex items-center gap-2 px-4 py-2.5 font-mono text-xs font-semibold rounded-t-lg transition-colors border-b-2 whitespace-nowrap ${
              activeTab === 'webrtc'
                ? 'border-primary text-primary bg-surface-container'
                : 'border-transparent text-outline hover:text-on-surface'
            }`}
          >
            <Video className="w-3.5 h-3.5" />
            <span>01. WebRTC LiveKit Architecture</span>
          </button>
          <button
            onClick={() => setActiveTab('csv')}
            className={`flex items-center gap-2 px-4 py-2.5 font-mono text-xs font-semibold rounded-t-lg transition-colors border-b-2 whitespace-nowrap ${
              activeTab === 'csv'
                ? 'border-secondary text-secondary bg-surface-container'
                : 'border-transparent text-outline hover:text-on-surface'
            }`}
          >
            <Database className="w-3.5 h-3.5" />
            <span>02. DuckDB-wasm &amp; SQL Query Engine</span>
          </button>
          <button
            onClick={() => setActiveTab('editor')}
            className={`flex items-center gap-2 px-4 py-2.5 font-mono text-xs font-semibold rounded-t-lg transition-colors border-b-2 whitespace-nowrap ${
              activeTab === 'editor'
                ? 'border-tertiary text-tertiary bg-surface-container'
                : 'border-transparent text-outline hover:text-on-surface'
            }`}
          >
            <BarChart2 className="w-3.5 h-3.5" />
            <span>03. Headless Rich Text DOM Engine</span>
          </button>
        </div>

        {/* Tab Contents */}
        <div className="p-6 overflow-y-auto max-h-[calc(90vh-140px)] space-y-6">
          {/* TAB 1: WEBRTC */}
          {activeTab === 'webrtc' && (
            <div className="space-y-6">
              <div className="p-4 rounded-xl bg-surface-container-high/60 border border-outline-variant/40">
                <div className="flex items-center justify-between pb-3 border-b border-surface-variant/40">
                  <div className="font-mono text-xs text-primary font-semibold uppercase tracking-wider">
                    LiveKit SFU &bull; WebRTC Media Channel Simulation
                  </div>
                  <div className="flex items-center gap-2">
                    <span
                      className={`inline-block w-2 h-2 rounded-full ${
                        callState === 'connected'
                          ? 'bg-secondary'
                          : callState === 'connecting'
                          ? 'bg-primary animate-ping'
                          : 'bg-outline'
                      }`}
                    ></span>
                    <span className="font-mono text-xs text-on-surface uppercase">
                      {callState}
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 my-4">
                  <div className="p-3 rounded-lg bg-surface-container-lowest border border-outline-variant/30">
                    <div className="font-mono text-[10px] text-outline uppercase">RTT Latency</div>
                    <div className="font-mono text-lg font-bold text-secondary">
                      {callState === 'connected' ? `${callLatency} ms` : '—'}
                    </div>
                    <div className="text-[11px] text-outline">Target &lt; 180 ms</div>
                  </div>
                  <div className="p-3 rounded-lg bg-surface-container-lowest border border-outline-variant/30">
                    <div className="font-mono text-[10px] text-outline uppercase">Packet Loss</div>
                    <div className="font-mono text-lg font-bold text-primary">
                      {callState === 'connected' ? `${packetLoss}%` : '—'}
                    </div>
                    <div className="text-[11px] text-outline">Adaptive Bitrate (Simulcast)</div>
                  </div>
                  <div className="p-3 rounded-lg bg-surface-container-lowest border border-outline-variant/30">
                    <div className="font-mono text-[10px] text-outline uppercase">Licensing Cost</div>
                    <div className="font-mono text-lg font-bold text-tertiary">0 INR</div>
                    <div className="text-[11px] text-outline">Open-Source LiveKit SFU</div>
                  </div>
                </div>

                {/* Video Preview Box */}
                <div className="relative aspect-video max-h-60 rounded-xl bg-surface-container-lowest border border-surface-variant flex flex-col items-center justify-center overflow-hidden">
                  {callState === 'connected' ? (
                    <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-surface-container-low to-surface-container-high p-4 text-center">
                      <div className="w-16 h-16 rounded-full bg-primary/20 border border-primary flex items-center justify-center text-primary mb-2">
                        <Video className="w-8 h-8" />
                      </div>
                      <div className="font-mono text-sm text-on-surface font-semibold">
                        Customer KYC Session Active (LiveKit Room #4829)
                      </div>
                      <div className="font-mono text-xs text-secondary mt-1">
                        1080p 30fps &bull; Opus 48kHz Stereo &bull; E2EE Active
                      </div>
                    </div>
                  ) : callState === 'connecting' ? (
                    <div className="flex flex-col items-center gap-2 text-primary font-mono text-xs">
                      <RefreshCw className="w-6 h-6 animate-spin" />
                      <span>Negotiating ICE candidates &amp; SDP offer/answer...</span>
                    </div>
                  ) : (
                    <div className="flex flex-col items-center gap-2 text-outline font-mono text-xs">
                      <Video className="w-8 h-8 text-outline-variant" />
                      <span>Stream Idle &bull; Press &ldquo;Connect Real-Time KYC Call&rdquo; to simulate</span>
                    </div>
                  )}

                  {/* Top pill inside video */}
                  <div className="absolute top-2 left-2 px-2.5 py-1 rounded bg-surface/80 border border-outline-variant/40 font-mono text-[10px] text-outline">
                    WebRTC PeerConnection: {callState.toUpperCase()}
                  </div>
                </div>

                {/* Call Controls */}
                <div className="flex flex-wrap items-center justify-between gap-3 pt-4">
                  <div className="flex items-center gap-2">
                    {callState !== 'connected' ? (
                      <button
                        onClick={handleStartCall}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-on-primary font-mono text-xs font-semibold hover:bg-primary-fixed-dim transition-colors"
                      >
                        <Play className="w-3.5 h-3.5" />
                        <span>Connect Real-Time KYC Call</span>
                      </button>
                    ) : (
                      <button
                        onClick={handleEndCall}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-error text-on-error font-mono text-xs font-semibold hover:opacity-90 transition-opacity"
                      >
                        <X className="w-3.5 h-3.5" />
                        <span>Terminate WebRTC Stream</span>
                      </button>
                    )}
                  </div>
                  <div className="font-mono text-[11px] text-outline">
                    TanStack Query State Sync: Ready
                  </div>
                </div>
              </div>

              {/* Architecture Blueprint Summary */}
              <div className="p-4 rounded-xl bg-surface-container-low border border-outline-variant/30 space-y-2 text-xs font-body leading-relaxed text-on-surface-variant">
                <div className="font-mono text-xs font-semibold text-primary uppercase">
                  Technical Architecture Highlights:
                </div>
                <p>
                  &bull; <strong>Embeddable Web SDK:</strong> Delivered a plug-and-play iframe/micro-frontend SDK enabling any internal PhonePe vertical to spin up audio/video KYC support in under 3 lines of configuration.
                </p>
                <p>
                  &bull; <strong>TanStack Query Server State:</strong> Synced room connection tokens, agent availability queues, and heartbeat metrics without polling overhead.
                </p>
              </div>
            </div>
          )}

          {/* TAB 2: CSV & DUCKDB */}
          {activeTab === 'csv' && (
            <div className="space-y-6">
              <div className="p-4 rounded-xl bg-surface-container-high/60 border border-outline-variant/40 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-surface-variant/40">
                  <div className="font-mono text-xs text-secondary font-semibold uppercase tracking-wider">
                    In-Browser DuckDB-wasm Query &bull; Client-Side Analytics
                  </div>
                  {/* Preset Selector */}
                  <div className="flex items-center gap-1.5 font-mono text-xs">
                    <span className="text-outline text-[11px]">Preset:</span>
                    {(['fintech', 'ecommerce', 'performance'] as const).map((preset) => (
                      <button
                        key={preset}
                        onClick={() => {
                          setCsvPreset(preset);
                          setSqlQuery(
                            preset === 'fintech'
                              ? "SELECT category, SUM(amount_inr) AS volume, COUNT(*) AS transactions FROM payments GROUP BY category ORDER BY volume DESC;"
                              : preset === 'ecommerce'
                              ? "SELECT category, SUM(sales) AS total_sales, COUNT(*) AS orders FROM orders GROUP BY category;"
                              : "SELECT metric, value, target, status FROM web_vitals WHERE status = 'Optimal';"
                          );
                        }}
                        className={`px-2 py-1 rounded text-[11px] capitalize transition-colors ${
                          csvPreset === preset
                            ? 'bg-secondary/20 text-secondary border border-secondary/40 font-semibold'
                            : 'bg-surface-container text-outline hover:text-on-surface'
                        }`}
                      >
                        {preset}
                      </button>
                    ))}
                  </div>
                </div>

                {/* SQL Input simulation */}
                <div className="p-3 rounded-lg bg-surface-container-lowest border border-surface-variant/80 font-mono text-xs space-y-2">
                  <div className="flex items-center justify-between text-outline text-[11px]">
                    <span className="flex items-center gap-1.5 text-secondary">
                      <Sparkles className="w-3.5 h-3.5" /> AI Inferred SQL Query
                    </span>
                    <span>100% In-Browser Execution</span>
                  </div>
                  <input
                    type="text"
                    value={sqlQuery}
                    onChange={(e) => setSqlQuery(e.target.value)}
                    className="w-full bg-surface-container-high/60 p-2 rounded border border-outline-variant/50 text-primary font-mono text-xs focus:outline-none focus:border-secondary"
                  />
                  <div className="flex items-center justify-between pt-1">
                    <span className="text-[11px] text-outline">Query Latency: &lt; 12ms (DuckDB-wasm WebAssembly thread)</span>
                    <button
                      onClick={() => {
                        setQueryRunning(true);
                        setTimeout(() => setQueryRunning(false), 300);
                      }}
                      className="px-3 py-1 rounded bg-secondary text-on-secondary font-mono text-[11px] font-semibold hover:bg-secondary-fixed transition-colors flex items-center gap-1"
                    >
                      {queryRunning ? <RefreshCw className="w-3 h-3 animate-spin" /> : <Play className="w-3 h-3" />}
                      Execute
                    </button>
                  </div>
                </div>

                {/* Query Results Table */}
                <div className="overflow-x-auto rounded-lg border border-outline-variant/40 bg-surface-container-lowest">
                  <table className="w-full font-mono text-xs text-left">
                    <thead className="bg-surface-container-high/80 text-outline border-b border-surface-variant/60">
                      <tr>
                        <th className="p-3">Category / Metric</th>
                        <th className="p-3">Aggregated Value</th>
                        <th className="p-3">Transactions / Target</th>
                        <th className="p-3">Pipeline Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-surface-variant/30">
                      {sampleDatasets[csvPreset].map((row, idx) => (
                        <tr key={idx} className="hover:bg-surface-container-high/40 transition-colors">
                          <td className="p-3 text-on-surface font-semibold">{row.category}</td>
                          <td className="p-3 text-secondary">{row.volume}</td>
                          <td className="p-3 text-on-surface-variant">{row.count}</td>
                          <td className="p-3">
                            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] bg-secondary/10 text-secondary border border-secondary/30">
                              <ShieldCheck className="w-3 h-3" />
                              {row.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: RICH TEXT EDITOR */}
          {activeTab === 'editor' && (
            <div className="space-y-6">
              <div className="p-4 rounded-xl bg-surface-container-high/60 border border-outline-variant/40 space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-surface-variant/40">
                  <div className="font-mono text-xs text-tertiary font-semibold uppercase tracking-wider">
                    Custom Headless DOM Selection &amp; History Stack
                  </div>
                  <span className="font-mono text-[11px] text-outline">Bundle: &lt; 8KB Gzipped</span>
                </div>

                {/* Toolbar */}
                <div className="flex flex-wrap items-center gap-1 p-2 rounded-lg bg-surface-container-lowest border border-outline-variant/40">
                  <button
                    onClick={() => formatDocument('bold')}
                    className="p-1.5 rounded hover:bg-surface-container-high text-on-surface hover:text-primary transition-colors"
                    title="Bold"
                  >
                    <Bold className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => formatDocument('italic')}
                    className="p-1.5 rounded hover:bg-surface-container-high text-on-surface hover:text-primary transition-colors"
                    title="Italic"
                  >
                    <Italic className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => formatDocument('formatBlock', '<h3>')}
                    className="p-1.5 rounded hover:bg-surface-container-high text-on-surface hover:text-primary transition-colors"
                    title="Heading 1"
                  >
                    <Heading1 className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => formatDocument('formatBlock', '<h4>')}
                    className="p-1.5 rounded hover:bg-surface-container-high text-on-surface hover:text-primary transition-colors"
                    title="Heading 2"
                  >
                    <Heading2 className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => formatDocument('insertUnorderedList')}
                    className="p-1.5 rounded hover:bg-surface-container-high text-on-surface hover:text-primary transition-colors"
                    title="Bullet List"
                  >
                    <List className="w-4 h-4" />
                  </button>
                  <div className="w-[1px] h-5 bg-outline-variant/40 mx-1"></div>
                  <button
                    onClick={() => formatDocument('undo')}
                    className="p-1.5 rounded hover:bg-surface-container-high text-on-surface hover:text-primary transition-colors"
                    title="Undo"
                  >
                    <Undo className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => formatDocument('redo')}
                    className="p-1.5 rounded hover:bg-surface-container-high text-on-surface hover:text-primary transition-colors"
                    title="Redo"
                  >
                    <Redo className="w-4 h-4" />
                  </button>
                </div>

                {/* Editable Area */}
                <div
                  ref={editorRef}
                  contentEditable
                  suppressContentEditableWarning
                  onInput={(e) => setEditorText(e.currentTarget.innerText)}
                  onSelect={() => {
                    const sel = window.getSelection();
                    if (sel && sel.anchorNode) {
                      setSelectionRange(
                        `Anchor: ${sel.anchorOffset} | Focus: ${sel.focusOffset} | Element: <${sel.anchorNode.parentElement?.tagName.toLowerCase() || 'div'}>`
                      );
                    }
                  }}
                  className="min-h-[160px] p-4 rounded-lg bg-surface-container-lowest border border-outline-variant/50 font-body text-sm text-on-surface focus:outline-none focus:border-tertiary/80 leading-relaxed"
                >
                  <p>
                    <strong>High-Performance Headless Editor Primitive</strong>
                  </p>
                  <p className="mt-2">
                    Engineered from scratch using pure DOM Selection and Range APIs, without Slate, Draft.js, or Quill.
                    Features customizable token ASTs, keyboard shortcuts, and full WCAG 2.1 AAA keyboard navigation.
                  </p>
                </div>

                {/* DOM Selection Inspector */}
                <div className="flex items-center justify-between text-outline font-mono text-[11px] pt-1">
                  <span>Selection Inspector: <span className="text-secondary">{selectionRange}</span></span>
                  <span className="text-outline">ARIA 1.2 Compliant</span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3 border-t border-surface-variant/50 bg-surface-container-lowest/80 flex items-center justify-between">
          <span className="font-mono text-xs text-outline">
            Built by Swati Gavhane &bull; Senior Fullstack Engineer
          </span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-surface-container-high hover:bg-surface-variant text-on-surface font-mono text-xs font-semibold border border-outline-variant/60 transition-colors"
          >
            Close Sandbox
          </button>
        </div>
      </div>
    </div>
  );
};
