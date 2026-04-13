import { SectionHeading } from "@/components/section-heading";
import { Testimonial } from "@/data/site";

export function TestimonialSection({ testimonials }: { testimonials: Testimonial[] }) {
  return (
    <section className="section-space">
      <div className="container-shell">
        <SectionHeading
          eyebrow="Testimonials"
          title="Guests remember how the cafe makes them feel"
          description="Warm, realistic social proof helps new visitors feel more confident about trying the cafe, booking a table, or messaging for details."
        />

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <blockquote key={testimonial.name} className="rounded-[28px] border border-white/70 bg-white/85 p-7 shadow-soft">
              <p className="text-base leading-8 text-espresso/80">&ldquo;{testimonial.quote}&rdquo;</p>
              <footer className="mt-6 border-t border-espresso/10 pt-5">
                <p className="text-base font-semibold text-espresso">{testimonial.name}</p>
                <p className="mt-1 text-sm text-cocoa/75">{testimonial.role}</p>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
