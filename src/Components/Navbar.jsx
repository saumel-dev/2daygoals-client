'use client'
import { Button, Link, Dropdown, Avatar, Label } from '@heroui/react';
import { ArrowRightFromSquare } from '@gravity-ui/icons';
import Image from 'next/image';
import React from 'react';
import { usePathname, useRouter } from "next/navigation";
import { authClient } from '@/lib/auth-client';


const Navbar = ({ initialUser }) => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const NavLinks = [
        { name: 'Home', href: '/' },
        { name: 'Product', href: '/product' },
        { name: 'Pricing', href: '/pricing' },
        { name: 'Resource', href: '/resource' },
    ]
    const pathName = usePathname();
    const router = useRouter();

    const { data: session, isPending } = authClient.useSession();
    // While the client hook is still resolving, trust the server-known value.
    // Once it resolves, trust the live client value (handles login/logout without reload).
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

    // shared link classes: gray underline on hover; active route keeps
    // the underline permanently and switches text color to #163300
    const linkClasses = (href) =>
        `no-underline pb-1 transition-colors duration-200 underline-offset-4 ${isActive(href)
            ? 'text-[#163300] underline decoration-gray-400'
            : 'hover:underline hover:decoration-gray-400 hover:no-underline'
        }`;

    return (
        <div>
            <nav className="sticky top-0 z-40 w-full border-separator px-0 md:px-20">
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

                    {/* Auth area: Login/Register when logged out, Avatar dropdown (+ logout button on desktop) when logged in */}
                    <ul className="flex items-center gap-2 md:gap-4">
                        {user ? (
                            <>
                                <li>
                                    <Dropdown className=''>
                                        <Dropdown.Trigger className="rounded-full">
                                            <Avatar className='mt-2'>
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
                                                {/* Logout lives inside the dropdown only on small screens; desktop uses the standalone button below */}
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