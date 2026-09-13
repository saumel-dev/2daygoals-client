'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from "motion/react";
import { FaArrowRight, FaPlus } from 'react-icons/fa';
import Link from 'next/link';
import {
    Button,
    Input,
    Label,
    Modal,
    Surface,
    TextField,
    TextArea,
} from "@heroui/react";
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

// Dummy data — swap for API data once the backend is ready
const testimonials = Array.from({ length: 9 }, (_, i) => ({
    id: i + 1,
    quote: "Before Todaygoals.com, we had excessive back-and-forth emails, too many meetings, and we lacked a consistent way of working between teams.",
    name: "Shyed Hassain",
    date: "2 August 2024",
}));

const CustomerStories_page = () => {
    const [formData, setFormData] = useState({
        name: '',
        companyName: '',
        websiteLink: '',
        description: '',
    });

    const handleChange = (field) => (e) => {
        setFormData((prev) => ({ ...prev, [field]: e.target.value }));
    };

    const handleSubmit = async () => {
        // ------------------------------------------------------------------
        // BACKEND NOT BUILT YET — placeholder submission logic.
        // When the API route exists (e.g. /api/customer-stories), uncomment
        // and wire this up. Expected payload shape below.
        //
        // try {
        //     const res = await fetch('/api/customer-stories', {
        //         method: 'POST',
        //         headers: { 'Content-Type': 'application/json' },
        //         body: JSON.stringify({
        //             name: formData.name,
        //             companyName: formData.companyName,
        //             websiteLink: formData.websiteLink,
        //             description: formData.description,
        //         }),
        //     });
        //
        //     if (!res.ok) throw new Error('Failed to submit story');
        //
        //     const data = await res.json();
        //     console.log('Story submitted:', data);
        //     // reset form / close modal / show toast here
        // } catch (err) {
        //     console.error('Error submitting customer story:', err);
        //     // show error toast here
        // }

        console.log('Form data (backend pending):', formData);
    };

    return (
        <section className="mt-10 md:mt-20">
            <div className="container mx-auto px-5 mb-25">
                <div className="inline-flex items-center rounded-md bg-[#9FE870] px-2.5 py-0.5">
                    <p className="text-[#163300] text-[14px] font-medium">About Us</p>
                </div>

                <motion.h1
                    initial="hidden"
                    animate="show"
                    variants={fadeUp}
                    className="font-helvetica text-[46px] md:text-[80px] font-bolder leading-[1.1] tracking-tight text-[#111] max-w-5xl"
                >
                    Todaygoals Customer Stories.
                </motion.h1>

                <motion.div
                    initial="hidden"
                    animate="show"
                    variants={fadeUp}
                    className="flex flex-col md:flex-row md:items-end justify-between mt-6 md:mt-8 gap-8"
                >
                    <p className="text-[16px] md:text-[18px] max-w-[570px] leading-relaxed text-[#333]">
                        See how teams are using todaygoals.com to save time and get more done.
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
                                    Register - Its Free
                                </span>
                            </motion.span>
                        </Link>
                    </div>
                </motion.div>

                {/* Share Customer Stories trigger — sits below the row above, right-aligned */}
                <motion.div
                    initial="hidden"
                    animate="show"
                    variants={fadeUp}
                    className="flex justify-end mt-20"
                >
                    <Modal>
                        <Button className="inline-flex items-center gap-2 rounded-md bg-[#163300] px-4 py-2.5 text-sm font-medium text-white shadow-lg hover:opacity-90 transition">
                            <FaPlus className="h-3 w-3" />
                            Share Customer Stories
                        </Button>

                        <Modal.Backdrop>
                            <Modal.Container placement="auto">
                                <Modal.Dialog className="sm:max-w-md">
                                    <Modal.CloseTrigger />
                                    <Modal.Header>
                                        <Modal.Heading className="font-helvetica text-2xl font-bold text-[#111]">
                                            Share Customer Stories.
                                        </Modal.Heading>
                                    </Modal.Header>

                                    <Modal.Body className="p-6">
                                        <Surface variant="default">
                                            <form className="flex flex-col gap-4">

                                                <TextField
                                                    className="w-full"
                                                    name="name"
                                                    type="text"
                                                    variant="secondary"
                                                >
                                                    <Label>Name</Label>
                                                    <Input
                                                        placeholder="Enter your name"
                                                        value={formData.name}
                                                        onChange={handleChange('name')}
                                                    />
                                                </TextField>
                                                <TextField
                                                    className="w-full"
                                                    name="companyName"
                                                    type="text"
                                                    variant="secondary"
                                                >
                                                    <Label>Company Name</Label>
                                                    <Input
                                                        placeholder="Enter your company name"
                                                        value={formData.companyName}
                                                        onChange={handleChange('companyName')}
                                                    />
                                                </TextField>


                                                <TextField
                                                    className="w-full"
                                                    name="websiteLink"
                                                    type="url"
                                                    variant="secondary"
                                                >
                                                    <Label>Website link</Label>
                                                    <Input
                                                        placeholder="Enter your website link"
                                                        value={formData.websiteLink}
                                                        onChange={handleChange('websiteLink')}
                                                    />
                                                </TextField>

                                                <TextField
                                                    className="w-full"
                                                    name="description"
                                                    variant="secondary"
                                                >
                                                    <Label>Descriptions</Label>
                                                    <TextArea
                                                        placeholder="Tell us about your experience"
                                                        rows={4}
                                                        value={formData.description}
                                                        onChange={handleChange('description')}
                                                    />
                                                </TextField>
                                            </form>
                                        </Surface>
                                    </Modal.Body>

                                    <Modal.Footer>
                                        <Button
                                            slot="close"
                                            className="rounded-md bg-black px-5 py-2.5 text-sm font-medium text-white"
                                        >
                                            Cancel
                                        </Button>
                                        <Button
                                            slot="close"
                                            onPress={handleSubmit}
                                            className="rounded-md bg-[#163300] px-5 py-2.5 text-sm font-medium text-white"
                                        >
                                            Share Customer Stories
                                        </Button>
                                    </Modal.Footer>
                                </Modal.Dialog>
                            </Modal.Container>
                        </Modal.Backdrop>
                    </Modal>
                </motion.div>

                {/* Testimonials grid */}
                <motion.div
                    initial="hidden"
                    animate="show"
                    variants={fadeUp}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10"
                >
                    {testimonials.map((item) => (
                        <div
                            key={item.id}
                            className="bg-white rounded-2xl p-6 shadow-sm border border-black/5"
                        >
                            <p className="text-[15px] leading-relaxed text-[#111]">
                                &ldquo;{item.quote}&rdquo;
                            </p>

                            <div className="flex items-center justify-between mt-5">
                                <div className="flex items-center gap-3">
                                    <Image
                                        src="/assets/Marketing/Review/user.svg"
                                        alt={item.name}
                                        width={40}
                                        height={40}
                                        className="rounded-full"
                                    />
                                    <div>
                                        <p className="text-sm font-semibold text-[#111]">
                                            {item.name}
                                        </p>
                                        <p className="text-xs text-[#666]">{item.date}</p>
                                    </div>
                                </div>

                                <Image
                                    src="/assets/Marketing/Review/logo.svg"
                                    alt="2daygoals"
                                    width={110}
                                    height={24}
                                />
                            </div>

                            <div className="flex items-center gap-1 mt-3">
                                {Array.from({ length: 5 }).map((_, i) => (
                                    <Image
                                        key={i}
                                        src="/assets/Marketing/Review/star.svg"
                                        alt="star"
                                        width={16}
                                        height={16}
                                    />
                                ))}
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
            <MobilePromoSection></MobilePromoSection>
            <CTASection></CTASection>
        </section>
    );
};

export default CustomerStories_page;