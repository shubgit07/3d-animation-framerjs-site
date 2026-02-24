"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { gt3rs } from "@/data/cars";

interface OverlayProps {
    progress: MotionValue<number>;
    index: number;
    title: string;
    subtitle: string;
}

function TextOverlay({ progress, index, title, subtitle }: OverlayProps) {
    // Each section occupies 0.25 of the 0-1 progress
    const start = index * 0.25;
    const inStart = start + 0.05;
    const inEnd = start + 0.15;
    const outStart = start + 0.20;
    const end = start + 0.25;

    const opacity = useTransform(
        progress,
        [start, inStart, inEnd, outStart, end],
        [0, 1, 1, 0, 0]
    );

    const y = useTransform(
        progress,
        [start, inStart, inEnd, outStart, end],
        [50, 0, 0, -50, -50]
    );

    return (
        <motion.div
            style={{ opacity, y }}
            className="absolute inset-x-8 md:inset-x-24 top-32 md:top-40 flex flex-col justify-start pointer-events-none"
        >
            <div className="max-w-xl md:pl-12">
                <h2 className="text-4xl md:text-7xl font-bold uppercase tracking-tighter text-zinc-800 mb-4 drop-shadow-sm">
                    {title}
                </h2>
                <p className="text-lg md:text-2xl text-zinc-600 font-medium drop-shadow-sm">
                    {subtitle}
                </p>
            </div>
        </motion.div>
    );
}

export default function CarTextOverlays() {
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    const sections = [
        gt3rs.section1,
        gt3rs.section2,
        gt3rs.section3,
        gt3rs.section4,
    ];

    return (
        <div ref={containerRef} className="absolute inset-0 z-10 pointer-events-none">
            <div className="sticky top-0 h-screen w-full">
                {sections.map((sec, i) => (
                    <TextOverlay
                        key={i}
                        progress={scrollYProgress}
                        index={i}
                        title={sec.title}
                        subtitle={sec.subtitle}
                    />
                ))}
            </div>
        </div>
    );
}
