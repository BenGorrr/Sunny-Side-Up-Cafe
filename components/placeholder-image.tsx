type PlaceholderImageProps = {
  title: string;
  subtitle: string;
  className?: string;
  tone?: string;
};

export function PlaceholderImage({
  title,
  subtitle,
  className = "",
  tone = "from-[#ffe29a] via-[#ffc95b] to-[#f2a65a]",
}: PlaceholderImageProps) {
  return (
    <div
      className={`relative overflow-hidden rounded-[24px] bg-gradient-to-br ${tone} ${className}`}
      aria-hidden="true"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.35),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.2),transparent_22%)]" />
      <div className="absolute inset-x-5 bottom-5 rounded-2xl border border-white/45 bg-white/25 p-4 backdrop-blur-sm">
        <p className="text-sm font-semibold text-espresso">{title}</p>
        <p className="mt-1 text-xs uppercase tracking-[0.2em] text-espresso/70">{subtitle}</p>
      </div>
    </div>
  );
}
