import { useRef } from 'react';
import { motion } from 'framer-motion';

function MagneticButton({ children, className, href, ...props }) {
  const ref = useRef(null);
  const handleMouseMove = (e) => {
    const btn = ref.current;
    if (!btn) return;
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    btn.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
  };
  const handleMouseLeave = () => {
    if (ref.current) ref.current.style.transform = 'translate(0, 0)';
  };
  const Tag = href ? 'a' : 'button';
  return (
    <Tag ref={ref} className={className} href={href}
      onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}
      style={{ transition: 'transform 0.5s cubic-bezier(0.23, 1, 0.32, 1)' }}
      {...props}>{children}</Tag>
  );
}

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.8, delay: i * 0.15, ease: [0.25, 0.4, 0.25, 1] },
  }),
};

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content" style={{ textAlign: 'center', maxWidth: '900px', margin: '0 auto' }}>


        <motion.p custom={0.5} variants={fadeUp} initial="hidden" animate="visible"
          style={{
            fontSize: 'clamp(0.9rem, 1.5vw, 1.1rem)', color: 'var(--accent-cyan-light)',
            letterSpacing: '0.15em', textTransform: 'uppercase', fontFamily: 'var(--font-mono)',
            fontWeight: 500, marginBottom: '16px'
          }}>
          HELLO WORLD, I'M
        </motion.p>

        <motion.h1 className="hero-headline" custom={1} variants={fadeUp}
          initial="hidden" animate="visible" style={{ textAlign: 'center' }}>
          <span className="gradient-text highlight">ALFAIZ SHAIKH</span>
        </motion.h1>

        <motion.p custom={1.5} variants={fadeUp} initial="hidden" animate="visible"
          style={{
            fontSize: 'clamp(1rem, 2vw, 1.3rem)', fontWeight: 600, color: 'var(--text-primary)',
            letterSpacing: '0.08em', fontFamily: 'var(--font-heading)', marginBottom: '20px'
          }}>
          AI/ML ENGINEER · CYBERSECURITY SPECIALIST
        </motion.p>

        <motion.p className="hero-sub" custom={2} variants={fadeUp}
          initial="hidden" animate="visible" style={{ textAlign: 'center', margin: '0 auto 20px' }}>
          I build systems where intelligence runs locally, data stays private,
          and security is architected from the ground up — from on-device LSTM
          threat detectors to fully offline generative AI pipelines.
        </motion.p>

        <motion.div className="hero-ctas" custom={3} variants={fadeUp}
          initial="hidden" animate="visible" style={{ justifyContent: 'center' }}>
          <MagneticButton className="btn btn-primary" href="#projects">
            View Projects
          </MagneticButton>
          <MagneticButton className="btn btn-ghost" href="/AlfaizCV.pdf"
            target="_blank" rel="noopener noreferrer">
            Download Resume
          </MagneticButton>
        </motion.div>

        <motion.div custom={3.5} variants={fadeUp} initial="hidden" animate="visible"
          style={{ display: 'flex', gap: '20px', justifyContent: 'center', marginTop: '24px' }}>
          <a href="https://github.com/AlfaizShaikh03" target="_blank" rel="noopener noreferrer"
            className="contact-link" style={{ width: '42px', height: '42px', fontSize: '1rem' }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" /></svg>
          </a>
          <a href="https://linkedin.com/in/alfaiz-shaikh-a29578297" target="_blank" rel="noopener noreferrer"
            className="contact-link" style={{ width: '42px', height: '42px', fontSize: '1rem' }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg>
          </a>
        </motion.div>

        <motion.div custom={4} variants={fadeUp} initial="hidden" animate="visible"
          style={{ marginTop: '60px' }}>
          <a href="#about" style={{ color: 'var(--accent-cyan)', fontSize: '1.5rem' }}>↓</a>
        </motion.div>
      </div>
    </section>
  );
}
