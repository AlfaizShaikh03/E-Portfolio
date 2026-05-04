import { motion } from 'framer-motion';

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 40, filter: 'blur(6px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.6, ease: [0.25, 0.4, 0.25, 1] } },
};

const certs = [
  { icon: '☁️', name: 'AWS Cloud Practitioner', org: 'Amazon Web Services' },
  { icon: '🛰️', name: 'AI/ML for Geodata Analysis', org: 'ISRO' },
  { icon: '💼', name: 'Career Edge — Young Professional', org: 'TCS iON' },
  { icon: '📊', name: 'Data Analytics Essentials', org: 'Cisco' },

];

export default function Certifications() {
  return (
    <section className="section" id="certifications">
      <motion.div variants={container} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}>

        <motion.div variants={item} style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h2 style={{
            fontFamily: 'var(--font-heading)', fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            fontWeight: 800, marginBottom: '12px'
          }}>
            <span className="gradient-text">Certifications & Achievements</span>
          </h2>
        </motion.div>

        <div className="certs-grid">
          {certs.map((c) => (
            <motion.div key={c.name} variants={item} className="glass-card cert-card">
              <div className="cert-icon">{c.icon}</div>
              <div className="cert-name">{c.name}</div>
              <div className="cert-org">{c.org}</div>
            </motion.div>
          ))}
        </div>

      </motion.div>
    </section>
  );
}
