import Link from "next/link";
import { PlaceholderImage } from "@/components/placeholder-image";
import { SectionHeading } from "@/components/section-heading";

export function AboutSection() {
  return (
    <section id="about" className="section-space">
      <div className="container-shell">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-14">
          <div className="grid gap-4 sm:grid-cols-2">
            <PlaceholderImage
              title="Cafe interior placeholder"
              subtitle="Warm daylight seating"
              className="min-h-64"
              tone="from-[#fff0c8] via-[#f4dba2] to-[#d4aa70]"
            />
            <PlaceholderImage
              title="Kitchen detail placeholder"
              subtitle="Fresh ingredients"
              className="min-h-64 sm:translate-y-10"
              tone="from-[#f8d8b4] via-[#e8b377] to-[#aa7147]"
            />
          </div>

          <div className="glass-panel p-7 sm:p-10">
            <SectionHeading
              eyebrow="About Sunny Side Up"
              title="A neighborhood cafe built for easy, memorable moments"
              description="We started Sunny Side Up Cafe to create the kind of place we always wanted nearby: bright mornings, comforting plates, friendly conversations, and coffee worth making time for."
            />
            <p className="mt-6 text-base leading-8 text-espresso/75">
              From fresh ingredients and house-made touches to a cozy room that feels inviting from the moment you step
              inside, everything is designed to make casual breakfasts, family lunches, and quiet coffee breaks feel a
              little more special.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="#visit-us" className="primary-button">
                Plan Your Visit
              </Link>
              <Link href="#contact" className="secondary-button">
                Ask About Reservations
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
