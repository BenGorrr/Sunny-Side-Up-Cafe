import { GalleryItem } from "@/data/site";
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
          {items.map((item, index) => (
            <PlaceholderImage
              key={item.title}
              title={item.title}
              subtitle={item.subtitle}
              className={index === 0 || index === 5 ? "min-h-80" : "min-h-64"}
              tone={item.tone}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
