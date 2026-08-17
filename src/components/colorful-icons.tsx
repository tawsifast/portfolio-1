import type { ReactNode, SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

function StrokeIcon({
  gradientId,
  gradientFrom,
  gradientTo,
  children,
  strokeWidth = 2,
  ...props
}: IconProps & { gradientId: string; gradientFrom: string; gradientTo: string; children: ReactNode; strokeWidth?: string | number }) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" {...props}>
      <defs>
        <linearGradient id={gradientId} x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor={gradientFrom} />
          <stop offset="100%" stopColor={gradientTo} />
        </linearGradient>
      </defs>
      <g stroke={`url(#${gradientId})`} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
        {children}
      </g>
    </svg>
  );
}

export function DownloadIcon(props: IconProps) {
  return (
    <StrokeIcon gradientId="icon-download" gradientFrom="#00354a" gradientTo="#0c4a6e" {...props}>
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <path d="m7 10 5 5 5-5" />
      <path d="M12 15V3" />
    </StrokeIcon>
  );
}

export function MenuIcon(props: IconProps) {
  return (
    <StrokeIcon gradientId="icon-menu" gradientFrom="#e2e8f0" gradientTo="#94a3b8" {...props}>
      <path d="M4 6h16" />
      <path d="M4 12h16" />
      <path d="M4 18h16" />
    </StrokeIcon>
  );
}

export function CheckIcon(props: IconProps) {
  return (
    <StrokeIcon gradientId="icon-check" gradientFrom="#4ade80" gradientTo="#059669" {...props}>
      <path d="M20 6 9 17l-5-5" />
    </StrokeIcon>
  );
}

export function FileTextIcon(props: IconProps) {
  return (
    <StrokeIcon gradientId="icon-file-text" gradientFrom="#00354a" gradientTo="#0c4a6e" {...props}>
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <path d="M14 2v6h6" />
      <path d="M16 13H8" />
      <path d="M16 17H8" />
      <path d="M10 9H8" />
    </StrokeIcon>
  );
}

export function PhoneIcon(props: IconProps) {
  return (
    <StrokeIcon gradientId="icon-phone" gradientFrom="#4ade80" gradientTo="#059669" {...props}>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </StrokeIcon>
  );
}

export function MailIcon(props: IconProps) {
  return (
    <StrokeIcon gradientId="icon-mail" gradientFrom="#7dd3fc" gradientTo="#0369a1" {...props}>
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <path d="m22 6-10 7L2 6" />
    </StrokeIcon>
  );
}

export function MapPinIcon(props: IconProps) {
  return (
    <StrokeIcon gradientId="icon-map-pin" gradientFrom="#fda4af" gradientTo="#be123c" {...props}>
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <path d="M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
    </StrokeIcon>
  );
}

export function SendIcon({ white, ...props }: IconProps & { white?: boolean }) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" {...props}>
      <defs>
        <linearGradient id="icon-send" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
          {white ? (
            <>
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="100%" stopColor="#e2e8f0" />
            </>
          ) : (
            <>
              <stop offset="0%" stopColor="#fb7185" />
              <stop offset="100%" stopColor="#dc2626" />
            </>
          )}
        </linearGradient>
      </defs>
      <path
        fill="url(#icon-send)"
        stroke="#ffffff"
        strokeOpacity="0.6"
        strokeWidth="1.2"
        strokeLinejoin="round"
        d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"
      />
      <path stroke="url(#icon-send)" strokeWidth={2} strokeLinecap="round" d="m21.854 2.147-10.94 10.939" />
    </svg>
  );
}

export function ChevronUpIcon(props: IconProps) {
  return (
    <StrokeIcon gradientId="icon-chevron-up" gradientFrom="#cbd5e1" gradientTo="#64748b" {...props}>
      <path d="m18 15-6-6-6 6" />
    </StrokeIcon>
  );
}

export function XIcon(props: IconProps) {
  return (
    <StrokeIcon gradientId="icon-x" gradientFrom="#fda4af" gradientTo="#e11d48" {...props}>
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </StrokeIcon>
  );
}

export function SparklesIcon(props: IconProps) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" {...props}>
      <defs>
        <linearGradient id="icon-sparkles" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#fde68a" />
          <stop offset="100%" stopColor="#d97706" />
        </linearGradient>
      </defs>
      <path
        fill="url(#icon-sparkles)"
        d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"
      />
      <path stroke="url(#icon-sparkles)" strokeWidth={2} strokeLinecap="round" d="M20 3v4" />
      <path stroke="url(#icon-sparkles)" strokeWidth={2} strokeLinecap="round" d="M22 5h-4" />
      <path stroke="url(#icon-sparkles)" strokeWidth={2} strokeLinecap="round" d="M4 17v2" />
      <path stroke="url(#icon-sparkles)" strokeWidth={2} strokeLinecap="round" d="M5 18H3" />
    </svg>
  );
}

export function UserIcon(props: IconProps) {
  return (
    <StrokeIcon gradientId="icon-user" gradientFrom="#e9d5ff" gradientTo="#a78bfa" {...props}>
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <path d="M12 3a4 4 0 1 0 0 8 4 4 0 0 0 0-8z" />
    </StrokeIcon>
  );
}

export function ChatIcon(props: IconProps) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" {...props}>
      <defs>
        <linearGradient id="icon-chat" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#ddd6fe" />
          <stop offset="100%" stopColor="#c7d2fe" />
        </linearGradient>
      </defs>
      <path
        fill="url(#icon-chat)"
        stroke="#ffffff"
        strokeOpacity="0.85"
        strokeWidth="1.4"
        strokeLinejoin="round"
        d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"
      />
      <path stroke="#ffffff" strokeWidth={2} strokeLinecap="round" d="M9 10h.01" />
      <path stroke="#ffffff" strokeWidth={2} strokeLinecap="round" d="M12 10h.01" />
      <path stroke="#ffffff" strokeWidth={2} strokeLinecap="round" d="M15 10h.01" />
    </svg>
  );
}

export function ArrowRightIcon(props: IconProps) {
  return (
    <StrokeIcon gradientId="icon-arrow-right" gradientFrom="#ffffff" gradientTo="#e2e8f0" {...props}>
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </StrokeIcon>
  );
}

export function ArrowLeftIcon(props: IconProps) {
  return (
    <StrokeIcon gradientId="icon-arrow-left" gradientFrom="#cbd5e1" gradientTo="#64748b" {...props}>
      <path d="M19 12H5" />
      <path d="m12 19-7-7 7-7" />
    </StrokeIcon>
  );
}

export function ExternalLinkIcon(props: IconProps) {
  return (
    <StrokeIcon gradientId="icon-external-link" gradientFrom="#2563eb" gradientTo="#7c3aed" {...props}>
      <path d="M15 3h6v6" />
      <path d="M10 14 21 3" />
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    </StrokeIcon>
  );
}

export function SchoolIcon(props: IconProps) {
  return (
    <StrokeIcon gradientId="icon-school" gradientFrom="#7dd3fc" gradientTo="#2563eb" {...props}>
      <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z" />
      <path d="M22 10v6" />
      <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5" />
    </StrokeIcon>
  );
}

export function StarIcon(props: IconProps) {
  return (
    <StrokeIcon gradientId="icon-star" gradientFrom="#fbbf24" gradientTo="#d97706" {...props}>
      <path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01z" />
    </StrokeIcon>
  );
}

export function CheckCircle2Icon(props: IconProps) {
  return (
    <StrokeIcon gradientId="icon-check-circle" gradientFrom="#4ade80" gradientTo="#059669" {...props}>
      <circle cx="12" cy="12" r="10" />
      <path d="m9 12 2 2 4-4" />
    </StrokeIcon>
  );
}

export function TargetIcon(props: IconProps) {
  return (
    <StrokeIcon gradientId="icon-target" gradientFrom="#fb7185" gradientTo="#e11d48" {...props}>
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </StrokeIcon>
  );
}

export function BrainIcon(props: IconProps) {
  return (
    <StrokeIcon gradientId="icon-brain" gradientFrom="#f0abfc" gradientTo="#c026d3" {...props}>
      <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z" />
      <path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z" />
      <path d="M12 5v14" />
    </StrokeIcon>
  );
}

export function BarChart3Icon(props: IconProps) {
  return (
    <StrokeIcon gradientId="icon-bar-chart" gradientFrom="#34d399" gradientTo="#0f766e" {...props}>
      <path d="M3 3v18h18" />
      <path d="M18 17V9" />
      <path d="M13 17V5" />
      <path d="M8 17v-3" />
    </StrokeIcon>
  );
}

export function Code2Icon(props: IconProps) {
  return (
    <StrokeIcon gradientId="icon-code" gradientFrom="#22d3ee" gradientTo="#0ea5e9" {...props}>
      <path d="m18 16 4-4-4-4" />
      <path d="m6 8-4 4 4 4" />
      <path d="m14.5 4-5 16" />
    </StrokeIcon>
  );
}

export function MessageCircleIcon(props: IconProps) {
  return (
    <StrokeIcon gradientId="icon-message-circle" gradientFrom="#ffffff" gradientTo="#e2e8f0" {...props}>
      <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
      <path d="M9 10h.01" />
      <path d="M12 10h.01" />
      <path d="M15 10h.01" />
    </StrokeIcon>
  );
}

export function QuoteIcon(props: IconProps) {
  return (
    <StrokeIcon gradientId="icon-quote" gradientFrom="#c4b5fd" gradientTo="#8b5cf6" {...props}>
      <path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z" />
      <path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z" />
    </StrokeIcon>
  );
}
