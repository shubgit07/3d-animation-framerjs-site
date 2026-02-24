export default function Footer() {
    return (
        <footer className="bg-black text-white py-16 px-6 md:px-12 border-t border-white/10">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
                {/* Brand Column */}
                <div>
                    <h3 className="text-xl font-bold uppercase tracking-widest mb-4">
                        Porsche 911 GT3 RS
                    </h3>
                    <p className="text-white/50 text-sm leading-relaxed max-w-xs">
                        A celebration of high-revving naturally aspirated flat-six power and uncompromised aerodynamics.
                    </p>
                </div>

                {/* Links Column 1 */}
                <div>
                    <h4 className="text-sm font-semibold uppercase tracking-widest mb-4 text-white/80">
                        Performance
                    </h4>
                    <ul className="space-y-2 text-sm text-white/50">
                        <li><a href="#" className="hover:text-white transition-colors">Aerodynamics</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Engine</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Lightweight Design</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Chassis</a></li>
                    </ul>
                </div>

                {/* Links Column 2 */}
                <div>
                    <h4 className="text-sm font-semibold uppercase tracking-widest mb-4 text-white/80">
                        Motorsport Heritage
                    </h4>
                    <ul className="space-y-2 text-sm text-white/50">
                        <li><a href="#" className="hover:text-white transition-colors">GT Racing</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Nürburgring Nordschleife</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Porsche Motorsport</a></li>
                    </ul>
                </div>

                {/* Newsletter */}
                <div>
                    <h4 className="text-sm font-semibold uppercase tracking-widest mb-4 text-white/80">
                        Newsletter
                    </h4>
                    <p className="text-white/50 text-sm mb-4">
                        Subscribe for exclusive updates and telemetry.
                    </p>
                    <div className="flex">
                        <input
                            type="email"
                            placeholder="YOUR EMAIL"
                            className="bg-white/5 border border-white/10 text-white text-xs px-4 py-2 w-full focus:outline-none focus:border-white/50 uppercase tracking-widest"
                        />
                        <button className="bg-white text-black px-4 py-2 text-xs font-bold uppercase tracking-widest hover:bg-white/90 transition-colors">
                            Join
                        </button>
                    </div>
                </div>
            </div>

            <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs text-white/40 uppercase tracking-widest">
                <p>&copy; {new Date().getFullYear()} Digital GT3 RS Showcase.</p>
                <div className="flex gap-6 mt-4 md:mt-0">
                    <a href="#" className="hover:text-white">Imprint</a>
                    <a href="#" className="hover:text-white">Privacy</a>
                    <a href="#" className="hover:text-white">Cookies</a>
                </div>
            </div>
        </footer>
    );
}
