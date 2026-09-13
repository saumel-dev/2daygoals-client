'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'motion/react';
import { FaArrowRight } from 'react-icons/fa';

// Same fade-up pattern used across Pricing_Section and FAQ_Section, kept
// consistent so the whole site's scroll-in feel matches.
const fadeUp = {
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const imageVariants = {
    hidden: { opacity: 0, x: 40 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const MobilePromoSection = () => {
    return (
        // Changed `py-24` to `pt-24` so there is zero padding at the bottom. 
        // Added `overflow-hidden` to prevent any layout breaks on mobile.
        <section className="bg-[#DEE9EE] pt-24 px-5 md:px-24 overflow-hidden">

            {/* Added max-w-5xl and mx-auto to bound the elements closer together. Reduced gap-16 to gap-8 */}
            <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-8 md:flex-row md:items-end md:gap-8 lg:gap-16">

                {/* Left column — Text Content */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.4 }}
                    variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
                    // Added bottom padding here (pb-12 md:pb-24) to keep text lifted, 
                    // while `items-end` on the parent lets the image sink to the bottom.
                    // Changed max-w-lg to max-w-md to shrink empty space.
                    className="pb-12 md:pb-24 w-full"
                >
                    <motion.h2
                        variants={fadeUp}
                        className="font-helvetica font-medium text-[40px] md:text-[50px] leading-tight text-[#0B0B0B]"
                    >
                        Are you ready to use this Application?
                    </motion.h2>

                    <motion.p variants={fadeUp} className="mt-4 text-[20px] md:text-[24px] text-black/64 md:w-150">
                        Currently we are not building, app comming soon. Now, you can use Chrome sortcut
                    </motion.p>

                    {/* Register button */}
                    <motion.div variants={fadeUp} className="shrink-0 mt-6">
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

                    {/* Store badges */}
                    <motion.div variants={fadeUp} className="mt-6 flex items-center gap-4">
                        <Link href="#">
                            <Image
                                src="/assets/MobilePromo/app_store.svg"
                                alt="Download on the App Store"
                                width={135}
                                height={40}
                            />
                        </Link>
                        <Link href="#">
                            <Image
                                src="/assets/MobilePromo/google_play.svg"
                                alt="Get it on Google Play"
                                width={135}
                                height={40}
                            />
                        </Link>
                    </motion.div>
                </motion.div>

                {/* Right column — Phone image */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={imageVariants}
                    // shrink-0 prevents it from squishing, keeping its proportions intact
                    className="w-full max-w-sm md:max-w-md lg:max-w-lg shrink-0 flex justify-center"
                >
                    <Image
                        src="/assets/MobilePromo/smartphone_holding.svg"
                        alt="Hand holding a smartphone showing the app"
                        width={520}
                        height={430}
                        // Added `block` to remove any inherent inline bottom margins on images
                        className="w-full h-auto block"
                    />
                </motion.div>
            </div>
        </section>
    );
};

export default MobilePromoSection;