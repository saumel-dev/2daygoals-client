'use client';

import { motion } from 'motion/react';

const fadeUp = {
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const CTASection = () => {
    return (
        <section className="py-24 px-5 flex flex-col items-center justify-center text-center">
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.4 }}
                variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
                className="max-w-3xl flex flex-col items-center"
            >
                {/* Heading */}
                <motion.h2
                    variants={fadeUp}
                    className="text-[#313131] text-[32px] md:text-[42px] font-medium leading-tight"
                >
                    Stay updated on our latest and <br className="hidden md:block" />
                    amazing features by subscribing <br className="hidden md:block" />
                    to our newsletter.
                </motion.h2>

                {/* Subheading */}
                <motion.p
                    variants={fadeUp}
                    className="mt-5 text-[#313131] text-[16px] max-w-lg"
                >
                    If you have any questions youd like to ask, were here to provide answers to all of them
                </motion.p>

                {/* Input & Button Container */}
                <motion.form
                    variants={fadeUp}
                    onSubmit={(e) => e.preventDefault()}
                    // White background with the 7% CACACA applied as a subtle shadow/border combination
                    className="mt-10 flex w-full max-w-[500px] items-center rounded-2xl bg-[#FFFFFF] p-1.5 shadow-[0_8px_30px_rgba(202,202,202,0.07)] ring-1 ring-[#CACACA]/20"
                >
                    <input
                        type="email"
                        placeholder="Enter your email"
                        // Placeholder uses the #5A5A5A from your Figma properties
                        className="flex-1 bg-transparent px-5 py-3 text-[16px] text-[#313131] outline-none placeholder:text-[#5A5A5A]"
                        required
                    />
                    <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        type="submit"
                        className="shrink-0 rounded-xl bg-[#000000] px-8 py-3.5 text-[16px] font-medium text-white transition-colors hover:bg-black/80"
                    >
                        Subscribe
                    </motion.button>
                </motion.form>
            </motion.div>
        </section>
    );
};

export default CTASection;