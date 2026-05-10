"use client";

import { motion, type Variants } from "framer-motion";
import { Compass, GraduationCap, Users } from "lucide-react";

const features = [
    {
        icon: Compass,
        title: "Maqsadingizni aniqlang",
        description:
            "Hayotda o'z yo'lingizni topishda ikkilanayotgan bo'lsangiz — biz sizga aniq qadam-baqadam xarita beramiz.",
        gradient: "from-blue-500/20 to-cyan-500/10",
        iconColor: "text-blue-400",
        borderGlow: "group-hover:border-blue-500/40",
        shadowGlow: "group-hover:shadow-blue-500/20",
    },
    {
        icon: GraduationCap,
        title: "Amaliyotchilardan o'rganing",
        description:
            "Quruq nazariya emas — real hayotda muvaffaqiyatga erishgan ustozlardan bilim oling.",
        gradient: "from-indigo-500/20 to-blue-500/10",
        iconColor: "text-indigo-400",
        borderGlow: "group-hover:border-indigo-500/40",
        shadowGlow: "group-hover:shadow-indigo-500/20",
    },
    {
        icon: Users,
        title: "Kuchli netvorking",
        description:
            "O'zingiz kabi intiluvchan yoshlar va O'zbekistonning eng ilg'or insonlari bilan aloqa o'rnating.",
        gradient: "from-purple-500/20 to-blue-500/10",
        iconColor: "text-purple-400",
        borderGlow: "group-hover:border-purple-500/40",
        shadowGlow: "group-hover:shadow-purple-500/20",
    },
];

export default function WhyUs() {
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2,
            },
        },
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.7, ease: "easeOut" },
        },
    };

    const cardVariants: Variants = {
        hidden: { opacity: 0, y: 60, scale: 0.95 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: { duration: 0.6, ease: "easeOut" },
        },
    };

    return (
        <section className="relative py-24 px-6 overflow-hidden">
            {/* Orqa fonda yumshoq ko'k glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="relative max-w-7xl mx-auto">
                {/* Sarlavha qismi */}
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
                        Nima uchun aynan biz?
                    </motion.p>

                    <motion.h2
                        variants={itemVariants}
                        className="text-4xl text-center font-semibold tracking-tight text-white mb-4"
                    >
                        Bu loyiha aynan siz uchun
                    </motion.h2>

                    <motion.p
                        variants={itemVariants}
                        className="text-gray-400 text-base md:text-lg text-center"
                    >
                        Ko'pchilik yoshlar bilim olishni xohlaydi, lekin qayerdan
                        boshlashni bilmaydi.
                    </motion.p>
                </motion.div>

                {/* Kartalar */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-6"
                >
                    {features.map((feature, index) => {
                        const Icon = feature.icon;
                        return (
                            <motion.div
                                key={index}
                                variants={cardVariants}
                                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                                className={`group relative p-8 rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm transition-all duration-500 hover:bg-white/[0.04] ${feature.borderGlow} hover:shadow-2xl ${feature.shadowGlow} cursor-pointer overflow-hidden`}
                            >
                                {/* Hover'da chiqadigan gradient overlay */}
                                <div
                                    className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none`}
                                />

                                {/* Yuqori-o'ng burchakda yorqin nuqta (hover'da) */}
                                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                                <div className="relative z-10">
                                    {/* Icon */}
                                    <div
                                        className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-white/5 border border-white/10 mb-6 ${feature.iconColor} group-hover:scale-110 group-hover:bg-white/10 transition-all duration-300`}
                                    >
                                        <Icon size={28} strokeWidth={1.8} />
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-white transition-colors">
                                        {feature.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
                                        {feature.description}
                                    </p>
                                </div>

                                {/* Pastki chiziqcha (hover'da chiqadi) */}
                                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent group-hover:w-full transition-all duration-500" />
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
}