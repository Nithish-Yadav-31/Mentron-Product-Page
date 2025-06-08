"use client";
import { cn } from "@/lib/utils";
import React, { useEffect, useRef } from "react";

// Helper to interpolate two hex colors
function lerpColor(a: string, b: string, t: number) {
  const ah = a.replace('#', '');
  const bh = b.replace('#', '');
  const ar = parseInt(ah.substring(0, 2), 16);
  const ag = parseInt(ah.substring(2, 4), 16);
  const ab = parseInt(ah.substring(4, 6), 16);
  const br = parseInt(bh.substring(0, 2), 16);
  const bg = parseInt(bh.substring(2, 4), 16);
  const bb = parseInt(bh.substring(4, 6), 16);
  const rr = Math.round(ar + (br - ar) * t);
  const rg = Math.round(ag + (bg - ag) * t);
  const rb = Math.round(ab + (bb - ab) * t);
  return `rgb(${rr},${rg},${rb})`;
}

export const PulsatingBrain = ({
  brainPath,
  viewBoxWidth,
  viewBoxHeight,
  className,
  containerClassName,
  colors,
  backgroundFill = "rgb(4,7,29)",
  pulseSpeed = 0.0015,
  gradientSpeed = 0.003,
  minGlow = 15,
  maxGlow = 35,
  children,
  ...props
}: {
  brainPath: string;
  viewBoxWidth: number;
  viewBoxHeight: number;
  className?: string;
  containerClassName?: string;
  colors?: string[];
  backgroundFill?: string;
  pulseSpeed?: number;
  gradientSpeed?: number;
  minGlow?: number;
  maxGlow?: number;
  children?: React.ReactNode;
  [key: string]: any;
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const brainPath2D = useRef<Path2D | null>(null);

  const defaultColors = [
    "#B3D9FF", "#38bdf8", "#66B2FF", "#3399FF", 
    "#0077FF", "#3399FF", "#66B2FF", "#38bdf8"
  ];
  const finalColors = colors ?? defaultColors;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    
    brainPath2D.current = new Path2D(brainPath);
    
    let w: number, h: number;
    let animationTime = 0;
    let animationId: number;

    const resizeCanvas = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };
    
    const render = () => {
      ctx.fillStyle = backgroundFill;
      ctx.fillRect(0, 0, w, h);
      
      animationTime += pulseSpeed * 16;
      const gradientAnimationTime = animationTime * (gradientSpeed / pulseSpeed);

      if (brainPath2D.current) {
        ctx.save();
        
        const containerPadding = 0.2;
        const canvasAspectRatio = w / h;
        const viewBoxAspectRatio = viewBoxWidth / viewBoxHeight;

        let scale = canvasAspectRatio > viewBoxAspectRatio
          ? (h * (1 - containerPadding)) / viewBoxHeight
          : (w * (1 - containerPadding)) / viewBoxWidth;

        const scaledWidth = viewBoxWidth * scale;
        const scaledHeight = viewBoxHeight * scale;
        const translateX = (w - scaledWidth) / 2;
        const translateY = (h - scaledHeight) / 2;
        
        ctx.translate(translateX, translateY);
        ctx.scale(scale, scale);
        
        // --- Pulsation Logic for Glow Size ---
        const pulse = (Math.sin(animationTime) + 1) / 2; 
        const currentGlow = minGlow + (maxGlow - minGlow) * pulse;
        
        // --- Super Smooth Pulsation Logic for Glow Color ---
        const colorPos = pulse * (finalColors.length - 1);
        const colorIdx = Math.floor(colorPos);
        const nextColorIdx = (colorIdx + 1) % finalColors.length;
        const t = colorPos - colorIdx;
        const currentGlowColor = lerpColor(finalColors[colorIdx], finalColors[nextColorIdx], t);

        // --- Animated Gradient Logic for Fill Color ---
        const gradientOffset = (Math.cos(gradientAnimationTime) * scaledWidth) / 4;
        const gradient = ctx.createLinearGradient(
          -gradientOffset, 0, scaledWidth - gradientOffset, 0
        );
        
        finalColors.forEach((color, index) => {
          gradient.addColorStop(index / (finalColors.length - 1), color);
        });

        // --- Drawing the Brain ---
        ctx.shadowColor = currentGlowColor;
        ctx.shadowBlur = currentGlow;
        ctx.fillStyle = gradient;
        ctx.fill(brainPath2D.current);
        
        ctx.restore();
      }

      animationId = requestAnimationFrame(render);
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    render();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, [brainPath, viewBoxWidth, viewBoxHeight, backgroundFill, pulseSpeed, gradientSpeed, minGlow, maxGlow, finalColors]);

  return (
    <div
      className={cn(
        "h-screen w-full flex flex-col items-center justify-center relative",
        containerClassName
      )}
    >
      <canvas
        className="absolute inset-0 z-0"
        ref={canvasRef}
        id="canvas"
      ></canvas>
      <div className={cn("relative z-10", className)} {...props}>
        {children}
      </div>
    </div>
  );
};