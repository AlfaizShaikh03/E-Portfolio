import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 60, filter: 'blur(8px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.8, ease: [0.25, 0.4, 0.25, 1] } },
};

const bullets = [
  <>Architected and deployed <strong>10 distinct full-stack cybersecurity simulator modules</strong> (SQLi, XSS, Dictionary Attacks, Steganography, Phishing Awareness) — each with both vulnerable and secure implementations.</>,
  <>Engineered a <strong>custom SHA-256 Hash Generator</strong> with visual avalanche effect demo, and an <strong>Email Header Analyzer</strong> parsing raw SMTP data for spoofed address detection.</>,
  <>Developed using <strong>native HTML5, CSS3, and raw PHP</strong> — mastering foundational server-side security with <strong>strict MIME-type validation</strong> and <strong>XSS neutralization</strong>.</>,
  <>Built a <strong>Steganography Assessment Platform</strong> with <strong>Vite + React</strong> frontend, <strong>Next.js 16</strong> admin dashboard, and <strong>Supabase/PostgreSQL</strong> backend with <strong>Row Level Security</strong>.</>,
  <>Designed the <strong>Master Portal Integration</strong> — unified SPA with <strong>glassmorphism aesthetics</strong> and <strong>zero-layout-shift</strong> tab navigation.</>,
  <>Configured automated vulnerability scanners for <strong>active threat hunting</strong> on live web applications, generating professional technical reports.</>,
];

const stack = ['PHP', 'HTML5/CSS3', 'JavaScript', 'Vite', 'React', 'Next.js 16', 'Supabase', 'PostgreSQL', 'SHA-256', 'SMTP'];

export default function Experience() {
  return (
    <section className="section" id="experience">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }}>
        <motion.h2 variants={fadeUp} className="section-title">Professional Experience</motion.h2>
        <div className="exp-timeline">
          <motion.div variants={fadeUp} className="glass-card exp-card">
            <div className="exp-dot" />
            <div className="exp-role">Cybersecurity & Full-Stack Web Development Intern</div>
            <div className="exp-company gradient-text">Cyber Sanskar</div>
            <div className="exp-date">January 2026 — May 2026</div>
            <div className="exp-philosophy">
              Immersed in a forward-thinking environment that harmonizes modern IT culture with timeless behavioral ethics through the <strong>"17th Sanskar"</strong> philosophy — building technology that educates, not just protects.
            </div>
            <ul className="exp-bullets">
              {bullets.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
            <div className="exp-stack">
              {stack.map((s) => (
                <span key={s} className="pill">{s}</span>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
