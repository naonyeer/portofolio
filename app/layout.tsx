import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Zee — newbie engineer & vibe coding builder",
  description:
    "A bold Y2K personal portfolio for Zee, a newbie engineer and vibe coding builder shipping useful web products.",
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
