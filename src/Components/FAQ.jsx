'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const faqs = [
    {
        question: 'Is the app completely free to use?',
        answer: 'Yes, the app is free to use with ads. Users can enjoy the core features without any cost.',
    },
    { question: 'What benefits do I get when I purchase a subscription?', answer: 'Replace with the real answer copy.' },
    { question: 'How do I manage my tasks and projects in the app?', answer: 'Replace with the real answer copy.' },
    { question: 'Can I share my tasks or projects with others?', answer: 'Replace with the real answer copy.' },
    { question: 'How secure is my data in the app?', answer: 'Replace with the real answer copy.' },
    { question: 'Are there reminders and notifications to keep me on track?', answer: 'Replace with the real answer copy.' },
    { question: 'Can I use the app across multiple devices?', answer: 'Replace with the real answer copy.' },
    { question: 'How can I upgrade to a subscription and remove ads?', answer: 'Replace with the real answer copy.' },
    { question: 'Is customer support available if I encounter issues?', answer: 'Replace with the real answer copy.' },
];

// Heading/description entrance — same fade-up pattern used in Pricing_Section
// so the whole site's scroll-in feel stays consistent.
const fadeUp = {
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

// Each question fades/slides in once, when the list first scrolls into view.
const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
};

const FAQItem = ({ faq, isOpen, onToggle }) => {
    return (
        // Outer wrapper: ONLY handles the one-time scroll entrance (inherits
        // hidden/visible from the list below). It deliberately has no other
        // animate prop, or it would stop listening to that inherited state.
        <motion.div variants={itemVariants}>
            {/* Inner wrapper: handles the repeatable open/close background
                flip — transparent when closed, white card when open — driven
                by isOpen, independent of the entrance animation above */}
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

                    {/* plus/minus icon — same two bars the whole time; the
                        "vertical" one just rotates flat to become the minus */}
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

const FAQ_Section = () => {
    // null = nothing open. Setting a new index automatically "closes" whatever
    // was open before, since only one index can ever be stored at a time —
    // that single piece of state IS the accordion behavior from point 4.
    const [openIndex, setOpenIndex] = useState(null);

    const handleToggle = (index) => {
        setOpenIndex((current) => (current === index ? null : index));
    };

    return (
        // No background here on purpose — the body's gradient (see globals.css)
        // shows straight through since nothing is painted over it.
        <section className="container mx-auto py-24 px-5">
            <div className="">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
                >
                    <motion.h2 variants={fadeUp} className="font-helvetica text-[50px] text-[#0B0B0B]">
                        Frequently Asked Questions
                    </motion.h2>
                    <motion.p variants={fadeUp} className="mt-4 text-[18px] text-[#313131]">
                        Yet bed any for assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment.
                    </motion.p>
                </motion.div>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    variants={{ visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } } }}
                    className="mt-10 flex flex-col gap-4"
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
        </section>
    );
};

export default FAQ_Section;