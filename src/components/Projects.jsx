import { motion } from 'framer-motion';

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
};
const cardVariant = {
  hidden: { opacity: 0, y: 80, scale: 0.95, filter: 'blur(10px)' },
  visible: {
    opacity: 1, y: 0, scale: 1, filter: 'blur(0px)',
    transition: { duration: 0.8, ease: [0.25, 0.4, 0.25, 1] },
  },
};

const projects = [
  {
    id: 'secu',
    number: '01',
    name: 'SecuNexus',
    subtitle: 'Mobile Threat Protection',
    tagline: "Your Phone's AI-Powered Shield — No Cloud Required.",
    description: 'Engineered a privacy-first Android application in Kotlin with on-device LSTM + Random Forest models for real-time threat detection, spam SMS filtering, and safe browsing. Zero cloud dependency for data processing. Research paper presented at the Global Conference on Cyber Violence and Digital Deception.',
    stack: ['Kotlin', 'LSTM', 'Random Forest', 'Jetpack Compose', 'MVVM', 'Room'],
    codeLink: '#', // Add actual links later if available
    demoLink: '#',
  },
  {
    id: 'local',
    number: '02',
    name: 'Local-Pod',
    subtitle: 'Offline Generative AI Audio Pipeline',
    tagline: 'From Document to Podcast — 100% Offline, 100% Private.',
    description: 'Built a fully offline 5-stage pipeline: text ingestion → Phi-3 SLM dialogue generation → Piper Neural TTS dual-voice synthesis → MP3 export. Implements dynamic text chunking and a 3-layer JSON extraction strategy. Supports 1000+ page documents on consumer CPUs (~8GB RAM).',
    stack: ['Python', 'Phi-3 GGUF', 'Piper TTS', 'LangChain', 'Eel', 'Web Audio API'],
    codeLink: '#',
    demoLink: '#',
  },
  {
    id: 'argus',
    number: '03',
    name: 'Argus',
    subtitle: 'Smart Permission Analyzer',
    tagline: 'See What Your Apps Really Access — Privacy Auditing, On-Device.',
    description: 'Developed an open-source Android auditing app using Kotlin + Jetpack Compose with weighted heuristic algorithms for real-time risk scoring. All analysis is on-device — zero data exfiltration. Provides users a transparent, quantified view of their app ecosystem\'s privacy posture.',
    stack: ['Kotlin', 'Jetpack Compose', 'Weighted Heuristics', 'Material Design 3'],
    codeLink: '#',
    demoLink: '#',
  },
  {
    id: 'twitter',
    number: '04',
    name: 'Twitter Sentiment Analysis',
    subtitle: 'NLP Pipeline',
    tagline: 'Real-Time Pulse of Public Opinion — Scraped, Classified, Visualized.',
    description: 'Built an end-to-end NLP classification pipeline with Tweepy live API ingestion, custom preprocessing (tokenization, stop-word removal), sentiment classification, and time-series trend visualization. Transforms raw, noisy social media data into structured visual analytics.',
    stack: ['Python', 'Tweepy', 'NLP', 'Matplotlib', 'Pandas'],
    codeLink: '#',
    demoLink: '#',
  },
];

export default function Projects() {
  return (
    <section className="section" id="projects">
      <motion.div variants={container} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}>

        {/* Header */}
        <motion.div variants={cardVariant} style={{ textAlign: 'center', marginBottom: '60px' }}>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '16px' }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--text-muted)' }}><rect x="2" y="3" width="20" height="14" rx="2" ry="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" /></svg>
          </div>
          <h2 style={{
            fontFamily: 'var(--font-heading)', fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            fontWeight: 800, marginBottom: '12px'
          }}>
            <span className="gradient-text">Projects</span>
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1rem' }}>
            A selection of my recent works, blending AI with privacy-first engineering.
          </p>
        </motion.div>

        {/* Grid matching reference */}
        <div className="projects-grid">
          {projects.map((p) => (
            <motion.div key={p.id} variants={cardVariant} className="glass-card project-grid-card">
              <div className="project-number">{p.number}</div>

              <div className="project-content-wrapper">
                <h3 className="project-grid-title">{p.name} <span style={{ display: 'block', fontSize: '0.6em', color: 'var(--text-muted)', marginTop: '4px', fontWeight: 400 }}>{p.subtitle}</span></h3>

                <p className="project-grid-tagline">{p.tagline}</p>
                <p className="project-grid-desc">{p.description}</p>

                <div className="project-grid-stack">
                  {p.stack.map((s) => <span key={s} className="pill pill-sm">{s}</span>)}
                </div>
              </div>

              <div className="project-grid-links">
                <a href={p.codeLink} className="project-link">
                  <svg width="18" height="18" viewBox="0 0 29 29" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" /></svg>
                  Code
                </a>

              </div>
            </motion.div>
          ))}
        </div>

      </motion.div>
    </section>
  );
}
