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
      <body>{children}</body>
    </html>
  );
}
