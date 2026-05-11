"use client";

import { motion, type Variants } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { FaLinkedin } from "react-icons/fa6";
import Image from "next/image";

const mentors = [
    {
        name: "Akmal Paiziev",
        role: "Founder Numeo AI",
        image: "/1.png",
        linkedin: "#",
    },
    {
        name: "Muhammad Xalil",
        role: "Founder Startup Garage",
        image: "/2.png",
        linkedin: "#",
    },
    {
        name: "Otabek Suvonov",
        role: "Founder Sales doctor",
        image: "/3.jpg",
        linkedin: "#",
    },
    {
        name: "Abduqahhor Toshmuhammedov",
        role: " Founder Smartup",
        image: "/4.jpg",
        linkedin: "#",
    },
    {
        name: "Roman Lavrov ",
        role: "CTO Uzum",
        image: "/5.jpg",
        linkedin: "#",
    },
    {
        name: "Jumabek Alikhanov",
        role: "Founder Humblebee AI",
        image: "/6.jpg",
        linkedin: "#",
    },
    {
        name: "Tohirjon Mirzajonov",
        role: "CEO Imkon venture",
        image: "/7.jpg",
        linkedin: "#",
    },
    {
        name: "Umidjon Ishmuhammedov",
        role: "Founder Millat umidi ",
        image: "/8.jpg",
        linkedin: "#",
    },
    {
        name: "Laziz Adhamov",
        role: "Founder BookCafe",
        image: "/9.jpg",
        linkedin: "#",
    },
];

export default function Mentors() {
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.12, delayChildren: 0.1 },
        },
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: "easeOut" },
        },
    };

    const cardVariants: Variants = {
        hidden: { opacity: 0, y: 60, scale: 0.95 },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.6,
                delay: 0.3 + i * 0.1,
                ease: "easeOut",
            },
        }),
    };

    return (
        <section className="relative py-24 px-6 overflow-hidden">
            {/* Orqa fonda yumshoq glow */}
            <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-blue-500/5 blur-[150px] rounded-full pointer-events-none" />
            <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-indigo-500/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="relative max-w-7xl mx-auto">
                {/* Sarlavha */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    className="mb-16"
                >
                    <motion.p
                        variants={itemVariants}
                        className="text-blue-400 text-center text-sm font-medium tracking-[0.2em] uppercase mb-4"
                    >
                        Ustozlaringiz
                    </motion.p>

                    <motion.h2
                        variants={itemVariants}
                        className="text-4xl md:text-5xl lg:text-6xl text-center font-semibold tracking-tight text-white mb-4 leading-tight"
                    >
                        O'zbekistonning eng yetakchi ekspertlari
                    </motion.h2>

                    <motion.p
                        variants={itemVariants}
                        className="text-gray-400 text-base text-center md:text-lg"
                    >
                        Shunchaki nazariya emas — real hayotda muvaffaqiyatga erishgan
                        ustozlardan o'rganing.
                    </motion.p>
                </motion.div>

                {/* Mentorlar grid */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5"
                >
                    {mentors.map((mentor, i) => (
                        <motion.div
                            key={i}
                            custom={i}
                            variants={cardVariants}
                            whileHover={{ y: -8, transition: { duration: 0.3 } }}
                            className="group relative rounded-2xl overflow-hidden border border-white/10 bg-white/[0.02] backdrop-blur-sm hover:border-blue-500/40 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20 cursor-pointer"
                        >
                            {/* Rasm */}
                            <div className="relative aspect-[3/4] overflow-hidden">
                                {/* Agar Image yo'q bo'lsa, placeholder gradient */}
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 via-indigo-900/30 to-gray-900 group-hover:scale-110 transition-transform duration-700">
                                    {/* Bu yerda haqiqiy rasm bo'ladi */}
                                    <Image
                                        src={mentor.image}
                                        alt={mentor.name}
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                </div>

                                {/* Gradient overlay (pastdan qora) */}
                                <div className="absolute inset-0 bg-gradient-to-t from-[#05070d] via-[#05070d]/50 to-transparent" />

                                {/* Hover'da ko'k overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                {/* LinkedIn icon (yuqori-o'ngda, hover'da chiqadi) */}
                                <a
                                    href={mentor.linkedin}
                                    className="absolute top-3 right-3 w-9 h-9 rounded-full bg-black/60 backdrop-blur-sm border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 hover:bg-blue-600 hover:border-blue-400"
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    <FaLinkedin />
                                </a>

                                {/* Pastdagi ma'lumotlar */}
                                <div className="absolute bottom-0 left-0 right-0 p-5 z-10">
                                    <h3 className="text-white text-lg font-semibold mb-1 leading-tight group-hover:text-blue-300 transition-colors">
                                        {mentor.name}
                                    </h3>
                                    <p className="text-gray-400 text-xs leading-snug group-hover:text-gray-300 transition-colors">
                                        {mentor.role}
                                    </p>
                                </div>

                                {/* Yuqorida ingichka ko'k chiziq (hover'da chiqadi) */}
                                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                {/* Pastda strelka (hover'da chiqadi) */}
                                <div className="absolute bottom-5 right-5 w-8 h-8 rounded-full bg-blue-500/20 border border-blue-400/30 flex items-center justify-center opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all duration-300 backdrop-blur-sm">
                                    <ArrowUpRight size={14} className="text-blue-300" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section >
    );
}