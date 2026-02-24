"use client";

import { motion } from "framer-motion";

export default function Navbar() {
    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-5 md:px-12 backdrop-blur-md border-b border-white/10 bg-black/40"
        >
            <div className="flex items-baseline gap-4">
                {/* Premium Porsche Lettering */}
                <span className="text-white font-semibold tracking-[0.35em] uppercase text-lg sm:text-xl">
                    PORSCHE
                </span>
                <span className="text-white/50 font-medium tracking-widest uppercase text-xs hidden md:block">
                    GT3 RS
                </span>
            </div>

            <div className="flex items-center gap-6">
                <button className="text-white/70 hover:text-white transition-colors text-xs tracking-widest uppercase md:block hidden">
                    Explore the Build
                </button>
                <button className="text-white/70 hover:text-white transition-colors text-xs tracking-widest uppercase md:block hidden">
                    Specifications
                </button>
                <button className="bg-white text-black px-5 py-2 hover:bg-white/90 transition-colors text-xs tracking-widest uppercase font-semibold">
                    Pre-order Now
                </button>
            </div>
        </motion.nav>
    );
}
