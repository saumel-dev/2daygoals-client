'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const plans = [
    {
        id: 'free',
        icon: '/assets/icons/fire.svg',
        title: 'Free Forever',
        subtitle: 'No minimum commitment pause or cancel anytime',
        price: '0$',
        period: '/Lifetime',
        features: ['WithAds', '100 Project', 'Unlimited Seat', 'Management View', 'Calendar View', 'Chat View'],
        buttons: [
            { label: "Register - it's Free", variant: 'primary' },
        ],
    },
    {
        id: 'monthly',
        icon: '/assets/icons/arrow.svg',
        title: 'Monthly',
        highlighted: true,
        subtitle: 'No minimum commitment pause or cancel anytime',
        price: '19$',
        period: '/month',
        features: ['Without Ads', 'Unlimited Project', 'Unlimited Seat', 'Management View', 'Calendar View', 'Chat View'],
        buttons: [
            { label: 'Get Started', variant: 'primary' },
            { label: 'Contact to sales', variant: 'glass' },
        ],
    },
    {
        id: 'yearly',
        icon: '/assets/icons/lock.svg',
        title: 'Yearly',
        subtitle: 'No minimum commitment pause or cancel anytime',
        price: '199$',
        period: '/yearly',
        features: ['Without Ads', 'Unlimited Project', 'Unlimited Seat', 'Management View', 'Calendar View', 'Chat View'],
        buttons: [
            { label: 'Get Started', variant: 'accent' },
        ],
    },
];

const buttonFillClass = {
    primary: 'bg-[#18191E]',
    glass: 'bg-transparent',
};

// Motion Variants mapping directly to image instructions
const headingVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: 'easeOut' }
    },
};

const cardsContainerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.2, // Staggered fade/slide-in on scroll
        },
    },
};

const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: 'easeOut' }
    },
};

const listContainerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.1, // Lines tick in one at a time
        },
    },
};

const listItemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.3, ease: 'easeOut' }
    },
};

const Pricing_Section = () => {
    return (
        <section>
            <div className="relative bg-[url('/assets/pricing_section_bg_png.png')] bg-cover bg-no-repeat bg-center overflow-hidden">

                {/* Heading + subtitle: Fade up as you scroll to them */}
                <motion.div
                    className="mt-24 mx-5 md:mx-24"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-50px' }}
                    variants={headingVariants}
                >
                    <h2 className="text-white font-helvetica text-5xl md:w-210">
                        Check Out Our Pricing Plans for Both Monthly and Yearly Subscriptions
                    </h2>
                    <p className="mt-2.5 md:w-190 text-[18px] text-[#B7B7B7]">
                        We understand that as your business grows, your needs evolve. Thats why our flexible plans are designed to adapt and scale seamlessly alongside your business
                    </p>
                </motion.div>

                {/* Cards Container */}
                <motion.div
                    className="flex justify-center items-end gap-10 flex-wrap mt-24 pb-24"
                    variants={cardsContainerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-50px' }}
                >
                    {plans.map((plan) => (
                        <motion.div
                            key={plan.id}
                            variants={cardVariants}
                            // Card on hover: Lifts up 8px
                            whileHover={{ y: -8 }}
                            transition={{ duration: 0.25, ease: 'easeOut' }}
                            className={`relative rounded-2xl bg-[url('/assets/pricing_bg.png')] bg-cover bg-center bg-no-repeat overflow-hidden w-96 p-8 ${plan.highlighted ? 'md:pt-16' : ''}`}
                        >
                            {/* Card's icon on hover: Small rotate + scale riding along with card hover */}
                            <motion.div
                                className="w-14 h-14 inline-block ml-5"
                                whileHover={{ scale: 1.15, rotate: 6 }}
                                transition={{ type: 'spring', stiffness: 300, damping: 15 }}
                            >
                                <Image src={plan.icon} alt={plan.title} width={56} height={56} />
                            </motion.div>

                            {/* title */}
                            <h3 className="mt-6 font-helvetica text-3xl text-white">{plan.title}</h3>

                            {/* subtitle */}
                            <p className="mt-2 font-helvetica text-[16px] text-[#B7B7B7]">{plan.subtitle}</p>

                            {/* price */}
                            <div className="mt-4 flex items-baseline gap-1.5">
                                <span className="font-helvetica text-[50px] text-[#FFFFFF]">{plan.price}</span>
                                <span className="font-helvetica text-[16px] text-[#9FE770]">{plan.period}</span>
                            </div>

                            {/* Buttons: Press down slightly on click, grow slightly on hover */}
                            <div className="mt-5 flex flex-col gap-2.5">
                                {plan.buttons.map((btn) =>
                                    btn.variant === 'accent' ? (
                                        <motion.button
                                            key={btn.label}
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.97 }}
                                            transition={{ duration: 0.15 }}
                                            className="w-64 h-11 rounded-lg px-4 flex items-center justify-between bg-[#163300] text-white text-sm font-helvetica cursor-pointer"
                                        >
                                            {btn.label}
                                            <Image src="/assets/icons/Arrow_Icon.svg" alt="" width={16} height={16} />
                                        </motion.button>
                                    ) : (
                                        <motion.button
                                            key={btn.label}
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.97 }}
                                            transition={{ duration: 0.15 }}
                                            className="w-64 h-11 rounded-lg p-px bg-linear-to-b from-[#DEDEDE]/32 to-[#787878]/12 cursor-pointer"
                                        >
                                            <span
                                                className={`${buttonFillClass[btn.variant]} flex items-center justify-between h-full rounded-[7px] px-4 text-white text-sm font-helvetica`}
                                            >
                                                {btn.label}
                                                <Image src="/assets/icons/Arrow_Icon.svg" alt="" width={16} height={16} />
                                            </span>
                                        </motion.button>
                                    )
                                )}
                            </div>

                            {/* Feature list: Lines tick in one at a time */}
                            <div className="mt-6">
                                <p className="text-sm font-semibold text-white">Whats Include</p>
                                <motion.ul
                                    className="mt-3 flex flex-col gap-2.5"
                                    variants={listContainerVariants}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                >
                                    {plan.features.map((feature) => (
                                        <motion.li
                                            key={feature}
                                            variants={listItemVariants}
                                            className="flex items-center gap-2.5"
                                        >
                                            <Image src="/assets/icons/Verify_Icon.svg" alt="" width={16} height={16} />
                                            <span className="text-sm text-white">{feature}</span>
                                        </motion.li>
                                    ))}
                                </motion.ul>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

            </div>
        </section>
    );
};

export default Pricing_Section;