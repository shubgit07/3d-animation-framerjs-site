"use client";

import { useRef, useEffect, useState } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

interface CarScrollCanvasProps {
    frameCount: number;
    folderPath: string;
}

export default function CarScrollCanvas({
    frameCount = 192,
    folderPath = "/images/gt3rs",
}: CarScrollCanvasProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [images, setImages] = useState<HTMLImageElement[]>([]);
    const [imagesLoaded, setImagesLoaded] = useState(false);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    const frameIndex = useTransform(scrollYProgress, [0, 1], [1, frameCount]);

    // Preload images
    useEffect(() => {
        let loadedCount = 0;
        const loadedImages: HTMLImageElement[] = [];

        for (let i = 1; i <= frameCount; i++) {
            const img = new Image();

            const paddedIndex = String(i).padStart(5, '0');
            img.src = `${folderPath}/${paddedIndex}.jpg`;

            const handleLoad = () => {
                loadedCount++;
                if (loadedCount === frameCount) {
                    setImagesLoaded(true);
                }
            };

            img.onload = handleLoad;
            img.onerror = handleLoad; // Skip missing frames to avoid infinite load

            loadedImages.push(img);
        }
        setImages(loadedImages);
    }, [frameCount, folderPath]);

    // Draw to canvas
    useEffect(() => {
        if (!imagesLoaded || !canvasRef.current || images.length === 0) return;

        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const render = (index: number) => {
            if (!images[index - 1]) return;
            const img = images[index - 1];

            // Setup canvas dimensions to match inner window for crispness
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;

            // Calculate aspect ratio
            const hRatio = canvas.width / img.width;
            const vRatio = canvas.height / img.height;

            // Use "contain" logic for aspect ratio
            const ratio = Math.min(hRatio, vRatio);
            const centerShift_x = (canvas.width - img.width * ratio) / 2;
            const centerShift_y = (canvas.height - img.height * ratio) / 2;

            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(
                img,
                0,
                0,
                img.width,
                img.height,
                centerShift_x,
                centerShift_y,
                img.width * ratio,
                img.height * ratio
            );
        };

        // Initial render
        render(1);

        const unsubscribe = frameIndex.on("change", (latest) => {
            requestAnimationFrame(() => {
                render(Math.round(latest));
            });
        });

        const handleResize = () => render(Math.round(frameIndex.get()));
        window.addEventListener("resize", handleResize);

        return () => {
            unsubscribe();
            window.removeEventListener("resize", handleResize);
        };
    }, [imagesLoaded, frameIndex, images]);

    return (
        <div ref={containerRef} className="relative w-full bg-black" style={{ height: "500vh" }}>
            <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
                {!imagesLoaded && (
                    <div className="absolute inset-0 flex items-center justify-center text-white/50 z-10">
                        <span className="animate-pulse tracking-widest uppercase text-sm font-semibold">
                            Loading Telemetry...
                        </span>
                    </div>
                )}
                <canvas
                    ref={canvasRef}
                    className="w-full h-full object-contain pointer-events-none"
                />

                {/* Subtle gradient overlay to blend with dark backgrounds of next sections */}
                <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent pointer-events-none" />
            </div>
        </div>
    );
}
