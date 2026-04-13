"use client";

import { ContactDetails } from "@/data/site";
import Link from "next/link";
import { useState } from "react";

const navLinks = [
    { label: "Home", href: "#home" },
    { label: "Menu", href: "#menu" },
    { label: "Promotions", href: "#promotions" },
    { label: "About", href: "#about" },
    { label: "Visit Us", href: "#visit-us" },
    { label: "Contact", href: "#contact" },
];

export function Navbar({ details }: { details: ContactDetails }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 border-b border-white/60 bg-cream/85 backdrop-blur-xl">
            <div className="container-shell">
                <nav
                    className="flex items-center justify-between py-4"
                    aria-label="Primary"
                >
                    <Link
                        href="#home"
                        className="text-lg font-semibold tracking-wide text-espresso sm:text-xl"
                    >
                        Sunny Side Up Cafe
                    </Link>

                    <div className="hidden items-center gap-7 lg:flex">
                        {navLinks.map((link) => (
                            <Link
                                key={link.label}
                                href={link.href}
                                className="text-sm font-medium text-espresso/75 transition hover:text-espresso"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    <div className="hidden lg:block">
                        <Link
                            href={details.whatsapp}
                            className="primary-button"
                        >
                            WhatsApp Us
                        </Link>
                    </div>

                    <button
                        type="button"
                        className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-espresso/15 bg-white text-espresso lg:hidden"
                        onClick={() => setIsOpen((open) => !open)}
                        aria-expanded={isOpen}
                        aria-controls="mobile-menu"
                        aria-label="Toggle navigation menu"
                    >
                        <span className="space-y-1.5">
                            <span className="block h-0.5 w-5 bg-current" />
                            <span className="block h-0.5 w-5 bg-current" />
                            <span className="block h-0.5 w-5 bg-current" />
                        </span>
                    </button>
                </nav>

                {isOpen ? (
                    <div
                        id="mobile-menu"
                        className="glass-panel mb-4 p-4 lg:hidden"
                    >
                        <div className="flex flex-col gap-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.label}
                                    href={link.href}
                                    className="text-sm font-medium text-espresso/80"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.label}
                                </Link>
                            ))}
                            <Link
                                href={details.whatsapp}
                                className="primary-button w-full"
                                onClick={() => setIsOpen(false)}
                            >
                                WhatsApp Us
                            </Link>
                        </div>
                    </div>
                ) : null}
            </div>
        </header>
    );
}
