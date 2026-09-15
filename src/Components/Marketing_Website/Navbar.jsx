'use client'
import { Button, Dropdown, Avatar, Label } from '@heroui/react';
import { ArrowRightFromSquare } from '@gravity-ui/icons';
import Image from 'next/image';
import React from 'react';
import { usePathname, useRouter } from "next/navigation";
import { authClient } from '@/lib/auth-client';
import Link from 'next/link';

const PRODUCT_ICON_PATH = '/assets/Marketing/Product_Hover/';
const RESOURCE_ICON_PATH = '/assets/Marketing/Resource_Hover/';

const PRODUCT_FEATURES = [
    {
        title: 'Share your Problem',
        description: 'Open up and share your challenges for collaborative solutions and support.',
        icon: 'home-2.svg',
    },
    {
        title: 'Chats On Friends',
        description: 'Engage in lively conversations and build connections with friends through delightful chats.',
        icon: 'message-2.svg',
    },
    {
        title: 'Manage your Task',
        description: 'Efficiently organize and oversee your tasks for enhanced productivity and goal achievement.',
        icon: 'grid-2.svg',
    },
    {
        title: 'Note On Calendar',
        description: 'Mark important dates and events with precision on your calendar for effective time management.',
        icon: 'calendar-2.svg',
    },
];

// TODO: swap these hrefs for your real routes if they don't match
const RESOURCE_LEARN = [
    {
        title: 'Help center',
        description: 'Tutorials and how-to guides for using Todaygoals',
        icon: 'info.svg',
        href: '/help-center',
    },
    {
        title: 'About us',
        description: 'How Todaygoals came to be, our values, and milestones',
        icon: 'person.svg',
        href: '/about',
    },
    {
        title: 'Blog',
        description: 'Explore the latest on productivity, product news, tips, and more',
        icon: 'blog.svg',
        href: '/blog',
    },
];

const RESOURCE_CONNECT = [
    {
        title: '24/7 support',
        description: 'Get fast and dedicated support wherever you are in the world',
        icon: 'support.svg',
        href: '/support',
    },
    {
        title: 'Community',
        description: 'Share ideas, learn, and connect with other Todaygoals.com customers',
        icon: 'community.svg',
        href: '/community',
    },
];

const RESOURCE_PLAN = {
    free: {
        title: 'Free plan',
        description: 'For individuals or small teams looking to keep work organized.',
        icon: 'verify.svg',
    },
    premium: {
        title: 'Premium',
        description: 'Best for teams up to 100 that need to track multiple projects and visualize work in a variety of ways.',
        icon: 'premium.svg',
    },
};

const Navbar = ({ initialUser }) => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const [isProductMenuOpen, setIsProductMenuOpen] = React.useState(false);
    const [isResourceMenuOpen, setIsResourceMenuOpen] = React.useState(false);
    const [isMobileProductOpen, setIsMobileProductOpen] = React.useState(false);
    const [isMobileResourceOpen, setIsMobileResourceOpen] = React.useState(false);
    const closeTimeoutRef = React.useRef(null);
    const resourceCloseTimeoutRef = React.useRef(null);

    const openProductMenu = () => {
        clearTimeout(closeTimeoutRef.current);
        setIsProductMenuOpen(true);
    };

    const closeProductMenu = () => {
        closeTimeoutRef.current = setTimeout(() => {
            setIsProductMenuOpen(false);
        }, 150);
    };

    const openResourceMenu = () => {
        clearTimeout(resourceCloseTimeoutRef.current);
        setIsResourceMenuOpen(true);
    };

    const closeResourceMenu = () => {
        resourceCloseTimeoutRef.current = setTimeout(() => {
            setIsResourceMenuOpen(false);
        }, 150);
    };

    const NavLinks = [
        { name: 'Home', href: '/' },
        { name: 'Product', href: '/product', megaMenu: 'product' },
        { name: 'Pricing', href: '/pricing' },
        { name: 'Resource', href: '/resource', megaMenu: 'resource' },
    ];

    const pathName = usePathname();
    const router = useRouter();

    const { data: session, isPending } = authClient.useSession();
    const user = isPending ? initialUser : session?.user;

    const getInitials = (name) => {
        if (!name) return "U";
        return name
            .split(" ")
            .map((part) => part[0])
            .join("")
            .slice(0, 2)
            .toUpperCase();
    };

    const handleLogout = async () => {
        await authClient.signOut();
        router.push("/login");
    };

    const isActive = (href) => pathName === href;

    const linkClasses = (href) =>
        `no-underline pb-1 transition-colors duration-200 underline-offset-4 ${isActive(href)
            ? 'text-[#163300] underline decoration-gray-400'
            : 'hover:underline hover:decoration-gray-400 hover:no-underline'
        }`;

    return (
        <div>
            <nav className="relative top-0 z-40 w-full border-separator px-0 md:px-20">
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
                                    src="/assets/Marketing/Logo/logo.svg"
                                    alt="Logo"
                                    width={200}
                                    height={40}
                                    priority
                                />
                            </Link>
                        </div>
                    </div>

                    {/* Desktop Nav Links (Hover-based Mega Menu) */}
                    <ul className="hidden items-center gap-4 md:flex text-sm font-medium">
                        {NavLinks.map((link) => (
                            <li
                                key={link.name}
                                className="relative"
                                onMouseEnter={
                                    link.megaMenu === 'product'
                                        ? openProductMenu
                                        : link.megaMenu === 'resource'
                                            ? openResourceMenu
                                            : undefined
                                }
                                onMouseLeave={
                                    link.megaMenu === 'product'
                                        ? closeProductMenu
                                        : link.megaMenu === 'resource'
                                            ? closeResourceMenu
                                            : undefined
                                }
                            >
                                <Link href={link.href} className={linkClasses(link.href)}>
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    {/* Auth Area */}
                    <ul className="flex items-center gap-2 md:gap-4">
                        {user ? (
                            <>
                                <li>
                                    <Dropdown>
                                        <Dropdown.Trigger className="rounded-full">
                                            <Avatar className="mt-2">
                                                <Avatar.Image alt={user.name} src={user.image} />
                                                <Avatar.Fallback delayMs={600}>
                                                    {getInitials(user.name)}
                                                </Avatar.Fallback>
                                            </Avatar>
                                        </Dropdown.Trigger>
                                        <Dropdown.Popover>
                                            <div className="px-3 pt-3 pb-1">
                                                <div className="flex items-center gap-2">
                                                    <Avatar size="sm">
                                                        <Avatar.Image alt={user.name} src={user.image} />
                                                        <Avatar.Fallback delayMs={600}>
                                                            {getInitials(user.name)}
                                                        </Avatar.Fallback>
                                                    </Avatar>
                                                    <div className="flex flex-col gap-0">
                                                        <p className="text-sm leading-5 font-medium">{user.name}</p>
                                                        <p className="text-xs leading-none text-muted">{user.email}</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <Dropdown.Menu>
                                                <Dropdown.Item
                                                    id="logout"
                                                    textValue="Logout"
                                                    variant="danger"
                                                    className="md:hidden"
                                                    onAction={handleLogout}
                                                >
                                                    <div className="flex w-full items-center justify-between gap-2">
                                                        <Label>Log Out</Label>
                                                        <ArrowRightFromSquare className="size-3.5 text-danger" />
                                                    </div>
                                                </Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown.Popover>
                                    </Dropdown>
                                </li>
                                <li className="hidden md:block">
                                    <Button
                                        onPress={handleLogout}
                                        className="flex items-center gap-2 bg-red-500 text-white px-2 rounded-md"
                                    >
                                        <ArrowRightFromSquare className="size-4" />
                                        Logout
                                    </Button>
                                </li>
                            </>
                        ) : (
                            <>
                                <li>
                                    <Link href="/login" className="bg-white px-4 py-2 rounded-md hover:no-underline no-underline">
                                        Login
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/register" className="text-white bg-black px-4 py-2 rounded-md hover:no-underline no-underline">
                                        Register
                                    </Link>
                                </li>
                            </>
                        )}
                    </ul>

                    {/* Desktop Mega Menu Dropdown — Product */}
                    {isProductMenuOpen && (
                        <div
                            onMouseEnter={openProductMenu}
                            onMouseLeave={closeProductMenu}
                            className="absolute left-1/2 top-full hidden w-[calc(100%-3rem)] max-w-6xl -translate-x-1/2 mt-2 rounded-2xl border border-gray-100 bg-white p-8 shadow-xl md:grid md:grid-cols-[1fr_2fr] md:gap-8"
                        >
                            <div className="flex flex-col items-start">
                                <span className="text-[11px] font-semibold tracking-wider text-[#6A6A6A]">FEATURES</span>
                                <h3 className="mt-2 text-[30px] font-bold leading-tight text-black">
                                    Our Product<br />Help you with
                                </h3>
                                <p className="mt-3 text-[14px] leading-relaxed text-[#313131]">
                                    Our product is designed to provide comprehensive support, helping you effortlessly navigate through various tasks, organize your workload efficiently, and enhance collaboration on projects.
                                </p>
                                <Link
                                    href="/product"
                                    className="mt-6 flex items-center gap-2 rounded-md bg-[#9FE870] px-5 py-2.5 text-sm font-medium text-black no-underline hover:no-underline"
                                >
                                    Learn more
                                    <Image src={`${PRODUCT_ICON_PATH}right-arrow.svg`} alt="" width={16} height={16} />
                                </Link>
                            </div>

                            <div className="grid grid-cols-2 gap-x-8 gap-y-6">
                                {PRODUCT_FEATURES.map((feature) => (
                                    <div key={feature.title} className="flex items-start gap-3">
                                        <Image
                                            src={`${PRODUCT_ICON_PATH}${feature.icon}`}
                                            alt=""
                                            width={26}
                                            height={26}
                                            className="mt-1 shrink-0"
                                        />
                                        <div>
                                            <h4 className="font-helvetica text-[20px] font-bold leading-tight text-black">{feature.title}</h4>
                                            <p className="mt-1.5 text-[14px] leading-snug font-normal text-[#313131]">{feature.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Desktop Mega Menu Dropdown — Resource */}
                    {isResourceMenuOpen && (
                        <div
                            onMouseEnter={openResourceMenu}
                            onMouseLeave={closeResourceMenu}
                            className="absolute left-1/2 top-full hidden w-[calc(100%-3rem)] max-w-6xl -translate-x-1/2 mt-2 rounded-2xl border border-gray-100 bg-white p-8 shadow-xl md:grid md:grid-cols-3 md:gap-10"
                        >
                            {/* LEARN column */}
                            <div className="flex flex-col gap-6">
                                <span className="text-[11px] font-semibold tracking-wider text-[#6A6A6A]">LEARN</span>
                                {RESOURCE_LEARN.map((item) => (
                                    <Link
                                        key={item.title}
                                        href={item.href}
                                        className="group !flex !flex-col !items-start gap-1.5 no-underline hover:no-underline text-left"
                                    >
                                        <div className="flex items-center gap-2">
                                            <Image
                                                src={`${RESOURCE_ICON_PATH}${item.icon}`}
                                                alt=""
                                                width={20}
                                                height={20}
                                                className="shrink-0"
                                            />
                                            <h4 className="font-bold text-[16px] text-black">{item.title}</h4>
                                            <Image
                                                src={`${RESOURCE_ICON_PATH}arrow-right.svg`}
                                                alt=""
                                                width={14}
                                                height={14}
                                                className="opacity-0 -translate-x-1 transition-all group-hover:opacity-100 group-hover:translate-x-0"
                                            />
                                        </div>
                                        <p className="text-[14px] leading-snug text-[#313131] pl-7">
                                            {item.description}
                                        </p>
                                    </Link>
                                ))}
                            </div>

                            {/* CONNECT column */}
                            <div className="flex flex-col gap-6">
                                <span className="text-[11px] font-semibold tracking-wider text-[#6A6A6A]">CONNECT</span>
                                {RESOURCE_CONNECT.map((item) => (
                                    <Link
                                        key={item.title}
                                        href={item.href}
                                        className="group !flex !flex-col !items-start gap-1.5 no-underline hover:no-underline text-left"
                                    >
                                        <div className="flex items-center gap-2">
                                            <Image
                                                src={`${RESOURCE_ICON_PATH}${item.icon}`}
                                                alt=""
                                                width={20}
                                                height={20}
                                                className="shrink-0"
                                            />
                                            <h4 className="font-bold text-[16px] text-black">{item.title}</h4>
                                            <Image
                                                src={`${RESOURCE_ICON_PATH}arrow-right.svg`}
                                                alt=""
                                                width={14}
                                                height={14}
                                                className="opacity-0 -translate-x-1 transition-all group-hover:opacity-100 group-hover:translate-x-0"
                                            />
                                        </div>
                                        <p className="text-[14px] leading-snug text-[#313131] pl-7">
                                            {item.description}
                                        </p>
                                    </Link>
                                ))}
                            </div>

                            {/* PLAN column */}
                            <div className="flex flex-col gap-6">
                                <span className="text-[11px] font-semibold tracking-wider text-[#6A6A6A]">PLAN</span>

                                <div className="flex flex-col gap-1.5">
                                    <div className="flex items-center gap-2">
                                        <Image
                                            src={`${RESOURCE_ICON_PATH}${RESOURCE_PLAN.free.icon}`}
                                            alt=""
                                            width={20}
                                            height={20}
                                            className="shrink-0"
                                        />
                                        <h4 className="font-bold text-[16px] text-black">{RESOURCE_PLAN.free.title}</h4>
                                    </div>
                                    <p className="text-[14px] leading-snug text-[#313131] pl-7">
                                        {RESOURCE_PLAN.free.description}
                                    </p>
                                </div>

                                <Link href="/register" className="group inline-flex">
                                    <span className="inline-flex items-center gap-3 rounded-[14px] bg-black p-1.5 pr-5 shadow-lg">
                                        <span className="flex h-9 w-12 items-center justify-center rounded-xl bg-linear-to-r from-[#73FDB2] to-[#6EFF00]">
                                            <Image src={`${PRODUCT_ICON_PATH}right-arrow.svg`} alt="" width={16} height={16} />
                                        </span>
                                        <span className="text-sm font-medium text-white pb-0.5">
                                            Register - its Free
                                        </span>
                                    </span>
                                </Link>

                                <div className="flex flex-col gap-1.5">
                                    <div className="flex items-center gap-2">
                                        <Image
                                            src={`${RESOURCE_ICON_PATH}${RESOURCE_PLAN.premium.icon}`}
                                            alt=""
                                            width={20}
                                            height={20}
                                            className="shrink-0"
                                        />
                                        <h4 className="font-bold text-[16px] text-black">{RESOURCE_PLAN.premium.title}</h4>
                                    </div>
                                    <p className="text-[14px] leading-snug text-[#313131] pl-7">
                                        {RESOURCE_PLAN.premium.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    )}
                </header>

                {/* Mobile Navigation Drawer (Click/Tap Driven) */}
                {isMenuOpen && (
                    <div className="border-t border-separator md:hidden text-sm font-medium bg-white">
                        <ul className="flex flex-col gap-2 p-4">
                            {NavLinks.map((link) => (
                                <li key={link.name}>
                                    {link.megaMenu === 'product' ? (
                                        <div>
                                            <button
                                                type="button"
                                                onClick={() => setIsMobileProductOpen((prev) => !prev)}
                                                className="flex w-full items-center justify-between py-2 text-left text-base font-semibold text-black"
                                            >
                                                <span>{link.name}</span>
                                                <svg
                                                    className={`h-4 w-4 shrink-0 transition-transform duration-200 ${isMobileProductOpen ? 'rotate-180' : ''
                                                        }`}
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                                </svg>
                                            </button>

                                            {isMobileProductOpen && (
                                                <div className="mt-2 flex flex-col gap-4 pl-2 border-l-2 border-gray-100">
                                                    {PRODUCT_FEATURES.map((feature) => (
                                                        <div key={feature.title} className="flex items-start gap-3 pt-1">
                                                            <Image
                                                                src={`${PRODUCT_ICON_PATH}${feature.icon}`}
                                                                alt=""
                                                                width={20}
                                                                height={20}
                                                                className="mt-0.5 shrink-0"
                                                            />
                                                            <div>
                                                                <p className="font-helvetica text-sm font-bold text-black">{feature.title}</p>
                                                                <p className="mt-0.5 text-xs text-[#555555]">{feature.description}</p>
                                                            </div>
                                                        </div>
                                                    ))}
                                                    <Link
                                                        href="/product"
                                                        onClick={() => setIsMenuOpen(false)}
                                                        className="mt-2 inline-flex w-fit items-center gap-2 rounded-md bg-[#9FE870] px-4 py-2 text-sm font-medium text-black no-underline"
                                                    >
                                                        Learn more
                                                        <Image src={`${PRODUCT_ICON_PATH}right-arrow.svg`} alt="" width={14} height={14} />
                                                    </Link>
                                                </div>
                                            )}
                                        </div>
                                    ) : link.megaMenu === 'resource' ? (
                                        <div>
                                            <button
                                                type="button"
                                                onClick={() => setIsMobileResourceOpen((prev) => !prev)}
                                                className="flex w-full items-center justify-between py-2 text-left text-base font-semibold text-black"
                                            >
                                                <span>{link.name}</span>
                                                <svg
                                                    className={`h-4 w-4 shrink-0 transition-transform duration-200 ${isMobileResourceOpen ? 'rotate-180' : ''
                                                        }`}
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                                </svg>
                                            </button>

                                            {isMobileResourceOpen && (
                                                <div className="mt-2 flex flex-col gap-5 pl-2 border-l-2 border-gray-100">
                                                    <div>
                                                        <p className="text-[11px] font-semibold tracking-wider text-[#6A6A6A] mb-2">LEARN</p>
                                                        <div className="flex flex-col gap-4">
                                                            {RESOURCE_LEARN.map((item) => (
                                                                <Link
                                                                    key={item.title}
                                                                    href={item.href}
                                                                    onClick={() => setIsMenuOpen(false)}
                                                                    className="flex items-start gap-3 no-underline"
                                                                >
                                                                    <Image
                                                                        src={`${RESOURCE_ICON_PATH}${item.icon}`}
                                                                        alt=""
                                                                        width={18}
                                                                        height={18}
                                                                        className="mt-0.5 shrink-0"
                                                                    />
                                                                    <div>
                                                                        <p className="font-bold text-sm text-black">{item.title}</p>
                                                                        <p className="mt-0.5 text-xs text-[#555555]">{item.description}</p>
                                                                    </div>
                                                                </Link>
                                                            ))}
                                                        </div>
                                                    </div>

                                                    <div>
                                                        <p className="text-[11px] font-semibold tracking-wider text-[#6A6A6A] mb-2">CONNECT</p>
                                                        <div className="flex flex-col gap-4">
                                                            {RESOURCE_CONNECT.map((item) => (
                                                                <Link
                                                                    key={item.title}
                                                                    href={item.href}
                                                                    onClick={() => setIsMenuOpen(false)}
                                                                    className="flex items-start gap-3 no-underline"
                                                                >
                                                                    <Image
                                                                        src={`${RESOURCE_ICON_PATH}${item.icon}`}
                                                                        alt=""
                                                                        width={18}
                                                                        height={18}
                                                                        className="mt-0.5 shrink-0"
                                                                    />
                                                                    <div>
                                                                        <p className="font-bold text-sm text-black">{item.title}</p>
                                                                        <p className="mt-0.5 text-xs text-[#555555]">{item.description}</p>
                                                                    </div>
                                                                </Link>
                                                            ))}
                                                        </div>
                                                    </div>

                                                    <div>
                                                        <p className="text-[11px] font-semibold tracking-wider text-[#6A6A6A] mb-2">PLAN</p>
                                                        <div className="flex flex-col gap-4">
                                                            <div className="flex items-start gap-3">
                                                                <Image
                                                                    src={`${RESOURCE_ICON_PATH}${RESOURCE_PLAN.free.icon}`}
                                                                    alt=""
                                                                    width={18}
                                                                    height={18}
                                                                    className="mt-0.5 shrink-0"
                                                                />
                                                                <div>
                                                                    <p className="font-bold text-sm text-black">{RESOURCE_PLAN.free.title}</p>
                                                                    <p className="mt-0.5 text-xs text-[#555555]">{RESOURCE_PLAN.free.description}</p>
                                                                </div>
                                                            </div>

                                                            <Link
                                                                href="/register"
                                                                onClick={() => setIsMenuOpen(false)}
                                                                className="inline-flex w-fit items-center gap-2 rounded-md bg-black px-4 py-2 text-sm font-medium text-white !no-underline hover:!no-underline"
                                                            >
                                                                Register - its Free
                                                            </Link>

                                                            <div className="flex items-start gap-3">
                                                                <Image
                                                                    src={`${RESOURCE_ICON_PATH}${RESOURCE_PLAN.premium.icon}`}
                                                                    alt=""
                                                                    width={18}
                                                                    height={18}
                                                                    className="mt-0.5 shrink-0"
                                                                />
                                                                <div>
                                                                    <p className="font-bold text-sm text-black">{RESOURCE_PLAN.premium.title}</p>
                                                                    <p className="mt-0.5 text-xs text-[#555555]">{RESOURCE_PLAN.premium.description}</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    ) : (
                                        <Link
                                            href={link.href}
                                            onClick={() => setIsMenuOpen(false)}
                                            className="block py-2 text-base font-medium text-black no-underline"
                                        >
                                            {link.name}
                                        </Link>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </nav>
        </div>
    );
};

export default Navbar;