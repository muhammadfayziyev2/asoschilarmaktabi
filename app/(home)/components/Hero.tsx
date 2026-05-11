"use client";

import { Button } from "@/components/ui/button";
import { motion, type Variants } from "framer-motion";
import { ArrowRight, Globe } from "lucide-react";

export function Hero() {
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3,
            },
        },
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" },
        },
    };

    const stats = [
        { value: "16", label: "Amaliy darslar" },
        { value: "20+", label: "Ekspert spikerlar" },
        { value: "online", label: "Onlayn — mavjud!", icon: Globe },
    ];

    return (
        <section id="home" className="relative -mt-15 overflow-hidden from-background via-background to-primary/5 px-4 py-20 md:py-32 w-full">
            <div className="mx-auto max-w-7xl">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="relative z-10 text-center"
                >
                    <motion.div variants={itemVariants} className="mb-6">
                        <div className="animate-fade-up delay-100 inline-flex items-center gap-3 bg-black/50 backdrop-blur border border-white/10 rounded-full pl-1 pr-4 py-1 mb-8">
                            <span className="text-gray-200 text-sm">Go'yangizni real startupga aylantiring</span>
                            <span className="bg-blue-600 rounded-full p-1.5">
                                <ArrowRight size={14} className="text-white" />
                            </span>
                        </div>
                    </motion.div>

                    <motion.h1
                        variants={itemVariants}
                        className="mb-6 text-6xl font-bold tracking-tight md:text-6xl lg:text-8xl"
                    >
                        Founders
                        <br />
                        <span className="text-blue-500 from-primary to-primary/60 bg-clip-text">
                            School
                        </span>
                    </motion.h1>

                    <motion.p
                        variants={itemVariants}
                        className="mx-auto mb-10 max-w-2xl text-lg text-muted-foreground md:text-xl"
                    >
                        Oʻzbekistondagi eng kuchli startup asoschilari va ekspertlari bilan amaliy darslar. O'z startupingizni qurish, investitsiya jalb qilish va loyihani rivojlantirishni real tajriba orqali o'rganing.
                    </motion.p>

                    <motion.div
                        variants={itemVariants}
                        className="flex flex-col items-center justify-center gap-4 sm:flex-row mb-20"
                    >
                        <Button className="group gap-2 px-8 py-5 bg-blue-500">
                            Joyingizni band qiling
                            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Button>
                        <a href="#mentors">
                            <Button className="group gap-2 px-8 py-5 bg-[#05070d] border border-gray-800">
                                Spikerlarni ko'rish ↓
                            </Button>
                        </a>
                    </motion.div>

                    {/* 📊 Statistika qatori */}
                    <motion.div
                        variants={itemVariants}
                        className="flex flex-wrap items-center justify-center gap-x-16 gap-y-8 md:gap-x-24 pt-5"
                    >
                        {stats.map((stat, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 1.2 + i * 0.15, duration: 0.6 }}
                                whileHover={{ y: -4, transition: { duration: 0.3 } }}
                                className="group flex flex-col items-center cursor-default"
                            >
                                {/* Raqam yoki Icon */}
                                <div className="mb-2 h-12 flex items-center justify-center">
                                    {stat.icon ? (
                                        <div className="relative">
                                            {/* Pulsiruvchi halqa */}
                                            <span className="absolute inset-0 rounded-full bg-blue-500/20 animate-ping" />
                                            <div className="relative w-10 h-10 rounded-full bg-blue-500/15 border border-blue-500/30 flex items-center justify-center group-hover:bg-blue-500/25 group-hover:scale-110 transition-all duration-300">
                                                <stat.icon size={20} className="text-blue-400" strokeWidth={2} />
                                            </div>
                                        </div>
                                    ) : (
                                        <span className="text-4xl md:text-5xl font-bold bg-gradient-to-b from-white to-blue-300 bg-clip-text text-transparent group-hover:from-blue-300 group-hover:to-blue-500 transition-all duration-500">
                                            {stat.value}
                                        </span>
                                    )}
                                </div>

                                {/* Label */}
                                <p className="text-gray-400 text-xs md:text-sm tracking-[0.15em] uppercase group-hover:text-gray-200 transition-colors">
                                    {stat.label}
                                </p>

                                {/* Pastdagi chiziqcha (hover'da chiqadi) */}
                                <div className="mt-2 h-px w-0 bg-gradient-to-r from-transparent via-blue-400 to-transparent group-hover:w-full transition-all duration-500" />
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}