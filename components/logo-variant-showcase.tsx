import { BrandLogo } from "@/components/brand-logo";

const logoVariants = [
  {
    title: "Horizontal",
    description: "Best for navbars, website headers, and menu covers.",
    variant: "horizontal" as const,
    className: "h-16 w-auto sm:h-20",
  },
  {
    title: "Stacked",
    description: "A more poster-like lockup for signs, stickers, and print.",
    variant: "stacked" as const,
    className: "h-36 w-auto",
  },
  {
    title: "Badge",
    description: "Compact social icon version for avatars and favicons.",
    variant: "badge" as const,
    className: "h-28 w-28",
  },
];

export function LogoVariantShowcase() {
  return (
    <section className="section-space pt-8 sm:pt-10">
      <div className="container-shell">
        <div className="glass-panel overflow-hidden border border-sun-100/80 p-6 sm:p-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cocoa/60">Brand kit</p>
            <h2 className="mt-3 text-3xl font-semibold text-espresso sm:text-4xl">
              Logo variants built from your Instagram identity
            </h2>
            <p className="mt-4 text-base leading-7 text-espresso/72 sm:text-lg">
              We kept the soft blue lettering, the warm egg-yolk yellow, and the playful bowl sunrise motif, then
              shaped them into a small system that works across the web, social profiles, and printed pieces.
            </p>
          </div>

          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            {logoVariants.map((logo) => (
              <div
                key={logo.title}
                className="rounded-[28px] border border-white/75 bg-white/88 p-5 shadow-soft"
              >
                <div className="flex min-h-44 items-center justify-center rounded-[22px] bg-[radial-gradient(circle_at_top,_rgba(255,233,139,0.42),_transparent_52%),linear-gradient(180deg,#fffdf8_0%,#fff8ed_100%)] p-4">
                  <BrandLogo variant={logo.variant} className={logo.className} />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-espresso">{logo.title}</h3>
                <p className="mt-2 text-sm leading-6 text-espresso/70">{logo.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
