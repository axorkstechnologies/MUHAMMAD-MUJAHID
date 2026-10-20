import React, { useEffect, useRef } from 'react';

export const LiquidBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Mouse coordinates with fluid smoothing
    const mouse = { x: width * 0.5, y: height * 0.3, targetX: width * 0.5, targetY: height * 0.3 };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Deep fluid light orbs
    const blobs = [
      { x: width * 0.25, y: height * 0.25, r: Math.min(width, height) * 0.38, vx: 0.3, vy: 0.2, color: 'rgba(56, 189, 248, 0.08)' },
      { x: width * 0.75, y: height * 0.38, r: Math.min(width, height) * 0.34, vx: -0.25, vy: 0.3, color: 'rgba(99, 102, 241, 0.085)' },
      { x: width * 0.5, y: height * 0.78, r: Math.min(width, height) * 0.42, vx: 0.2, vy: -0.25, color: 'rgba(168, 85, 247, 0.07)' },
      { x: width * 0.18, y: height * 0.68, r: Math.min(width, height) * 0.32, vx: -0.15, vy: -0.15, color: 'rgba(16, 185, 129, 0.06)' }
    ];

    // Micro stardust particles for 2026 depth
    const particleCount = 45;
    const particles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 1.5 + 0.5,
      speedX: (Math.random() - 0.5) * 0.2,
      speedY: (Math.random() - 0.5) * 0.2,
      alpha: Math.random() * 0.4 + 0.1,
      color: Math.random() > 0.5 ? '56, 189, 248' : '168, 85, 247'
    }));

    let t = 0;
    const isHeadless = typeof navigator !== 'undefined' && (/HeadlessChrome/i.test(navigator.userAgent) || navigator.webdriver);

    const render = () => {
      t += 0.007;

      // Smooth mouse tracking
      mouse.x += (mouse.targetX - mouse.x) * 0.04;
      mouse.y += (mouse.targetY - mouse.y) * 0.04;

      ctx.clearRect(0, 0, width, height);

      // Deep obsidian void base
      ctx.fillStyle = '#050508';
      ctx.fillRect(0, 0, width, height);

      // Render moving fluid orbs with soft falloff
      blobs.forEach((blob, i) => {
        const oscillationX = Math.sin(t + i * 1.6) * 45;
        const oscillationY = Math.cos(t * 0.75 + i) * 38;
        const curX = blob.x + oscillationX;
        const curY = blob.y + oscillationY;

        const gradient = ctx.createRadialGradient(curX, curY, 0, curX, curY, blob.r);
        gradient.addColorStop(0, blob.color);
        gradient.addColorStop(0.5, blob.color.replace(/[\d\.]+\)$/, '0.025)'));
        gradient.addColorStop(1, 'rgba(5, 5, 8, 0)');

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(curX, curY, blob.r, 0, Math.PI * 2);
        ctx.fill();
      });

      // Render 2026 stardust particles
      particles.forEach((p) => {
        p.x += p.speedX;
        p.y += p.speedY;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        // Subtle mouse push effect
        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const dist = Math.hypot(dx, dy);
        if (dist < 120 && dist > 0) {
          const force = (120 - dist) / 120;
          p.x += (dx / dist) * force * 1.2;
          p.y += (dy / dist) * force * 1.2;
        }

        ctx.fillStyle = `rgba(${p.color}, ${p.alpha})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      });

      // Interactive mouse aura with dual chromatic core
      const mouseGrad = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, Math.min(width, height) * 0.38);
      mouseGrad.addColorStop(0, 'rgba(56, 189, 248, 0.07)');
      mouseGrad.addColorStop(0.4, 'rgba(99, 102, 241, 0.03)');
      mouseGrad.addColorStop(1, 'rgba(5, 5, 8, 0)');
      ctx.fillStyle = mouseGrad;
      ctx.beginPath();
      ctx.arc(mouse.x, mouse.y, Math.min(width, height) * 0.38, 0, Math.PI * 2);
      ctx.fill();

      if (!isHeadless) {
        animationFrameId = requestAnimationFrame(render);
      }
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
      {/* Subtle modern cybernetic dot grid */}
      <div 
        className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:28px_28px]" 
        aria-hidden="true" 
      />
      {/* Top vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050508]/70 via-transparent to-[#050508] pointer-events-none" />
    </div>
  );
};
