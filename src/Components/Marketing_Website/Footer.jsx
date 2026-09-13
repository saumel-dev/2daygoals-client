"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const footerColumns = [
    {
        title: "Quick Menu",
        links: [
            { label: "Home", href: "/#" },
            { label: "Product", href: "/#" },
            { label: "Pricing", href: "/#" },
            { label: "Resources", href: "/#" },
            { label: "Pricing", href: "/#" },
            { label: "Blog", href: "/#" },
        ],
    },
    {
        title: "Help center",
        links: [
            { label: "Contact Us", href: "/#" },
            { label: "Careers", href: "/#" },
            { label: "Customer Reviews", href: "/#" },
            { label: "Faqs", href: "/#" },
            { label: "Community", href: "/#" },
        ],
    },
    {
        title: "Blog",
        links: [
            { label: "Product Updates", href: "/#" },
            { label: "Resources", href: "/#" },
            { label: "Blog", href: "/#" },
        ],
    },
    {
        title: "LinkedIn",
        links: [
            { label: "Facebook", href: "/#" },
            { label: "Instagram", href: "/#" },
            { label: "Twitter (X)", href: "/#" },
        ],
    },
];

const Footer = () => {
    const [email, setEmail] = useState("");

    const handleSubscribe = (e) => {
        e.preventDefault();
        // TODO: wire up newsletter subscription
        setEmail("");
    };

    return (
        <footer className="relative overflow-hidden bg-[#0A0A0C] pt-16 mt-auto">
            {/* subtle scattered dot texture, matches the star-like specks in the Figma background */}
            <div
                className="pointer-events-none absolute inset-0 opacity-40"
                style={{
                    backgroundImage:
                        "radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px)",
                    backgroundSize: "48px 48px",
                }}
            />

            <div className="relative mx-auto max-w-7xl px-6">
                <div className="grid grid-cols-1 gap-12 pb-12 md:grid-cols-[1.3fr_1fr_1fr_1fr_1fr]">
                    {/* Brand + newsletter */}
                    <div className="flex flex-col gap-4">
                        <Link href="/" className="flex items-center gap-2 no-underline hover:no-underline">
                            <Image src="/assets/footer_logo.svg" alt="2daygoals" width={28} height={28} />
                            <span className="text-lg font-bolder text-white font-helvetica ">2daygoals</span>
                        </Link>
                        <p className="text-sm leading-relaxed text-white">
                            Crafting for Efficiency in Everyday Utilisation. please Subscribe
                            for our newsletter. you will update something cool on our feature.
                        </p>
                        <form onSubmit={handleSubscribe} className="flex w-full max-w-xs items-center gap-2">
                            <input
                                type="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter your email"
                                className="w-full rounded-md border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-gray-500 focus:border-[#B4F42D] focus:outline-none"
                            />
                            <button
                                type="submit"
                                className="shrink-0 rounded-md bg-[#B4F42D] px-5 py-2.5 text-sm font-medium text-black transition-opacity hover:opacity-90"
                            >
                                Go
                            </button>
                        </form>
                    </div>

                    {/* Link columns */}
                    {footerColumns.map((column) => (
                        <div key={column.title} className="flex flex-col gap-3">
                            <h3 className="text-sm font-semibold text-white">{column.title}</h3>
                            <ul className="flex flex-col gap-2.5">
                                {column.links.map((link, i) => (
                                    <li key={`${link.label}-${i}`}>
                                        <Link
                                            href={link.href}
                                            className="text-sm text-gray-400 no-underline transition-colors hover:text-white hover:no-underline"
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Bottom bar */}
                <div className="flex flex-col items-center justify-between gap-4 py-6 text-xs text-white md:flex-row">
                    <span>Version 1.0</span>
                    <span>© 2025 2daygoals. All rights reserved</span>
                    <div className="flex items-center gap-6">
                        <Link
                            href="/terms-of-service"
                            className="text-white opacity-80 no-underline transition-colors hover:text-[#B4F42D] hover:opacity-100 hover:no-underline"
                        >
                            Terms
                        </Link>
                        <Link
                            href="/privacy-policy"
                            className="text-white opacity-80 no-underline transition-colors hover:text-[#B4F42D] hover:opacity-100 hover:no-underline"
                        >
                            Privacy Policy
                        </Link>
                    </div>
                </div>
            </div>

            {/* Giant ghosted wordmark */}
            <div className="pointer-events-none relative -mt-4 select-none overflow-hidden">
                <p
                    className="translate-y-1/4 text-center font-black leading-none tracking-tight"
                    style={{
                        fontSize: "clamp(5rem, 18vw, 14rem)",
                        backgroundImage: "linear-gradient(180deg, #262626 0%, #0C0D11 100%)",
                        WebkitBackgroundClip: "text",
                        backgroundClip: "text",
                        color: "transparent",
                    }}
                >
                    2daygoals
                </p>
            </div>
        </footer>
    );
};

export default Footer;