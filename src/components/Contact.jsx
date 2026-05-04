import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 40, filter: 'blur(8px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.8, ease: [0.25, 0.4, 0.25, 1] } },
};

const contactItems = [
  {
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>,
    label: 'EMAIL',
    value: 'alfaiz.shaikh.work@gmail.com',
    href: 'mailto:alfaiz.shaikh.work@gmail.com',
  },
  {
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>,
    label: 'PHONE',
    value: '+91 9359933199',
    href: 'tel:+919359933199',
  },
  {
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>,
    label: 'LINKEDIN',
    value: 'alfaiz-shaikh',
    href: 'https://linkedin.com/in/alfaiz-shaikh-a29578297',
  },
  {
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>,
    label: 'GITHUB',
    value: 'AlfaizShaikh03',
    href: 'https://github.com/AlfaizShaikh03',
  },
];

export default function Contact() {
  return (
    <section className="section" id="contact">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}>
        {/* Header */}
        <motion.div variants={fadeUp} style={{ textAlign: 'center', marginBottom: '16px' }}>
          <h2 style={{
            fontFamily: 'var(--font-heading)', fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            fontWeight: 800, marginBottom: '12px'
          }}>
            <span className="gradient-text">GET IN TOUCH</span>
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1rem', marginBottom: '48px' }}>
            Have a project in mind? Let's build something extraordinary together.
          </p>
        </motion.div>

        {/* Two-column: Contact info + Form */}
        <motion.div variants={fadeUp} className="contact-grid">
          {/* Left: Contact Information */}
          <div>
            <h3 style={{
              fontFamily: 'var(--font-heading)', fontSize: '1.4rem', fontWeight: 700,
              marginBottom: '32px', color: 'var(--text-primary)'
            }}>Contact Information</h3>
            <div className="contact-info-list">
              {contactItems.map((c) => (
                <a key={c.label} href={c.href} target="_blank" rel="noopener noreferrer" className="contact-info-item">
                  <div className="contact-info-icon">{c.icon}</div>
                  <div>
                    <div className="contact-info-label">{c.label}</div>
                    <div className="contact-info-value">{c.value}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="glass-card" style={{ padding: '32px' }}>
            <form onSubmit={(e) => {
              e.preventDefault();
              const fd = new FormData(e.target);
              const name = fd.get('name');
              const email = fd.get('email');
              const message = fd.get('message');
              window.location.href = `mailto:alfaiz.shaikh.work@gmail.com?subject=Portfolio Contact from ${name}&body=${encodeURIComponent(message)}%0A%0AFrom: ${name} (${email})`;
            }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
                <div>
                  <label className="form-label">Full Name</label>
                  <input type="text" name="name" className="form-input" placeholder="Your Name" required />
                </div>
                <div>
                  <label className="form-label">Email Address</label>
                  <input type="email" name="email" className="form-input" placeholder="Email Address" required />
                </div>
              </div>
              <div style={{ marginBottom: '24px' }}>
                <label className="form-label">Message</label>
                <textarea name="message" className="form-input form-textarea" placeholder="How can I help you?" rows={5} required />
              </div>
              <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                Send Message ✉
              </button>
            </form>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
