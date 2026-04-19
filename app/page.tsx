import type { Metadata } from "next";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { SectionHeading } from "@/components/section-heading";
import {
    contactDetails,
} from "@/data/site";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Sunny Side Up Cafe in Brickfields, Kuala Lumpur",
    description: "Official website for Sunny Side Up Cafe in Brickfields, Kuala Lumpur. Find our location, opening hours, and WhatsApp contact while the full menu and gallery are being prepared.",
    alternates: {
        canonical: "/",
    },
};

export default function Home() {
    const localBusinessSchema = {
        "@context": "https://schema.org",
        "@type": "CafeOrCoffeeShop",
        name: "Sunny Side Up Cafe",
        url: "https://sunnysideupcafe.my",
        telephone: contactDetails.phone,
        email: contactDetails.email,
        description:
            "Sunny Side Up Cafe in Brickfields, Kuala Lumpur. Visit for location details, opening hours, and WhatsApp contact while the full website is being prepared.",
        servesCuisine: ["Brunch", "Cafe", "Coffee", "Desserts"],
        address: {
            "@type": "PostalAddress",
            streetAddress: "6, Riveria City, LG-08, 5, Jalan Tun Sambanthan, Brickfields",
            postalCode: "50470",
            addressLocality: "Kuala Lumpur",
            addressRegion: "Wilayah Persekutuan Kuala Lumpur",
            addressCountry: "MY",
        },
        openingHoursSpecification: [
            {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: "Monday",
                opens: "09:30",
                closes: "17:00",
            },
            {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                opens: "09:30",
                closes: "17:00",
            },
        ],
        sameAs: [contactDetails.whatsapp, contactDetails.mapUrl],
    };

    return (
        <div className="relative overflow-x-clip">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
            />
            <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[42rem] bg-sunrise-glow" />
            <Navbar details={contactDetails} />
            <main>
                <section id="home" className="section-space pb-12 pt-10 sm:pt-14 lg:pb-20">
                    <div className="container-shell">
                        <div className="grid items-center gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:gap-14">
                            <div>
                                <div className="inline-flex items-center rounded-full border border-sun-200 bg-white/80 px-4 py-2 text-sm font-medium text-cocoa shadow-soft">
                                    Official website in progress
                                </div>
                                <h1 className="mt-6 max-w-3xl text-5xl font-semibold leading-[1.05] text-espresso sm:text-6xl">
                                    Sunny Side Up Cafe is getting its full website ready.
                                </h1>
                                <p className="mt-6 max-w-2xl text-lg leading-8 text-espresso/75">
                                    We&apos;re keeping the essentials live while we prepare the full experience. You can
                                    still find our real location, opening hours, and direct WhatsApp contact right
                                    here.
                                </p>

                                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                                    <a
                                        href={contactDetails.whatsapp}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="primary-button"
                                    >
                                        WhatsApp Us
                                    </a>
                                    <a
                                        href={contactDetails.mapUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="secondary-button"
                                    >
                                        Get Directions
                                    </a>
                                </div>

                                <div className="mt-8 grid gap-3 sm:grid-cols-3">
                                    <div className="rounded-[22px] border border-white/70 bg-white/80 p-4 shadow-soft">
                                        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cocoa/60">
                                            Location
                                        </p>
                                        <p className="mt-2 text-base font-semibold text-espresso">Brickfields</p>
                                        <p className="mt-1 text-sm text-espresso/65">Kuala Lumpur</p>
                                    </div>
                                    <div className="rounded-[22px] border border-white/70 bg-white/80 p-4 shadow-soft">
                                        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cocoa/60">
                                            Hours
                                        </p>
                                        <p className="mt-2 text-base font-semibold text-espresso">9:30 AM - 5:00 PM</p>
                                        <p className="mt-1 text-sm text-espresso/65">Tuesday closed</p>
                                    </div>
                                    <div className="rounded-[22px] border border-white/70 bg-white/80 p-4 shadow-soft">
                                        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cocoa/60">
                                            Contact
                                        </p>
                                        <p className="mt-2 text-base font-semibold text-espresso">Fast replies</p>
                                        <p className="mt-1 text-sm text-espresso/65">WhatsApp or email</p>
                                    </div>
                                </div>
                            </div>

                            <div className="relative">
                                <div className="absolute -left-4 top-6 h-24 w-24 rounded-full bg-sun-200/70 blur-2xl sm:-left-10 sm:h-36 sm:w-36" />
                                <div className="absolute -right-4 bottom-10 h-28 w-28 rounded-full bg-[#f5d9bf] blur-2xl sm:-right-8 sm:h-44 sm:w-44" />
                                <div className="glass-panel relative overflow-hidden p-6 sm:p-8">
                                    <div className="rounded-[28px] bg-[linear-gradient(140deg,#fff3cf_0%,#ffe29d_34%,#efbf75_68%,#c9844b_100%)] p-8 text-espresso shadow-card sm:p-10">
                                        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cocoa/70">
                                            Soft Launch
                                        </p>
                                        <div className="mt-8 space-y-4">
                                            <div className="rounded-[22px] border border-white/50 bg-white/55 p-5 backdrop-blur">
                                                <p className="text-sm font-semibold text-espresso">
                                                    The full menu, gallery, and feature pages are still being prepared.
                                                </p>
                                            </div>
                                            <div className="rounded-[22px] border border-white/50 bg-white/55 p-5 backdrop-blur">
                                                <p className="text-sm font-semibold text-espresso">
                                                    Real location, opening hours, and contact details are already live.
                                                </p>
                                            </div>
                                            <div className="rounded-[22px] border border-white/50 bg-white/55 p-5 backdrop-blur">
                                                <p className="text-sm font-semibold text-espresso">
                                                    Reach out on WhatsApp for reservations and quick questions.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="absolute bottom-10 left-10 right-10 rounded-[24px] border border-white/55 bg-white/90 p-5 shadow-card backdrop-blur">
                                        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cocoa/65">
                                            Thank you for visiting
                                        </p>
                                        <p className="mt-3 text-base leading-7 text-espresso/75">
                                            The site is being refined with real cafe content and visuals. Until then,
                                            this page keeps the essentials easy to find.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="about" className="section-space py-12">
                    <div className="container-shell">
                        <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr]">
                            <div className="glass-panel p-7 sm:p-10">
                                <SectionHeading
                                    eyebrow="About"
                                    title="A warm, real home page while the full site catches up"
                                    description="Sunny Side Up Cafe is open, but some website content still needs proper photography and finalized menu details. Rather than publish placeholders, we&apos;re keeping a cleaner landing page with only confirmed information."
                                />
                            </div>

                            <div className="grid gap-4 sm:grid-cols-2">
                                <div className="rounded-[28px] bg-[#fff2d7] p-6 shadow-soft">
                                    <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cocoa/65">
                                        What&apos;s live now
                                    </p>
                                    <p className="mt-4 text-base leading-7 text-espresso/80">
                                        Our cafe name, location in Brickfields, opening hours, map link, phone number,
                                        email, and WhatsApp contact are all current.
                                    </p>
                                </div>
                                <div className="rounded-[28px] bg-white/85 p-6 shadow-soft">
                                    <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cocoa/65">
                                        What&apos;s coming soon
                                    </p>
                                    <p className="mt-4 text-base leading-7 text-espresso/80">
                                        The full menu, photo gallery, and richer storytelling are being prepared so the
                                        site reflects the cafe accurately.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="updates" className="section-space py-12">
                    <div className="container-shell">
                        <div className="rounded-[32px] border border-white/70 bg-white/80 p-7 shadow-soft sm:p-10">
                            <SectionHeading
                                eyebrow="Website Update"
                                title="We&apos;re building the full experience in stages"
                                description="This temporary landing page is here so customers can still reach the cafe easily while the rest of the website is being finished."
                            />

                            <div className="mt-8 grid gap-4 lg:grid-cols-3">
                                <div className="rounded-[24px] border border-espresso/10 bg-cream/70 p-5">
                                    <p className="text-sm font-semibold text-espresso">Menu content</p>
                                    <p className="mt-2 text-sm leading-7 text-espresso/70">
                                        Final dish and drink listings will be added once they&apos;re confirmed and ready
                                        to publish.
                                    </p>
                                </div>
                                <div className="rounded-[24px] border border-espresso/10 bg-cream/70 p-5">
                                    <p className="text-sm font-semibold text-espresso">Photography</p>
                                    <p className="mt-2 text-sm leading-7 text-espresso/70">
                                        We&apos;re waiting on real interior, food, and drink visuals instead of using
                                        placeholders.
                                    </p>
                                </div>
                                <div className="rounded-[24px] border border-espresso/10 bg-cream/70 p-5">
                                    <p className="text-sm font-semibold text-espresso">Customer contact</p>
                                    <p className="mt-2 text-sm leading-7 text-espresso/70">
                                        Reservations and quick questions can already be handled through WhatsApp while
                                        the rest is being completed.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="visit-us" className="section-space py-12">
                    <div className="container-shell">
                        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-stretch">
                            <div className="glass-panel p-7 sm:p-10">
                                <SectionHeading
                                    eyebrow="Visit Us"
                                    title="Everything you need to find us is already here"
                                    description="If you&apos;re planning a visit, these are the details to keep handy."
                                />

                                <div className="mt-8 space-y-6 text-sm text-espresso/80">
                                    <div>
                                        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cocoa/60">
                                            Address
                                        </p>
                                        <p className="mt-2 text-base leading-7 text-espresso">{contactDetails.address}</p>
                                    </div>
                                    <div>
                                        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cocoa/60">
                                            Opening Hours
                                        </p>
                                        <div className="mt-3 space-y-2">
                                            {contactDetails.hours.map((item) => (
                                                <div key={item.day} className="flex items-center justify-between gap-4">
                                                    <span>{item.day}</span>
                                                    <span className="font-medium text-espresso">{item.hours}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="grid gap-5 sm:grid-cols-2">
                                        <div>
                                            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cocoa/60">
                                                Phone
                                            </p>
                                            <p className="mt-2 text-base font-medium text-espresso">
                                                {contactDetails.phone}
                                            </p>
                                        </div>
                                        <div>
                                            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cocoa/60">
                                                Nearby Landmark
                                            </p>
                                            <p className="mt-2 text-base text-espresso">{contactDetails.landmark}</p>
                                        </div>
                                    </div>
                                    <div>
                                        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cocoa/60">
                                            Parking Note
                                        </p>
                                        <p className="mt-2 text-base leading-7 text-espresso">{contactDetails.parking}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="rounded-[32px] bg-[#fff2d7] p-7 shadow-soft sm:p-10">
                                <SectionHeading
                                    eyebrow="Contact"
                                    title="Reach us directly"
                                    description="For reservations, availability questions, or quick directions, the fastest path is still a direct message."
                                />

                                <div className="mt-8 space-y-4 text-sm text-espresso/80">
                                    <div className="rounded-[22px] bg-white/75 p-5">
                                        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cocoa/60">
                                            WhatsApp
                                        </p>
                                        <p className="mt-2 text-base font-medium text-espresso">{contactDetails.phone}</p>
                                    </div>
                                    <div className="rounded-[22px] bg-white/75 p-5">
                                        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cocoa/60">
                                            Email
                                        </p>
                                        <p className="mt-2 text-base font-medium text-espresso">{contactDetails.email}</p>
                                    </div>
                                </div>

                                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                                    <a
                                        href={contactDetails.whatsapp}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="primary-button"
                                    >
                                        Message on WhatsApp
                                    </a>
                                    <a
                                        href={contactDetails.mapUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="secondary-button"
                                    >
                                        Open Map
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="contact" className="section-space pt-12">
                    <div className="container-shell">
                        <div className="rounded-[32px] border border-white/70 bg-white/85 p-8 shadow-soft sm:p-10">
                            <SectionHeading
                                eyebrow="Thank You"
                                title="The full Sunny Side Up Cafe website is on the way"
                                description="Until the menu and images are ready, this page keeps the essentials simple and reliable. We&apos;d still love to hear from you."
                                align="center"
                            />
                            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                                <a
                                    href={contactDetails.whatsapp}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="primary-button"
                                >
                                    Contact the Cafe
                                </a>
                                <Link href={`mailto:${contactDetails.email}`} className="secondary-button">
                                    Email Us
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer details={contactDetails} />
        </div>
    );
}
