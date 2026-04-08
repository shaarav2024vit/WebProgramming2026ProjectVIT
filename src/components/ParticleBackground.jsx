import React, { useMemo } from 'react';
import './ParticleBackground.css';

const ParticleBackground = () => {
    // Generate a random stable array of particles
    const particles = useMemo(() => {
        return Array.from({ length: 40 }).map((_, i) => ({
            id: i,
            left: `${Math.random() * 100}%`,
            animationDuration: `${Math.random() * 20 + 15}s`,
            animationDelay: `${Math.random() * 20}s`,
            size: `${Math.random() * 4 + 2}px`,
            opacity: Math.random() * 0.5 + 0.1,
        }));
    }, []);

    return (
        <div className="particle-container">
            {particles.map((p) => (
                <div
                    key={p.id}
                    className="particle"
                    style={{
                        left: p.left,
                        width: p.size,
                        height: p.size,
                        animationDuration: p.animationDuration,
                        animationDelay: p.animationDelay,
                        '--opacity': p.opacity,
                    }}
                />
            ))}
        </div>
    );
};

export default ParticleBackground;
