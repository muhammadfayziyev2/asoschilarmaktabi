"use client";

import { motion, type Variants } from "framer-motion";
import { Globe, CheckCircle2, ArrowRight } from "lucide-react";

export default function Announcement() {
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.12, delayChildren: 0.1 },
        },
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: "easeOut" },
        },
    };

    return (
        <section className="relative py-20 px-6 overflow-hidden">
            {/* Yumshoq orqa fon glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-100 bg-blue-500/8 blur-[120px] rounded-full pointer-events-none" />

            <div className="relative max-w-3xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 50, scale: 0.95 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    whileHover={{ y: -4, transition: { duration: 0.3 } }}
                    className="group relative p-10 md:p-14 rounded-3xl border border-white/10 bg-linear-to-br from-white/[0.04] to-white/[0.01] backdrop-blur-sm hover:border-blue-500/40 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/15 overflow-hidden"
                >
                    {/* Yuqorida gradient chiziq */}
                    <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-blue-400/60 to-transparent" />

                    {/* Hover'da chiqadigan glow */}
                    <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        className="relative z-10 text-center"
                    >
                        {/* Globe icon — pulsiruvchi */}
                        <motion.div variants={itemVariants} className="mb-6 flex justify-center">
                            <div className="relative">
                                {/* Pulsiruvchi halqa */}
                                <span className="absolute inset-0 rounded-full bg-blue-500/30 animate-ping" />
                                <div className="relative inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-500/15 border border-blue-500/30">
                                    <Globe size={28} className="text-blue-400" strokeWidth={1.8} />
                                </div>
                            </div>
                        </motion.div>

                        {/* Sarlavha */}
                        <motion.h2
                            variants={itemVariants}
                            className="text-3xl md:text-4xl font-semibold text-white mb-3"
                        >
                            Darslar boshlandi!
                        </motion.h2>

                        {/* Subtitle */}
                        <motion.p
                            variants={itemVariants}
                            className="text-gray-400 text-base mb-7"
                        >
                            <span className="text-blue-400 font-semibold">Onlayn formatda</span>{" "}
                            qo'shilish imkoniyati hali ham bor!
                        </motion.p>

                        {/* "Joylar mavjud" badge */}
                        <motion.div
                            variants={itemVariants}
                            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-blue-500/10 border border-blue-500/30 mb-7"
                        >
                            <CheckCircle2 size={16} className="text-blue-400" strokeWidth={2.5} />
                            <span className="text-blue-300 text-sm font-medium">
                                Onlayn joylar mavjud
                            </span>
                        </motion.div>

                        <motion.p
                            variants={itemVariants}
                            className="text-gray-400 text-sm md:text-base leading-relaxed mb-8 max-w-xl mx-auto"
                        >
                            Barcha 16 ta darsni{" "}
                            <span className="text-white font-semibold">video formatda</span>{" "}
                            kuzating, uy vazifalarini bajaring va yopiq hamjamiyatga qo'shiling
                            — istalgan joydan!
                        </motion.p>

                        {/* CTA Button */}
                        <motion.div variants={itemVariants}>
                            <button className="group/btn relative px-8 py-3.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-medium text-sm shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/50 transition-all duration-300 overflow-hidden">
                                {/* Shimmer effekt */}
                                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700" />

                                <span className="relative flex items-center gap-2">
                                    Onlayn qo'shilish
                                    <ArrowRight
                                        size={16}
                                        className="group-hover/btn:translate-x-1 transition-transform"
                                    />
                                </span>
                            </button>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}