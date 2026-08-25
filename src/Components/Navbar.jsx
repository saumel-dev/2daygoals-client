'use client'
import { Button, Link } from '@heroui/react';
import Image from 'next/image';
import React from 'react';
import { usePathname } from "next/navigation";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const NavLinks = [
        { name: 'Home', href: '/' },
        { name: 'Product', href: '/product' },
        { name: 'Pricing', href: '/pricing' },
        { name: 'Resource', href: '/resource' },
    ]
    const pathName = usePathname();

    const isActive = (href) => pathName === href;

    // shared link classes: gray underline on hover; active route keeps
    // the underline permanently and switches text color to #163300
    const linkClasses = (href) =>
        `no-underline pb-1 transition-colors duration-200 underline-offset-4 ${
            isActive(href)
                ? 'text-[#163300] underline decoration-gray-400'
                : 'hover:underline hover:decoration-gray-400 hover:no-underline'
        }`;

    return (
        <div>
            <nav className="sticky top-0 z-40 w-full border-separator backdrop-blur-lg px-0 md:px-20">
                <header className="flex h-16 items-center justify-between px-6">
                    <div className="flex items-center gap-4">
                        <button
                            className="md:hidden"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            aria-label="Toggle menu"
                        >
                            <span className="sr-only">Menu</span>
                            <svg
                                className="h-6 w-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                {isMenuOpen ? (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                ) : (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                )}
                            </svg>
                        </button>
                        <div className="flex items-center">
                            <Link href="/">
                                <Image
                                    src="/assets/logo.svg"
                                    alt="Logo"
                                    width={200}
                                    height={40}
                                    priority
                                />
                            </Link>
                        </div>
                    </div>

                    {/* Nav links: hidden on mobile (they live inside the burger dropdown), inline on desktop */}
                    <ul className="hidden items-center gap-4 md:flex text-sm font-medium">
                        {
                            NavLinks.map((link) => (
                                <li key={link.name}>
                                    <Link href={link.href} className={linkClasses(link.href)}>
                                        {link.name}
                                    </Link>
                                </li>
                            ))
                        }
                    </ul>

                    {/* Login/Register: visible on every screen size, always outside the burger menu */}
                    <ul className="flex items-center gap-2 md:gap-4">
                        <li>
                            <Link href="/#" className="bg-white px-4 py-2 rounded-md hover:no-underline no-underline">
                                Login
                            </Link>
                        </li>
                        <li>
                            <Link href="/#" className="text-white bg-black px-4 py-2 rounded-md hover:no-underline no-underline">
                                Register - its free
                            </Link>
                        </li>
                    </ul>
                </header>

                {/* Mobile dropdown: nav links only, shown when burger is toggled open */}
                {isMenuOpen && (
                    <div className="border-t border-separator md:hidden text-sm font-medium">
                        <ul className="flex flex-col gap-2 p-4">
                            {
                                NavLinks.map((link) => (
                                    <li key={link.name}>
                                        <Link href={link.href} className={linkClasses(link.href)}>
                                            {link.name}
                                        </Link>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                )}
            </nav>
        </div>
    );
};

export default Navbar;