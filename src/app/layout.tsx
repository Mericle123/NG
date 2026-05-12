import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://ngawang-gyeltshen.vercel.app"),
  title: "Ngawang Gyeltshen | Cinematic Portfolio",
  description:
    "Premium portfolio of Ngawang Gyeltshen, a blockchain developer, UI/UX designer, and creative technologist in Bhutan.",
  keywords: [
    "Ngawang Gyeltshen",
    "Blockchain Developer",
    "Frontend Engineer",
    "UI UX Designer",
    "Next.js Portfolio",
    "Bhutan Developer",
  ],
  authors: [{ name: "Ngawang Gyeltshen" }],
  creator: "Ngawang Gyeltshen",
  openGraph: {
    title: "Ngawang Gyeltshen | Cinematic Portfolio",
    description:
      "Blockchain, web development, cybersecurity, and cinematic interface design.",
    type: "website",
    images: ["/images/image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="light" className="antialiased">
      <body>{children}</body>
    </html>
  );
}
