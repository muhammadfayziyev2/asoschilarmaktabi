'use client';
import { useEffect, useState } from 'react';

interface Star {
    id: number;
    x: number;
    y: number;
    size: number;
    delay: number;
    duration: number;
}

export default function StarsBackground() {
    const [stars, setStars] = useState<Star[]>([]);

    useEffect(() => {
        const generated = Array.from({ length: 150 }, (_, i) => ({
            id: i,
            x: Math.random() * 100,
            y: Math.random() * 100,
            size: Math.random() * 2 + 0.5,
            delay: Math.random() * 5,
            duration: Math.random() * 3 + 2,
        }));
        setStars(generated);
    }, []);

    return (
        <div className="absolute inset-0 overflow-hidden">
            {stars.map((s) => (
                <div
                    key={s.id}
                    className="star"
                    style={{
                        left: `${s.x}%`,
                        top: `${s.y}%`,
                        width: `${s.size}px`,
                        height: `${s.size}px`,
                        animationDelay: `${s.delay}s`,
                        animationDuration: `${s.duration}s`,
                    }}
                />
            ))}
        </div>
    );
}