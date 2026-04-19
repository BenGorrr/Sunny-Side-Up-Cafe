import Link from "next/link";
import Image from "next/image";
import { contactDetails } from "@/data/site";

const quickStats = [
  { label: "Freshly made daily", value: "20+" },
  { label: "Popular brunch dishes", value: "12" },
  { label: "Minutes from the park", value: "3" },
];

export function HeroSection() {
  return (
    <section id="home" className="section-space pb-12 pt-10 sm:pt-14 lg:pb-20">
      <div className="container-shell">
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
          <div>
            <div className="inline-flex items-center rounded-full border border-sun-200 bg-white/80 px-4 py-2 text-sm font-medium text-cocoa shadow-soft">
              Warm brunch, crafted coffee, all-day sunny vibes
            </div>
            <h1 className="mt-6 max-w-2xl text-5xl font-semibold leading-[1.05] text-espresso sm:text-6xl">
              Good food, great coffee, sunny vibes.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-espresso/75">
              Sunny Side Up Cafe is your cozy neighborhood stop for comforting brunch plates, smooth coffee, and easy
              gatherings. Drop by for a slow morning, a quick lunch, or a relaxed catch-up over something delicious.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="#menu" className="primary-button">
                View Menu
              </Link>
              <Link href={contactDetails.whatsapp} className="secondary-button">
                WhatsApp Us
              </Link>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {quickStats.map((stat) => (
                <div key={stat.label} className="rounded-[22px] border border-white/70 bg-white/80 p-4 shadow-soft">
                  <p className="text-2xl font-semibold text-espresso">{stat.value}</p>
                  <p className="mt-1 text-sm text-espresso/65">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-4 top-6 h-24 w-24 rounded-full bg-sun-200/70 blur-2xl sm:-left-10 sm:h-36 sm:w-36" />
            <div className="absolute -right-4 bottom-10 h-28 w-28 rounded-full bg-[#f5d9bf] blur-2xl sm:-right-8 sm:h-44 sm:w-44" />
            <div className="glass-panel relative overflow-hidden p-4 sm:p-5">
              <div className="relative min-h-[22rem] overflow-hidden rounded-[24px] sm:min-h-[28rem]">
                <Image
                  src="/content/house-specials-clean.png"
                  alt="Sunny Side Up Cafe house specials featuring Banana Matcha and Peanut Panic drinks"
                  fill
                  priority
                  sizes="(min-width: 1024px) 42vw, 100vw"
                  className="object-cover"
                  style={{ objectPosition: "center 72%" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-espresso/16 via-transparent to-transparent" />
              </div>
              <div className="absolute bottom-8 left-8 right-8 rounded-[24px] border border-white/55 bg-white/88 p-5 shadow-card backdrop-blur">
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cocoa/65">House specials</p>
                <div className="mt-3 flex items-end justify-between gap-4">
                  <div>
                    <p className="text-xl font-semibold text-espresso">Banana Matcha & Peanut Panic</p>
                    <p className="mt-1 text-sm text-espresso/70">Two of the drinks currently leading the menu highlights.</p>
                  </div>
                  <span className="rounded-full bg-sun-100 px-3 py-1 text-sm font-semibold text-cocoa">From RM16</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
