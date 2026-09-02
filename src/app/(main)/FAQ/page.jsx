'use client';

import React, { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { motion, AnimatePresence } from 'motion/react';
import Link from 'next/link';
import MobilePromoSection from '@/Components/MobilePromoSection';
import CTASection from '@/Components/CTA';

// --- DATA ---
const faqs = [
    { question: 'Is the app completely free to use?', answer: 'Yes, the app is free to use with ads. Users can enjoy the core features without any cost.' },
    { question: 'What benefits do I get when I purchase a subscription?', answer: 'Replace with the real answer copy.' },
    { question: 'How do I manage my tasks and projects in the app?', answer: 'Replace with the real answer copy.' },
    { question: 'Can I share my tasks or projects with others?', answer: 'Replace with the real answer copy.' },
    { question: 'How secure is my data in the app?', answer: 'Replace with the real answer copy.' },
    { question: 'Are there reminders and notifications to keep me on track?', answer: 'Replace with the real answer copy.' },
    { question: 'Can I use the app across multiple devices?', answer: 'Replace with the real answer copy.' },
    { question: 'How can I upgrade to a subscription and remove ads?', answer: 'Replace with the real answer copy.' },
    { question: 'Is customer support available if I encounter issues?', answer: 'Replace with the real answer copy.' },
];

// --- ANIMATION VARIANTS ---
const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
};

// --- REUSABLE FAQ ITEM COMPONENT ---
const FAQItem = ({ faq, isOpen, onToggle }) => {
    return (
        <motion.div variants={itemVariants}>
            <motion.div
                onClick={onToggle}
                animate={{
                    backgroundColor: isOpen ? '#FFFFFF' : 'rgba(0,0,0,0)',
                    boxShadow: isOpen ? '0 4px 24px rgba(11,11,11,0.08)' : '0 0 0 rgba(0,0,0,0)',
                }}
                transition={{ duration: 0.35, ease: 'easeInOut' }}
                className="rounded-2xl cursor-pointer overflow-hidden"
            >
                <div className="flex items-center justify-between gap-6 px-6 py-5">
                    <motion.h3
                        animate={{ fontSize: isOpen ? 24 : 18 }}
                        transition={{ duration: 0.3 }}
                        className="text-[#0B0B0B]"
                    >
                        {faq.question}
                    </motion.h3>

                    <div className="relative w-4 h-4 shrink-0">
                        <span className="absolute top-1/2 left-0 -translate-y-1/2 w-4 h-0.5 bg-[#0B0B0B]" />
                        <motion.span
                            animate={{ rotate: isOpen ? 0 : 90 }}
                            transition={{ duration: 0.3, ease: 'easeInOut' }}
                            className="absolute top-1/2 left-0 -translate-y-1/2 w-4 h-0.5 bg-[#0B0B0B]"
                        />
                    </div>
                </div>

                <AnimatePresence initial={false}>
                    {isOpen && (
                        <motion.div
                            key="answer"
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.35, ease: 'easeInOut' }}
                        >
                            <p className="font-normal text-[20px] text-[#6A6A6A] px-6 pb-6">
                                {faq.answer}
                            </p>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>
        </motion.div>
    );
};

// --- MAIN PAGE COMPONENT ---
const MoreFAQSection = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const handleToggle = (index) => {
        setOpenIndex((current) => (current === index ? null : index));
    };

    return (
        <section className="mt-10 md:mt-20 pb-24">
            <div className="container mx-auto px-5">

                {/* Heading */}
                <motion.h1
                    initial="hidden"
                    animate="show"
                    variants={fadeUp}
                    className="font-helvetica text-[46px] md:text-[80px] font-bolder leading-[1.1] tracking-tight text-[#111] max-w-2xl"
                >
                    Frequently Asked Questions
                </motion.h1>

                {/* Paragraph and Register Button */}
                <motion.div
                    initial="hidden"
                    animate="show"
                    variants={fadeUp}
                    className="flex flex-col md:flex-row md:items-end justify-between mt-6 md:mt-8 gap-8"
                >
                    <p className="text-[16px] md:text-[18px] max-w-[570px] leading-relaxed text-[#333]">
                        Yet bed any for assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment.
                    </p>

                    <div className="shrink-0">
                        <Link href="/register" className="group inline-flex">
                            <motion.span
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.97 }}
                                transition={{ type: "spring", stiffness: 400, damping: 20 }}
                                className="inline-flex items-center gap-3 rounded-[14px] bg-black p-1.5 pr-5 shadow-lg"
                            >
                                <motion.span className="flex h-9 w-12 items-center justify-center rounded-xl bg-linear-to-r from-[#73FDB2] to-[#6EFF00]">
                                    <FaArrowRight className="h-4 w-4 text-black" />
                                </motion.span>
                                <span className="text-sm font-medium text-white pb-0.5">
                                    Register - its Free
                                </span>
                            </motion.span>
                        </Link>
                    </div>
                </motion.div>

                {/* FAQ Accordion List (Imported from Homepage) */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    variants={{ visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } } }}
                    className="mt-12 md:mt-16 flex flex-col gap-4"
                >
                    {faqs.map((faq, index) => (
                        <FAQItem
                            key={faq.question}
                            faq={faq}
                            isOpen={openIndex === index}
                            onToggle={() => handleToggle(index)}
                        />
                    ))}
                </motion.div>

            </div>
            <MobilePromoSection></MobilePromoSection>
            <CTASection></CTASection>
        </section>
    );
};

export default MoreFAQSection;