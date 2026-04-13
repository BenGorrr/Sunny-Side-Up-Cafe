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

export default function Home() {
    return (
        <div className="relative overflow-x-clip">
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
