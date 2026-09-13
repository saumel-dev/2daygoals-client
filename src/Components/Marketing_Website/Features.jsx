'use client';

import Image from 'next/image';
import React from 'react';
import { motion } from 'motion/react';

const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, delay: i * 0.12, ease: 'easeOut' },
    }),
};

const Features = () => {
    return (
        <section className="px-4 py-8 overflow-hidden">
            {/* Header Section */}
            <div className="container mx-auto text-center md:text-left mb-10">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-helvetica font-bold max-w-2xl leading-tight">
                    Save time by having everything in one platform
                </h1>
                <p className="text-base sm:text-lg font-medium text-gray-600 mt-3 max-w-xl">
                    Our product simplifies tasks, organizes workloads, and boosts collaboration.
                </p>
            </div>

            {/* Grid Container */}
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 my-8">

                {/* CARD 1 */}
                <motion.div
                    custom={0}
                    variants={cardVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    whileHover={{ y: -8, scale: 1.015 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                    className="bg-linear-to-b from-[#DEE9EE] to-[#F2F6F8]/1 rounded-2xl p-2 sm:p-4 flex flex-col justify-between cursor-pointer hover:shadow-xl"
                >
                    <div className="relative w-full flex justify-center pt-2 pb-6">
                        <div className="relative w-[90%] mt-6 max-w-140">
                            <Image
                                src="/assets/fe1.svg"
                                width={500}
                                height={500}
                                alt="Share your Problem"
                                className="w-full h-auto object-contain rounded-xl drop-shadow-sm"
                            />
                            <div className="absolute -top-10 -right-10 sm:-top-10 sm:-right-10 md:-top-15 md:-right-12 w-[55%] sm:w-[60%]">
                                <Image
                                    src="/assets/fe2.svg"
                                    width={200}
                                    height={200}
                                    alt="Overlay detail"
                                    className="w-full h-auto object-contain drop-shadow-lg"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="mt-4 px-2">
                        <h2 className="font-helvetica text-xl sm:text-2xl font-semibold text-gray-900">Share your Problem</h2>
                        <p className="text-gray-600 text-sm sm:text-base mt-2">
                            Open up and share your challenges for collaborative solutions and support.
                        </p>
                    </div>
                </motion.div>

                {/* CARD 2 */}
                <motion.div
                    custom={1}
                    variants={cardVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    whileHover={{ y: -8, scale: 1.015 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                    className="bg-linear-to-b from-[#DEE9EE] to-[#F2F6F8]/1 rounded-2xl p-2 sm:p-4 flex flex-col justify-between cursor-pointer hover:shadow-xl"
                >
                    <div className="relative w-full flex justify-center pt-2 pb-6">
                        <div className="relative w-[90%] mt-6 max-w-140">
                            <Image
                                src="/assets/fe3.svg"
                                width={500}
                                height={500}
                                alt="Manage Your Task"
                                className="w-full h-auto object-contain rounded-xl drop-shadow-sm"
                            />
                            <div className="absolute -bottom-12 -right-11 sm:-bottom-16 sm:-right-12 md:-bottom-20 md:-right-15 w-[55%] sm:w-[60%]">
                                <Image
                                    src="/assets/fe4.svg"
                                    width={200}
                                    height={200}
                                    alt="Overlay detail"
                                    className="w-full h-auto object-contain drop-shadow-lg"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="mt-4 px-2">
                        <h2 className="font-helvetica text-xl sm:text-2xl font-semibold text-gray-900">Manage Your Task</h2>
                        <p className="text-gray-600 text-sm sm:text-base mt-2">
                            Efficiently organize and oversee your tasks for enhanced productivity and goal achievement.
                        </p>
                    </div>
                </motion.div>

                {/* CARD 3 */}
                <motion.div
                    custom={2}
                    variants={cardVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    whileHover={{ y: -8, scale: 1.015 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                    className="bg-linear-to-b from-[#DEE9EE] to-[#F2F6F8]/1 rounded-2xl p-2 sm:p-4 flex flex-col justify-between cursor-pointer hover:shadow-xl"
                >
                    <div className="relative w-full flex justify-center pt-2 pb-6">
                        <div className="relative w-[90%] mt-6 max-w-140">
                            <Image
                                src="/assets/fe5-fixed.svg"
                                width={469}
                                height={549}
                                alt="Chats On Friends"
                                className="w-full h-auto object-contain rounded-xl drop-shadow-sm"
                            />
                            <div className="absolute -top-10 -right-10 sm:-top-10 sm:-right-11 md:-top-15 md:-right-13 w-[55%] sm:w-[60%]">
                                <Image
                                    src="/assets/fe6.svg"
                                    width={200}
                                    height={200}
                                    alt="Overlay detail"
                                    className="w-full h-auto object-contain drop-shadow-lg"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="mt-4 px-2">
                        <h2 className="font-helvetica text-xl sm:text-2xl font-semibold text-gray-900">Chats On Friends</h2>
                        <p className="text-gray-600 text-sm sm:text-base mt-2">
                            Engage in lively conversations and build connections with friends through delightful chats.
                        </p>
                    </div>
                </motion.div>

                {/* CARD 4 */}
                <motion.div
                    custom={3}
                    variants={cardVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    whileHover={{ y: -8, scale: 1.015 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                    className="bg-linear-to-b from-[#DEE9EE] to-[#F2F6F8]/1 rounded-2xl p-2 sm:p-4 flex flex-col justify-between cursor-pointer hover:shadow-xl"
                >
                    <div className="relative w-full flex justify-center pt-2 pb-6">
                        <div className="relative w-[90%] mt-6 max-w-140">
                            <Image
                                src="/assets/fe7-fixed.svg"
                                width={424}
                                height={545}
                                alt="Note On Calendar"
                                className="w-full h-auto object-contain drop-shadow-sm"
                            />
                            <div className="absolute -top-7 -right-14 sm:-top-7 sm:-right-18 md:-top-10 md:-right-23 w-[55%] sm:w-[60%]">
                                <Image
                                    src="/assets/fe8.svg"
                                    width={200}
                                    height={200}
                                    alt="Overlay detail"
                                    className="w-full h-auto object-contain drop-shadow-lg"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="mt-4 px-2">
                        <h2 className="font-helvetica text-xl sm:text-2xl font-semibold text-gray-900">Note On Calendar</h2>
                        <p className="text-gray-600 text-sm sm:text-base mt-2">
                            Mark important dates and events with precision on your calendar for effective.
                        </p>
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default Features;