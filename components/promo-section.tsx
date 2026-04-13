import Link from "next/link";
import { Promotion } from "@/data/site";
import { SectionHeading } from "@/components/section-heading";

export function PromoSection({ promotions }: { promotions: Promotion[] }) {
  return (
    <section id="promotions" className="section-space">
      <div className="container-shell">
        <div className="overflow-hidden rounded-[36px] bg-espresso px-6 py-10 text-white shadow-card sm:px-8 lg:px-12 lg:py-14">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sun-200">Promotions</p>
            <h2 className="mt-3 text-3xl font-semibold leading-tight text-white sm:text-4xl">
              Special offers made to turn a maybe into a visit
            </h2>
            <p className="mt-4 text-base leading-7 text-white/78 sm:text-lg">
              Create a little urgency with limited-time bundles, weekend perks, and easy reasons to stop by sooner.
            </p>
          </div>
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {promotions.map((promo) => (
              <article
                key={promo.title}
                className="rounded-[28px] border border-white/10 bg-white/8 p-6 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:bg-white/12"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-sun-200">{promo.tag}</p>
                <h3 className="mt-4 text-2xl font-semibold text-white">{promo.title}</h3>
                <p className="mt-4 text-sm leading-7 text-white/78">{promo.description}</p>
                <Link href="#contact" className="mt-6 inline-flex text-sm font-semibold text-sun-200 transition hover:text-white">
                  {promo.cta}
                </Link>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
