"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

interface WaveHeroProps {
  badge?: string;
  headline: React.ReactNode;
  subtitle: string;
  primaryCta?: string;
  primaryHref?: string;
  secondaryCta?: string;
  secondaryHref?: string;
  centered?: boolean;
}

export function WaveHero({
  badge,
  headline,
  subtitle,
  primaryCta = "Book a Diagnostic",
  primaryHref = "/contact",
  secondaryCta,
  secondaryHref = "/contact",
  centered = true,
}: WaveHeroProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current!;
    const svg = svgRef.current!;
    const dot = dotRef.current!;
    if (!container || !svg || !dot) return;

    // Simplex 2D Noise
    const F2 = 0.5 * (Math.sqrt(3) - 1);
    const G2 = (3 - Math.sqrt(3)) / 6;
    const grad3 = [[1,1],[-1,1],[1,-1],[-1,-1],[1,0],[-1,0],[0,1],[0,-1]];

    const perm = new Uint8Array(512);
    const p = new Uint8Array(256);
    for (let i = 0; i < 256; i++) p[i] = i;
    for (let i = 255; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [p[i], p[j]] = [p[j], p[i]];
    }
    for (let i = 0; i < 512; i++) perm[i] = p[i & 255];

    function noise2D(x: number, y: number) {
      const s = (x + y) * F2;
      const i = Math.floor(x + s);
      const j = Math.floor(y + s);
      const t = (i + j) * G2;
      const X0 = i - t, Y0 = j - t;
      const x0 = x - X0, y0 = y - Y0;
      const i1 = x0 > y0 ? 1 : 0;
      const j1 = x0 > y0 ? 0 : 1;
      const x1 = x0 - i1 + G2, y1 = y0 - j1 + G2;
      const x2 = x0 - 1 + 2 * G2, y2 = y0 - 1 + 2 * G2;
      const ii = i & 255, jj = j & 255;

      function gdot(gi: number, dx: number, dy: number) {
        const g = grad3[gi % 8];
        return g[0] * dx + g[1] * dy;
      }

      let n0 = 0, n1 = 0, n2 = 0;
      let t0 = 0.5 - x0 * x0 - y0 * y0;
      if (t0 > 0) { t0 *= t0; n0 = t0 * t0 * gdot(perm[ii + perm[jj]], x0, y0); }
      let t1 = 0.5 - x1 * x1 - y1 * y1;
      if (t1 > 0) { t1 *= t1; n1 = t1 * t1 * gdot(perm[ii + i1 + perm[jj + j1]], x1, y1); }
      let t2 = 0.5 - x2 * x2 - y2 * y2;
      if (t2 > 0) { t2 *= t2; n2 = t2 * t2 * gdot(perm[ii + 1 + perm[jj + 1]], x2, y2); }

      return 70 * (n0 + n1 + n2);
    }

    const mouse = { x: -10, y: 0, lx: 0, ly: 0, sx: 0, sy: 0, v: 0, vs: 0, a: 0, set: false };
    let paths: SVGPathElement[] = [];
    let lines: Array<Array<{ x: number; y: number; wave: { x: number; y: number }; cursor: { x: number; y: number; vx: number; vy: number } }>> = [];
    let bounding: DOMRect | null = null;
    let raf: number | null = null;

    function setSize() {
      bounding = container.getBoundingClientRect();
      svg.style.width = bounding.width + "px";
      svg.style.height = bounding.height + "px";
      svg.setAttribute("viewBox", `0 0 ${bounding.width} ${bounding.height}`);
    }

    function setLines() {
      if (!bounding) return;
      const { width, height } = bounding;
      lines = [];
      paths.forEach((p) => p.remove());
      paths = [];

      const xGap = 10;
      const yGap = 10;
      const oWidth = width + 200;
      const oHeight = height + 30;
      const totalLines = Math.ceil(oWidth / xGap);
      const totalPoints = Math.ceil(oHeight / yGap);
      const xStart = (width - xGap * totalLines) / 2;
      const yStart = (height - yGap * totalPoints) / 2;

      for (let i = 0; i < totalLines; i++) {
        const points = [];
        for (let j = 0; j < totalPoints; j++) {
          points.push({
            x: xStart + xGap * i,
            y: yStart + yGap * j,
            wave: { x: 0, y: 0 },
            cursor: { x: 0, y: 0, vx: 0, vy: 0 },
          });
        }

        const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
        path.setAttribute("fill", "none");
        const centerDist = Math.abs(i - totalLines / 2) / (totalLines / 2);
        const alpha = 0.1 + centerDist * 0.45;
        path.setAttribute("stroke", `rgba(246,186,8,${alpha.toFixed(3)})`);
        path.setAttribute("stroke-width", "1");
        svg.appendChild(path);
        paths.push(path);
        lines.push(points);
      }
    }

    function updateMousePosition(clientX: number, clientY: number) {
      if (!bounding) return;
      bounding = container.getBoundingClientRect();
      mouse.x = clientX - bounding.left;
      mouse.y = clientY - bounding.top;
      if (!mouse.set) {
        mouse.sx = mouse.x; mouse.sy = mouse.y;
        mouse.lx = mouse.x; mouse.ly = mouse.y;
        mouse.set = true;
      }
      container.style.setProperty("--wx", mouse.sx + "px");
      container.style.setProperty("--wy", mouse.sy + "px");
    }

    function onResize() { setSize(); setLines(); }
    function onMouseMove(e: MouseEvent) { updateMousePosition(e.clientX, e.clientY); }
    function onTouchMove(e: TouchEvent) {
      e.preventDefault();
      updateMousePosition(e.touches[0].clientX, e.touches[0].clientY);
    }

    window.addEventListener("resize", onResize);
    window.addEventListener("mousemove", onMouseMove);
    container.addEventListener("touchmove", onTouchMove, { passive: false });

    function movePoints(time: number) {
      lines.forEach((points) => {
        points.forEach((pt) => {
          const move = noise2D((pt.x + time * 0.008) * 0.003, (pt.y + time * 0.003) * 0.002) * 8;
          pt.wave.x = Math.cos(move) * 12;
          pt.wave.y = Math.sin(move) * 6;

          const dx = pt.x - mouse.sx;
          const dy = pt.y - mouse.sy;
          const d = Math.hypot(dx, dy);
          const l = Math.max(175, mouse.vs);

          if (d < l) {
            const s = 1 - d / l;
            const f = Math.cos(d * 0.001) * s;
            pt.cursor.vx += Math.cos(mouse.a) * f * l * mouse.vs * 0.00035;
            pt.cursor.vy += Math.sin(mouse.a) * f * l * mouse.vs * 0.00035;
          }

          pt.cursor.vx += (0 - pt.cursor.x) * 0.01;
          pt.cursor.vy += (0 - pt.cursor.y) * 0.01;
          pt.cursor.vx *= 0.95;
          pt.cursor.vy *= 0.95;
          pt.cursor.x += pt.cursor.vx;
          pt.cursor.y += pt.cursor.vy;
          pt.cursor.x = Math.min(50, Math.max(-50, pt.cursor.x));
          pt.cursor.y = Math.min(50, Math.max(-50, pt.cursor.y));
        });
      });
    }

    function moved(point: typeof lines[0][0], withCursor = true) {
      return {
        x: point.x + point.wave.x + (withCursor ? point.cursor.x : 0),
        y: point.y + point.wave.y + (withCursor ? point.cursor.y : 0),
      };
    }

    function drawLines() {
      lines.forEach((points, li) => {
        if (points.length < 2 || !paths[li]) return;
        const first = moved(points[0], false);
        let d = `M ${first.x} ${first.y}`;
        for (let i = 1; i < points.length; i++) {
          const c = moved(points[i]);
          d += `L ${c.x} ${c.y}`;
        }
        paths[li].setAttribute("d", d);
      });
    }

    function tick(time: number) {
      mouse.sx += (mouse.x - mouse.sx) * 0.1;
      mouse.sy += (mouse.y - mouse.sy) * 0.1;
      const dx = mouse.x - mouse.lx;
      const dy = mouse.y - mouse.ly;
      mouse.v = Math.hypot(dx, dy);
      mouse.vs += (mouse.v - mouse.vs) * 0.1;
      mouse.vs = Math.min(100, mouse.vs);
      mouse.lx = mouse.x;
      mouse.ly = mouse.y;
      mouse.a = Math.atan2(dy, dx);

      container.style.setProperty("--wx", mouse.sx + "px");
      container.style.setProperty("--wy", mouse.sy + "px");

      movePoints(time);
      drawLines();
      raf = requestAnimationFrame(tick);
    }

    setSize();
    setLines();
    raf = requestAnimationFrame(tick);

    return () => {
      if (raf) cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("mousemove", onMouseMove);
      container.removeEventListener("touchmove", onTouchMove);
      // Clean up SVG paths (strict mode double-mount)
      paths.forEach((p) => p.remove());
      paths = [];
      lines = [];
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-[120px] pb-[80px] px-8">
      {/* Wave background */}
      <div ref={containerRef} className="absolute inset-0 overflow-hidden bg-[var(--bg-base)]">
        <svg ref={svgRef} className="block w-full h-full" xmlns="http://www.w3.org/2000/svg" />
        <div
          ref={dotRef}
          className="absolute top-0 left-0 w-[0.4rem] h-[0.4rem] bg-[var(--gold)] rounded-full opacity-60 will-change-transform"
          style={{ transform: "translate3d(calc(var(--wx, -10px) - 50%), calc(var(--wy, 50%) - 50%), 0)" }}
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_40%,var(--hero-overlay-inner)_0%,var(--hero-overlay-mid)_60%,var(--hero-overlay-outer)_100%)] pointer-events-none" />

      {/* Content */}
      <div className={`relative z-[1] ${centered ? "text-center" : ""} max-w-[860px]`}>
        {badge && (
          <div className="inline-flex items-center gap-2 font-[family-name:var(--font-dm-sans)] font-medium text-xs tracking-[0.1em] uppercase text-[var(--gold)] border border-[rgba(220,168,14,0.25)] px-[18px] py-2 rounded-full mb-8 animate-[fadeInUp_0.8s_var(--ease-out)_both]">
            <span className="relative w-[6px] h-[6px] rounded-full bg-[var(--gold)]">
              <span className="absolute inset-[-3px] rounded-full bg-[rgba(220,168,14,0.3)] animate-[dotPulse_2s_ease-in-out_infinite]" />
            </span>
            {badge}
          </div>
        )}

        <h1 className="font-[family-name:var(--font-geist)] font-extrabold text-[clamp(40px,6vw,72px)] text-[var(--text-primary)] leading-[1.08] tracking-[-0.02em] mb-6 animate-[fadeInUp_0.8s_var(--ease-out)_0.1s_both]">
          {headline}
        </h1>

        <p className="font-[family-name:var(--font-cabin)] font-normal text-lg text-[var(--text-muted)] max-w-[520px] mx-auto mb-10 leading-[1.7] animate-[fadeInUp_0.8s_var(--ease-out)_0.2s_both]">
          {subtitle}
        </p>

        <div className="flex gap-4 justify-center flex-wrap animate-[fadeInUp_0.8s_var(--ease-out)_0.3s_both]">
          <Link
            href={primaryHref}
            className="group inline-flex items-center gap-[10px] font-[family-name:var(--font-dm-sans)] font-bold text-sm uppercase tracking-[0.05em] px-8 py-4 rounded-full bg-gradient-to-br from-[var(--gold)] to-[var(--gold-muted)] text-[var(--bg-base)] shadow-[var(--gold-glow-sm)] relative overflow-hidden animate-[ambientGlow_3s_ease-in-out_infinite] hover:animate-none hover:shadow-[var(--gold-glow-lg)] hover:-translate-y-[2px] transition-all duration-300"
          >
            <span className="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-[left] duration-500 group-hover:left-full" />
            <span className="relative">{primaryCta}</span>
          </Link>
          {secondaryCta && (
            <Link
              href={secondaryHref}
              className="inline-flex items-center gap-[10px] font-[family-name:var(--font-dm-sans)] font-bold text-sm uppercase tracking-[0.05em] px-8 py-4 rounded-full bg-transparent border border-[rgba(220,168,14,0.3)] text-[var(--gold)] hover:bg-[rgba(220,168,14,0.06)] hover:border-[rgba(220,168,14,0.5)] transition-all duration-300"
            >
              {secondaryCta}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
