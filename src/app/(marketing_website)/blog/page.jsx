'use client'
import React, { useState } from 'react';
import { motion } from "motion/react";
import { FaArrowRight } from 'react-icons/fa';
import Link from 'next/link';
import { blogs } from '@/lib/data/blogs';
import FeaturedBlogCard from '@/Components/Marketing_Website/FeaturedBlogCard';
import BlogCard from '@/Components/Marketing_Website/BlogCard';

const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
};

const filterTabs = ["All", "Payment", "Security", "Messaging", "Supports"];

const Blog_page = () => {
    const [activeFilter, setActiveFilter] = useState("All");

    return (
        <section className="mt-10 md:mt-20">
            <div className="container mx-auto px-5 mb-25">
                <div className="inline-flex items-center rounded-md bg-[#9FE870] px-2.5 py-0.5">
                    <p className="text-[#163300] text-[14px] font-medium">Blog</p>
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

                {/* Filter tabs */}
                <motion.div
                    initial="hidden"
                    animate="show"
                    variants={fadeUp}
                    className="flex flex-wrap items-center gap-3 mt-10"
                >
                    {filterTabs.map((tab) => (
                        <button
                            key={tab}
                            type="button"
                            onClick={() => setActiveFilter(tab)}
                            className={`rounded-full px-5 py-2 text-sm font-medium transition ${activeFilter === tab
                                    ? 'bg-white text-[#111] shadow-sm'
                                    : 'bg-[#F1F1F1] text-[#111] hover:bg-[#e8e8e8]'
                                }`}
                        >
                            {tab}
                        </button>
                    ))}
                </motion.div>

                {/* Popular Blogs */}
                <motion.div
                    initial="hidden"
                    animate="show"
                    variants={fadeUp}
                    className="mt-16 md:mt-20"
                >
                    <h2 className="font-helvetica text-[50px] font-bolder leading-[1.1] text-[#111]">
                        Popular Blogs
                    </h2>
                    <p className="text-[18px] font-normal text-[#313131] mt-3 max-w-142.5">
                        Learn about the todaygoals.com products and features most loved by our customers
                    </p>
                </motion.div>

                <motion.div
                    initial="hidden"
                    animate="show"
                    variants={fadeUp}
                    className="mt-8"
                >
                    <FeaturedBlogCard post={blogs[0]} />
                </motion.div>

                <motion.div
                    initial="hidden"
                    animate="show"
                    variants={fadeUp}
                    className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8"
                >
                    {blogs.slice(1, 4).map((post) => (
                        <BlogCard key={post.slug} post={post} />
                    ))}
                </motion.div>
                {/* Recent Blogs */}
                <motion.div
                    initial="hidden"
                    animate="show"
                    variants={fadeUp}
                    className="mt-16 md:mt-20"
                >
                    <h2 className="font-helvetica text-[50px] font-bolder leading-[1.1] text-[#111]">
                        Recent Blogs
                    </h2>
                    <p className="text-[18px] font-normal text-[#313131] mt-3 max-w-142.5">
                        Learn about the todaygoals.com products and features most loved by our customers
                    </p>
                </motion.div>

                <motion.div
                    initial="hidden"
                    animate="show"
                    variants={fadeUp}
                    className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8"
                >
                    {blogs.slice(0, 6).map((post) => (
                        <BlogCard key={post.slug} post={post} />
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Blog_page;