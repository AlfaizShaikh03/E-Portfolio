import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};
const fadeUp = {
  hidden: { opacity: 0, y: 50, filter: 'blur(6px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.6, ease: [0.25, 0.4, 0.25, 1] } },
};

const journeyData = [
  {
    year: '1st Year',
    range: '2022-23',
    title: 'Engineering Foundation & Exploration',
    items: [
      'Mastered C-Programming and pointer arithmetic — building the foundation for low-level optimization.',
      'Studied Calculus & Differential Equations — the mathematical backbone of gradient descent in ML.',
      'Built a Smart Plant Watering System (Arduino IoT) — first hardware-software integration project.',
      'Learned Python Programming and Statistics — gateways to data science and AI.',
    ],
    skills: ['C', 'Python', 'Arduino', 'Calculus', 'Statistics'],
  },
  {
    year: '2nd Year',
    range: '2023-24',
    title: 'Core CS & Data Mastery',
    items: [
      'Excelled in Data Structures (O grade) and Discrete Mathematics — algorithmic thinking foundations.',
      'Mastered OOP in Java, DBMS, and Computer Networks — essential full-stack engineering skills.',
      'Developed a Movie Rating Web Application using full-stack web technologies.',
      'Studied HCI and Complex Variable Mathematics — expanding design thinking and analytical skills.',
    ],
    skills: ['Java', 'SQL', 'Data Structures', 'Networks', 'Web Dev'],
  },
  {
    year: '3rd Year',
    range: '2024-25',
    title: 'AI/ML Specialization & Major Projects',
    items: [
      'Specialized in Machine Learning, Cloud Computing, and Compiler Design.',
      'Built Twitter Sentiment Analysis — end-to-end NLP pipeline with live API data (EBL project).',
      'Started SecuNexus Major Project — on-device LSTM + Random Forest threat detection.',
      'Earned AWS Cloud Practitioner and ISRO AI/ML certifications.',
      'Completed RedHat System Administration and Cryptography & Network Security.',
    ],
    skills: ['Machine Learning', 'Cloud', 'NLP', 'Cryptography', 'AWS'],
  },
  {
    year: '4th Year',
    range: '2025-26',
    title: 'Research, Internship & Deployment',
    items: [
      'Completed SecuNexus and presented research paper at Kalinga University Global Conference.',
      'Built Local-Pod — fully offline generative AI audio pipeline with Phi-3 and Piper TTS.',
      'Developed Argus — privacy-first permission analyzer with weighted heuristic algorithms.',
      'Interned at Cyber Sanskar — engineered 10 full-stack cybersecurity simulators.',
      'Led TECHNOPHILIA 2k25 as Coordinator. Studied Computer Vision and Digital Forensics.',
    ],
    skills: ['GenAI', 'Cybersecurity', 'Kotlin', 'Edge AI', 'Research'],
  },
];

export default function Journey() {
  const [activeYear, setActiveYear] = useState(0);

  return (
    <section className="section" id="journey">
      <motion.div variants={container} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}>

        <motion.div variants={fadeUp} style={{ textAlign: 'center', marginBottom: '16px' }}>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '8px' }}>My Journey</p>
          <h2 style={{
            fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
            fontWeight: 700, marginBottom: '12px'
          }}>
            <span className="gradient-text">4 years of growth and impact</span>
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
            My evolution as an engineering student through the years.
          </p>
        </motion.div>

        {/* Year filter tabs */}
        <motion.div variants={fadeUp} className="journey-tabs">
          {journeyData.map((item, i) => (
            <button
              key={i}
              className={`journey-tab ${activeYear === i ? 'active' : ''}`}
              onClick={() => setActiveYear(i)}
            >
              {item.year} ({item.range})
            </button>
          ))}
        </motion.div>

        {/* Timeline card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeYear}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.25, 0.4, 0.25, 1] }}
            className="journey-card-wrapper"
          >
            <div className="journey-timeline-line" />
            <div className="glass-card journey-card">
              <div className="journey-year-badge">{journeyData[activeYear].year.toUpperCase()} ({journeyData[activeYear].range})</div>
              <h3 style={{
                fontFamily: 'var(--font-heading)', fontSize: '1.4rem', fontWeight: 700,
                marginBottom: '20px', color: 'var(--text-primary)'
              }}>
                {journeyData[activeYear].title}
              </h3>
              <ul className="journey-items">
                {journeyData[activeYear].items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
              <div className="journey-skills">
                {journeyData[activeYear].skills.map((s) => (
                  <span key={s} className="pill">{s}</span>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

      </motion.div>
    </section>
  );
}
