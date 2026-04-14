import type { Metadata } from "next";
import { AboutSection } from "@/components/about-section";
import { ContactSection } from "@/components/contact-section";
import { FeaturedMenuSection } from "@/components/featured-menu-section";
import { Footer } from "@/components/footer";
import { GallerySection } from "@/components/gallery-section";
import { HeroSection } from "@/components/hero-section";
import { Navbar } from "@/components/navbar";
import { PromoSection } from "@/components/promo-section";
import { TestimonialSection } from "@/components/testimonial-section";
import { VisitSection } from "@/components/visit-section";
import { WhyVisitSection } from "@/components/why-visit-section";
import {
    contactDetails,
    featuredItems,
    galleryItems,
    promotions,
    testimonials,
    visitHighlights,
} from "@/data/site";

export const metadata: Metadata = {
    title: "Brunch & Coffee in Brickfields, Kuala Lumpur",
    description: "Visit Sunny Side Up Cafe for brunch, coffee, desserts, and easy WhatsApp reservations in Brickfields, Kuala Lumpur.",
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
                <HeroSection />
                <FeaturedMenuSection items={featuredItems} />
                <AboutSection />
                <PromoSection promotions={promotions} />
                <WhyVisitSection highlights={visitHighlights} />
                <GallerySection items={galleryItems} />
                <TestimonialSection testimonials={testimonials} />
                <VisitSection details={contactDetails} />
                <ContactSection details={contactDetails} />
            </main>
            <Footer details={contactDetails} />
        </div>
    );
}
