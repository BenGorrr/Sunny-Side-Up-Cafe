type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  const alignment = align === "center" ? "mx-auto text-center" : "";

  return (
    <div className={alignment}>
      {eyebrow ? (
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cocoa/70">{eyebrow}</p>
      ) : null}
      <h2 className="section-heading mt-3">{title}</h2>
      <p className="section-copy">{description}</p>
    </div>
  );
}
