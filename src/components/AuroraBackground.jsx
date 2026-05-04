import { useEffect, useRef } from 'react';

export default function AuroraBackground() {
  const canvasRef = useRef(null);
  const mouseRef = useRef(null);

  /* ---- Particle field (inspired by reference but enhanced) ---- */
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animId;
    let particles = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    class Particle {
      constructor() {
        this.reset();
      }
      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 0.5;
        this.speedY = -(Math.random() * 0.3 + 0.1);
        this.speedX = (Math.random() - 0.5) * 0.2;
        this.opacity = Math.random() * 0.6 + 0.1;
        this.pulse = Math.random() * Math.PI * 2;
      }
      update() {
        this.y += this.speedY;
        this.x += this.speedX;
        this.pulse += 0.02;
        if (this.y < -10) {
          this.y = canvas.height + 10;
          this.x = Math.random() * canvas.width;
        }
      }
      draw() {
        const o = this.opacity * (0.5 + 0.5 * Math.sin(this.pulse));
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(34, 211, 238, ${o})`;
        ctx.fill();
      }
    }

    for (let i = 0; i < 80; i++) particles.push(new Particle());

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => { p.update(); p.draw(); });
      animId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  /* ---- Mouse-reactive glow ---- */
  useEffect(() => {
    const onMouseMove = (e) => {
      if (mouseRef.current) {
        mouseRef.current.style.transform = `translate(${e.clientX - 200}px, ${e.clientY - 200}px)`;
      }
    };
    window.addEventListener('mousemove', onMouseMove);
    return () => window.removeEventListener('mousemove', onMouseMove);
  }, []);

  return (
    <>
      <canvas ref={canvasRef} style={{
        position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none',
      }} />
      <div className="aurora-bg">
        <div className="aurora-blob" />
      </div>
      <div ref={mouseRef} className="aurora-mouse" />
    </>
  );
}
