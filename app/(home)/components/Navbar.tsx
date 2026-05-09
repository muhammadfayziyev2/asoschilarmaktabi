'use client';
import { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const links = ['Home', 'About', 'Features', 'Pricing', 'Contact'];

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 flex justify-center px-6 transition-all duration-300 ${scrolled ? 'pt-3' : 'pt-6'
                }`}
        >
            <div
                className={`flex items-center justify-between w-full max-w-6xl border rounded-full px-3 py-2.5 transition-all duration-300 ${scrolled
                    ? 'bg-black/70 backdrop-blur-2xl border-white/15 shadow-lg shadow-blue-500/10'
                    : 'bg-black/40 backdrop-blur-xl border-white/10'
                    }`}
            >
                {/* Logo */}
                <div className="flex items-center gap-2 px-4">
                    <div className="flex items-end gap-0.5 h-5">
                        <span className="w-1 h-2 bg-white rounded-sm" />
                        <span className="w-1 h-3 bg-white rounded-sm" />
                        <span className="w-1 h-4 bg-white rounded-sm" />
                        <span className="w-1 h-5 bg-white rounded-sm" />
                    </div>
                    <span className="text-white font-semibold text-lg">Vetra</span>
                </div>

                {/* Links */}
                <div className="hidden md:flex items-center gap-1">
                    {links.map((link) => (
                        <a
                            key={link}
                            href="#"
                            className={`px-4 py-2 rounded-full text-sm transition flex items-center gap-1 ${link === 'Home'
                                ? 'bg-white/10 text-white'
                                : 'text-gray-300 hover:text-white'
                                }`}
                        >
                            {link}
                            {link === 'Features' && <ChevronDown size={14} />}
                        </a>
                    ))}
                </div>

                {/* CTA */}
                <button className="bg-blue-600 hover:bg-blue-500 transition text-white text-sm font-medium px-5 py-2.5 rounded-full">
                    Get started
                </button>
            </div>
        </nav >
    );
}