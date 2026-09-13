'use client'
import React from 'react';
import { motion } from "motion/react";
import { FaArrowRight } from 'react-icons/fa';
import Link from 'next/link';
import Pricing_Section from '@/Components/Marketing_Website/Pricing_Section';
import MobilePromoSection from '@/Components/Marketing_Website/MobilePromoSection';
import CTASection from '@/Components/Marketing_Website/CTA';
const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
};
const Pricing_page = () => {
    return (
        <section className="mt-10 md:mt-20">
            <div className="container mx-auto px-5 mb-25">
                <div className="inline-flex items-center rounded-md bg-[#9FE870] px-2.5 py-0.5">
                    <p className="text-[#163300] text-[14px] font-medium">Subscriptions</p>
                </div>
                <motion.h1
                    initial="hidden"
                    animate="show"
                    variants={fadeUp}
                    className="font-helvetica text-[46px] md:text-[80px] font-bolder leading-[1.1] tracking-tight text-[#111] max-w-5xl"
                >
                    Check out our pricing plans for both monthly and yearly subscriptions
                </motion.h1>
                <motion.div
                    initial="hidden"
                    animate="show"
                    variants={fadeUp}
                    className="flex flex-col md:flex-row md:items-end justify-between mt-6 md:mt-8 gap-8"
                >
                    {/* Paragraph: Left aligned, restricted width matching your screenshot (545px) */}
                    <p className="text-[16px] md:text-[18px] max-w-[570px] leading-relaxed text-[#333]">
                        Get work done the fastest way possible – manage tasks, write notes, organize projects, and share whatever you want with this powerful productivity tool!
                    </p>

                    {/* Button: Pushed to the right on desktop, kept left on mobile */}
                    <div className="shrink-0">
                        <Link href="/register" className="group inline-flex">
                            <motion.span
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.97 }}
                                transition={{ type: "spring", stiffness: 400, damping: 20 }}
                                className="inline-flex items-center gap-3 rounded-[14px] bg-black p-1.5 pr-5 shadow-lg"
                            >
                                <motion.span
                                    className="flex h-9 w-12 items-center justify-center rounded-xl bg-linear-to-r from-[#73FDB2] to-[#6EFF00]"
                                >
                                    <FaArrowRight className="h-4 w-4 text-black" />
                                </motion.span>
                                <span className="text-sm font-medium text-white pb-0.5">
                                    Register - Its Free
                                </span>
                            </motion.span>
                        </Link>
                    </div>
                </motion.div>
            </div>
            <Pricing_Section></Pricing_Section>
            <MobilePromoSection></MobilePromoSection>
            <CTASection></CTASection>
        </section>
    );
};

export default Pricing_page;