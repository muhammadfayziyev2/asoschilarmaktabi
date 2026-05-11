"use client";

import { Button } from "@/components/ui/button";
import { motion, type Variants } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";

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

    return (
        <section id="home" className="relative mt-20 overflow-hidden from-background via-background to-primary/5 px-4 py-20 md:py-32 w-full">
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
                        className="mb-6 text-4xl font-bold tracking-tight md:text-6xl lg:text-8xl"
                    >
                        Founders  
                        <br />
                        <span className="text-blue-500 from-primary to-primary/60 bg-clip-text">
                            school
                        </span>
                    </motion.h1>

                    <motion.p
                        variants={itemVariants}
                        className="mx-auto mb-10 max-w-2xl text-lg text-muted-foreground md:text-xl"
                    >
                        Oʻzbekistondagi eng kuchli startup asoschilari va ekspertlari bilan amaliy darslar. O‘z startupingizni qurish, investitsiya jalb qilish va loyihani rivojlantirishni real tajriba orqali o‘rganing.
                    </motion.p>

                    <motion.div
                        variants={itemVariants}
                        className="flex flex-col items-center justify-center gap-4 sm:flex-row"
                    >
                        <Button className="group gap-2 px-8 py-5 bg-blue-500">
                            Joyingizni band qiling
                            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Button>
                        <a href="#mentors">
                            <Button className="group gap-2 px-8 py-5 bg-blue-500">
                                Spikerlarni ko'rish  ↓
                            </Button>
                        </a>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
