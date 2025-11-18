"use client";

import { useEffect, useRef } from "react";

export default function ParallaxBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const gridLines: Array<{
      x: number;
      y: number;
      z: number;
      length: number;
      rotation: number;
      rotationSpeed: number;
      opacity: number;
      type: "horizontal" | "vertical" | "diagonal";
    }> = [];

    for (let i = 0; i < 25; i++) {
      gridLines.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        z: Math.random(),
        length: Math.random() * 150 + 50,
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.002,
        opacity: Math.random() * 0.3 + 0.1,
        type: ["horizontal", "vertical", "diagonal"][Math.floor(Math.random() * 3)] as "horizontal" | "vertical" | "diagonal",
      });
    }

    const shapes: Array<{
      x: number;
      y: number;
      z: number;
      size: number;
      rotation: number;
      rotationSpeed: number;
      speedX: number;
      speedY: number;
      opacity: number;
      type: "square" | "triangle" | "hexagon";
    }> = [];

    for (let i = 0; i < 15; i++) {
      const z = Math.random();
      shapes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        z: z,
        size: (Math.random() * 40 + 20) * (z + 0.3),
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.01,
        speedX: (Math.random() - 0.5) * 0.3 * (1 - z * 0.5),
        speedY: (Math.random() - 0.5) * 0.3 * (1 - z * 0.5),
        opacity: Math.random() * 0.15 + 0.05,
        type: ["square", "triangle", "hexagon"][Math.floor(Math.random() * 3)] as "square" | "triangle" | "hexagon",
      });
    }

    let mouseX = canvas.width / 2;
    let mouseY = canvas.height / 2;
    let scrollY = 0;
    let time = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const handleScroll = () => {
      scrollY = window.scrollY;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);

    const drawShape = (x: number, y: number, size: number, rotation: number, type: string, opacity: number) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(rotation);
      ctx.strokeStyle = `rgba(139, 111, 71, ${opacity})`;
      ctx.lineWidth = 1;
      ctx.beginPath();

      if (type === "square") {
        ctx.rect(-size / 2, -size / 2, size, size);
      } else if (type === "triangle") {
        ctx.moveTo(0, -size / 2);
        ctx.lineTo(size / 2, size / 2);
        ctx.lineTo(-size / 2, size / 2);
        ctx.closePath();
      } else if (type === "hexagon") {
        for (let i = 0; i < 6; i++) {
          const angle = (Math.PI / 3) * i;
          const hx = (size / 2) * Math.cos(angle);
          const hy = (size / 2) * Math.sin(angle);
          if (i === 0) ctx.moveTo(hx, hy);
          else ctx.lineTo(hx, hy);
        }
        ctx.closePath();
      }

      ctx.stroke();
      ctx.restore();
    };

    const animate = () => {
      time += 0.01;
      
      const gradient = ctx.createRadialGradient(
        canvas.width / 2,
        canvas.height / 2,
        0,
        canvas.width / 2,
        canvas.height / 2,
        canvas.width / 2
      );
      gradient.addColorStop(0, "#faf8f3");
      gradient.addColorStop(0.5, "#f5f1e8");
      gradient.addColorStop(1, "#ebe7dc");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const scrollProgress = Math.min(scrollY / 1000, 1);
      const zoomFactor = 1 + scrollProgress * 0.3;
      const intensityFactor = 1 + scrollProgress * 0.5;
      const mouseInfluence = 0.02;

      gridLines.forEach((line) => {
        line.rotation += line.rotationSpeed;
        
        const parallaxX = (mouseX - canvas.width / 2) * mouseInfluence * (1 - line.z);
        const parallaxY = (mouseY - canvas.height / 2) * mouseInfluence * (1 - line.z);
        
        const x = line.x + parallaxX;
        const y = line.y + parallaxY - scrollY * 0.1 * (1 - line.z * 0.5);

        if (y < -100) line.y = canvas.height + 100;
        if (y > canvas.height + 100) line.y = -100;

        ctx.save();
        ctx.translate(x, y);
        ctx.rotate(line.rotation);
        
        const lineOpacity = line.opacity * (0.5 + line.z * 0.5) * (1 + scrollProgress * 0.5);
        ctx.strokeStyle = `rgba(139, 111, 71, ${lineOpacity})`;
        ctx.lineWidth = 0.5 + line.z;
        
        ctx.beginPath();
        if (line.type === "horizontal") {
          ctx.moveTo(-line.length / 2, 0);
          ctx.lineTo(line.length / 2, 0);
        } else if (line.type === "vertical") {
          ctx.moveTo(0, -line.length / 2);
          ctx.lineTo(0, line.length / 2);
        } else {
          ctx.moveTo(-line.length / 2, -line.length / 2);
          ctx.lineTo(line.length / 2, line.length / 2);
        }
        ctx.stroke();
        ctx.restore();
      });

      shapes.forEach((shape) => {
        shape.x += shape.speedX;
        shape.y += shape.speedY;
        shape.rotation += shape.rotationSpeed;

        const dx = mouseX - shape.x;
        const dy = mouseY - shape.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 200) {
          const force = (200 - distance) / 200;
          const pushForce = force * (1 - shape.z * 0.3);
          shape.x -= (dx / distance) * pushForce * 2;
          shape.y -= (dy / distance) * pushForce * 2;
        }

        const parallaxX = (mouseX - canvas.width / 2) * mouseInfluence * 1.5 * (1 - shape.z);
        const parallaxY = (mouseY - canvas.height / 2) * mouseInfluence * 1.5 * (1 - shape.z);
        
        const x = shape.x + parallaxX;
        const y = shape.y + parallaxY - scrollY * 0.15 * (1 - shape.z * 0.5);

        if (shape.x < -50) shape.x = canvas.width + 50;
        if (shape.x > canvas.width + 50) shape.x = -50;
        if (y < -100) shape.y = canvas.height + 100;
        if (y > canvas.height + 100) shape.y = -100;

        const pulse = Math.sin(time + shape.x * 0.01) * 0.05;
        const shapeOpacity = shape.opacity * (1 + pulse) * (0.5 + shape.z * 0.5) * (1 + scrollProgress * 0.5);
        
        drawShape(x, y, shape.size * (1 + scrollProgress * 0.2), shape.rotation, shape.type, shapeOpacity);

        ctx.save();
        ctx.globalAlpha = shapeOpacity * 0.3;
        ctx.shadowBlur = 20 * shape.z;
        ctx.shadowColor = `rgba(201, 169, 97, ${shapeOpacity})`;
        drawShape(x, y, shape.size * (1 + scrollProgress * 0.2), shape.rotation, shape.type, shapeOpacity * 0.5);
        ctx.restore();
      });

      shapes.forEach((shape1, i) => {
        shapes.forEach((shape2, j) => {
          if (i >= j) return;
          
          const depthDiff = Math.abs(shape1.z - shape2.z);
          if (depthDiff > 0.4) return;

          const dx = shape1.x - shape2.x;
          const dy = shape1.y - shape2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 200) {
            ctx.beginPath();
            ctx.moveTo(shape1.x, shape1.y);
            ctx.lineTo(shape2.x, shape2.y);
            
            const connectionOpacity = (1 - distance / 200) * 0.08 * (1 - depthDiff) * (1 + scrollProgress * 0.3);
            ctx.strokeStyle = `rgba(139, 111, 71, ${connectionOpacity})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
      style={{ 
        background: "radial-gradient(ellipse at top, #faf8f3 0%, #f5f1e8 50%, #ebe7dc 100%)" 
      }}
    />
  );
}
