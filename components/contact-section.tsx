import Link from "next/link";
import { ContactDetails } from "@/data/site";
import { SectionHeading } from "@/components/section-heading";

export function ContactSection({ details }: { details: ContactDetails }) {
  return (
    <section id="contact" className="section-space pt-12">
      <div className="container-shell">
        <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr]">
          <div className="rounded-[32px] bg-[#fff2d7] p-7 shadow-soft sm:p-9">
            <SectionHeading
              eyebrow="Contact & Reservations"
              title="Reserve a table or ask a quick question"
              description="Encourage direct messages and simple inquiries without making people jump through extra steps."
            />
            <div className="mt-8 space-y-4 text-sm text-espresso/80">
              <div className="rounded-[22px] bg-white/70 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cocoa/60">WhatsApp</p>
                <p className="mt-2 text-base font-medium text-espresso">{details.phone}</p>
              </div>
              <div className="rounded-[22px] bg-white/70 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cocoa/60">Email</p>
                <p className="mt-2 text-base font-medium text-espresso">{details.email}</p>
              </div>
            </div>
            <Link href={details.whatsapp} className="primary-button mt-8 w-full">
              WhatsApp for Fast Replies
            </Link>
          </div>

          <div className="glass-panel p-7 sm:p-10">
            <SectionHeading
              title="Reservation or inquiry form"
              description="This frontend form is ready for later wiring to email, WhatsApp automation, Formspree, or a lightweight booking tool."
            />

            <form className="mt-8 grid gap-5 sm:grid-cols-2">
              <label className="block">
                <span className="mb-2 block text-sm font-medium text-espresso">Name</span>
                <input
                  type="text"
                  name="name"
                  placeholder="Your full name"
                  className="w-full rounded-2xl border border-espresso/10 bg-white px-4 py-3 text-sm text-espresso outline-none transition focus:border-sun-300 focus:ring-2 focus:ring-sun-100"
                />
              </label>

              <label className="block">
                <span className="mb-2 block text-sm font-medium text-espresso">Phone or Email</span>
                <input
                  type="text"
                  name="contact"
                  placeholder="WhatsApp number or email"
                  className="w-full rounded-2xl border border-espresso/10 bg-white px-4 py-3 text-sm text-espresso outline-none transition focus:border-sun-300 focus:ring-2 focus:ring-sun-100"
                />
              </label>

              <label className="block">
                <span className="mb-2 block text-sm font-medium text-espresso">Date / Time</span>
                <input
                  type="text"
                  name="datetime"
                  placeholder="e.g. Friday, 7:00 PM"
                  className="w-full rounded-2xl border border-espresso/10 bg-white px-4 py-3 text-sm text-espresso outline-none transition focus:border-sun-300 focus:ring-2 focus:ring-sun-100"
                />
              </label>

              <label className="block">
                <span className="mb-2 block text-sm font-medium text-espresso">Number of People</span>
                <input
                  type="number"
                  name="partySize"
                  min="1"
                  placeholder="2"
                  className="w-full rounded-2xl border border-espresso/10 bg-white px-4 py-3 text-sm text-espresso outline-none transition focus:border-sun-300 focus:ring-2 focus:ring-sun-100"
                />
              </label>

              <label className="block sm:col-span-2">
                <span className="mb-2 block text-sm font-medium text-espresso">Message</span>
                <textarea
                  name="message"
                  rows={5}
                  placeholder="Tell us about your reservation, special request, or anything else we should know."
                  className="w-full rounded-[24px] border border-espresso/10 bg-white px-4 py-3 text-sm text-espresso outline-none transition focus:border-sun-300 focus:ring-2 focus:ring-sun-100"
                />
              </label>

              <div className="sm:col-span-2 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-sm text-espresso/65">Sample frontend form for now. Connect to your preferred inquiry flow later.</p>
                <button type="submit" className="primary-button">
                  Send Inquiry
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
