// The `<html>` and `<body>` tags live in `app/[locale]/layout.tsx` so the
// document can carry the correct `lang` and the dark theme classes. This root
// layout only passes children through (required by Next.js for the not-found
// boundary). Rendering html/body here too would produce duplicate tags and the
// browser would keep the first body's classes, dropping the theme.
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
