"use client";

import { useEffect, useRef } from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CarScrollCanvas from "@/components/CarScrollCanvas";
import CarTextOverlays from "@/components/CarTextOverlays";
import AnimatedCounter from "@/components/AnimatedCounter";
import { gt3rs } from "@/data/cars";

export default function Home() {
  const statsRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  const statsInView = useInView(statsRef, { once: true, margin: "-100px" });
  const ctaInView = useInView(ctaRef, { once: true, margin: "-100px" });

  useEffect(() => {
    // Scroll reset on mount for accurate Framer Motion tracking
    window.scrollTo(0, 0);
  }, []);

  return (
    <AnimatePresence mode="wait">
      <div className="bg-black text-white min-h-screen selection:bg-racing-red">
        <Navbar />

        {/* Hero Scroll Experience & Orchestration */}
        <section className="relative w-full bg-black">
          <CarScrollCanvas frameCount={192} folderPath="/images/gt3rs" />
          <CarTextOverlays />
        </section>

        {/* Performance Stats Section */}
        <section
          ref={statsRef}
          className="relative px-6 md:px-24 py-32 bg-black border-t border-white/10 overflow-hidden"
        >
          {/* Subtle background glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg aspect-square bg-[#d50000] rounded-full blur-[150px] opacity-10 pointer-events-none" />

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={statsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-7xl mx-auto"
          >
            <div className="text-center mb-24">
              <h2 className="text-xs tracking-[0.2em] text-white/50 uppercase mb-4">
                Telemetry
              </h2>
              <h3 className="text-3xl md:text-5xl font-bold uppercase tracking-tighter">
                Nürburgring-Inspired Tuning
              </h3>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16">
              {gt3rs.performanceStats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={statsInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: i * 0.15, ease: "easeOut" }}
                  className="flex flex-col items-center justify-center p-8 bg-white/5 border border-white/10 backdrop-blur-sm"
                >
                  <div className="flex items-baseline gap-2 mb-2">
                    <AnimatedCounter
                      value={stat.value.split(" ")[0]}
                      className="text-4xl md:text-6xl font-bold text-white tracking-tighter"
                    />
                    <span className="text-xl md:text-3xl font-bold text-white/40 tracking-tighter uppercase">
                      {stat.value.split(" ")[1]}
                    </span>
                  </div>
                  <span className="text-xs text-white/50 uppercase tracking-widest text-center">
                    {stat.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Final CTA */}
        <section
          ref={ctaRef}
          className="relative flex flex-col items-center justify-center p-6 text-center overflow-hidden"
          style={{ minHeight: "70vh" }}
        >
          <div className="absolute inset-0 z-0">
            {/* Dark background pattern or gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0b0b0b] to-[#120000] opacity-80" />
            <div
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage: `radial-gradient(circle at 50% 100%, #d50000 0%, transparent 50%)`,
              }}
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative z-10 max-w-4xl mx-auto"
          >
            <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter mb-8 leading-none">
              <span className="block text-white">Born on the Track.</span>
              <span className="block text-white/50">Built for the Road.</span>
            </h2>

            <p className="text-lg md:text-xl text-white/60 font-light max-w-2xl mx-auto mb-12">
              The 911 GT3 RS offers more motorsport technology than ever before.
              Configure yours today or contact a Porsche dealer near you.
            </p>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <button
                className="group relative px-12 py-5 bg-white text-black text-sm uppercase font-bold tracking-[0.2em] overflow-hidden"
                style={{ clipPath: "polygon(10px 0, 10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px)" }}
              >
                <div className="absolute inset-0 bg-black translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-300 ease-out z-0" />
                <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                  Configure Your RS
                </span>

                {/* Slanted red racing accent */}
                <div className="absolute bottom-0 right-0 w-8 h-8 bg-[#d50000] -z-10 translate-x-2 translate-y-2 group-hover:bg-white transition-colors duration-300"
                  style={{ clipPath: "polygon(100% 0, 0 100%, 100% 100%)" }} />
              </button>
            </motion.div>
          </motion.div>
        </section>

        <Footer />
      </div>
    </AnimatePresence>
  );
}
