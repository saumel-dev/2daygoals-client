"use client";

import React from 'react';
import Image from 'next/image';
import { Button } from '@heroui/react';
import { motion } from 'motion/react';

const sectionVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const TermsOfServicePage = () => {
    return (
        <div className="container mx-auto px-4 py-16 max-w-7xl">
            {/* HERO SECTION */}
            <motion.header
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className="mb-16"
            >
                {/* Help Badge */}
                <motion.span
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.15 }}
                    className="inline-block px-10 py-1 bg-[#9FE870] text-black text-sm rounded-md mb-6"
                >
                    Help
                </motion.span>

                {/* Title & Top Text */}
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
                    <motion.div
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="max-w-2xl"
                    >
                        <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-black">
                            Privacy Policy
                        </h1>
                        <p className="mt-4 text-base md:text-lg text-gray-700 leading-relaxed">
                            Welcome to 2daygoals—a space where your ideas, goals, and tasks live safely. This page isn’t filled with heavy legal words—just a clear, honest explanation of how we handle your data.
                        </p>
                    </motion.div>

                    {/* HeroUI Button */}
                    <motion.div
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.25 }}
                        whileHover={{ scale: 1.04 }}
                        whileTap={{ scale: 0.97 }}
                        className="shrink-0 self-start md:self-auto"
                    >
                        <Button className="bg-black text-white rounded-full pl-2 pr-6 py-6 flex items-center gap-3 hover:opacity-90 transition-opacity cursor-pointer">
                            <span className="w-8 h-8 bg-[#9FE870] rounded-full flex items-center justify-center text-black">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </span>
                            <span className="font-medium text-sm">Register - its Free</span>
                        </Button>
                    </motion.div>
                </div>
            </motion.header>

            {/* DETAILS SECTION */}
            <main className="grid grid-cols-1 lg:grid-cols-12 gap-30">
                {/* Left Column: Date & Image */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    className="lg:col-span-4 flex flex-col items-start gap-6 self-start"
                >
                    <p className="text-sm text-gray-700 font-medium">
                        Last updated: 08/27/2026
                    </p>
                    <motion.div
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.3 }}
                        className="relative w-full overflow-hidden rounded-2xl shadow-sm"
                    >
                        <Image
                            src="/assets/privacy_policy.png"
                            alt="Privacy Policy Visual"
                            width={500}
                            height={350}
                            className="w-full h-auto object-cover rounded-2xl"
                            priority
                        />
                    </motion.div>
                </motion.div>

                {/* Right Column: Policy Content */}
                <div className="lg:col-span-8 flex flex-col gap-15">
                    {/* Section 1 */}
                    <motion.div
                        variants={sectionVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        className="space-y-3"
                    >
                        <h2 className="text-2xl font-semibold tracking-tight text-black">
                            What We Collect (and Why)
                        </h2>
                        <p className="font-semibold text-gray-900">We like to keep things simple.</p>
                        <p className="text-sm leading-relaxed text-gray-600">
                            We only collect what helps the app run smoothly and makes your experience better.
                        </p>
                        <div className="space-y-2 pt-2 text-sm text-gray-700">
                            <p><strong className="text-black">Account info</strong></p>
                            <p> your name, email, and password (encrypted — even we cant see it).</p>
                            <p><strong className="text-black">App activity</strong></p>
                            <p>tasks you create, features you use, and bugs we need to fix.</p>
                            <p><strong className="text-black">Device info</strong></p>
                            <p> browser type, OS, IP — specs to keep everything smooth and fast.</p>
                        </div>
                        <p className="text-xs text-gray-500 pt-1">
                            Thats it, No unnecessary tracking, no creepy stuff.
                        </p>
                    </motion.div>

                    {/* Section 2 */}
                    <motion.div
                        variants={sectionVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        className="space-y-3"
                    >
                        <h2 className="text-2xl font-bold tracking-tight text-black">
                            Why We Use Your Data
                        </h2>
                        <p className="font-semibold text-gray-900">We use your info to:</p>
                        <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                            <li>Keep your account safe and running</li>
                            <li>Improve the product and fix bugs</li>
                            <li>Send updates on feature releases</li>
                            <li>Personalize your dashboard experience</li>
                        </ul>
                        <p className="text-xs text-gray-500 pt-1">
                            We never sell your data. Ever.
                        </p>
                    </motion.div>

                    {/* Section 3 */}
                    <motion.div
                        variants={sectionVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        className="space-y-3"
                    >
                        <h2 className="text-2xl font-bold tracking-tight text-black">
                            Your Data, Your Control
                        </h2>
                        <p className="font-semibold text-gray-900">Your work belongs to you — always.</p>
                        <p className="text-sm font-semibold text-gray-800">You can:</p>
                        <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                            <li>Edit or delete your data anytime</li>
                            <li>Download a copy of your info</li>
                            <li>Delete your account and remove everything permanently</li>
                        </ul>
                        <p className="text-sm text-gray-600 pt-1">
                            And send us an email at <span className="underline cursor-pointer">[your email]</span>, and well handle it quickly.
                        </p>
                    </motion.div>

                    {/* Section 4 */}
                    <motion.div
                        variants={sectionVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        className="space-y-3"
                    >
                        <h2 className="text-2xl font-bold tracking-tight text-black">
                            How We Keep It Safe
                        </h2>
                        <p className="font-semibold text-gray-900">We take security seriously (really seriously).</p>
                        <p className="text-sm font-semibold text-gray-800">You: Heres what we do:</p>
                        <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                            <li>Encrypted databases</li>
                            <li>Secure HTTPS connections</li>
                            <li>Internal access control for our team</li>
                        </ul>
                        <p className="text-xs text-gray-500 pt-1">
                            We treat your workspace like our own — private and protected.
                        </p>
                    </motion.div>

                    {/* Section 5 */}
                    <motion.div
                        variants={sectionVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        className="space-y-3"
                    >
                        <h2 className="text-2xl font-bold tracking-tight text-black">
                            Cookies (The Digital Kind 🍪)
                        </h2>
                        <p className="font-semibold text-gray-900">We use a few cookies to:</p>
                        <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                            <li>Keep you logged in</li>
                            <li>Remember your settings</li>
                            <li>See how people use our app (to make it better)</li>
                        </ul>
                        <p className="text-xs text-gray-500 pt-1">
                            You can turn cookies off in your browser anytime — but some features might stop working.
                        </p>
                    </motion.div>

                    {/* Section 6 */}
                    <motion.div
                        variants={sectionVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        className="space-y-3"
                    >
                        <h2 className="text-2xl font-bold tracking-tight text-black">
                            Third-Party Services
                        </h2>
                        <p className="text-sm leading-relaxed text-gray-700">
                            Sometimes we use tools by trusted third parties — like analytics or payment gateways. They follow their own privacy rules, but we only work with standard, secure providers.
                        </p>
                    </motion.div>

                    {/* Section 7 */}
                    <motion.div
                        variants={sectionVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        className="space-y-3"
                    >
                        <h2 className="text-2xl font-bold tracking-tight text-black">
                            Updates to This Policy
                        </h2>
                        <p className="text-sm leading-relaxed text-gray-700">
                            We might tweak this page as we grow.<br />
                            If we make major updates, well let you know right inside the app or by email — no surprises.
                        </p>
                    </motion.div>

                    {/* Section 8 */}
                    <motion.div
                        variants={sectionVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        className="space-y-3"
                    >
                        <h2 className="text-2xl font-bold tracking-tight text-black">
                            Talk to Us
                        </h2>
                        <p className="text-sm leading-relaxed text-gray-700">
                            Have questions? Found something unclear?<br />
                            Reach out — were real humans behind this product.
                        </p>
                    </motion.div>

                    {/* Section 9 */}
                    <motion.div
                        variants={sectionVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        className="space-y-3 pt-6 border-t border-gray-200/60"
                    >
                        <h2 className="text-2xl font-bold tracking-tight text-black">
                            A final word
                        </h2>
                        <p className="font-semibold text-gray-900">Your trust means everything.</p>
                        <p className="text-sm leading-relaxed text-gray-700">
                            We built 2daygoals to help people get things done — not to harvest or sell data.
                        </p>
                        <p className="font-semibold text-black">Thats our promise.</p>
                    </motion.div>
                </div>
            </main>
        </div>
    );
};

export default TermsOfServicePage;