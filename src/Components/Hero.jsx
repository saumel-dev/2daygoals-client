"use client";

import Link from "next/link";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "motion/react";

const container = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.12,
        },
    },
};

const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
};

const Hero = () => {
    return (
        <section className="relative container mx-auto px-4 sm:px-6">
            {/* Headline + subtext (left) and CTA (right) */}
            <motion.div
                variants={container}
                initial="hidden"
                animate="show"
                className="relative z-10 mx-auto flex w-full flex-col items-start justify-between gap-8 pt-16 sm:pt-24 md:flex-row md:items-center"
            >
                {/* Replaced fixed width w-212.5 with responsive width constraints */}
                <div className="w-full max-w-2xl">
                    <motion.h1
                        variants={fadeUp}
                        className="w-full text-[28px] leading-[1.15] tracking-tight text-[#111827] min-[390px]:text-3xl min-[440px]:text-4xl sm:text-5xl md:text-6xl lg:text-[80px] font-helvetica"
                    >
                        <span className="block whitespace-nowrap">Take control of your</span>
                        <span className="block whitespace-nowrap">day in minutes</span>
                    </motion.h1>
                    <motion.p
                        variants={fadeUp}
                        className="mt-4 max-w-lg text-base text-gray-600 sm:text-lg"
                    >
                        Get work done the fastest way possible - manage tasks, write notes,
                        organize projects, and share whatever you want with this powerful
                        productivity tool!
                    </motion.p>
                </div>

                {/* Two-part CTA */}
                <motion.div variants={fadeUp} className="shrink-0">
                    <Link href="/register" className="group inline-flex">
                        <motion.span
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                            transition={{ type: "spring", stiffness: 400, damping: 20 }}
                            className="inline-flex items-center gap-3 rounded-2xl bg-black p-1.5 pr-4 shadow-lg"
                        >
                            <motion.span
                                className="flex h-8 w-12 items-center justify-center rounded-xl bg-linear-to-r from-[#73FDB2] to-[#6EFF00]"
                            >
                                <FaArrowRight className="h-4 w-5 text-black" />
                            </motion.span>
                            <span className="text-sm font-medium text-white">
                                Register - its Free
                            </span>
                        </motion.span>
                    </Link>
                </motion.div>
            </motion.div>

            {/* Product preview (Removed duplicate inner div container) */}
            <motion.div
                initial={{ opacity: 0, y: 40, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="relative z-10 mx-auto mb-12 mt-10 max-w-5xl sm:mt-16 sm:mb-16"
            >
                <div className="relative rounded-2xl sm:rounded-3xl bg-linear-to-b from-[#DEE9EE] to-[#F2F6F8] p-3 sm:p-5 md:p-7.5 shadow-[0_45px_60px_-15px_rgba(0,0,0,0.12)] ring-1 ring-white/80 filter drop-shadow-[0_20px_20px_rgba(200,220,230,0.6)]">
                    <div className="overflow-hidden rounded-xl sm:rounded-2xl bg-white shadow-sm">
                        <Image
                            src="/assets/Toolbar.svg"
                            alt=""
                            width={1440}
                            height={48}
                            className="w-full h-auto"
                        />
                        <Image
                            src="/assets/Homepage_Final.svg"
                            alt="2daygoals product preview"
                            width={1440}
                            height={820}
                            className="w-full h-auto"
                        />
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;