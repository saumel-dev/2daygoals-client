'use client'
import { motion } from "motion/react";
import Image from "next/image";
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';

const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
};

const Product_Page = () => {
    return (
        <section className=" px-5 mt-10 md:mt-20">
            <div className="container mx-auto">

                {/* Heading: Large on desktop (80px), scaled down for mobile */}
                <motion.h1
                    initial="hidden"
                    animate="show"
                    variants={fadeUp}
                    className="font-helvetica text-[46px] md:text-[80px] font-bolder leading-[1.1] tracking-tight text-[#111]"
                >
                    Our Product <br className="hidden md:block" />
                    Help you with
                </motion.h1>

                {/* Bottom Section: Stacked on mobile (flex-col), side-by-side on desktop (md:flex-row) */}
                <motion.div
                    initial="hidden"
                    animate="show"
                    variants={fadeUp}
                    className="flex flex-col md:flex-row md:items-end justify-between mt-6 md:mt-8 gap-8"
                >
                    {/* Paragraph: Left aligned, restricted width matching your screenshot (545px) */}
                    <p className="text-[16px] md:text-[18px] max-w-[570px] leading-relaxed text-[#333]">
                        Our product is designed to provide comprehensive support, helping you effortlessly navigate through various tasks, organize your workload efficiently, and enhance collaboration on projects.
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
                                    Register - its Free
                                </span>
                            </motion.span>
                        </Link>
                    </div>
                </motion.div>

            </div>
            <div className="container mx-auto mt-10 md:mt-20">
                <h1 className="text-5xl sm:text-4xl font-medium font-helvetica">
                    Share your Problem
                </h1>
                <p className="text-xl text-[#313131] mt-4">Open up and share your challenges for collaborative solutions and support.</p>
                <div
                    className="relative z-10 mx-auto mb-12 mt-10 max-w-5xl sm:mt-16 sm:mb-16"
                >
                    <div className="relative rounded-2xl sm:rounded-3xl bg-linear-to-b from-[#DEE9EE] to-[#F2F6F8] p-3 sm:p-5 md:p-7.5">
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
                </div>
            </div>
            <div className="container mx-auto mt-10 md:mt-20">
                <h1 className="text-5xl sm:text-4xl font-medium font-helvetica">
                    Manage your Task
                </h1>
                <p className="text-xl text-[#313131] mt-4">Efficiently organize and oversee your tasks for enhanced productivity and goal achievement.</p>
                <div
                    className="relative z-10 mx-auto mb-12 mt-10 max-w-5xl sm:mt-16 sm:mb-16"
                >
                    <div className="relative rounded-2xl sm:rounded-3xl bg-linear-to-b from-[#DEE9EE] to-[#F2F6F8] p-3 sm:p-5 md:p-7.5">
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
                </div>
            </div>
            <div className="container mx-auto mt-10 md:mt-20">
                <h1 className="text-5xl sm:text-4xl font-medium font-helvetica">
                    Chats On Friends
                </h1>
                <p className="text-xl text-[#313131] mt-4">Engage in lively conversations and build connections with friends through delightful chats.</p>
                <div
                    className="relative z-10 mx-auto mb-12 mt-10 max-w-5xl sm:mt-16 sm:mb-16"
                >
                    <div className="relative rounded-2xl sm:rounded-3xl bg-linear-to-b from-[#DEE9EE] to-[#F2F6F8] p-3 sm:p-5 md:p-7.5">
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
                </div>
            </div>
            <div className="container mx-auto mt-10 md:mt-20">
                <h1 className="text-5xl sm:text-4xl font-medium font-helvetica">
                    Note On Calendar
                </h1>
                <p className="text-xl text-[#313131] mt-4">Mark important dates and events with precision on your calendar for effective time management.</p>
                <div
                    className="relative z-10 mx-auto mb-12 mt-10 max-w-5xl sm:mt-16 sm:mb-16"
                >
                    <div className="relative rounded-2xl sm:rounded-3xl bg-linear-to-b from-[#DEE9EE] to-[#F2F6F8] p-3 sm:p-5 md:p-7.5">
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
                </div>
            </div>
        </section>
    );
};

export default Product_Page;