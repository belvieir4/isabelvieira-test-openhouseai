import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import "./globals.css";

const nunitoSans = Nunito_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "OpenHouse.ai Coding Exercise",
  description: "Front-end Development coding exercise from Isabel Vieira",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="author" content="Isabel Vieira" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito+Sans:opsz,wght@6..12,400;6..12,700;6..12,800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={nunitoSans.className}>{children}</body>
    </html>
  );
}
