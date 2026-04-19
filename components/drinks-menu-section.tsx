import Image from "next/image";
import Link from "next/link";
import { SectionHeading } from "@/components/section-heading";
import { contactDetails } from "@/data/site";

export function DrinksMenuSection() {
  return (
    <section id="drinks-menu" className="section-space pt-6">
      <div className="container-shell">
        <div className="rounded-[32px] border border-white/70 bg-white/80 p-7 shadow-soft sm:p-10">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading
              eyebrow="Drinks Menu"
              title="A full drinks section customers can actually browse"
              description="This keeps the complete drinks menu easy to read while the rest of the site continues filling in with real food photography and updated featured items."
            />
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link href={contactDetails.whatsapp} className="primary-button">
                Ask About Drinks
              </Link>
              <Link href="#contact" className="secondary-button">
                Reserve & Inquire
              </Link>
            </div>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-[1.08fr_0.92fr]">
            <article className="overflow-hidden rounded-[28px] border border-espresso/10 bg-[#fff7d8] shadow-soft">
              <div className="border-b border-espresso/10 px-6 py-5">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cocoa/60">Full Menu</p>
                <h3 className="mt-2 text-2xl font-semibold text-espresso">Coffee, non-coffee, tea, juices, and signatures</h3>
              </div>
              <div className="relative min-h-[32rem] p-4 sm:min-h-[42rem] sm:p-6">
                <Image
                  src="/content/drinks-menu.png"
                  alt="Sunny Side Up Cafe drinks menu"
                  fill
                  sizes="(min-width: 1024px) 55vw, 100vw"
                  className="object-contain p-4 sm:p-6"
                />
              </div>
            </article>

            <div className="grid gap-6">
              <article className="overflow-hidden rounded-[28px] border border-espresso/10 bg-[#fff6cf] shadow-soft">
                <div className="border-b border-espresso/10 px-6 py-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cocoa/60">Signature Drinks</p>
                  <h3 className="mt-2 text-2xl font-semibold text-espresso">A clearer look at the current standouts</h3>
                </div>
                <div className="relative min-h-[22rem] p-4 sm:min-h-[28rem] sm:p-6">
                  <Image
                    src="/content/signature-drinks.png"
                    alt="Sunny Side Up Cafe signature drinks"
                    fill
                    sizes="(min-width: 1024px) 32vw, 100vw"
                    className="object-contain p-4 sm:p-6"
                  />
                </div>
              </article>

              <article className="rounded-[28px] bg-[#fff2d7] p-6 shadow-soft">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cocoa/60">For The Website Later</p>
                <h3 className="mt-2 text-2xl font-semibold text-espresso">What we can upgrade next</h3>
                <p className="mt-4 text-sm leading-7 text-espresso/75">
                  Once the owner shares individual drink shots, we can swap the poster-style menu visuals here for cleaner product images while keeping this section structure.
                </p>
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-[20px] bg-white/70 p-4">
                    <p className="text-sm font-semibold text-espresso">Best next asset</p>
                    <p className="mt-2 text-sm leading-6 text-espresso/70">1 close-up photo per signature drink</p>
                  </div>
                  <div className="rounded-[20px] bg-white/70 p-4">
                    <p className="text-sm font-semibold text-espresso">Still works now</p>
                    <p className="mt-2 text-sm leading-6 text-espresso/70">This menu section is already usable for preview and launch</p>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
