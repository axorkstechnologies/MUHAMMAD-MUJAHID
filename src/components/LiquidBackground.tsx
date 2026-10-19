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

    // Mouse coordinates with smoothing
    const mouse = { x: width * 0.5, y: height * 0.3, targetX: width * 0.5, targetY: height * 0.3 };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Liquid blobs simulation
    const blobs = [
      { x: width * 0.3, y: height * 0.25, r: Math.min(width, height) * 0.35, vx: 0.3, vy: 0.2, color: 'rgba(56, 189, 248, 0.07)' },
      { x: width * 0.7, y: height * 0.4, r: Math.min(width, height) * 0.32, vx: -0.25, vy: 0.3, color: 'rgba(99, 102, 241, 0.08)' },
      { x: width * 0.5, y: height * 0.8, r: Math.min(width, height) * 0.38, vx: 0.2, vy: -0.25, color: 'rgba(168, 85, 247, 0.06)' },
      { x: width * 0.2, y: height * 0.7, r: Math.min(width, height) * 0.3, vx: -0.15, vy: -0.15, color: 'rgba(14, 165, 233, 0.05)' }
    ];

    let t = 0;
    const isHeadless = typeof navigator !== 'undefined' && (/HeadlessChrome/i.test(navigator.userAgent) || navigator.webdriver);

    const render = () => {
      t += 0.008;

      // Smooth mouse tracking
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      ctx.clearRect(0, 0, width, height);

      // Draw dark background base
      ctx.fillStyle = '#050508';
      ctx.fillRect(0, 0, width, height);

      // Draw moving fluid orbs
      blobs.forEach((blob, i) => {
        const oscillationX = Math.sin(t + i * 1.5) * 40;
        const oscillationY = Math.cos(t * 0.8 + i) * 35;
        const curX = blob.x + oscillationX;
        const curY = blob.y + oscillationY;

        const gradient = ctx.createRadialGradient(curX, curY, 0, curX, curY, blob.r);
        gradient.addColorStop(0, blob.color);
        gradient.addColorStop(0.5, blob.color.replace(/[\d\.]+\)$/, '0.03)'));
        gradient.addColorStop(1, 'rgba(5, 5, 8, 0)');

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(curX, curY, blob.r, 0, Math.PI * 2);
        ctx.fill();
      });

      // Interactive mouse aura
      const mouseGrad = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, Math.min(width, height) * 0.35);
      mouseGrad.addColorStop(0, 'rgba(56, 189, 248, 0.06)');
      mouseGrad.addColorStop(0.5, 'rgba(99, 102, 241, 0.02)');
      mouseGrad.addColorStop(1, 'rgba(5, 5, 8, 0)');
      ctx.fillStyle = mouseGrad;
      ctx.beginPath();
      ctx.arc(mouse.x, mouse.y, Math.min(width, height) * 0.35, 0, Math.PI * 2);
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
      {/* Subtle cinematic scanline/grid overlay */}
      <div 
        className="absolute inset-0 opacity-[0.035] bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px]" 
        aria-hidden="true" 
      />
      {/* Ambient top vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050508]/60 via-transparent to-[#050508] pointer-events-none" />
    </div>
  );
};
