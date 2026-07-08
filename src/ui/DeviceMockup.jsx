// Abstract, screenshot-free representations of each product's core screen.
// Each is a simple phone/browser frame with blocked-out UI shapes in the
// project's accent color — evokes the interface without depicting a real one.

function Frame({ children, kind = 'phone', className = '' }) {
  if (kind === 'browser') {
    return (
      <svg viewBox="0 0 400 260" className={className} xmlns="http://www.w3.org/2000/svg">
        <rect x="1" y="1" width="398" height="258" rx="12" className="fill-white dark:fill-void-raised" stroke="currentColor" strokeOpacity="0.12" />
        <rect x="1" y="1" width="398" height="30" rx="12" className="fill-paper-dim dark:fill-void-surface" stroke="currentColor" strokeOpacity="0.08" />
        <circle cx="18" cy="16" r="3.5" fill="currentColor" opacity="0.2" />
        <circle cx="30" cy="16" r="3.5" fill="currentColor" opacity="0.2" />
        <circle cx="42" cy="16" r="3.5" fill="currentColor" opacity="0.2" />
        <g transform="translate(0,31)">{children}</g>
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 220 400" className={className} xmlns="http://www.w3.org/2000/svg">
      <rect x="1" y="1" width="218" height="398" rx="26" className="fill-white dark:fill-void-raised" stroke="currentColor" strokeOpacity="0.12" />
      <rect x="80" y="10" width="60" height="8" rx="4" fill="currentColor" opacity="0.12" />
      <g transform="translate(0,26)">{children}</g>
    </svg>
  );
}

export function BankingMockup({ accent, className }) {
  return (
    <Frame kind="phone" className={className}>
      <rect x="18" y="16" width="184" height="88" rx="16" fill={accent} opacity="0.92" />
      <rect x="34" y="34" width="70" height="8" rx="4" fill="white" opacity="0.85" />
      <rect x="34" y="54" width="110" height="16" rx="4" fill="white" opacity="0.95" />
      <rect x="34" y="80" width="50" height="8" rx="4" fill="white" opacity="0.6" />
      <circle cx="184" cy="40" r="10" fill="white" opacity="0.25" />
      {[0, 1, 2].map((i) => (
        <g key={i} transform={`translate(${18 + i * 63},118)`}>
          <rect width="55" height="55" rx="14" className="fill-paper-dim dark:fill-void-surface" stroke="currentColor" strokeOpacity="0.08" />
          <circle cx="27.5" cy="22" r="9" fill={accent} opacity="0.7" />
          <rect x="10" y="38" width="35" height="6" rx="3" fill="currentColor" opacity="0.15" />
        </g>
      ))}
      <rect x="18" y="190" width="184" height="1" fill="currentColor" opacity="0.08" />
      {[0, 1, 2].map((i) => (
        <g key={i} transform={`translate(18, ${206 + i * 44})`}>
          <rect width="36" height="36" rx="10" className="fill-paper-dim dark:fill-void-surface" />
          <rect x="48" y="6" width="90" height="8" rx="4" fill="currentColor" opacity="0.18" />
          <rect x="48" y="20" width="55" height="6" rx="3" fill="currentColor" opacity="0.1" />
          <rect x="160" y="10" width="24" height="8" rx="4" fill={accent} opacity="0.8" />
        </g>
      ))}
    </Frame>
  );
}

export function TravelMockup({ accent, className }) {
  return (
    <Frame kind="browser" className={className}>
      <rect x="0" y="0" width="400" height="229" className="fill-paper dark:fill-void" />
      <rect x="20" y="18" width="360" height="46" rx="12" fill={accent} opacity="0.12" />
      <rect x="36" y="30" width="90" height="8" rx="4" fill={accent} opacity="0.9" />
      <rect x="36" y="44" width="140" height="7" rx="3.5" fill="currentColor" opacity="0.15" />
      <rect x="300" y="28" width="60" height="24" rx="8" fill={accent} opacity="0.95" />
      {[0, 1, 2].map((i) => (
        <g key={i} transform={`translate(${20 + i * 124}, 82)`}>
          <rect width="112" height="72" rx="12" className="fill-white dark:fill-void-raised" stroke="currentColor" strokeOpacity="0.1" />
          <rect x="10" y="10" width="92" height="30" rx="8" fill={accent} opacity={0.25 + i * 0.15} />
          <rect x="10" y="48" width="60" height="7" rx="3.5" fill="currentColor" opacity="0.18" />
          <rect x="10" y="60" width="36" height="6" rx="3" fill="currentColor" opacity="0.12" />
        </g>
      ))}
      <rect x="20" y="168" width="360" height="1" fill="currentColor" opacity="0.08" />
      <rect x="20" y="182" width="140" height="8" rx="4" fill="currentColor" opacity="0.15" />
      <rect x="20" y="198" width="220" height="6" rx="3" fill="currentColor" opacity="0.1" />
    </Frame>
  );
}

export function HabitMockup({ accent, className }) {
  return (
    <Frame kind="phone" className={className}>
      <rect x="18" y="16" width="184" height="30" rx="8" fill="currentColor" opacity="0.06" />
      <rect x="30" y="26" width="70" height="10" rx="5" fill="currentColor" opacity="0.2" />
      <g transform="translate(18,60)">
        <circle cx="92" cy="70" r="70" fill="none" stroke="currentColor" strokeOpacity="0.08" strokeWidth="14" />
        <circle
          cx="92"
          cy="70"
          r="70"
          fill="none"
          stroke={accent}
          strokeWidth="14"
          strokeDasharray="330"
          strokeDashoffset="90"
          strokeLinecap="round"
          transform="rotate(-90 92 70)"
        />
        <rect x="62" y="56" width="60" height="14" rx="4" fill="currentColor" opacity="0.22" />
        <rect x="72" y="78" width="40" height="8" rx="4" fill="currentColor" opacity="0.12" />
      </g>
      {[0, 1, 2, 3].map((i) => (
        <g key={i} transform={`translate(${22 + i * 44}, 212)`}>
          <rect width="34" height="34" rx="10" fill={i < 3 ? accent : 'currentColor'} opacity={i < 3 ? 0.85 : 0.08} />
        </g>
      ))}
      <rect x="18" y="266" width="184" height="1" fill="currentColor" opacity="0.08" />
      <rect x="18" y="282" width="120" height="8" rx="4" fill="currentColor" opacity="0.15" />
      <rect x="18" y="298" width="184" height="40" rx="10" className="fill-paper-dim dark:fill-void-surface" />
    </Frame>
  );
}

export function DashboardMockup({ accent, className }) {
  return (
    <Frame kind="browser" className={className}>
      <rect x="0" y="0" width="400" height="229" className="fill-paper dark:fill-void" />
      <rect x="20" y="18" width="88" height="193" rx="10" className="fill-paper-dim dark:fill-void-surface" />
      {[0, 1, 2, 3].map((i) => (
        <rect key={i} x="32" y={34 + i * 26} width="64" height="8" rx="4" fill={i === 1 ? accent : 'currentColor'} opacity={i === 1 ? 0.85 : 0.12} />
      ))}
      <g transform="translate(120,18)">
        {[0, 1, 2].map((i) => (
          <g key={i} transform={`translate(${i * 88}, 0)`}>
            <rect width="80" height="46" rx="10" className="fill-white dark:fill-void-raised" stroke="currentColor" strokeOpacity="0.1" />
            <rect x="10" y="10" width="30" height="6" rx="3" fill="currentColor" opacity="0.15" />
            <rect x="10" y="22" width="44" height="12" rx="4" fill={accent} opacity="0.8" />
          </g>
        ))}
        <g transform="translate(0,58)">
          <rect width="256" height="90" rx="12" className="fill-white dark:fill-void-raised" stroke="currentColor" strokeOpacity="0.1" />
          {[30, 55, 40, 65, 45, 70, 50].map((h, i) => (
            <rect key={i} x={16 + i * 33} y={80 - h} width="18" height={h} rx="4" fill={accent} opacity={0.3 + i * 0.09} />
          ))}
        </g>
        <g transform="translate(0,156)">
          <rect width="256" height="36" rx="10" className="fill-white dark:fill-void-raised" stroke="currentColor" strokeOpacity="0.1" />
          <rect x="12" y="14" width="90" height="8" rx="4" fill="currentColor" opacity="0.15" />
          <rect x="190" y="14" width="50" height="8" rx="4" fill={accent} opacity="0.7" />
        </g>
      </g>
    </Frame>
  );
}

export function LaundryMockup({ accent, className }) {
  return (
    <Frame kind="phone" className={className}>
      <rect x="18" y="16" width="184" height="40" rx="10" fill="currentColor" opacity="0.05" />
      <circle cx="40" cy="36" r="12" fill={accent} opacity="0.85" />
      <rect x="60" y="28" width="70" height="8" rx="4" fill="currentColor" opacity="0.2" />
      <rect x="60" y="42" width="46" height="6" rx="3" fill="currentColor" opacity="0.12" />
      <rect x="164" y="26" width="38" height="20" rx="8" fill={accent} opacity="0.15" />
      {[0, 1, 2, 3].map((i) => (
        <g key={i} transform={`translate(18, ${68 + i * 60})`}>
          <rect width="184" height="52" rx="14" className="fill-white dark:fill-void-raised" stroke="currentColor" strokeOpacity="0.08" />
          <circle cx="26" cy="26" r="14" fill={accent} opacity={0.2 + i * 0.15} />
          <rect x="50" y="14" width="80" height="8" rx="4" fill="currentColor" opacity="0.18" />
          <rect x="50" y="28" width="55" height="6" rx="3" fill="currentColor" opacity="0.1" />
          <rect x="146" y="18" width="28" height="16" rx="8" fill={i === 0 ? accent : 'currentColor'} opacity={i === 0 ? 0.85 : 0.1} />
        </g>
      ))}
    </Frame>
  );
}

export function ResearchMockup({ accent, className }) {
  return (
    <Frame kind="browser" className={className}>
      <rect x="0" y="0" width="400" height="229" className="fill-paper dark:fill-void" />
      <rect x="20" y="18" width="200" height="20" rx="6" fill="currentColor" opacity="0.15" />
      <rect x="20" y="44" width="140" height="8" rx="4" fill="currentColor" opacity="0.1" />
      <g transform="translate(20,68)">
        <rect width="168" height="140" rx="12" className="fill-white dark:fill-void-raised" stroke="currentColor" strokeOpacity="0.1" />
        <rect x="14" y="14" width="90" height="8" rx="4" fill="currentColor" opacity="0.15" />
        {[62, 88, 46, 100, 70, 55].map((h, i) => (
          <rect key={i} x={14 + i * 25} y={130 - h * 0.7} width="16" height={h * 0.7} rx="4" fill={accent} opacity={0.35 + i * 0.1} />
        ))}
      </g>
      <g transform="translate(204,68)">
        <rect width="176" height="140" rx="12" className="fill-white dark:fill-void-raised" stroke="currentColor" strokeOpacity="0.1" />
        <circle cx="60" cy="70" r="42" fill="none" stroke="currentColor" strokeOpacity="0.1" strokeWidth="16" />
        <circle
          cx="60"
          cy="70"
          r="42"
          fill="none"
          stroke={accent}
          strokeWidth="16"
          strokeDasharray="264"
          strokeDashoffset="70"
          strokeLinecap="round"
          transform="rotate(-90 60 70)"
        />
        <rect x="122" y="30" width="42" height="7" rx="3.5" fill="currentColor" opacity="0.15" />
        <rect x="122" y="46" width="30" height="7" rx="3.5" fill={accent} opacity="0.7" />
        <rect x="122" y="62" width="36" height="7" rx="3.5" fill="currentColor" opacity="0.12" />
        <rect x="122" y="78" width="24" height="7" rx="3.5" fill="currentColor" opacity="0.1" />
      </g>
    </Frame>
  );
}

export function MarketplaceMockup({ accent, className }) {
  return (
    <Frame kind="browser" className={className}>
      <rect x="0" y="0" width="400" height="229" className="fill-paper dark:fill-void" />
      <rect x="20" y="18" width="360" height="34" rx="10" fill={accent} opacity="0.12" />
      <rect x="34" y="30" width="80" height="8" rx="4" fill={accent} opacity="0.85" />
      <rect x="300" y="28" width="60" height="12" rx="6" className="fill-white dark:fill-void-raised" />
      {[0, 1, 2, 3].map((i) => (
        <g key={i} transform={`translate(${20 + i * 91}, 64)`}>
          <rect width="80" height="80" rx="12" className="fill-white dark:fill-void-raised" stroke="currentColor" strokeOpacity="0.1" />
          <rect x="10" y="10" width="60" height="40" rx="8" fill={accent} opacity={0.2 + i * 0.15} />
          <rect x="10" y="56" width="44" height="7" rx="3.5" fill="currentColor" opacity="0.15" />
          <rect x="10" y="66" width="30" height="7" rx="3.5" fill={accent} opacity="0.7" />
        </g>
      ))}
      <g transform="translate(20,158)">
        <rect width="360" height="52" rx="12" className="fill-white dark:fill-void-raised" stroke="currentColor" strokeOpacity="0.1" />
        <circle cx="26" cy="26" r="12" fill={accent} opacity="0.75" />
        <rect x="48" y="14" width="120" height="8" rx="4" fill="currentColor" opacity="0.18" />
        <rect x="48" y="30" width="80" height="6" rx="3" fill="currentColor" opacity="0.1" />
        <rect x="290" y="16" width="50" height="20" rx="8" fill={accent} opacity="0.9" />
      </g>
    </Frame>
  );
}

const map = {
  banking: BankingMockup,
  travel: TravelMockup,
  habit: HabitMockup,
  dashboard: DashboardMockup,
  laundry: LaundryMockup,
  research: ResearchMockup,
  marketplace: MarketplaceMockup,
};

export default function DeviceMockup({ variant, accent = '#3D3AF1', className = '' }) {
  const Comp = map[variant] || BankingMockup;
  return <Comp accent={accent} className={className} />;
}
