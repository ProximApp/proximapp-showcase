// The ProximApp mark — the real logo: a phone with sparkles inside an orbit
// ring, in the brand violet→navy gradient. Decorative; the wordmark anchor
// already carries the "ProximApp" label, so this is aria-hidden.
export function BrandMark({ className = "mark" }: { className?: string }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      className={className}
      src="/proximapp-logo.png"
      alt=""
      aria-hidden="true"
    />
  );
}
