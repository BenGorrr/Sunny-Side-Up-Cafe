import Link from "next/link";
import { MenuItem } from "@/data/site";
import { PlaceholderImage } from "@/components/placeholder-image";
import { SectionHeading } from "@/components/section-heading";

export function FeaturedMenuSection({ items }: { items: MenuItem[] }) {
  return (
    <section id="menu" className="section-space">
      <div className="container-shell">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Best Sellers"
            title="The dishes people come back for"
            description="A handpicked preview of the breakfast plates, drinks, mains, and desserts that keep our tables full and our regulars happy."
          />
          <Link href="https://wa.me/60123456789" className="secondary-button">
            Ask for Full Menu
          </Link>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {items.map((item, index) => (
            <article
              key={item.name}
              className="group overflow-hidden rounded-[28px] border border-white/70 bg-white/85 shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-card"
            >
              <PlaceholderImage
                title={item.art}
                subtitle={item.category}
                className="min-h-56 rounded-none"
                tone={
                  index % 3 === 0
                    ? "from-[#ffe49d] via-[#ffcc73] to-[#f4a261]"
                    : index % 3 === 1
                      ? "from-[#f6dcc6] via-[#d5a572] to-[#8d6242]"
                      : "from-[#fff1d6] via-[#f2d39a] to-[#dda15e]"
                }
              />
              <div className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cocoa/60">{item.category}</p>
                    <h3 className="mt-2 text-2xl font-semibold text-espresso">{item.name}</h3>
                  </div>
                  {item.badge ? (
                    <span className="rounded-full bg-sun-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.15em] text-cocoa">
                      {item.badge}
                    </span>
                  ) : null}
                </div>
                <p className="mt-4 text-sm leading-7 text-espresso/72">{item.description}</p>
                <div className="mt-6 flex items-center justify-between">
                  <span className="text-xl font-semibold text-espresso">{item.price}</span>
                  <Link href="#contact" className="text-sm font-semibold text-cocoa transition group-hover:text-espresso">
                    Reserve & Inquire
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
