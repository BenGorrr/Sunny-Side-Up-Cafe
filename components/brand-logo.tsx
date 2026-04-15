import type { SVGProps } from "react";

type BrandLogoVariant = "horizontal" | "stacked" | "badge";

type BrandLogoProps = SVGProps<SVGSVGElement> & {
  showCafeLabel?: boolean;
  variant?: BrandLogoVariant;
};

const BLUE = "#5F7FD8";
const YELLOW = "#FFE98B";
const BROWN = "#7B5C44";
const FONT_STACK = "'Trebuchet MS', 'Arial Rounded MT Bold', sans-serif";

function BowlSunIcon({
  x,
  y,
  scale = 1,
}: {
  x: number;
  y: number;
  scale?: number;
}) {
  return (
    <g transform={`translate(${x} ${y}) scale(${scale})`}>
      <ellipse cx="23" cy="34" rx="20" ry="7" fill={BLUE} opacity="0.18" />
      <path d="M0 18c0 15 10 27 23 27s23-12 23-27" fill={BLUE} />
      <path d="M7 19c2 9 9 15 16 15s14-6 16-15" fill={YELLOW} />
      <path d="M0 18h46" stroke={BLUE} strokeLinecap="round" strokeWidth="4" />
    </g>
  );
}

function HorizontalLogo({ showCafeLabel }: { showCafeLabel: boolean }) {
  return (
    <>
      <circle cx="49" cy="90" r="32" fill={YELLOW} opacity="0.7" />
      <text x="24" y="112" fill={BLUE} fontFamily={FONT_STACK} fontSize="88" fontWeight="700">
        S
      </text>
      <text x="77" y="73" fill={BLUE} fontFamily={FONT_STACK} fontSize="40" fontWeight="700" letterSpacing="2">
        SUNNY
      </text>
      <text x="86" y="116" fill={BLUE} fontFamily={FONT_STACK} fontSize="42" fontWeight="700" letterSpacing="1.5">
        SIDE
      </text>
      <text x="230" y="116" fill={BLUE} fontFamily={FONT_STACK} fontSize="42" fontWeight="700" letterSpacing="1.5">
        UP
      </text>
      <BowlSunIcon x={246} y={62} />
      {showCafeLabel ? (
        <text x="86" y="140" fill={BROWN} fontFamily="var(--font-body), sans-serif" fontSize="14" fontWeight="700" letterSpacing="5">
          CAFE
        </text>
      ) : null}
    </>
  );
}

function StackedLogo({ showCafeLabel }: { showCafeLabel: boolean }) {
  return (
    <>
      <circle cx="80" cy="70" r="34" fill={YELLOW} opacity="0.78" />
      <text x="54" y="95" fill={BLUE} fontFamily={FONT_STACK} fontSize="96" fontWeight="700">
        S
      </text>
      <text x="120" y="86" fill={BLUE} fontFamily={FONT_STACK} fontSize="44" fontWeight="700" letterSpacing="2">
        SUNNY
      </text>
      <text x="84" y="136" fill={BLUE} fontFamily={FONT_STACK} fontSize="46" fontWeight="700" letterSpacing="1.5">
        SIDE
      </text>
      <text x="222" y="136" fill={BLUE} fontFamily={FONT_STACK} fontSize="46" fontWeight="700" letterSpacing="1.5">
        UP
      </text>
      <BowlSunIcon x={238} y={82} />
      {showCafeLabel ? (
        <text x="122" y="176" fill={BROWN} fontFamily="var(--font-body), sans-serif" fontSize="18" fontWeight="700" letterSpacing="6">
          CAFE
        </text>
      ) : null}
    </>
  );
}

function BadgeLogo({ showCafeLabel }: { showCafeLabel: boolean }) {
  return (
    <>
      <rect x="18" y="18" width="164" height="164" rx="40" fill="#FFF8D9" />
      <circle cx="72" cy="68" r="28" fill={YELLOW} opacity="0.88" />
      <text x="48" y="92" fill={BLUE} fontFamily={FONT_STACK} fontSize="78" fontWeight="700">
        S
      </text>
      <BowlSunIcon x={82} y={98} scale={0.95} />
      {showCafeLabel ? (
        <>
          <text x="70" y="72" fill={BLUE} fontFamily={FONT_STACK} fontSize="22" fontWeight="700" letterSpacing="1.2">
            SUNNY
          </text>
          <text x="48" y="160" fill={BROWN} fontFamily="var(--font-body), sans-serif" fontSize="16" fontWeight="700" letterSpacing="3.5">
            CAFE
          </text>
        </>
      ) : null}
    </>
  );
}

export function BrandLogo({
  className,
  showCafeLabel = true,
  variant = "horizontal",
  ...props
}: BrandLogoProps) {
  const viewBox =
    variant === "horizontal"
      ? "0 0 360 150"
      : variant === "stacked"
        ? "0 0 360 190"
        : "0 0 200 200";

  return (
    <svg
      viewBox={viewBox}
      role="img"
      aria-label="Sunny Side Up Cafe"
      className={className}
      {...props}
    >
      <title>Sunny Side Up Cafe</title>
      <g fill="none" fillRule="evenodd">
        {variant === "horizontal" ? <HorizontalLogo showCafeLabel={showCafeLabel} /> : null}
        {variant === "stacked" ? <StackedLogo showCafeLabel={showCafeLabel} /> : null}
        {variant === "badge" ? <BadgeLogo showCafeLabel={showCafeLabel} /> : null}
      </g>
    </svg>
  );
}
