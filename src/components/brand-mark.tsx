// The ProximApp mark — a phone with sparkles inside an orbit ring, drawn in
// currentColor (the Ember orange primary). The orbit crosses in front of the
// phone at the bottom and behind at the top; the clip path handles that
// occlusion. `id` must be unique per instance on a page (two clip paths can't
// share an id), hence the suffix.
export function BrandMark({
  className = "mark",
  id = "a",
}: {
  className?: string;
  id?: string;
}) {
  const clip = `wmfront-${id}`;
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <ellipse
        cx="12"
        cy="12.5"
        rx="11.2"
        ry="4.3"
        transform="rotate(-22 12 12.5)"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <rect
        x="7"
        y="1.6"
        width="10"
        height="19.8"
        rx="2.6"
        fill="var(--paper)"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path d="M10.8 3.5h2.4" stroke="currentColor" strokeWidth="0.9" strokeLinecap="round" />
      <path
        d="M12 5 13.1 7.9 16 9 13.1 10.1 12 13 10.9 10.1 8 9 10.9 7.9Z"
        fill="currentColor"
      />
      <path
        d="M14.5 14.2 15.05 15.5 16.4 16 15.05 16.5 14.5 17.8 13.95 16.5 12.6 16 13.95 15.5Z"
        fill="currentColor"
      />
      <clipPath id={clip}>
        <rect x="0" y="13" width="24" height="11" />
      </clipPath>
      <ellipse
        cx="12"
        cy="12.5"
        rx="11.2"
        ry="4.3"
        transform="rotate(-22 12 12.5)"
        stroke="currentColor"
        strokeWidth="1.5"
        clipPath={`url(#${clip})`}
      />
    </svg>
  );
}
