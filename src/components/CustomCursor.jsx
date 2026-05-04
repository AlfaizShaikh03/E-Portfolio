import { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const mouse = useRef({ x: 0, y: 0 });
  const dot = useRef({ x: 0, y: 0 });
  const ring = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const onMouseMove = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    const onMouseOver = (e) => {
      const hoverable = e.target.closest('a, button, .btn, .glass-card, .pill, .contact-link, .nav-hamburger');
      if (hoverable) {
        ringRef.current?.classList.add('hover');
      } else {
        ringRef.current?.classList.remove('hover');
      }
    };

    const animate = () => {
      // Dot follows with tight lerp
      dot.current.x += (mouse.current.x - dot.current.x) * 0.15;
      dot.current.y += (mouse.current.y - dot.current.y) * 0.15;
      // Ring follows with loose lerp
      ring.current.x += (mouse.current.x - ring.current.x) * 0.08;
      ring.current.y += (mouse.current.y - ring.current.y) * 0.08;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${dot.current.x - 3}px, ${dot.current.y - 3}px)`;
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ring.current.x - 18}px, ${ring.current.y - 18}px)`;
      }
      requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseover', onMouseOver);
    requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseover', onMouseOver);
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-dot" />
      <div ref={ringRef} className="cursor-ring" />
    </>
  );
}
