import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Muhammad Usman | Frontend Developer",
  description:
    "Portfolio of Muhammad Usman, a frontend developer and Computer Systems Engineering graduate based in Lahore, Pakistan.",
  icons: {
    icon: "/muhammad-usman-portfolio/favicon.svg",
    shortcut: "/muhammad-usman-portfolio/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
