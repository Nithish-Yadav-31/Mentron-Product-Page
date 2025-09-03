"use client";
import { cn } from "@/lib/utils";
import React, { useEffect, useRef, useState, useCallback } from "react";
import { createNoise3D } from "simplex-noise";

export const WavyBackground = ({
  children,
  className,
  containerClassName,
  colors,
  waveWidth,
  backgroundFill, // This prop will now receive a direct color string (e.g., "white", "hsl(0 0% 100%)")
  blur = 20,
  speed = "fast",
  waveOpacity = 0.8,
  height = "h-screen", // Allow custom height
  ...props
}: {
  children?: any;
  className?: string;
  containerClassName?: string;
  colors?: string[];
  waveWidth?: number;
  backgroundFill?: string;
  blur?: number;
  speed?: "slow" | "fast";
  waveOpacity?: number;
  height?: string; // Custom height class
  [key: string]: any;
}) => {
  const noise = createNoise3D();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const ctxRef = useRef<CanvasRenderingContext2D | null>(null);
  const animationIdRef = useRef<number | null>(null);
  const ntRef = useRef(0); // For continuous time progression

  const [isSafari, setIsSafari] = useState(false);
  // resolvedBgColor now directly takes the backgroundFill prop
  const [resolvedBgColor, setResolvedBgColor] = useState<string | undefined>(backgroundFill);

  // Update resolvedBgColor when backgroundFill prop changes
  useEffect(() => {
    setResolvedBgColor(backgroundFill);
  }, [backgroundFill]);

  const getSpeed = useCallback(() => {
    switch (speed) {
      case "slow":
        return 0.001;
      case "fast":
        return 0.003;
      default:
        return 0.001;
    }
  }, [speed]);

  // STRICTLY using the user-provided wave colors
  const waveColors = colors ?? [
    "#B3D9FF", // soft baby blue
    "#66B2FF", // light blue
    "#38bdf8", // aqua/sky blue
    "#3399FF", // medium blue
    "#0077FF", // brand base blue
    "#005BBB", // deeper brand blue
    "#003F88", // navy blue for contrast
    "#3399FF", // smooth return
  ];
  

  const drawWave = useCallback((n: number, ctx: CanvasRenderingContext2D, w: number, h: number, nt: number) => {
    for (let i = 0; i < n; i++) {
      ctx.beginPath();
      ctx.lineWidth = waveWidth || 50;
      ctx.strokeStyle = waveColors[i % waveColors.length];
      for (let x = 0; x < w; x += 5) {
        const y = noise(x / 800, 0.3 * i, nt) * 100;
        ctx.lineTo(x, y + h * 0.5);
      }
      ctx.stroke();
      ctx.closePath();
    }
  }, [noise, waveWidth, waveColors]);

  const render = useCallback(() => {
    const canvas = canvasRef.current;
    const ctx = ctxRef.current;
    if (!canvas || !ctx || resolvedBgColor === undefined) {
      animationIdRef.current = requestAnimationFrame(render);
      return;
    }

    const w = ctx.canvas.width;
    const h = ctx.canvas.height;

    ntRef.current += getSpeed(); // Increment time for animation

    // Draw background fully opaque with the resolved color
    ctx.fillStyle = resolvedBgColor;
    ctx.globalAlpha = 1;
    ctx.fillRect(0, 0, w, h);

    // Then draw waves with desired opacity
    ctx.globalAlpha = waveOpacity || 0.7;
    drawWave(5, ctx, w, h, ntRef.current);

    animationIdRef.current = requestAnimationFrame(render);
  }, [resolvedBgColor, waveOpacity, getSpeed, drawWave]);

  // Main effect for canvas initialization and animation loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctxRef.current = ctx;

    const handleResize = () => {
      const container = canvas.parentElement;
      if (container) {
        const rect = container.getBoundingClientRect();
        canvas.width = rect.width;
        canvas.height = rect.height;
      } else {
        // Fallback to window dimensions if no container
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      }
      ctx.filter = `blur(${blur}px)`;
    };

    handleResize(); // Initial size and blur
    
    // Use ResizeObserver for better container size detection
    const resizeObserver = new ResizeObserver(handleResize);
    if (canvas.parentElement) {
      resizeObserver.observe(canvas.parentElement);
    }
    
    // Fallback to window resize for broader compatibility
    window.addEventListener("resize", handleResize);

    // Start animation loop
    animationIdRef.current = requestAnimationFrame(render);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", handleResize);
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
    };
  }, [blur, render]);

  useEffect(() => {
    setIsSafari(
      typeof window !== "undefined" &&
        navigator.userAgent.includes("Safari") &&
        !navigator.userAgent.includes("Chrome")
    );
  }, []);

  return (
    <div
      className={cn(
        "relative w-full",
        height,
        containerClassName
      )}
    >
      <canvas
        className="absolute inset-0 w-full h-full"
        ref={canvasRef}
        id="canvas"
        style={{
          ...(isSafari ? { filter: `blur(${blur}px)` } : {}),
        }}
      ></canvas>
      <div className={cn("relative z-10 w-full h-full flex flex-col items-center justify-center", className)} {...props}>
        {children}
      </div>
    </div>
  );
};
