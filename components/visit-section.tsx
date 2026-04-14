import Link from "next/link";
import { ContactDetails } from "@/data/site";
import { PlaceholderImage } from "@/components/placeholder-image";
import { SectionHeading } from "@/components/section-heading";

export function VisitSection({ details }: { details: ContactDetails }) {
  return (
    <section id="visit-us" className="section-space">
      <div className="container-shell">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-stretch">
          <div className="glass-panel p-7 sm:p-10">
            <SectionHeading
              eyebrow="Visit Us"
              title="Easy to find, easy to love, easy to return to"
              description="Make it simple for first-time visitors to know where you are, when you're open, and why stopping by will feel convenient."
            />

            <div className="mt-8 space-y-6 text-sm text-espresso/80">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cocoa/60">Address</p>
                <p className="mt-2 text-base leading-7 text-espresso">{details.address}</p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cocoa/60">Opening Hours</p>
                <div className="mt-3 space-y-2">
                  {details.hours.map((item) => (
                    <div key={item.day} className="flex items-center justify-between gap-4">
                      <span>{item.day}</span>
                      <span className="font-medium text-espresso">{item.hours}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cocoa/60">Phone</p>
                  <p className="mt-2 text-base font-medium text-espresso">{details.phone}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cocoa/60">Nearby Landmark</p>
                  <p className="mt-2 text-base text-espresso">{details.landmark}</p>
                </div>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cocoa/60">Parking Note</p>
                <p className="mt-2 text-base leading-7 text-espresso">{details.parking}</p>
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href={details.mapUrl} className="primary-button">
                Get Directions
              </Link>
              <Link href={details.whatsapp} className="secondary-button">
                Message on WhatsApp
              </Link>
            </div>
          </div>

          <div className="glass-panel p-4 sm:p-5">
            <PlaceholderImage
              title="Map or storefront placeholder"
              subtitle="Replace with embedded map or exterior photo"
              className="min-h-[24rem] sm:min-h-[32rem]"
              tone="from-[#f6dfb0] via-[#e0b981] to-[#9b7249]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
