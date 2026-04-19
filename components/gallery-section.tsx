import { GalleryItem } from "@/data/site";
import Image from "next/image";
import { PlaceholderImage } from "@/components/placeholder-image";
import { SectionHeading } from "@/components/section-heading";

export function GallerySection({ items }: { items: GalleryItem[] }) {
  return (
    <section className="section-space">
      <div className="container-shell">
        <SectionHeading
          eyebrow="Gallery"
          title="A cafe experience people will want to share"
          description="Use this space later for real food photography, interior shots, and social-friendly moments that make first visits feel familiar before they happen."
        />

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, index) =>
            item.imageSrc ? (
              <article
                key={item.title}
                className={`group overflow-hidden rounded-[24px] border border-white/70 bg-white/85 shadow-soft ${
                  index === 0 || index === 5 ? "min-h-80" : "min-h-64"
                }`}
              >
                <div
                  className={`relative ${index === 0 || index === 5 ? "min-h-80" : "min-h-64"} ${
                    item.imagePanelClassName ?? "bg-cream"
                  }`}
                >
                  <Image
                    src={item.imageSrc}
                    alt={item.imageAlt ?? item.title}
                    fill
                    sizes="(min-width: 1024px) 30vw, (min-width: 640px) 48vw, 100vw"
                    className={`transition duration-500 group-hover:scale-[1.02] ${
                      item.imageFit === "contain" ? "object-contain p-4" : "object-cover"
                    }`}
                  />
                </div>
                <div className="border-t border-espresso/10 px-5 py-4">
                  <p className="text-sm font-semibold text-espresso">{item.title}</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.2em] text-espresso/65">{item.subtitle}</p>
                </div>
              </article>
            ) : (
              <PlaceholderImage
                key={item.title}
                title={item.title}
                subtitle={item.subtitle}
                className={index === 0 || index === 5 ? "min-h-80" : "min-h-64"}
                tone={item.tone}
              />
            ),
          )}
        </div>
      </div>
    </section>
  );
}
