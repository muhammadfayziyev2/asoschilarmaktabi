"use client";

import { motion, type Variants } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";

const features = [
    "16 ta dars video formatda",
    "Elektron konspektlar",
    "Yopiq hamjamiyat",
    "Uy vazifalari (tekshiriladi)",
    "Istalgan vaqtda qayta ko'rish",
    "Sertifikat",
];

export default function Pricing() {
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

    return (
        <section className="relative py-20 px-6 overflow-hidden">
            {/* Yumshoq orqa fon */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="relative max-w-5xl mx-auto">
                {/* Sarlavha */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    className="mb-12 text-center"
                >
                    <motion.p
                        variants={itemVariants}
                        className="text-blue-400 text-xs font-medium tracking-[0.2em] uppercase mb-3"
                    >
                        Sarmoya paketlari
                    </motion.p>

                    <motion.h2
                        variants={itemVariants}
                        className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-3"
                    >
                        O'zingizga mos formatni tanlang
                    </motion.h2>

                    <motion.p
                        variants={itemVariants}
                        className="text-gray-400 text-sm md:text-base"
                    >
                        O'z kelajagingiz uchun qilingan sarmoya — eng yaxshi sarmoyadir.
                    </motion.p>
                </motion.div>

                {/* Pricing Card */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    whileHover={{ y: -4, transition: { duration: 0.3 } }}
                    className="group relative max-w-md mx-auto p-8 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm hover:border-blue-500/40 hover:bg-white/[0.05] transition-all duration-300"
                >
                    {/* "Hozir ham mavjud" badge */}
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-600 shadow-md shadow-blue-500/30">
                            <span className="relative flex h-1.5 w-1.5">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-white"></span>
                            </span>
                            <span className="text-white text-xs font-medium">Mavjud</span>
                        </div>
                    </div>

                    {/* Format nomi */}
                    <div className="text-center mb-6 mt-2">
                        <h3 className="text-xl font-semibold text-white mb-1">
                            Onlayn Format
                        </h3>
                        <p className="text-gray-500 text-xs">
                            Istalgan joydan kuzating
                        </p>
                    </div>

                    {/* Narx */}
                    <div className="text-center mb-6">
                        <div className="flex items-baseline justify-center gap-1.5">
                            <span className="text-4xl font-bold text-white">
                                2 500 000
                            </span>
                            <span className="text-gray-500 text-sm">so'm</span>
                        </div>
                    </div>

                    {/* Ajratuvchi */}
                    <div className="h-px bg-white/10 mb-6" />

                    {/* Features */}
                    <ul className="space-y-2.5 mb-7">
                        {features.map((feature, i) => (
                            <motion.li
                                key={i}
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 + i * 0.06, duration: 0.4 }}
                                className="flex items-center gap-2.5"
                            >
                                <Check size={14} className="text-blue-400 flex-shrink-0" strokeWidth={2.5} />
                                <span className="text-gray-300 text-sm">{feature}</span>
                            </motion.li>
                        ))}
                    </ul>

                    {/* CTA Button */}
                    <button className="group/btn relative w-full py-3 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-medium text-sm shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/40 transition-all duration-300 overflow-hidden">
                        <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700" />
                        <span className="relative flex items-center justify-center gap-1.5">
                            Hoziroq qo'shiling
                            <ArrowRight size={14} className="group-hover/btn:translate-x-0.5 transition-transform" />
                        </span>
                    </button>
                </motion.div>
            </div>
        </section>
    );
}