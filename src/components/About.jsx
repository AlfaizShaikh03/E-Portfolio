import { motion } from 'framer-motion';
import { useCountUp } from '../hooks/useCountUp';

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};
const fadeUp = {
  hidden: { opacity: 0, y: 60, filter: 'blur(8px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.8, ease: [0.25, 0.4, 0.25, 1] } },
};

function StatCard({ value, label, isFloat, suffix }) {
  const [count, ref] = useCountUp(value, 1800);
  return (
    <div className="stat-card" ref={ref}>
      <div className="stat-value">{isFloat ? count.toFixed(2) : count}{suffix || ''}</div>
      <div className="stat-label">{label}</div>
    </div>
  );
}

export default function About() {
  return (
    <section className="section" id="about">
      <motion.div variants={container} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }}>

        {/* Section header — centered like reference */}
        <motion.div variants={fadeUp} style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h2 className="section-title" style={{ display: 'inline-block' }}>About Me</h2>
        </motion.div>

        {/* Two-column: Photo left + Text right (like reference) */}
        <motion.div variants={fadeUp} className="glass-card about-card">
          {/* Profile Photo Column */}
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start' }}>
            <div className="about-photo-ring">
              <div className="about-photo-initials">AS</div>
            </div>
          </div>

          {/* Text Column */}
          <div>
            <h3 style={{
              fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.5rem, 3vw, 2.2rem)',
              fontWeight: 700, marginBottom: '24px', lineHeight: 1.2
            }}>
              Developer who{' '}
              <span className="gradient-text">builds beyond code</span>
            </h3>
            <div className="about-text">
              <p>
                I'm Alfaiz Shaikh, a B.Tech CSE (Honors: <strong>AI & ML</strong>) graduate at{' '}
                <strong>Maharashtra Institute of Technology</strong>, Chh. Sambhajinagar
                (CGPA: <strong>9.0</strong>).
              </p>
              <p>
                I build privacy-first systems and AI-powered solutions — from deploying{' '}
                <strong>on-device LSTM and Random Forest models</strong> for mobile threat detection,
                to engineering <strong>fully offline generative AI pipelines</strong> using Microsoft Phi-3.
                I'm currently working as a <strong>Cybersecurity Intern at Cyber Sanskar</strong>,
                gaining hands-on experience building interactive security simulators and
                enterprise-grade defensive tools.
              </p>
              <p>
                Beyond development, I served as <strong>Coordinator for TECHNOPHILIA 2k25</strong>,
                managing cross-functional teams and technical events — strengthening both
                my leadership skills and execution capabilities while building a strong tech community.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Stats row below — like reference */}
        <motion.div variants={fadeUp} className="stats-row">
          <StatCard value={6} label="PROJECTS BUILT" suffix="+" />
          <StatCard value={9.05} label="CGPA" isFloat />
          <StatCard value={10} label="CYBER MODULES" suffix="+" />
          <StatCard value={1} label="RESEARCH PAPER" />
          <StatCard value={4} label="CERTIFICATIONS" suffix="+" />
        </motion.div>

      </motion.div>
    </section>
  );
}
