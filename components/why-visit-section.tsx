import { SectionHeading } from "@/components/section-heading";
import { VisitHighlight } from "@/data/site";

export function WhyVisitSection({ highlights }: { highlights: VisitHighlight[] }) {
  return (
    <section className="section-space">
      <div className="container-shell">
        <SectionHeading
          eyebrow="Why Visit Us"
          title="Everything people want from a cozy neighborhood cafe"
          description="Clear reasons to choose Sunny Side Up Cafe for breakfast plans, coffee breaks, and comfortable meals with the people who matter."
          align="center"
        />

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
          {highlights.map((item, index) => (
            <article key={item.title} className="rounded-[26px] border border-white/70 bg-white/80 p-6 shadow-soft">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sun-100 text-lg font-semibold text-cocoa">
                0{index + 1}
              </div>
              <h3 className="mt-5 text-xl font-semibold text-espresso">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-espresso/72">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
