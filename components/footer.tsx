import Link from "next/link";
import { ContactDetails } from "@/data/site";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Updates", href: "#updates" },
  { label: "Visit Us", href: "#visit-us" },
  { label: "Contact", href: "#contact" },
];

export function Footer({ details }: { details: ContactDetails }) {
  return (
    <footer className="mt-16 border-t border-espresso/10 bg-white/70 py-10">
      <div className="container-shell grid gap-8 lg:grid-cols-[1fr_0.75fr_0.85fr_0.85fr]">
        <div>
          <p className="text-xl font-semibold text-espresso">Sunny Side Up Cafe</p>
          <p className="mt-3 max-w-sm text-sm leading-7 text-espresso/72">
            The official site is being prepared. In the meantime, you can still find our location, opening hours, and
            WhatsApp contact here.
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cocoa/60">Quick Links</p>
          <div className="mt-4 flex flex-col gap-3 text-sm text-espresso/75">
            {quickLinks.map((link) => (
              <Link key={link.label} href={link.href} className="transition hover:text-espresso">
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cocoa/60">Contact</p>
          <div className="mt-4 space-y-3 text-sm text-espresso/75">
            <p>{details.address}</p>
            <p>{details.phone}</p>
            <p>{details.email}</p>
            <Link href={details.whatsapp} className="font-semibold text-cocoa transition hover:text-espresso">
              WhatsApp Us
            </Link>
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cocoa/60">Opening Hours</p>
          <div className="mt-4 space-y-3 text-sm text-espresso/75">
            {details.hours.map((item) => (
              <div key={item.day}>
                <p>{item.day}</p>
                <p className="font-medium text-espresso">{item.hours}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="container-shell mt-8 border-t border-espresso/10 pt-6 text-sm text-espresso/60">
        <p>(c) 2026 Sunny Side Up Cafe. All rights reserved.</p>
      </div>
    </footer>
  );
}
