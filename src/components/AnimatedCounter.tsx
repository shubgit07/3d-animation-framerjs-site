"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useMotionValue, useSpring, motion } from "framer-motion";

interface AnimatedCounterProps {
    value: string;
    className?: string;
}

export default function AnimatedCounter({ value, className = "" }: AnimatedCounterProps) {
    // Extract number and decimal if present
    const numMatch = value.match(/[\d.]+/);
    const numberPart = numMatch ? parseFloat(numMatch[0]) : 0;

    // Keep non-number parts for rendering (e.g. if the stat was "518 hp", " hp")
    // In our case, the value passed from the parent is already pre-split to just the number, 
    // but this is safe fallback
    const remainder = value.replace(/[\d.]+/, "");

    const ref = useRef<HTMLSpanElement>(null);
    const inView = useInView(ref, { once: true, margin: "-100px" });

    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, {
        damping: 50,
        stiffness: 100,
        mass: 1,
    });

    const [displayValue, setDisplayValue] = useState("0");

    useEffect(() => {
        if (inView) {
            motionValue.set(numberPart);
        }
    }, [inView, motionValue, numberPart]);

    useEffect(() => {
        return springValue.on("change", (latest) => {
            // If original number had a decimal (like 3.0), keep 1 decimal place
            const isDecimal = value.includes(".");
            const formatted = isDecimal
                ? latest.toFixed(1)
                : Math.floor(latest).toString();
            setDisplayValue(formatted);
        });
    }, [springValue, value]);

    return (
        <span ref={ref} className={className}>
            {displayValue}{remainder}
        </span>
    );
}
