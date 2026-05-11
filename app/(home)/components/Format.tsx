"use client";

import { motion, type Variants } from "framer-motion";
import { Calendar, Target, Check, Quote } from "lucide-react";

const formatItems = [
    {
        text: "Darslarimiz",
        highlight: "haftada bir marta, 3 soatdan",
        rest: "bo'lib o'tadi — chuqur o'rganish uchun optimal yondashuv.",
    },
    {
        text: "Har bir darsdan so'ng",
        highlight: "uy vazifalari",
        rest: "beriladi — bilimlar mustahkamlanadi va amaliyotga tatbiq etiladi.",
    },
    {
        text: "Guruhlar",
        highlight: "plan-fact uslubida",
        rest: "nazorat qilib boriladi — har bir o'quvchining o'sishi kuzatib boriladi.",
    },
];

const audienceItems = [
    {
        text: "Doimiy",
        highlight: "o'z ustingizda ishlashni",
        rest: "va har kuni o'sishni istasangiz.",
    },
    {
        text: "Bilimlaringizni",
        highlight: "yangi bosqichga",
        rest: "olib chiqishga tayyorsiz va o'rganish jarayonidagi qiyinchiliklarga tayyorsiz.",
    },
    {
        text: "O'zbekistonning",
        highlight: "Top mutaxassislaridan",
        rest: "amaliy tajriba va real bilimlarga ega bo'lmoqchisiz.",
    },
];

export default function Format() {
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15, delayChildren: 0.2 },
        },
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 40 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" },
        },
    };

    const cardVariants: Variants = {
        hidden: { opacity: 0, y: 60, scale: 0.96 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: { duration: 0.7, ease: "easeOut" },
        },
    };

    const listItemVariants: Variants = {
        hidden: { opacity: 0, x: -20 },
        visible: (i: number) => ({
            opacity: 1,
            x: 0,
            transition: { duration: 0.5, delay: i * 0.1, ease: "easeOut" },
        }),
    };

    const renderListItem = (
        item: { text: string; highlight: string; rest: string },
        index: number
    ) => (
        <motion.li
            key={index}
            custom={index}
            variants={listItemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            className="flex items-start gap-4 group/item"
        >
            {/* Tick icon */}
            <div className="flex-shrink-0 mt-1 w-7 h-7 rounded-full bg-blue-500/10 border border-blue-500/30 flex items-center justify-center group-hover/item:bg-blue-500/20 group-hover/item:border-blue-400/60 group-hover/item:scale-110 transition-all duration-300">
                <Check size={14} className="text-blue-400" strokeWidth={3} />
            </div>

            {/* Text */}
            <p className="text-gray-300 text-base leading-relaxed">
                {item.text}{" "}
                <span className="text-blue-400 font-semibold">{item.highlight}</span>{" "}
                {item.rest}
            </p>
        </motion.li>
    );

    return (
        <section id="features" className="relative py-24 px-6 overflow-hidden">
            {/* Orqa fonda yumshoq glow */}
            <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-blue-500/5 blur-[150px] rounded-full pointer-events-none" />
            <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-indigo-500/5 blur-[120px] rounded-full pointer-events-none" />

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
                        Format & Auditoriya
                    </motion.p>

                    <motion.h2
                        variants={itemVariants}
                        className="text-4xl md:text-5xl lg:text-6xl font-semibold text-center tracking-tight text-white mb-4 leading-tight"
                    >
                        Darslar qanday o'tadi va bu kurs kim uchun?
                    </motion.h2>

                    <motion.p
                        variants={itemVariants}
                        className="text-gray-400 text-base md:text-lg text-center"
                    >
                        Natijaga yo'naltirilgan format va aniq maqsadli auditoriya.
                    </motion.p>
                </motion.div>

                {/* Ikki karta */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.15 }}
                    className="grid grid-cols-1 lg:grid-cols-2 gap-6"
                >
                    {/* KARTA 1 — Darslar formati */}
                    <motion.div
                        variants={cardVariants}
                        whileHover={{ y: -6, transition: { duration: 0.3 } }}
                        className="group relative p-8 md:p-10 rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-white/[0.01] backdrop-blur-sm hover:border-blue-500/40 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10 overflow-hidden"
                    >
                        {/* Yuqori chiziq (gradient) */}
                        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-400/60 to-transparent" />

                        {/* Hover glow */}
                        <div className="absolute -top-20 -left-20 w-60 h-60 bg-blue-500/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                        <div className="relative z-10">
                            {/* Icon */}
                            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-blue-500/10 border border-blue-500/20 mb-8 group-hover:scale-110 group-hover:bg-blue-500/15 transition-all duration-300">
                                <Calendar size={32} className="text-blue-400" strokeWidth={1.8} />
                            </div>

                            {/* Title */}
                            <h3 className="text-2xl md:text-3xl font-semibold text-white mb-8">
                                Darslar formati
                            </h3>

                            {/* List */}
                            <ul className="space-y-5">
                                {formatItems.map((item, i) => renderListItem(item, i))}
                            </ul>
                        </div>
                    </motion.div>

                    {/* KARTA 2 — Bu kurs siz uchun */}
                    <motion.div
                        variants={cardVariants}
                        whileHover={{ y: -6, transition: { duration: 0.3 } }}
                        className="group relative p-8 md:p-10 rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-white/[0.01] backdrop-blur-sm hover:border-indigo-500/40 transition-all duration-500 hover:shadow-2xl hover:shadow-indigo-500/10 overflow-hidden"
                    >
                        {/* Yuqori chiziq */}
                        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-400/60 to-transparent" />

                        {/* Hover glow */}
                        <div className="absolute -top-20 -right-20 w-60 h-60 bg-indigo-500/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                        <div className="relative z-10">
                            {/* Icon */}
                            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 mb-8 group-hover:scale-110 group-hover:bg-indigo-500/15 transition-all duration-300">
                                <Target size={32} className="text-indigo-400" strokeWidth={1.8} />
                            </div>

                            {/* Title */}
                            <h3 className="text-2xl md:text-3xl font-semibold text-white mb-8">
                                Bu kurs siz uchun, agar...
                            </h3>

                            {/* List */}
                            <ul className="space-y-5 mb-8">
                                {audienceItems.map((item, i) => renderListItem(item, i))}
                            </ul>

                            {/* Quote box */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.6, duration: 0.6 }}
                                className="relative p-5 rounded-xl bg-white/[0.03] border-l-2 border-blue-400/60"
                            >
                                <Quote
                                    size={20}
                                    className="absolute top-3 right-3 text-blue-400/30"
                                />
                                <p className="text-gray-400 text-sm italic leading-relaxed pr-6">
                                    Kurs davomida siz o'rganishning eng ilk qadamlaridan tortib,
                                    muvaffaqiyatli karyera qurishgacha bo'lgan butun yo'lni
                                    bosib o'tasiz.
                                </p>
                            </motion.div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}