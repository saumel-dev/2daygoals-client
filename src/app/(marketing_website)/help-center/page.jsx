'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from "motion/react";
import { FaArrowRight } from 'react-icons/fa';
import Link from 'next/link';
import { blogs } from '@/lib/data/blogs';
import BlogCard from '@/Components/Marketing_Website/BlogCard';
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

const helpCards = [
    {
        id: 1,
        icon: "/assets/Marketing/Help_Center/book.svg",
        heading: "Read articles",
        description: "Dive into the details about todaygoals.com features and workflows",
    },
    {
        id: 2,
        icon: "/assets/Marketing/Help_Center/teacher.svg",
        heading: "Learn what's new",
        description: "Explore our latest feature releases and improvements",
    },
    {
        id: 3,
        icon: "/assets/Marketing/Help_Center/video-circle.svg",
        heading: "Watch Video Tutorials",
        description: "Short videos that show you how it's done",
    },
];

const HelpCenter_page = () => {
    // Client hasn't specced actual tab behavior — just tracks which pill is active visually for now
    const [activeTab, setActiveTab] = useState('video');

    return (
        <section className="mt-10 md:mt-20">
            <div className="container mx-auto px-5 mb-25">
                <div className="inline-flex items-center rounded-md bg-[#9FE870] px-2.5 py-0.5">
                    <p className="text-[#163300] text-[14px] font-medium">Help</p>
                </div>

                <motion.h1
                    initial="hidden"
                    animate="show"
                    variants={fadeUp}
                    className="font-helvetica text-[46px] md:text-[80px] font-bolder leading-[1.1] tracking-tight text-[#111] max-w-5xl"
                >
                    We are here to assist you
                </motion.h1>

                <motion.div
                    initial="hidden"
                    animate="show"
                    variants={fadeUp}
                    className="flex flex-col md:flex-row md:items-end justify-between mt-6 md:mt-8 gap-8"
                >
                    <p className="text-[16px] md:text-[18px] max-w-142.5 leading-relaxed text-[#333]">
                        Our product is designed to provide comprehensive support, helping you effortlessly navigate through various tasks, organize your workload efficiently, and enhance collaboration on projects.
                    </p>

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

                {/* Search bar */}
                <motion.div
                    initial="hidden"
                    animate="show"
                    variants={fadeUp}
                    className="mt-10"
                >
                    <div className="flex items-center gap-3 bg-white rounded-xl px-4 py-3.5 max-w-md shadow-sm border border-black/5">
                        <Image
                            src="/assets/Marketing/Help_Center/search.svg"
                            alt="search"
                            width={18}
                            height={18}
                        />
                        <input
                            type="text"
                            placeholder="Search everything..."
                            className="w-full text-[14px] font-normal text-[#6A6A6A] placeholder:text-[#6A6A6A] outline-none bg-transparent"
                        />
                    </div>
                </motion.div>

                {/* Help cards */}
                <motion.div
                    initial="hidden"
                    animate="show"
                    variants={fadeUp}
                    className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8"
                >
                    {helpCards.map((card) => (
                        <div
                            key={card.id}
                            className="relative bg-white rounded-2xl p-6 shadow-sm border border-black/5"
                        >
                            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#F9FAF5]">
                                <Image
                                    src={card.icon}
                                    alt={card.heading}
                                    width={24}
                                    height={24}
                                />
                            </div>

                            <h3 className="font-helvetica text-lg font-bolder text-[#111] mt-5">
                                {card.heading}
                            </h3>

                            <p className="text-[15px] leading-relaxed text-[#313131] mt-2 pr-8">
                                {card.description}
                            </p>

                            <button
                                type="button"
                                aria-label={`Go to ${card.heading}`}
                                className="absolute bottom-6 right-6"
                            >
                                <Image
                                    src="/assets/Marketing/Help_Center/arrow_right.svg"
                                    alt="arrow"
                                    width={18}
                                    height={18}
                                />
                            </button>
                        </div>
                    ))}
                </motion.div>

                {/* Getting started */}
                <motion.div
                    initial="hidden"
                    animate="show"
                    variants={fadeUp}
                    className="mt-20"
                >
                    <h2 className="font-helvetica text-[50px] font-bolder leading-[1.1] text-[#111]">
                        Getting started
                    </h2>
                    <p className="text-[18px] font-normal text-[#313131] mt-3">
                        Everything you need to get out of our Work OS products
                    </p>

                    <div className="flex items-center gap-2 mt-6">
                        <button
                            type="button"
                            onClick={() => setActiveTab('video')}
                            className={`rounded-full px-5 py-2 text-sm font-medium transition ${activeTab === 'video'
                                ? 'bg-black text-white'
                                : 'bg-transparent text-[#111] hover:bg-black/5'
                                }`}
                        >
                            Video
                        </button>
                        <button
                            type="button"
                            onClick={() => setActiveTab('articles')}
                            className={`rounded-full px-5 py-2 text-sm font-medium transition ${activeTab === 'articles'
                                ? 'bg-black text-white'
                                : 'bg-transparent text-[#111] hover:bg-black/5'
                                }`}
                        >
                            Articles
                        </button>
                    </div>
                </motion.div>

                {/* Product preview image */}
                <div
                    className="relative z-10 mx-auto mb-12 mt-10 max-w-5xl sm:mt-16 sm:mb-16"
                >
                    <div className="relative rounded-2xl sm:rounded-3xl bg-linear-to-b from-[#DEE9EE] to-[#F2F6F8] p-3 sm:p-5 md:p-7.5">
                        <div className="overflow-hidden rounded-xl sm:rounded-2xl bg-white shadow-sm">
                            <Image
                                src="/assets/Marketing/Hero/Toolbar.svg"
                                alt=""
                                width={1440}
                                height={48}
                                className="w-full h-auto"
                            />
                            <Image
                                src="/assets/Marketing/Hero/Homepage_Final.svg"
                                alt="2daygoals product preview"
                                width={1440}
                                height={820}
                                className="w-full h-auto"
                            />
                        </div>
                    </div>
                </div>
                <motion.div
                    initial="hidden"
                    animate="show"
                    variants={fadeUp}
                    className="mt-20"
                >
                    <h2 className="font-helvetica text-[50px] font-bolder leading-[1.1] text-[#111]">
                        Popular Blogs
                    </h2>
                    <p className="text-[18px] font-normal text-[#313131] mt-3 max-w-142.5">
                        Learn about the todaygoals.com products and features most loved by our customers
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                        {blogs.slice(0, 3).map((post) => (
                            <BlogCard key={post.slug} post={post} />
                        ))}
                    </div>
                </motion.div>
            </div>
                <MobilePromoSection></MobilePromoSection>
                <CTASection></CTASection>
        </section>
    );
};

export default HelpCenter_page;