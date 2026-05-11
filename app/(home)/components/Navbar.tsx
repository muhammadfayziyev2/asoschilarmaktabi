'use client';
import { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface NavLink {
    label: string;
    href: string;
}

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    const links: NavLink[] = [
        { label: 'Home', href: 'home' },
        { label: 'About', href: 'about' },
        { label: 'Features', href: 'features' },
        { label: 'Pricing', href: 'pricing' },
        { label: 'Contact', href: 'contact' },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);

            // Qaysi section ko'rinayotganini aniqlash
            const sections = links.map((l) => l.href);
            for (const sectionId of sections) {
                const element = document.getElementById(sectionId);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    // Section ekranning yuqori yarmida bo'lsa — aktiv
                    if (rect.top <= 150 && rect.bottom >= 150) {
                        setActiveSection(sectionId);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Birinchi marta ishga tushirish

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Smooth scroll funksiyasi
    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
        e.preventDefault();
        const element = document.getElementById(sectionId);
        if (element) {
            const offset = 100; // Navbar uchun joy
            const elementPosition = element.getBoundingClientRect().top + window.scrollY;
            window.scrollTo({
                top: elementPosition - offset,
                behavior: 'smooth',
            });
        }
    };

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
                {/* Logo — bosilganda yuqoriga */}
                <a
                    href="#home"
                    onClick={(e) => handleClick(e, 'home')}
                    className="flex items-center gap-2 px-4 cursor-pointer"
                >
                   
                    <span className="text-white font-semibold text-lg">Asoschilar Maktabi</span>
                </a>

                {/* Links */}
                <div className="hidden md:flex items-center gap-1">
                    {links.map((link) => (
                        <a
                            key={link.href}
                            href={`#${link.href}`}
                            onClick={(e) => handleClick(e, link.href)}
                            className={`px-4 py-2 rounded-full text-sm transition flex items-center gap-1 cursor-pointer ${activeSection === link.href
                                ? 'bg-white/10 text-white'
                                : 'text-gray-300 hover:text-white hover:bg-white/5'
                                }`}
                        >
                            {link.label}
                            {link.label === 'Features'}
                        </a>
                    ))}
                </div>

                {/* CTA — Pricing'ga olib boradi */}
                <a
                    href="#pricing"
                    onClick={(e) => handleClick(e, 'pricing')
                    }
                    className="bg-blue-600 hover:bg-blue-500 transition text-white text-sm font-medium px-5 py-2.5 rounded-full cursor-pointer"
                >
                   Joyingizni band qiling
                </a >
            </div >
        </nav >
    );
}