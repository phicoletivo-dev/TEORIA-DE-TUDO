import React, { useRef, useEffect } from 'react';
import { VisualizationType } from '../types';

interface CosmicVisualizerProps {
  type: VisualizationType;
  pageNumber: number;
  interactive?: boolean;
  className?: string;
  customImageUrl?: string;
}

export const CosmicVisualizer: React.FC<CosmicVisualizerProps> = ({
  type,
  pageNumber,
  interactive = true,
  className = '',
  customImageUrl,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const animFrameId = useRef<number | null>(null);
  const mouseRef = useRef<{ x: number; y: number; isDown: boolean }>({ x: 0, y: 0, isDown: false });

  useEffect(() => {
    if (customImageUrl) {
      // If user provided or generated a custom AI artwork image, we show it directly
      return;
    }

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = (canvas.width = canvas.parentElement?.clientWidth || 600);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 600);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };

    window.addEventListener('resize', handleResize);

    let time = 0;

    // Helper functions for drawing
    const drawGlowingCircle = (
      x: number,
      y: number,
      radius: number,
      color: string,
      glowIntensity: number = 20,
      fill: boolean = true
    ) => {
      ctx.save();
      ctx.shadowColor = color;
      ctx.shadowBlur = glowIntensity;
      ctx.strokeStyle = color;
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.arc(x, y, radius, 0, Math.PI * 2);
      if (fill) {
        ctx.fillStyle = color;
        ctx.fill();
      } else {
        ctx.stroke();
      }
      ctx.restore();
    };

    const drawLine = (x1: number, y1: number, x2: number, y2: number, color: string, width = 1, glow = 0) => {
      ctx.save();
      if (glow > 0) {
        ctx.shadowColor = color;
        ctx.shadowBlur = glow;
      }
      ctx.strokeStyle = color;
      ctx.lineWidth = width;
      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.stroke();
      ctx.restore();
    };

    // Main render loop
    const render = () => {
      time += 0.02;
      ctx.fillStyle = '#060509';
      ctx.fillRect(0, 0, width, height);

      const cx = width / 2;
      const cy = height / 2;
      const minDim = Math.min(width, height);

      // Subtle background starfield & quantum foam grid
      ctx.fillStyle = 'rgba(255, 255, 255, 0.2)';
      for (let i = 0; i < 35; i++) {
        const sx = (Math.sin(i * 99 + time * 0.05) * 0.5 + 0.5) * width;
        const sy = (Math.cos(i * 33 + time * 0.04) * 0.5 + 0.5) * height;
        const sSize = (Math.sin(i + time) * 0.5 + 0.5) * 1.5 + 0.5;
        ctx.fillRect(sx, sy, sSize, sSize);
      }

      switch (type) {
        case 'cover_bubble_tesseract': {
          // Page 1: Cosmic Bubble + Tesseract + 7 Layers + Central 1 Bit
          // 7 Concentric Layers
          const layerColors = ['#f59e0b', '#06b6d4', '#3b82f6', '#8b5cf6', '#ec4899', '#10b981', '#ffffff'];
          for (let l = 0; l < 7; l++) {
            const r = (minDim * 0.08) + (l * minDim * 0.055) + Math.sin(time + l) * 2;
            ctx.save();
            ctx.strokeStyle = layerColors[l];
            ctx.globalAlpha = 0.35 + (l === 0 ? 0.4 : 0.1);
            ctx.lineWidth = l === 0 ? 2 : 1;
            ctx.setLineDash([4 + l, 3 + l]);
            ctx.beginPath();
            ctx.arc(cx, cy, r, 0, Math.PI * 2);
            ctx.stroke();
            ctx.restore();
          }

          // Rotating 4D Tesseract projection
          const tSize = minDim * 0.22;
          const rotAngle = time * 0.4;
          const verts = [];
          for (let i = 0; i < 8; i++) {
            const angle = (i / 8) * Math.PI * 2 + rotAngle;
            const dist = (i % 2 === 0 ? 1 : 0.55) * tSize;
            verts.push({ x: cx + Math.cos(angle) * dist, y: cy + Math.sin(angle) * dist * 0.75 });
          }
          for (let i = 0; i < verts.length; i++) {
            for (let j = i + 1; j < verts.length; j++) {
              drawLine(verts[i].x, verts[i].y, verts[j].x, verts[j].y, 'rgba(6, 182, 212, 0.3)', 1);
            }
            drawGlowingCircle(verts[i].x, verts[i].y, 3, '#00f2fe', 8);
          }

          // Spiral jets top and bottom
          for (let j = -1; j <= 1; j += 2) {
            ctx.save();
            ctx.strokeStyle = 'rgba(234, 179, 8, 0.4)';
            ctx.beginPath();
            for (let p = 0; p < 30; p++) {
              const py = cy + j * (p * 6 + Math.sin(time * 3 + p) * 4);
              const px = cx + Math.sin(p * 0.5 + time * 2) * (p * 1.5);
              if (p === 0) ctx.moveTo(px, py);
              else ctx.lineTo(px, py);
            }
            ctx.stroke();
            ctx.restore();
          }

          // Glowing central 1-bit
          drawGlowingCircle(cx, cy, 7 + Math.sin(time * 4) * 2, '#ffffff', 25);
          drawGlowingCircle(cx, cy, 3, '#ffd700', 10);
          break;
        }

        case 'one_bit_void': {
          // Page 2: Three states: Information, Mass, Radiation
          const sep = minDim * 0.28;
          // State 1: Information (Calm Sphere, Left)
          const x1 = cx - sep;
          drawGlowingCircle(x1, cy, minDim * 0.12, 'rgba(255, 255, 255, 0.15)', 15, true);
          drawGlowingCircle(x1, cy, minDim * 0.12, '#ffffff', 10, false);
          // Harmonic orbit rings
          for (let r = 1; r <= 3; r++) {
            ctx.save();
            ctx.strokeStyle = 'rgba(253, 224, 71, 0.4)';
            ctx.beginPath();
            ctx.ellipse(x1, cy, minDim * 0.04 * r, minDim * 0.08 * r, time * 0.5, 0, Math.PI * 2);
            ctx.stroke();
            ctx.restore();
          }

          // State 2: Mass (Dense Dark Sphere, Center)
          const grad = ctx.createRadialGradient(cx, cy, 2, cx, cy, minDim * 0.14);
          grad.addColorStop(0, '#000000');
          grad.addColorStop(0.7, '#1a1005');
          grad.addColorStop(1, '#eab308');
          ctx.fillStyle = grad;
          ctx.beginPath();
          ctx.arc(cx, cy, minDim * 0.11, 0, Math.PI * 2);
          ctx.fill();
          drawGlowingCircle(cx, cy, minDim * 0.11, '#eab308', 25, false);

          // State 3: Radiation (Ripple Waves, Right)
          const x3 = cx + sep;
          for (let rw = 0; rw < 6; rw++) {
            const rippleR = ((time * 30 + rw * 20) % (minDim * 0.2)) + 5;
            const alpha = 1 - rippleR / (minDim * 0.2);
            ctx.save();
            ctx.strokeStyle = `rgba(6, 182, 212, ${alpha * 0.8})`;
            ctx.lineWidth = 1.5;
            ctx.beginPath();
            ctx.arc(x3, cy, rippleR, 0, Math.PI * 2);
            ctx.stroke();
            ctx.restore();
          }
          drawGlowingCircle(x3, cy, 5, '#67e8f9', 15);

          // Labels on canvas
          ctx.fillStyle = '#f3d178';
          ctx.font = '12px var(--font-mono)';
          ctx.textAlign = 'center';
          ctx.fillText('INFORMAÇÃO (0/1)', x1, cy + minDim * 0.18);
          ctx.fillText('MASSA (E=mc²)', cx, cy + minDim * 0.18);
          ctx.fillText('RADIAÇÃO (hf)', x3, cy + minDim * 0.18);
          break;
        }

        case 'node_7_layers': {
          // Page 3: Exploded view of Planck Node 7 Layers
          const layers = [
            { name: '1. Núcleo (1 bit, ∞ Hz)', r: 12, col: '#ffffff' },
            { name: '2. Massa (7.83 Hz)', r: 24, col: '#f59e0b' },
            { name: '3. Carga (40 Hz)', r: 38, col: '#06b6d4' },
            { name: '4. Vibração (200 Hz)', r: 54, col: '#3b82f6' },
            { name: '5. Coerência (1.000 Hz)', r: 72, col: '#8b5cf6' },
            { name: '6. Memória/Akasha (5.000 Hz)', r: 92, col: '#ec4899' },
            { name: '7. Superfície (25.000 Hz)', r: 114, col: '#10b981' },
          ];

          const totalH = minDim * 0.7;
          const stepY = totalH / 7;
          const startY = cy - totalH / 2 + stepY / 2;

          layers.forEach((l, idx) => {
            const ly = startY + idx * stepY;
            const rx = (l.r / 114) * (minDim * 0.38);
            const ry = rx * 0.35; // 3D perspective ellipse

            ctx.save();
            ctx.strokeStyle = l.col;
            ctx.shadowColor = l.col;
            ctx.shadowBlur = 12;
            ctx.lineWidth = 1.8;
            ctx.beginPath();
            ctx.ellipse(cx, ly, rx, ry, 0, 0, Math.PI * 2);
            ctx.stroke();

            // Internal cross-hatches or points
            const pts = 8 + idx * 2;
            for (let p = 0; p < pts; p++) {
              const ang = (p / pts) * Math.PI * 2 + time * (idx % 2 === 0 ? 0.5 : -0.5);
              const px = cx + Math.cos(ang) * rx;
              const py = ly + Math.sin(ang) * ry;
              ctx.fillStyle = l.col;
              ctx.beginPath();
              ctx.arc(px, py, 2, 0, Math.PI * 2);
              ctx.fill();
            }

            // Connection line to label
            drawLine(cx + rx, ly, cx + rx + 25, ly, l.col, 1);
            ctx.fillStyle = '#e8e4dc';
            ctx.font = '11px var(--font-mono)';
            ctx.textAlign = 'left';
            ctx.fillText(l.name, cx + rx + 30, ly + 4);
            ctx.restore();
          });

          // Central axis of Planck node
          drawLine(cx, startY - 20, cx, startY + totalH + 10, 'rgba(255, 255, 255, 0.4)', 1.5, 8);
          break;
        }

        case 'node_fractal_recursive': {
          // Page 4: Recursive fractal 625 sub-nodes
          const drawFractalNode = (x: number, y: number, radius: number, depth: number) => {
            if (depth <= 0) {
              drawGlowingCircle(x, y, 2.5, '#67e8f9', 6);
              return;
            }

            drawGlowingCircle(x, y, radius, depth === 3 ? '#ffffff' : 'rgba(56, 189, 248, 0.35)', 4, false);

            // 5 sub-nodes arranged pentagonally (5^4 = 625)
            const subRadius = radius * 0.42;
            const orbitR = radius * 0.65;
            for (let i = 0; i < 5; i++) {
              const ang = (i / 5) * Math.PI * 2 + time * 0.3 * (depth % 2 === 0 ? 1 : -1);
              const nx = x + Math.cos(ang) * orbitR;
              const ny = y + Math.sin(ang) * orbitR;
              drawLine(x, y, nx, ny, 'rgba(6, 182, 212, 0.25)', 1);
              drawFractalNode(nx, ny, subRadius, depth - 1);
            }
          };

          drawFractalNode(cx, cy, minDim * 0.4, 3);
          drawGlowingCircle(cx, cy, 6, '#ffd700', 20);
          break;
        }

        case 'mesh_tesseract_4d': {
          // Page 5: 4D Tesseract with 625 nodes lattice
          const nodes = [];
          const dim = 5; // 5x5 grid projection with depth
          const scale = minDim * 0.16;
          const theta = time * 0.5;

          for (let x = -2; x <= 2; x++) {
            for (let y = -2; y <= 2; y++) {
              for (let z = -1; z <= 1; z++) {
                // Rotate around Y and X axis
                const rx = x * Math.cos(theta) - z * Math.sin(theta);
                const rz = x * Math.sin(theta) + z * Math.cos(theta);
                const ry = y * Math.cos(theta * 0.7) - rz * Math.sin(theta * 0.7);

                const projX = cx + rx * scale;
                const projY = cy + ry * scale;
                nodes.push({ x: projX, y: projY, origX: x, origY: y, origZ: z });
              }
            }
          }

          // Draw edges between adjacent lattice vertices
          ctx.strokeStyle = 'rgba(6, 182, 212, 0.2)';
          ctx.lineWidth = 1;
          for (let i = 0; i < nodes.length; i++) {
            for (let j = i + 1; j < nodes.length; j++) {
              const d =
                Math.abs(nodes[i].origX - nodes[j].origX) +
                Math.abs(nodes[i].origY - nodes[j].origY) +
                Math.abs(nodes[i].origZ - nodes[j].origZ);
              if (d === 1) {
                ctx.beginPath();
                ctx.moveTo(nodes[i].x, nodes[i].y);
                ctx.lineTo(nodes[j].x, nodes[j].y);
                ctx.stroke();
              }
            }
            // Node points
            const isEnergyPulse = (i + Math.floor(time * 5)) % 9 === 0;
            drawGlowingCircle(
              nodes[i].x,
              nodes[i].y,
              isEnergyPulse ? 4 : 2,
              isEnergyPulse ? '#ffd700' : '#38bdf8',
              isEnergyPulse ? 12 : 4
            );
          }
          break;
        }

        case 'mesh_ocean_waves': {
          // Page 6: Dynamic non-linear wave simulation ∂²θ/∂t²
          const cols = 26;
          const rows = 18;
          const gridW = minDim * 0.85;
          const gridH = minDim * 0.65;
          const startX = cx - gridW / 2;
          const startY = cy - gridH / 2;

          const points: { x: number; y: number }[][] = [];

          for (let r = 0; r <= rows; r++) {
            points[r] = [];
            for (let c = 0; c <= cols; c++) {
              const u = c / cols;
              const v = r / rows;
              // 2D wave equations + non-linear cubic term λθ³
              const wave1 = Math.sin(u * 6 + time * 2) * 16;
              const wave2 = Math.cos(v * 4 - time * 1.5) * 12;
              const waveTurb = Math.sin((u + v) * 8 + time * 3) * 6;
              const elevation = wave1 + wave2 + waveTurb;

              // Perspective projection
              const isoX = startX + u * gridW;
              const isoY = startY + v * gridH + elevation;
              points[r][c] = { x: isoX, y: isoY };
            }
          }

          // Render wave surface mesh lines
          for (let r = 0; r <= rows; r++) {
            ctx.beginPath();
            ctx.strokeStyle = r % 3 === 0 ? '#38bdf8' : 'rgba(56, 189, 248, 0.4)';
            ctx.lineWidth = r % 3 === 0 ? 1.5 : 1;
            for (let c = 0; c <= cols; c++) {
              if (c === 0) ctx.moveTo(points[r][c].x, points[r][c].y);
              else ctx.lineTo(points[r][c].x, points[r][c].y);
            }
            ctx.stroke();
          }

          for (let c = 0; c <= cols; c += 2) {
            ctx.beginPath();
            ctx.strokeStyle = 'rgba(6, 182, 212, 0.3)';
            for (let r = 0; r <= rows; r++) {
              if (r === 0) ctx.moveTo(points[r][c].x, points[r][c].y);
              else ctx.lineTo(points[r][c].x, points[r][c].y);
            }
            ctx.stroke();
          }
          break;
        }

        case 'black_hole_7_zones': {
          // Page 7: Black Hole with 7 Concentric Zones & Accretion Disk
          const rBase = minDim * 0.08;

          // 1. Accretion Disk (Fiery glow)
          const diskGrad = ctx.createRadialGradient(cx, cy, rBase * 1.2, cx, cy, minDim * 0.45);
          diskGrad.addColorStop(0, 'rgba(253, 224, 71, 0.9)');
          diskGrad.addColorStop(0.3, 'rgba(249, 115, 22, 0.7)');
          diskGrad.addColorStop(0.7, 'rgba(225, 29, 72, 0.3)');
          diskGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');

          ctx.save();
          ctx.translate(cx, cy);
          ctx.rotate(-0.25);
          ctx.scale(1, 0.38); // Inclined accretion disk
          ctx.fillStyle = diskGrad;
          ctx.beginPath();
          ctx.arc(0, 0, minDim * 0.45, 0, Math.PI * 2);
          ctx.fill();
          ctx.restore();

          // 2. Ergosfera & Photon sphere
          drawGlowingCircle(cx, cy, rBase * 2.0, 'rgba(6, 182, 212, 0.4)', 15, false); // Ergosfera
          drawGlowingCircle(cx, cy, rBase * 1.5, 'rgba(253, 224, 71, 0.7)', 25, false); // Photon Sphere

          // 3. Event Horizon (Shadow)
          ctx.fillStyle = '#000000';
          ctx.beginPath();
          ctx.arc(cx, cy, rBase, 0, Math.PI * 2);
          ctx.fill();
          drawGlowingCircle(cx, cy, rBase, '#f59e0b', 12, false);

          // 4. Central Singularity (1 Bit)
          drawGlowingCircle(cx, cy, 3, '#ffffff', 20);

          // 5. Relativistic Jets
          for (let s = -1; s <= 1; s += 2) {
            const jetGrad = ctx.createLinearGradient(cx, cy, cx, cy + s * minDim * 0.48);
            jetGrad.addColorStop(0, 'rgba(255, 255, 255, 0.9)');
            jetGrad.addColorStop(0.2, 'rgba(6, 182, 212, 0.7)');
            jetGrad.addColorStop(1, 'rgba(37, 99, 235, 0)');
            ctx.fillStyle = jetGrad;
            ctx.beginPath();
            ctx.moveTo(cx - 8, cy);
            ctx.lineTo(cx + 8, cy);
            ctx.lineTo(cx + 35 * Math.sin(time * 4), cy + s * minDim * 0.48);
            ctx.lineTo(cx - 35 * Math.sin(time * 4), cy + s * minDim * 0.48);
            ctx.closePath();
            ctx.fill();
          }
          break;
        }

        case 'big_bang_spiral_jet': {
          // Page 8: Big Bang continuous spiral jet outflow + CMB sphere
          // CMB outer glowing boundary
          drawGlowingCircle(cx, cy, minDim * 0.42, 'rgba(249, 115, 22, 0.25)', 25, false);
          ctx.save();
          ctx.strokeStyle = 'rgba(253, 224, 71, 0.3)';
          ctx.setLineDash([6, 6]);
          ctx.beginPath();
          ctx.arc(cx, cy, minDim * 0.42, 0, Math.PI * 2);
          ctx.stroke();
          ctx.restore();

          // Spiral matter outflow arms
          const arms = 3;
          for (let a = 0; a < arms; a++) {
            const armOffset = (a / arms) * Math.PI * 2;
            ctx.beginPath();
            ctx.strokeStyle = a === 0 ? '#ffd700' : '#00f2fe';
            ctx.lineWidth = 2;
            for (let p = 0; p < 80; p++) {
              const tDist = (p / 80) * (minDim * 0.4);
              const angle = tDist * 0.05 + armOffset - time * 0.8;
              const px = cx + Math.cos(angle) * tDist;
              const py = cy + Math.sin(angle) * tDist;
              if (p === 0) ctx.moveTo(px, py);
              else ctx.lineTo(px, py);

              if (p % 10 === 0 && p > 20) {
                // Galaxies forming in the stream
                drawGlowingCircle(px, py, 3, '#ffffff', 8);
              }
            }
            ctx.stroke();
          }

          // Primordial source core
          drawGlowingCircle(cx, cy, 10, '#ffffff', 30);
          break;
        }

        case 'nested_fractal_bubbles': {
          // Page 9: Nested bubbles & golden ratio logarithmic spiral (25^7)
          // Golden ratio spiral
          ctx.save();
          ctx.strokeStyle = '#f59e0b';
          ctx.lineWidth = 1.5;
          ctx.beginPath();
          const phi = 1.6180339887;
          for (let i = 0; i < 200; i++) {
            const theta = i * 0.1;
            const r = Math.pow(phi, theta * 0.25) * 4;
            if (r > minDim * 0.44) break;
            const px = cx + Math.cos(theta + time * 0.2) * r;
            const py = cy + Math.sin(theta + time * 0.2) * r;
            if (i === 0) ctx.moveTo(px, py);
            else ctx.lineTo(px, py);

            if (i % 25 === 0 && i > 10) {
              // Nested bubble clusters
              drawGlowingCircle(px, py, r * 0.4, 'rgba(6, 182, 212, 0.35)', 10, false);
            }
          }
          ctx.stroke();
          ctx.restore();

          // Central bubble
          drawGlowingCircle(cx, cy, 15, '#38bdf8', 20, false);
          drawGlowingCircle(cx, cy, 4, '#ffffff', 10);
          break;
        }

        case 'dark_veil_95_percent': {
          // Page 10: Dark Veil & 144 Akasha Matrix
          // Dark matter halo (26.8%) as blue luminous web
          ctx.strokeStyle = 'rgba(59, 130, 246, 0.3)';
          for (let i = 0; i < 24; i++) {
            const a1 = (i / 24) * Math.PI * 2;
            const a2 = ((i + 7) / 24) * Math.PI * 2;
            const r1 = minDim * 0.25 + Math.sin(time + i) * 15;
            const r2 = minDim * 0.38 + Math.cos(time + i) * 15;
            drawLine(cx + Math.cos(a1) * r1, cy + Math.sin(a1) * r1, cx + Math.cos(a2) * r2, cy + Math.sin(a2) * r2, 'rgba(59, 130, 246, 0.25)', 1);
          }

          // 144 Akasha matrix nodes (Golden books/crystals of light)
          const akashaRadius = minDim * 0.32;
          for (let k = 0; k < 36; k++) {
            const a = (k / 36) * Math.PI * 2 + time * 0.1;
            const kx = cx + Math.cos(a) * akashaRadius;
            const ky = cy + Math.sin(a) * akashaRadius;
            drawGlowingCircle(kx, ky, 2.5, '#fde047', 6);
          }

          // Center 1-bit and Dark Energy Expansion Ring (68.3%)
          drawGlowingCircle(cx, cy, minDim * 0.42, 'rgba(234, 179, 8, 0.2)', 30, false);
          drawGlowingCircle(cx, cy, 6, '#ffffff', 20);
          break;
        }

        case 'spaghettification_smoke': {
          // Page 11: Tidal disruption & dark smoke creation (29.63%)
          const blackHoleX = cx - minDim * 0.18;
          // Accretion disk burning bright
          drawGlowingCircle(blackHoleX, cy, minDim * 0.1, '#000000', 0, true);
          drawGlowingCircle(blackHoleX, cy, minDim * 0.1, '#f97316', 20, false);

          // Stretched matter stream (Spaghettification)
          ctx.save();
          ctx.strokeStyle = '#fde047';
          ctx.lineWidth = 3;
          ctx.beginPath();
          ctx.moveTo(cx + minDim * 0.35, cy - minDim * 0.2);
          ctx.bezierCurveTo(
            cx + minDim * 0.1, cy - minDim * 0.1,
            blackHoleX + minDim * 0.15, cy - minDim * 0.05,
            blackHoleX, cy
          );
          ctx.stroke();
          ctx.restore();

          // Dark Smoke halo drifting away into dark matter
          for (let p = 0; p < 45; p++) {
            const smokeDist = minDim * 0.05 + p * (minDim * 0.007);
            const smokeAngle = p * 0.4 + time * 0.8;
            const sx = blackHoleX + Math.cos(smokeAngle) * smokeDist;
            const sy = cy + Math.sin(smokeAngle) * smokeDist * 0.6;
            ctx.fillStyle = 'rgba(75, 85, 99, 0.45)';
            ctx.beginPath();
            ctx.arc(sx, sy, 4 + (p % 4), 0, Math.PI * 2);
            ctx.fill();
          }
          break;
        }

        case 'spiritual_4_symbols': {
          // Page 12: 4 Spiritual Symbols (Spirit Star, Soul Spiral, Akasha Library, Consciousness Eye)
          const dist = minDim * 0.26;
          // Center 1 Bit
          drawGlowingCircle(cx, cy, 7, '#ffffff', 25);

          // 1. Spirit: White 5-pointed star (Top, 144.000 Hz)
          const starX = cx;
          const starY = cy - dist;
          drawLine(cx, cy, starX, starY, 'rgba(255, 255, 255, 0.3)', 1, 5);
          ctx.save();
          ctx.strokeStyle = '#ffffff';
          ctx.shadowColor = '#ffffff';
          ctx.shadowBlur = 15;
          ctx.beginPath();
          for (let p = 0; p < 5; p++) {
            const ang = (p * 4 * Math.PI) / 5 - Math.PI / 2 + time * 0.4;
            const px = starX + Math.cos(ang) * 22;
            const py = starY + Math.sin(ang) * 22;
            if (p === 0) ctx.moveTo(px, py);
            else ctx.lineTo(px, py);
          }
          ctx.closePath();
          ctx.stroke();
          ctx.restore();

          // 2. Soul: Blue Spiral (Right, 144.000 Hz)
          const soulX = cx + dist;
          const soulY = cy;
          drawLine(cx, cy, soulX, soulY, 'rgba(59, 130, 246, 0.3)', 1, 5);
          ctx.save();
          ctx.strokeStyle = '#3b82f6';
          ctx.shadowColor = '#3b82f6';
          ctx.shadowBlur = 15;
          ctx.beginPath();
          for (let s = 0; s < 50; s++) {
            const sAngle = s * 0.25 + time * 1.5;
            const sRad = s * 0.45;
            const sx = soulX + Math.cos(sAngle) * sRad;
            const sy = soulY + Math.sin(sAngle) * sRad;
            if (s === 0) ctx.moveTo(sx, sy);
            else ctx.lineTo(sx, sy);
          }
          ctx.stroke();
          ctx.restore();

          // 3. Akasha: Golden Library (Bottom, 144 Matrix)
          const akX = cx;
          const akY = cy + dist;
          drawLine(cx, cy, akX, akY, 'rgba(234, 179, 8, 0.3)', 1, 5);
          ctx.save();
          ctx.strokeStyle = '#eab308';
          ctx.shadowColor = '#eab308';
          ctx.shadowBlur = 15;
          // Draw geometric open book / lattice
          ctx.strokeRect(akX - 18, akY - 12, 36, 24);
          drawLine(akX, akY - 12, akX, akY + 12, '#eab308', 1.5);
          ctx.restore();

          // 4. Consciousness: Cyan Eye (Left, 40 Hz)
          const eyeX = cx - dist;
          const eyeY = cy;
          drawLine(cx, cy, eyeX, eyeY, 'rgba(6, 182, 212, 0.3)', 1, 5);
          ctx.save();
          ctx.strokeStyle = '#06b6d4';
          ctx.shadowColor = '#06b6d4';
          ctx.shadowBlur = 15;
          ctx.beginPath();
          ctx.ellipse(eyeX, eyeY, 22, 12, 0, 0, Math.PI * 2);
          ctx.stroke();
          drawGlowingCircle(eyeX, eyeY, 6 + Math.sin(time * 3) * 1.5, '#06b6d4', 10);
          ctx.restore();
          break;
        }

        case 'gravitational_waves_dual': {
          // Page 13: Positive wave (compression) and Negative wave (expansion)
          const waveW = minDim * 0.8;
          const leftX = cx - waveW * 0.25;
          const rightX = cx + waveW * 0.25;

          // Grid distortion left (Compression: +A cos)
          ctx.strokeStyle = '#38bdf8';
          for (let y = -4; y <= 4; y++) {
            ctx.beginPath();
            for (let x = -3; x <= 3; x++) {
              const comp = Math.cos(x * 0.8 - time * 2) * 8;
              const px = leftX + x * 20 + comp;
              const py = cy + y * 20;
              if (x === -3) ctx.moveTo(px, py);
              else ctx.lineTo(px, py);
            }
            ctx.stroke();
          }

          // Grid distortion right (Expansion: -A cos)
          ctx.strokeStyle = '#fb923c';
          for (let y = -4; y <= 4; y++) {
            ctx.beginPath();
            for (let x = -3; x <= 3; x++) {
              const expan = -Math.cos(x * 0.8 - time * 2) * 8;
              const px = rightX + x * 20 + expan;
              const py = cy + y * 20;
              if (x === -3) ctx.moveTo(px, py);
              else ctx.lineTo(px, py);
            }
            ctx.stroke();
          }

          // Labels
          ctx.fillStyle = '#38bdf8';
          ctx.font = '11px var(--font-mono)';
          ctx.textAlign = 'center';
          ctx.fillText('ONDA POSITIVA (h₊) COMPRESSÃO', leftX, cy + minDim * 0.22);
          ctx.fillStyle = '#fb923c';
          ctx.fillText('ONDA NEGATIVA (h₋) EXPANSÃO', rightX, cy + minDim * 0.22);
          break;
        }

        case 'helical_solar_system': {
          // Page 14: Helical 3D trajectory of Solar System (60° tilt)
          const helixL = minDim * 0.8;
          const startX = cx - helixL * 0.45;
          const tilt = Math.PI / 3; // 60 degrees

          // Central Sun trajectory vector
          ctx.save();
          ctx.translate(cx, cy);
          ctx.rotate(tilt - Math.PI / 2);

          // Sun path
          drawLine(-helixL * 0.45, 0, helixL * 0.45, 0, 'rgba(253, 224, 71, 0.4)', 2, 10);

          // Sun position
          const sunPos = ((time * 40) % (helixL * 0.8)) - helixL * 0.4;
          drawGlowingCircle(sunPos, 0, 8, '#f59e0b', 25);

          // Planet helical ribbons
          const planets = [
            { r: 18, col: '#38bdf8', speed: 4 },
            { r: 32, col: '#34d399', speed: 2.5 },
            { r: 48, col: '#f87171', speed: 1.8 },
            { r: 68, col: '#fbbf24', speed: 1.2 },
          ];

          planets.forEach((pl) => {
            ctx.strokeStyle = pl.col;
            ctx.lineWidth = 1.2;
            ctx.beginPath();
            for (let tStep = -helixL * 0.45; tStep <= helixL * 0.45; tStep += 4) {
              const ang = tStep * 0.08 * pl.speed - time * 2;
              const hy = Math.sin(ang) * pl.r;
              if (tStep === -helixL * 0.45) ctx.moveTo(tStep, hy);
              else ctx.lineTo(tStep, hy);
            }
            ctx.stroke();

            // Planet body at Sun position
            const pAng = sunPos * 0.08 * pl.speed - time * 2;
            drawGlowingCircle(sunPos, Math.sin(pAng) * pl.r, 3.5, pl.col, 10);
          });
          ctx.restore();
          break;
        }

        case 'master_formula_blueprint': {
          // Page 15: Grand Master Formula Blueprint (Exploded Unified Schematic)
          const rad = minDim * 0.38;
          const modules = [
            'Φ_BOLHA', 'Φ_1BIT', 'Φ_AKASHA', 'Φ_ALMA', 'Φ_ESPÍRITO',
            'Φ_CONSCIÊNCIA', 'Φ_3-4-5', 'Φ_FRACTAL', 'Φ_4D', 'Φ_FORÇAS', 'Φ_TEMPO', 'Ψ'
          ];

          // Center 1-bit hub
          drawGlowingCircle(cx, cy, 10, '#ffffff', 25);

          modules.forEach((mod, i) => {
            const angle = (i / modules.length) * Math.PI * 2 + time * 0.1;
            const mx = cx + Math.cos(angle) * rad;
            const my = cy + Math.sin(angle) * rad;

            // Connection to center
            drawLine(cx, cy, mx, my, 'rgba(234, 179, 8, 0.35)', 1, 4);

            // Ring interconnection
            const nextAngle = ((i + 1) / modules.length) * Math.PI * 2 + time * 0.1;
            const nx = cx + Math.cos(nextAngle) * rad;
            const ny = cy + Math.sin(nextAngle) * rad;
            drawLine(mx, my, nx, ny, 'rgba(6, 182, 212, 0.4)', 1);

            // Node badge
            drawGlowingCircle(mx, my, 14, '#060509', 0, true);
            drawGlowingCircle(mx, my, 14, '#eab308', 8, false);

            ctx.fillStyle = '#f3d178';
            ctx.font = '9px var(--font-mono)';
            ctx.textAlign = 'center';
            ctx.fillText(mod, mx, my + 3);
          });
          break;
        }

        case 'cosmic_mandala_infinite': {
          // Page 16: Cosmic Mandala Infinite Symmetry (∞²)
          const maxR = minDim * 0.42;
          // Recursive concentric rings
          for (let r = 1; r <= 8; r++) {
            const cr = (r / 8) * maxR;
            ctx.save();
            ctx.strokeStyle = r % 2 === 0 ? '#ffd700' : '#00f2fe';
            ctx.globalAlpha = 0.4;
            ctx.beginPath();
            ctx.arc(cx, cy, cr, 0, Math.PI * 2);
            ctx.stroke();
            ctx.restore();
          }

          // 8-fold flower of life geometry
          for (let f = 0; f < 8; f++) {
            const fAngle = (f / 8) * Math.PI * 2 + time * 0.2;
            const fx = cx + Math.cos(fAngle) * (maxR * 0.5);
            const fy = cy + Math.sin(fAngle) * (maxR * 0.5);
            ctx.save();
            ctx.strokeStyle = 'rgba(234, 179, 8, 0.3)';
            ctx.beginPath();
            ctx.arc(fx, fy, maxR * 0.5, 0, Math.PI * 2);
            ctx.stroke();
            ctx.restore();
          }

          // Center Infinite symbol
          drawGlowingCircle(cx, cy, 8, '#ffffff', 30);
          break;
        }
      }

      animFrameId.current = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animFrameId.current) {
        cancelAnimationFrame(animFrameId.current);
      }
    };
  }, [type, pageNumber, customImageUrl]);

  if (customImageUrl) {
    return (
      <div className={`relative w-full h-full overflow-hidden rounded-xl bg-black flex items-center justify-center ${className}`}>
        <img
          src={customImageUrl}
          alt={`Visualização da Página ${pageNumber}`}
          className="w-full h-full object-cover rounded-xl"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#060509]/80 via-transparent to-transparent pointer-events-none" />
      </div>
    );
  }

  return (
    <div className={`relative w-full h-full overflow-hidden rounded-xl bg-[#060509] flex items-center justify-center ${className}`}>
      <canvas ref={canvasRef} className="w-full h-full block" />
      <div className="absolute bottom-2 right-3 pointer-events-none opacity-40 font-mono text-[10px] text-[#f3d178]">
        SIMULAÇÃO PROCEDURAL 4D • Φ_FUD
      </div>
    </div>
  );
};
