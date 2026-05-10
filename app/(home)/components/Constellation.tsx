"use client";

import { useEffect, useRef } from "react";

interface Point {
    x: number;
    y: number;
    vx: number;
    vy: number;
    size: number;
}

export default function Constellation() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const mouseRef = useRef({ x: -1000, y: -1000 });
    const pointsRef = useRef<Point[]>([]);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        // Canvas o'lchamini sozlash
        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resize();
        window.addEventListener("resize", resize);

        // Yulduz nuqtalarini yaratish
        const createPoints = () => {
            const count = Math.min(80, Math.floor((canvas.width * canvas.height) / 25000));
            pointsRef.current = Array.from({ length: count }, () => ({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                vx: (Math.random() - 0.5) * 0.3,
                vy: (Math.random() - 0.5) * 0.3,
                size: Math.random() * 1.5 + 0.5,
            }));
        };
        createPoints();

        // Sichqoncha kuzatish
        const handleMouseMove = (e: MouseEvent) => {
            mouseRef.current.x = e.clientX;
            mouseRef.current.y = e.clientY;
        };
        const handleMouseLeave = () => {
            mouseRef.current.x = -1000;
            mouseRef.current.y = -1000;
        };
        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("mouseleave", handleMouseLeave);

        // Animatsiya
        let animationId: number;
        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            const points = pointsRef.current;
            const mouse = mouseRef.current;

            // Nuqtalarni harakatlantirish
            points.forEach((p) => {
                p.x += p.vx;
                p.y += p.vy;

                // Ekran chetlaridan qaytish
                if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
                if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
            });

            // Nuqtalarni chizish
            points.forEach((p) => {
                const dx = p.x - mouse.x;
                const dy = p.y - mouse.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                const maxDist = 200;

                // Sichqonchaga yaqin yulduzlar yorqinroq
                const brightness = dist < maxDist ? 1 - dist / maxDist : 0.3;

                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(147, 197, 253, ${brightness})`;
                ctx.fill();

                // Sichqoncha juda yaqin bo'lsa — glow
                if (dist < maxDist) {
                    ctx.beginPath();
                    ctx.arc(p.x, p.y, p.size * 3, 0, Math.PI * 2);
                    ctx.fillStyle = `rgba(59, 130, 246, ${(1 - dist / maxDist) * 0.2})`;
                    ctx.fill();
                }
            });

            // Yaqin nuqtalarni chiziq bilan bog'lash
            for (let i = 0; i < points.length; i++) {
                for (let j = i + 1; j < points.length; j++) {
                    const dx = points[i].x - points[j].x;
                    const dy = points[i].y - points[j].y;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    if (dist < 130) {
                        // Sichqoncha yaqin bo'lsa chiziqlar yorqinroq
                        const mouseDx =
                            (points[i].x + points[j].x) / 2 - mouse.x;
                        const mouseDy =
                            (points[i].y + points[j].y) / 2 - mouse.y;
                        const mouseDist = Math.sqrt(
                            mouseDx * mouseDx + mouseDy * mouseDy
                        );

                        let opacity = (1 - dist / 130) * 0.15;
                        if (mouseDist < 250) {
                            opacity += (1 - mouseDist / 250) * 0.5;
                        }

                        ctx.beginPath();
                        ctx.moveTo(points[i].x, points[i].y);
                        ctx.lineTo(points[j].x, points[j].y);
                        ctx.strokeStyle = `rgba(147, 197, 253, ${opacity})`;
                        ctx.lineWidth = 0.5;
                        ctx.stroke();
                    }
                }

                // Sichqoncha bilan ham bog'lash
                const dx = points[i].x - mouse.x;
                const dy = points[i].y - mouse.y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                if (dist < 200) {
                    ctx.beginPath();
                    ctx.moveTo(points[i].x, points[i].y);
                    ctx.lineTo(mouse.x, mouse.y);
                    ctx.strokeStyle = `rgba(59, 130, 246, ${(1 - dist / 200) * 0.4})`;
                    ctx.lineWidth = 0.8;
                    ctx.stroke();
                }
            }

            animationId = requestAnimationFrame(animate);
        };
        animate();

        return () => {
            window.removeEventListener("resize", resize);
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mouseleave", handleMouseLeave);
            cancelAnimationFrame(animationId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 pointer-events-none z-[1]"
            style={{ width: "100vw", height: "100vh" }}
        />
    );
}