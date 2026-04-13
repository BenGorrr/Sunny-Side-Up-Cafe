import Link from "next/link";
import { PlaceholderImage } from "@/components/placeholder-image";

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
              <Link href="https://wa.me/60123456789" className="secondary-button">
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
            <div className="glass-panel relative p-4 sm:p-5">
              <PlaceholderImage
                title="Hero food and coffee placeholder"
                subtitle="Replace with signature cafe photography"
                className="min-h-[22rem] sm:min-h-[28rem]"
                tone="from-[#ffe9a9] via-[#ffc95b] to-[#e89852]"
              />
              <div className="absolute bottom-8 left-8 right-8 rounded-[24px] border border-white/55 bg-white/88 p-5 shadow-card backdrop-blur">
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cocoa/65">Today&apos;s favorite</p>
                <div className="mt-3 flex items-end justify-between gap-4">
                  <div>
                    <p className="text-xl font-semibold text-espresso">Brown Sugar Sea Salt Latte</p>
                    <p className="mt-1 text-sm text-espresso/70">Creamy, balanced, and made for repeat orders.</p>
                  </div>
                  <span className="rounded-full bg-sun-100 px-3 py-1 text-sm font-semibold text-cocoa">$5.80</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
