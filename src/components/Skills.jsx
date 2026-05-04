import { motion } from 'framer-motion';

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};
const cardVariant = {
  hidden: { opacity: 0, y: 60, scale: 0.95, filter: 'blur(8px)' },
  visible: { opacity: 1, y: 0, scale: 1, filter: 'blur(0px)', transition: { duration: 0.7, ease: [0.25, 0.4, 0.25, 1] } },
};

const categories = [
  {
    title: 'Cybersecurity & Cloud',
    skills: ['Penetration Testing', 'Vulnerability Mitigation (SQLi, XSS)', 'AWS Cloud Practitioner', 'Cloud Fundamentals'],
  },
  {
    title: 'Programming Languages',
    skills: ['C', 'Python', 'Java', 'HTML5', 'CSS3', 'JavaScript', 'PHP', 'SQL'],
  },
  {
    title: 'AI/ML',
    skills: ['GenAI', 'Edge AI', ' LSTM', 'Prompt Engineering'],
  },
  {
    title: 'Tools & Others',
    skills: ['Git', 'Android Studio', 'Linux', 'AWS', 'Firebase'],
  },
];

export default function Skills() {
  return (
    <section className="section" id="skills">
      <motion.div variants={container} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}>

        {/* Header matching reference */}
        <motion.div variants={cardVariant} style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h2 style={{
            fontFamily: 'var(--font-heading)', fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            fontWeight: 800, marginBottom: '12px'
          }}>
            Technical <span className="gradient-text" style={{ color: 'var(--accent-violet)' }}>Arsenal</span>
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1rem' }}>
            A comprehensive list of tools and technologies I use to bring ideas to life.
          </p>
        </motion.div>

        {/* 3 Column Grid */}
        <div className="skills-arsenal-grid">
          {categories.map((cat) => (
            <motion.div key={cat.title} variants={cardVariant} className="glass-card skill-arsenal-card">
              <h3 className="skill-arsenal-title">{cat.title}</h3>
              <div className="skill-arsenal-tags">
                {cat.skills.map((s) => (
                  <span key={s} className="pill pill-arsenal">{s}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
