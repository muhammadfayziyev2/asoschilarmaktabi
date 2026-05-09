'use client';
import { ChevronDown } from 'lucide-react';

export default function Navbar() {
    const links = ['Home', 'About', 'Features', 'Pricing', 'Contact'];

    return (
        <nav className="animate-fade-up delay-100 relative z-20 flex justify-center pt-6 px-6">
            <div className="flex items-center justify-between w-full max-w-6xl bg-black/40 backdrop-blur-xl border border-white/10 rounded-full px-3 py-2.5">
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