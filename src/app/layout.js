import "./globals.css";

export const metadata = {
  title: "Kane Pickett | Links",
  description:
    "All my links in one place — portfolio, socials, projects, and tools. Built for clarity, speed, and zero friction.",
  openGraph: {
    title: "Kane Pickett | Links",
    description:
      "All my links in one place — portfolio, socials, projects, and tools. Built for clarity, speed, and zero friction.",
    url: "https://bio.madebykane.dev",
    siteName: "Kane Pickett | Links",
    images: [
      {
        url: "https://bio.madebykane.dev/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Kane Pickett Bio Site"
      }
    ],
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Kane Pickett | Links",
    description:
      "All my links in one place — portfolio, socials, projects, and tools. Built for clarity, speed, and zero friction.",
    images: ["https://bio.madebykane.dev/preview.jpg"]
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/favicon/android-chrome-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="512x512"
          href="/favicon/android-chrome-512x512.png"
        />
        <meta name="color-scheme" content="dark" />
      </head>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
